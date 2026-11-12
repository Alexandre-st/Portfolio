import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import Menu from '~/components/Menu';
import ThemeToggle from '~/components/ThemeToggle';
import { NAV_LINKS } from '~/constants/navLinks';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <header className="container">
            <div className={toggleMenu ? 'header-open' : 'header'}>
                <Link
                    to="/"
                    onClick={() => setToggleMenu(false)}
                    aria-label="Back to the homepage"
                    className="header-img"
                >
                    <img
                        className="header-img-logo"
                        src="/logo.jpg"
                        alt="AS comme Alexandre Saint-Prix"
                    />
                </Link>

                <nav className="header-nav">
                    <ul className="header-nav-list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.url} className="nav-link">
                                <Link
                                    activeProps={{ className: 'active' }}
                                    activeOptions={{ exact: link.url === '/' }}
                                    to={link.url}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle />
                <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            </div>
        </header>
    );
};

export default Header;
