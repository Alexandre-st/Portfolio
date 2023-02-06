import { Link } from "react-router-dom";
import github from "../assets/icons/github-mark.svg";
import linkedIn from "../assets/icons/iconmonstr-linkedin-3.svg";
import twitter from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <ul className="footer-content-list">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="nav-link">
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://github.com/Alexandre-st" target="_blank">
            <img src={github} alt="Lien pour accéder à mon Github" />
          </a>
          <a href="https://twitter.com/a_saintprix" target="_blank">
            <img src={twitter} alt="Lien pour accéder à mon Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-saint-prix/"
            target="_blank"
          >
            <img src={linkedIn} alt="Lien pour accéder à mon LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;