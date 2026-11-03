import React from 'react';
import Image from 'next/image';
import homebanner from '../../images/homebanner.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Link from 'next/link';
import { TbDiscount } from "react-icons/tb";

import {
  FaRegClock,
  FaCar,
  FaShieldAlt,
  FaCarSide,
  FaPlaneArrival,
  FaCheckCircle,
} from 'react-icons/fa';
import { GiTowTruck, GiRoad } from 'react-icons/gi';
import { SlSpeedometer } from 'react-icons/sl';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import { TbTagStarred } from 'react-icons/tb';
import { IoFlashOutline } from 'react-icons/io5';


const ImageChange = ({ locname }) => {

  return (
    <div className='xl:mt-0 lg:mt-0 xl:px-20 lg:pl-4 px-2 py-2 lg:pb-10'>
      <div className='bg-white'>
        <div className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center lg:px-6 xl:px-0'>
          <Image
            src={homebanner}
            alt="Long Drive Cars app"
            height={1000}
            width={1000}
            className='xl:w-[500px] lg:w-[350px] w-[300px]'
            sizes="(min-width: 1280px) 500px, (min-width: 1024px) 350px, 300px"
            loading="lazy"
            fetchPriority="low"
          />
          <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl lg:pt-10 pt-3">
            <p className='xl:text-3xl lg:text-2xl text-xl text-center lg:text-left  font-bold  lg:w-2/3 capitalize'>Self Drive Car Rentals {locname ? ` in ${locname}` : ""}</p>
            <p className='xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-2/3 pt-7'>1 Lakh + Cars Near You</p>
            <p className='pt-2 xl:text-2xl lg:text-xl text-lg text-center lg:text-left font-semibold lg:w-3/5'>Download Long Drive Cars App to Check Available Cars & Book</p>
            <div className='flex flex-wrap justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 lg:w-full text-sm md:text-xs xl:text-base'>
              <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center">
                <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                  <Image
                    height={500}
                    width={500}
                    alt="apple"
                    className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
                    src={apple}
                    loading="lazy"
                  />
                </Link>
                <Link href="https://play.google.com/store/search?q=long+drive+cars&c=apps">
                  <Image
                    height={500}
                    width={500}
                    alt="google"
                    className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
                    src={google}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div>
                <div className="flex gap-4 pt-4 pr-4 text-xs font-medium lg:text-sm flex-wrap text-white">
                  {/* Free Toll gate on NH */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <GiRoad className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Free Toll Gate on NH</p>
                  </div>

                  {/* Scratches & minor damage pass */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaShieldAlt className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Scratches & Minor Damage Pass</p>
                  </div>

                  {/* Exact Car guaranteed */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaCar className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Exact Car Guaranteed</p>
                  </div>

                  {/* Free Home delivery On branch cars */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaCarSide className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Free Home Delivery on Branch Cars</p>
                  </div>

                  {/* 500 off on mon-thu */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <TbDiscount className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">₹500 Off on Mon–Thu</p>
                  </div>

                  {/* New User 200 off */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <TbTagStarred className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">New User ₹200 Off</p>
                  </div>

                  {/* Home & Airport Delivery */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaPlaneArrival className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Home & Airport Delivery</p>
                  </div>

                  {/* Free trial and take */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaCheckCircle className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Free Trial & Take</p>
                  </div>

                  {/* Unlimited kilometers */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <SlSpeedometer className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Unlimited Kilometres</p>
                  </div>

                  {/* Choose your own hours */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <FaRegClock className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Choose Your Own Hours</p>
                  </div>

                  {/* 30 second booking */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <IoFlashOutline className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">30-Second Booking</p>
                  </div>

                  {/* 24/7 breakdown help */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <GiTowTruck className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">24/7 Breakdown Help</p>
                  </div>

                  {/* Zero deposit option */}
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#660066] xl:text-sm lg:text-xs text-sm border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[280px] lg:w-[250px] w-full">
                    <RiMoneyRupeeCircleFill className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Zero Deposit Option</p>
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
