import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import github from "../assets/icons/github-mark.svg";
import closeMenuLogo from "../assets/icons/icon-close.svg";
import openMenuLogo from "../assets/icons/icon-hamburger.svg";
import linkedIn from "../assets/icons/iconmonstr-linkedin-3.svg";
import twitter from "../assets/icons/twitter.svg";
import { background } from '../utils/motion';

const Menu = ({ toggleMenu, setToggleMenu }) => {
  
  const openMenu = () => {
    setToggleMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="header-menu">
      {!toggleMenu && (
        <img src={openMenuLogo} alt="Open the menu" onClick={openMenu} />
      )}
      {toggleMenu && (
        <>
          <img
            src={closeMenuLogo}
            alt="Close the menu"
            onClick={openMenu}
            className="header-menu-logo"
          />
          <motion.div
            className="header-menu-background"
            initial="initial"
            animate={toggleMenu ? "open": "closed"}
            variants={background}
          >
            <motion.nav 
              className="header-menu-container container" 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 }}}
            >
              <motion.ul className="header-menu-list">
                <motion.li 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.3 }}}
                >
                  <NavLink to="/" onClick={openMenu} className="header-menu-list-link">
                    Home
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.4 }}}
                >
                  <NavLink to="/portfolio" onClick={openMenu} className="header-menu-list-link">
                    Portfolio
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5 }}}
                >
                  <NavLink to="/contact" onClick={openMenu} className="header-menu-list-link">
                    Contact
                  </NavLink>
                </motion.li>
              </motion.ul>
            </motion.nav>

            <motion.div 
              className="header-menu-link"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.7 }}}
            >
              <NavLink to="/mentions-legales">Mentions Légales</NavLink>
                <motion.div className="header-menu-link-social">
                  <a href="https://github.com/Alexandre-st" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Lien pour accéder à mon Github" />
                  </a>
                  <a href="https://twitter.com/a_saintprix" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Lien pour accéder à mon Twitter" />
                  </a>
                  <a href="https://www.linkedin.com/in/alexandre-saint-prix/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
                  </a>
                </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Menu;
