import React from 'react';
import Header from '../Hamburger/HamburgerMenu'
import Footer from '../Footer/Footer';
const Layout = ({ children , city, phoneno ,locname}) => {
    return (
        <div className=" min-h-screen bg-white">
            <Header phoneno={phoneno} locname={locname}/>
            <main className="bg-white">{children}</main>
            <Footer locname={locname}/>
        </div>
    );
};

export default Layout;
