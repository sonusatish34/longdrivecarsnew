// components/layouts/BangaloreLayout.js
// import HamburgerMenuBng
// import Footer from '../Footer';
import HamburgerMenuBng from '../Hamburger/HamburgerMenuBng';
import FooterBng from '../Footer/FooterBng';
const BangaloreLayout = ({ children }) => {
  return (
    <div className='bg-white'>
      {/* <Header city="Bangalore" /> */}
      <HamburgerMenuBng />
      <main>{children}</main>
      <FooterBng />
    </div>
  );
};

export default BangaloreLayout;
