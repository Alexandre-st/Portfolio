import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import closeMenuLogo from "../assets/icons/icon-close.svg";
import openMenuLogo from "../assets/icons/icon-hamburger.svg";
import { background } from '../utils/motion';

// Need to see the transition page on framer-motion for list item

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
          {/* <AnimatePresence> */}
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
                    <NavLink to="/" onClick={openMenu}>
                      Home
                    </NavLink>
                  </motion.li>
                  <motion.li
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.4 }}}
                  >
                    <NavLink to="/portfolio" onClick={openMenu}>
                      Portfolio
                    </NavLink>
                  </motion.li>
                  <motion.li
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5 }}}
                  >
                    <NavLink to="/contact" onClick={openMenu}>
                      Contact
                    </NavLink>
                  </motion.li>
                </motion.ul>
              </motion.nav>
            </motion.div>
          {/* </AnimatePresence> */}
        </>
      )}
    </div>
  );
};

export default Menu;
