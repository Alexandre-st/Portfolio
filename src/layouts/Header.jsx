import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/AS-logo.jpg';

const Header = () => {
  return (
    <header className='container'>
      <div className='header'>
        <Link to='/' aria-label='Back to the menu' className='header-img'>
          <img src={logo} alt="AS comme Alexandre Saint-Prix" />
        </Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className='nav-link'><NavLink to='/'>HOME</NavLink></li>
            <li className='nav-link'><NavLink to='/portfolio'>PORTFOLIO</NavLink></li>
            <li className='nav-link'><NavLink to='/contact'>CONTACT ME</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;