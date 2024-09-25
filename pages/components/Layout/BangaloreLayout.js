// components/layouts/BangaloreLayout.js
// import HamburgerMenuBng
// import Footer from '../Footer';
import HamburgerMenuBng from '../Hamburger/HamburgerMenuBng';
import Footer from '../Footer/Footer';
const BangaloreLayout = ({ children }) => {
  return (
    <div className='bg-white'>
      {/* <Header city="Bangalore" /> */}
      <HamburgerMenuBng/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BangaloreLayout;
