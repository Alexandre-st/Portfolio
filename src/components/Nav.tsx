import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '~/constants/navLinks';

const isActive = (url: string, pathname: string) =>
    url === '/' ? pathname === '/' : pathname.startsWith(url);

const Nav = () => {
    const navRef = useRef<HTMLElement>(null);
    const pathname = useLocation({ select: (location) => location.pathname });
    const [ready, setReady] = useState<boolean>(false);

    const activeUrl = NAV_LINKS.find((link) => isActive(link.url, pathname))?.url ?? null;

    useLayoutEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const place = () => {
            const link = activeUrl
                ? nav.querySelector<HTMLElement>(`[data-url="${activeUrl}"]`)
                : null;
            nav.style.setProperty('--indicator-opacity', link ? '1' : '0');

            if (link) {
                const navBox = nav.getBoundingClientRect();
                const linkBox = link.getBoundingClientRect();
                nav.style.setProperty(
                    '--indicator-x',
                    `${linkBox.left - navBox.left - nav.clientLeft}px`,
                );
                nav.style.setProperty('--indicator-width', `${linkBox.width}px`);
            }
        };

        place();
        const observer = new ResizeObserver(place);
        observer.observe(nav);
        return () => observer.disconnect();
    }, [activeUrl]);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <nav
            ref={navRef}
            className={ready ? 'nav nav--ready' : 'nav'}
            aria-label="Navigation principale"
        >
            <span className="nav__indicator" aria-hidden="true" />
            <ul className="nav__list">
                {NAV_LINKS.map((link) => (
                    <li key={link.url} className="nav__item">
                        <Link
                            to={link.url}
                            className="nav__link"
                            activeOptions={{ exact: link.url === '/' }}
                            data-url={link.url}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
