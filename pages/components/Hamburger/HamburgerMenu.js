"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo2 from '../../images/LDC.webp';
import { LuPhoneCall } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';
import { SiLinkedin } from "react-icons/si";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='fixed lg:relative top-0 left-0 right-0 z-50 bg-white text-black shadow-md'>
      <div className='flex justify-between items-center lg:px-14'>
        <Marquee speed={75}>
          <div className={'flex p-1 text-xs gap-24 lg:text-lg '}>
            <p className='flex items-center gap-1 justify-center pl-6'><TbPointFilled /><span>Zero Deposit</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Unlimited Kilometers</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Neatly Washed Car</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Choose your Favourite Color Car</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Check Original Car Photos & Book</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Choose Your Own Hours 36hr, 50hr</span></p>
            <p className='flex items-center gap-1 justify-center'><TbPointFilled /><span>Car Starts ₹1488/day, min 24hrs</span></p>
            <p className='flex items-center gap-1 justify-center lg:pr-20'><TbPointFilled /><span>Any Problem 24/7 Service</span></p>
          </div>
        </Marquee>
        <div className='border-l-2 border-l-black'>
          <ul className='flex justify-end lg:gap-5 xs:gap-2 px-2'>
            <li><Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
              <FaFacebook className='hover:text-blue-500 cursor-pointer lg:size-6' />
            </Link></li>
            <li><Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
              <FaInstagram className='hover:text-blue-500 cursor-pointer lg:size-6' />
            </Link></li>
            <li><Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
              <SiLinkedin className='hover:text-blue-500 cursor-pointer lg:size-6' />
            </Link></li>
            <li><Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
              <FaYoutube className='hover:text-blue-500 cursor-pointer lg:size-6' />
            </Link></li>
          </ul>
        </div>
      </div>

      <div className="flex lg:justify-between items-center z-50 fixed lg:relative bg-white lg:py-14 lg:pr-14 border-8 border-blue-100 lg:h-20 w-full">
        <div className="flex">
          {/* <Link href={'/'}> */}
          <div className='rounded-md flex cursor-pointer items-center lg:pl-14 pl-4'>
            <div className='flex items-center lg:gap-6 gap-3'>
              <Link href={'/'} className='flex items-center lg:gap-6 gap-3'>
                <Image
                  className="lg:w-32 w-10"
                  src={logo2}
                  alt="carrr"
                  width={192}
                  height={192}
                  priority
                // placeholder="blur"
                />
              <p className='font-semibold text-[#0456e8] text-sm lg:text-4xl lg:w-[444px] w-48'>Long Drive Cars</p>
              </Link>
            </div>
            <div className='w-full text-black lg:mt-2 lg:pl-60'>
              <div className={`${isOpen ? "hidden" : 'block'} hidden lg:block pl-[]`}>
                <ul className='font-semibold text-lg flex gap-8'>
                  <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Home</Link></li>
                  <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Blog</Link></li>
                  <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>About Us</Link></li>
                  <li><Link className='hover:text-blue-400 hover:underline' href={'/'}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          {/* </Link> */}
        </div>

        <div className='lg:hidden block'>
          <button
            ref={buttonRef}
            className="fixed top-[2.6rem] right-5 z-40 text-[#0456e8] flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
            {/* Branches */}
          </button>
        </div>
        <nav
          ref={menuRef}
          className={`${isOpen ? 'block overflow-auto' : 'hidden'} w-11/12 h-fit absolute top-12 bg-blue-50 rounded-md p-2 pt-6 lg:pr-16 right-0 z-50 transition-transform delay-2000 ease-out text-black`}
          style={{ transform: `${isOpen ? 'translateX(0)' : 'translateX(-100%)'}` }}
        >
          <ul className="pl-6 pt-1 pb-1 border-t-2 border-gray-200 font-semibold flex flex-col gap-2 items-start text-black">
            <li className="w-32 text-start"><Link href={'/branches/self-drive-cars-dilshuknagar'}>Dilshuknagar</Link></li>
            <li className="w-32 text-start"><Link href={'/branches/self-drive-cars-madhapur'}>Madhapur</Link></li>
            <li className="w-32 text-start"><Link href={'/branches/self-drive-cars-kukatpally'}>Kukatpally</Link></li>
            <li className="w-32 text-start"><Link href={'/branches/self-drive-cars-bangalore'}>Bangalore</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;