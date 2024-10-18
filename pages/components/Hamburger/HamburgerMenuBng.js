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

const HamburgerMenuBng = () => {

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
    <div></div>
  );
};

export default HamburgerMenuBng;