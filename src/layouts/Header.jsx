import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container'>
      <div className='header'>
        <Link to='/' aria-label='Go to the menu'>AS</Link>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className='nav-link'><NavLink to='/'>HOME</NavLink></li>
            <li className='nav-link'><NavLink to='#'>PORTFOLIO</NavLink></li>
            <li className='nav-link'><NavLink to='/contact'>CONTACT ME</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
 
export default Header;