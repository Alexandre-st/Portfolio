import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.jpg';

const Header = () => {

   const activeStyle = {
     fontWeight: "900",
     color: "#000000",
   };
   
  return (
    <header className='container'>
      <div className='header'>
        <Link to='/' aria-label='Back to the menu' className='header-img'>
          <img src={logo} alt="AS comme Alexandre Saint-Prix" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className='nav-link'>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/'>HOME</NavLink>
            </li>
            <li className='nav-link'>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/portfolio'>PORTFOLIO</NavLink>
            </li>
            <li className='nav-link'>
              <NavLink style={({ isActive }) => isActive ? activeStyle : undefined } to='/contact'>CONTACT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;