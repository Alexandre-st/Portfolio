import { Cancel01Icon, MenuIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useId, useRef, useState } from 'react';
import Brand from '~/components/Brand';
import { NAV_LINKS } from '~/constants/navLinks';

const SOCIAL_LINKS = [
    { label: 'GitHub', url: 'https://github.com/Alexandre-st' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandre-saint-prix/' },
    { label: 'Twitter', url: 'https://twitter.com/a_saintprix' },
];

const MobileMenu = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const menuId = useId();
    const [open, setOpen] = useState(false);
    const pathname = useLocation({ select: (location) => location.pathname });

    const openMenu = () => {
        dialogRef.current?.showModal();
        setOpen(true);
    };

    // Échap, bouton fermer et clic sur un lien passent tous par l'évènement close
    const closeMenu = () => dialogRef.current?.close();

    useEffect(() => {
        dialogRef.current?.close();
    }, [pathname]);

    return (
        <>
            <button
                type="button"
                className="menu-button"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label="Ouvrir le menu"
                onClick={openMenu}
            >
                <HugeiconsIcon icon={MenuIcon} aria-hidden="true" />
            </button>

            <dialog
                ref={dialogRef}
                id={menuId}
                className="mobile-menu"
                aria-label="Menu"
                onClose={() => setOpen(false)}
            >
                <div className="mobile-menu__header">
                    <Brand animated={false} onClick={closeMenu} />
                    <button
                        type="button"
                        className="mobile-menu__close"
                        aria-label="Fermer le menu"
                        onClick={closeMenu}
                    >
                        <HugeiconsIcon icon={Cancel01Icon} aria-hidden="true" />
                    </button>
                </div>

                <nav aria-label="Navigation principale">
                    <ul className="mobile-menu__list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.url}>
                                <Link
                                    to={link.url}
                                    className="mobile-menu__link text-page-title"
                                    activeOptions={{ exact: link.url === '/' }}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className="mobile-menu__footer text-caption">
                    <li>
                        <Link to="/mentions-legales/" onClick={closeMenu}>
                            Mentions légales
                        </Link>
                    </li>
                    {SOCIAL_LINKS.map((social) => (
                        <li key={social.url}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </dialog>
        </>
    );
};

export default MobileMenu;
