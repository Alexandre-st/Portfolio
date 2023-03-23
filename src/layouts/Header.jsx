import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../components/Menu';
import logo from '/logo.jpg';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

   const activeStyle = {
     fontWeight: "900",
     color: "#000000",
   };
   
  return (
    <header className="container">
      <div className={toggleMenu ? "header-open" : "header"}>
        <Link 
          to="/"
          onClick={() => setToggleMenu(false)}
          aria-label="Back to the homepage"
          className="header-img"
        >
          <img className="header-img-logo" src={logo} alt="AS comme Alexandre Saint-Prix" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="nav-link">
              <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </header>
  );
};
 
export default Header;