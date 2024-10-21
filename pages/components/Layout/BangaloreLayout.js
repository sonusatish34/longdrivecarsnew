// components/layouts/BangaloreLayout.js
// import HamburgerMenuBng
// import Footer from '../Footer';
import HamburgerMenuBng from '../Hamburger/HamburgerMenuBng';
import FooterBng from '../Footer/FooterBng';
const BangaloreLayout = ({ children , city, phoneno ,locname }) => {
  return (
    <div className='bg-white'>
      {/* <Header city="Bangalore" /> */}
      <HamburgerMenuBng phoneno={phoneno} locname={locname}/>
      <main>{children}</main>
      <FooterBng />
    </div>
  );
};

export default BangaloreLayout;
