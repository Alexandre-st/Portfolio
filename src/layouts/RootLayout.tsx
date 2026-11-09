import { Outlet } from '@tanstack/react-router';
import Footer from './Footer';
import Header from './Header';

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;
