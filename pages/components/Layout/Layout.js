import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
import CarBrandCarousel from '../Carousal/CarBrandCarousel ';
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
            {/* <CarBrandCarousel/> */}
        </div>
    );
};

export default Layout;
