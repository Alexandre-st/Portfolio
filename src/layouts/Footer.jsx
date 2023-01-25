import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h4>Footer</h4>

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
          <a href="https://github.com/Alexandre-st" target="_blank">Github</a>
          <a href="https://twitter.com/a_saintprix" target='_blank'>Twitter</a>
          <a href="https://www.linkedin.com/in/alexandre-saint-prix/" target='_blank'>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;