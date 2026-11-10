import * as m from 'motion/react-m';
import type { Dispatch, SetStateAction } from 'react';
import { Link } from '@tanstack/react-router';
import github from '~/assets/icons/github-mark.svg';
import closeMenuLogo from '~/assets/icons/icon-close.svg';
import openMenuLogo from '~/assets/icons/icon-hamburger.svg';
import linkedIn from '~/assets/icons/iconmonstr-linkedin-3.svg';
import twitter from '~/assets/icons/twitter.svg';
import { background, fadeInLink, fadeInList } from '~/utils/motion';

type MenuProps = {
    toggleMenu: boolean;
    setToggleMenu: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ toggleMenu, setToggleMenu }: MenuProps) => {
    const openMenu = () => {
        setToggleMenu((prevMenu) => !prevMenu);
    };

    return (
        <div className="header-menu">
            <img
                className="header-menu-logo"
                src={toggleMenu ? closeMenuLogo : openMenuLogo}
                alt="Open the menu"
                onClick={openMenu}
            />
            <m.div
                className="header-menu-background"
                initial="initial"
                animate={toggleMenu ? 'open' : 'closed'}
                variants={background}
            >
                <m.nav className="header-menu-container container">
                    <m.ul className="header-menu-list">
                        <m.li
                            initial="initial"
                            animate={toggleMenu ? 'show' : 'initial'}
                            variants={fadeInList(0.3)}
                        >
                            <Link to="/" onClick={openMenu} className="header-menu-list-link">
                                Home
                            </Link>
                        </m.li>
                        <m.li
                            initial="initial"
                            animate={toggleMenu ? 'show' : 'initial'}
                            variants={fadeInList(0.4)}
                        >
                            <Link
                                to="/portfolio/"
                                onClick={openMenu}
                                className="header-menu-list-link"
                            >
                                Portfolio
                            </Link>
                        </m.li>
                        <m.li
                            initial="initial"
                            animate={toggleMenu ? 'show' : 'initial'}
                            variants={fadeInList(0.5)}
                        >
                            <Link
                                to="/contact/"
                                onClick={openMenu}
                                className="header-menu-list-link"
                            >
                                Contact
                            </Link>
                        </m.li>
                    </m.ul>
                </m.nav>

                <m.div
                    className="header-menu-link"
                    initial="initial"
                    animate={toggleMenu ? 'show' : 'initial'}
                    variants={fadeInLink}
                >
                    <Link to="/mentions-legales/" onClick={openMenu}>
                        Mentions Légales
                    </Link>
                    <div className="header-menu-link-social">
                        <a
                            href="https://github.com/Alexandre-st"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="Lien pour accéder à mon Github" />
                        </a>
                        <a
                            href="https://twitter.com/a_saintprix"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={twitter} alt="Lien pour accéder à mon Twitter" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alexandre-saint-prix/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
                        </a>
                    </div>
                </m.div>
            </m.div>
        </div>
    );
};

export default Menu;
