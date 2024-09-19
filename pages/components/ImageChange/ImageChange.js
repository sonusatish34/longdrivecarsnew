import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import homebanner from '../../images/homebanner.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Link from 'next/link';
import img2 from '../../changeimg/ertiga.webp'
import img3 from '../../changeimg/polo.webp'
import img4 from '../../changeimg/swift.webp'
import img5 from '../../changeimg/i20.webp'
import { FaRegClock } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { GiTowTruck } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { SiContactlesspayment } from "react-icons/si";
import { FaCarSide } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const ImageChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    img2, img3, img4, img5
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mt-28 xl:mt-0 2xl:mt-0 lg:mt-0 xl:pl-16 lg:pl-4 poppins-text'>
      <div className='h-full lg:pt-2 xl:pl-4 lg:pl-10 flex flex-wrap bg-white'>
        <div className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center lg:pr-2 '>
          <Image
            priority
            src={homebanner}
            alt={'home banner'}
            height={1000}
            width={1000}
            className='xl:w-[500px] lg:w-[350px] w-[300px]'
          />
          <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl pl-8 lg:pt-10 " data-wow-delay="50ms" data-wow-duration="200ms">
            <p className='xl:text-3xl lg:text-2xl text-xl  lg:pb-2 font-bold py-2 lg:pl-0 w-fit lg:w-3/4 px-4'>Install Long Drive Cars Mobile app &
              Start Your Journey!</p>
            <div className='flex flex-wrap justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 lg:w-full text-sm md:text-xs xl:text-lg'>
              <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center">
                <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                  <Image
                    priority
                    height={500}
                    width={500}
                    alt='apple'
                    className='lg:w-36 lg:h-14 w-24 h-10'
                    src={apple}
                  >
                  </Image>
                </Link>
                <Link href='https://play.google.com/store/search?q=long+drive+cars&c=apps'>
                  <Image
                    priority
                    height={500}
                    width={500}
                    alt='google'
                    className='lg:w-48 lg:h-20 w-28 h-16'
                    src={google}
                  >
                  </Image>
                </Link>
              </div>
              <div>
                <div className="flex gap-4  pt-4 pr-4  text-xs font-medium lg:text-sm  lg:w-[90%] flex-wrap text-white">
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaRegClock className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="">Choose Your Own Hours</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <GiTowTruck className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className=" ml-2">24/7 Breakdown Service</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <SlSpeedometer className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className=" ml-2">Unlimited Kilometers</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <RiMoneyRupeeCircleFill className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2 ">Zero Deposit</p>
                  </div>
                  
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaCar className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Check Original Car Photo</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaCarSide className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Car Starts ₹1488/day, min 24hrs</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <IoMdArrowDropdownCircle className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Lowest Price Challenge</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <IoCarSportSharp className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Baleno, Dzire 1776 per day</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-lg lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <SiContactlesspayment className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Just pay 10% Advance & book</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageChange;
