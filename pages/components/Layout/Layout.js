import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
    return (
        <div className=" min-h-screen bg-white">
            <Header />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
