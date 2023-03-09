import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import closeMenuLogo from "../assets/icons/icon-close.svg";
import openMenuLogo from "../assets/icons/icon-hamburger.svg";


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
          <motion.div className="header-menu-background">
            <nav className="header-menu-container container">
              <ul className="header-menu-list">
                <li>
                  <NavLink to="/" onClick={openMenu}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" onClick={openMenu}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={openMenu}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Menu;
