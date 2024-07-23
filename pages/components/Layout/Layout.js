import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
import { GoogleTagManager } from '@next/third-parties/google'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
                  <GoogleTagManager gtmId="GTM-XYZ" />
            <Header />
            <main className="flex-grow bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
