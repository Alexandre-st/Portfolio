import Brand from '~/components/Brand';
import MobileMenu from '~/components/MobileMenu';
import Nav from '~/components/Nav';
import ThemeToggle from '~/components/ThemeToggle';

const Header = () => {
    return (
        <header className="header container">
            <Brand />
            <Nav />
            <ThemeToggle />
            <MobileMenu />
        </header>
    );
};

export default Header;
