"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  LuBookOpen,
  LuCar,
  LuHome,
  LuInfo,
  LuPhone,
  LuPhoneCall,
} from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaYoutube, FaQuora } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';

const HamburgerMenu = ({ locname, phoneno = "9000-478-478" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const locationPath = locname?.length ? `/${locname}` : '';
  const navigationLinks = [
    { label: 'Home', href: locationPath || '/', icon: LuHome },
    { label: 'Blog', href: '/blog', icon: LuBookOpen },
    { label: 'About Us', href: locationPath ? `${locationPath}/about` : '/about', icon: LuInfo },
    { label: 'Contact Us', href: locationPath ? `${locationPath}/contact.html` : '/contact.html', icon: LuPhone },
    { label: 'Attach Car & Earn', href: '/attach-and-earn', icon: LuCar, featured: true },
  ];
  const currentPath = router.asPath.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const isActiveLink = (href) =>
    currentPath === href || (href !== '/' && currentPath.startsWith(`${href}/`));
  const bookingPhone = phoneno.replace(/-/g, '');

  // Close when clicking outside
  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className='fixed lg:relative top-0 left-0 right-0 z-40 bg-white text-black shadow-md'>
      {/* 1. Top Marquee & Social Links */}
      <div className='w-full flex justify-between items-center gap-3 lg:px-14 xl:px-16 px-2'>
        <div className='xl:w-[79%] lg:w-[70%] w-[52%] sm:w-[60%]'>
          <Marquee speed={70}>
            <div className='flex p-1 text-xs gap-x-20 lg:text-lg'>
              {[
                'Zero Deposit Option',
                'Unlimited Kilometers',
                'Neatly Washed Car',
                'Choose your Favourite Color Car',
                'Check Original Car Photos & Book',
                'Choose Your Own Hours 36hr, 50hr',
                'Car Starts ₹1180/day, min 24hrs',
                'Any Problem 24/7 Service',
                'Lowest Price Challenge',
                'Dzire 1492 per day',
                'Just pay 10% Advance & book'
              ].map((text, index) => (
                <p
                  key={index}
                  className={`flex items-center gap-1 justify-center ${index === 0 ? 'ml-20' : ''}`}
                >
                  <TbPointFilled />
                  <span>{text}</span>
                </p>
              ))}
            </div>
          </Marquee>
        </div>

        <ul className='flex lg:gap-6 gap-[8px] sm:gap-3 border-l-2 border-l-black xl:w-1/5 lg:w-2/3 lg:pl-4 px-1'>
          {[
            { href: 'https://www.facebook.com/Longdrivecarshyderabad/', icon: <FaFacebook /> },
            { href: 'https://www.instagram.com/longdrivecars_app/', icon: <FaInstagram /> },
            { href: 'https://x.com/Long_drive_cars', icon: <FaXTwitter /> },
            { href: 'https://www.linkedin.com/company/long-drive-cars/', icon: <FaLinkedin /> },
            { href: 'https://www.youtube.com/@longdrivecars_app', icon: <FaYoutube /> },
            { href: 'https://www.quora.com/profile/Long-Drive-Cars', icon: <FaQuora /> },
          ].map(({ href, icon }, index) => (
            <li key={index}>
              <Link href={href} target='_blank' rel='noopener noreferrer' aria-label="Social Link">
                {React.cloneElement(icon, { className: 'hover:text-blue-500 transition-colors cursor-pointer text-sm sm:text-base lg:size-6' })}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 2. Booking Help Subheader */}
      <div className="flex bg-gray-800 justify-between items-center text-white text-sm sm:text-base py-2 lg:px-14 xl:px-16 px-3">
        <p className='lg:text-2xl font-semibold lg:font-bold'>For Booking Help</p>
        <div className="flex items-center gap-2">
          <LuPhoneCall className="size-4 lg:size-6" />
          <div className='lg:text-2xl font-bold'>
            <Link href={`tel:${phoneno?.replace(/-/g, "")}`} target='_blank'>
              {phoneno}
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <div className='relative'>
        <div className='flex items-center justify-between gap-6 border-b border-blue-50 px-4 py-2 lg:cursor-default lg:border-b-0 lg:px-8 xl:px-14'>
          
          {/* Logo Branding */}
        <div className='flex min-w-0 items-center lg:gap-6 gap-3 lg:w-fit'>
            <Link
            href={locationPath || '/'}
            className='flex flex-col items-start justify-center py-2 lg:py-3'
            >
            <span className='whitespace-nowrap font-extrabold text-[#0456e8] text-xl sm:text-2xl lg:text-2xl xl:text-3xl leading-tight tracking-tight popins-text'>
                Long Drive Cars App
              </span>
            <span className='mt-0.5 text-[#5a627a] text-[9px] sm:text-[11px] lg:text-[10px] xl:text-xs font-semibold tracking-[0.22em] uppercase popins-text'>
                Self Drive Cars Rental
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" className='hidden lg:block'>
          <ul className='flex items-center gap-1 xl:gap-2'>
            {navigationLinks.map(({ label, href, icon: Icon, featured }) => {
              const active = isActiveLink(href);
              return (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-semibold transition-all duration-200 xl:px-4 ${
                      featured
                        ? 'bg-[#0456e8] text-white shadow-md shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-[#0348c7] hover:shadow-lg'
                        : active
                          ? 'bg-blue-50 text-[#0456e8]'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-[#0456e8]'
                    }`}
                  >
                    <Icon className={`size-4 shrink-0 ${featured ? 'text-white' : 'text-[#0456e8]'}`} aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

          {/* Morphing Hamburger-to-Cross Button (stays in the exact same place) */}
          <div className='lg:hidden block'>
            <button
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0456e8]"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                {/* Top Bar -> Rotates into the diagonal cross arm */}
                <span
                  className={`h-[2.5px] w-full bg-[#0456e8] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                    isOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                {/* Middle Bar -> Fades out & scales down */}
                <span
                  className={`h-[2.5px] w-full bg-[#0456e8] rounded-full transition-all duration-200 ease-in-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                {/* Bottom Bar -> Rotates into the counter-diagonal cross arm */}
                <span
                  className={`h-[2.5px] w-full bg-[#0456e8] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                    isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* 5. Mobile Drawer Sliding from Right */}
      <nav
        id="mobile-navigation"
        ref={menuRef}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-40 flex h-full w-[84%] max-w-[360px] flex-col justify-between border-l border-slate-100 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-white px-6 pb-5 pt-20">
            <div className="flex flex-col">
              <span className="font-extrabold text-[#0456e8] text-xl leading-tight popins-text">
                Long Drive Cars App
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a627a]">
                Self Drive Cars Rental
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600">Where would you like to go?</p>
          </div>

          <ul className="flex flex-col gap-2 px-4 py-5">
            {navigationLinks.map(({ label, href, icon: Icon, featured }) => {
              const active = isActiveLink(href);
              return (
                <li key={label}>
                  <Link
                    onClick={closeMenu}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                      featured
                        ? 'mt-2 bg-[#0456e8] text-white shadow-lg shadow-blue-900/15 hover:bg-[#0348c7]'
                        : active
                          ? 'bg-blue-50 text-[#0456e8]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0456e8]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`flex size-9 items-center justify-center rounded-xl ${
                        featured ? 'bg-white/15' : active ? 'bg-white' : 'bg-slate-100 group-hover:bg-white'
                      }`}>
                        <Icon className={`size-[18px] ${featured ? 'text-white' : 'text-[#0456e8]'}`} aria-hidden="true" />
                      </span>
                      <span className="font-semibold">{label}</span>
                    </span>
                    <span aria-hidden="true" className={`text-lg transition-transform group-hover:translate-x-0.5 ${featured ? 'text-white/75' : 'text-slate-400'}`}>
                      ›
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Drawer Footer Contact Section */}
          <div className="mt-auto border-t border-slate-100 bg-slate-50/80 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              For Booking Help Call
            </p>
            <p className="mb-1 text-xs text-gray-600">{locname === 'vijayawada' ? 'Andhra Pradesh' : 'Telangana, AP'}</p>
            <Link
              href={`tel:${bookingPhone}`}
              className="inline-flex items-center gap-2 text-xl font-extrabold text-[#0456e8] transition-colors hover:text-[#0348c7]"
            >
              <LuPhoneCall className="size-5 shrink-0" />
              {phoneno}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;