import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import github from "../assets/icons/github-mark.svg";
import closeMenuLogo from "../assets/icons/icon-close.svg";
import openMenuLogo from "../assets/icons/icon-hamburger.svg";
import linkedIn from "../assets/icons/iconmonstr-linkedin-3.svg";
import twitter from "../assets/icons/twitter.svg";
import { background, fadeInLink, fadeInList } from "../utils/motion";

const Menu = ({ toggleMenu, setToggleMenu }) => {
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
      <motion.div
        className="header-menu-background"
        initial="initial"
        animate={toggleMenu ? "open" : "closed"}
        variants={background}
      >
        <motion.nav className="header-menu-container container">
          <motion.ul className="header-menu-list">
            <motion.li
              initial="initial"
              animate={toggleMenu ? "show" : "initial"}
              variants={fadeInList(0.3)}
            >
              <NavLink
                to="/"
                onClick={openMenu}
                className="header-menu-list-link"
              >
                Home
              </NavLink>
            </motion.li>
            <motion.li
              initial="initial"
              animate={toggleMenu ? "show" : "initial"}
              variants={fadeInList(0.4)}
            >
              <NavLink
                to="/portfolio"
                onClick={openMenu}
                className="header-menu-list-link"
              >
                Portfolio
              </NavLink>
            </motion.li>
            <motion.li
              initial="initial"
              animate={toggleMenu ? "show" : "initial"}
              variants={fadeInList(0.5)}
            >
              <NavLink
                to="/contact"
                onClick={openMenu}
                className="header-menu-list-link"
              >
                Contact
              </NavLink>
            </motion.li>
          </motion.ul>
        </motion.nav>

        <motion.div
          className="header-menu-link"
          initial="initial"
          animate={toggleMenu ? "show" : "initial"}
          variants={fadeInLink}
        >
          <NavLink to="/mentions-legales" onClick={openMenu}>
            Mentions Légales
          </NavLink>
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Menu;
