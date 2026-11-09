import { useState, type CSSProperties } from 'react';
import { Link } from '@tanstack/react-router';
import Menu from '../components/Menu';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const activeStyle: CSSProperties = {
        fontWeight: '900',
        color: '#000000',
    };

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
                        <li className="nav-link">
                            <Link
                                activeProps={{ style: activeStyle }}
                                activeOptions={{ exact: true }}
                                to="/"
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link activeProps={{ style: activeStyle }} to="/portfolio">
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link activeProps={{ style: activeStyle }} to="/contact">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            </div>
        </header>
    );
};

export default Header;
