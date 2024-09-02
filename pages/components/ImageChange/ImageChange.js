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
import { RiCustomerService2Fill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";
// import { FaCarBurst } from "react-icons/fa6";
import { GiTowTruck } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

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

    <div className='mt-28 xl:mt-0 2xl:mt-0 lg:mt-0 lg:pl-16'>
      <div className='h-full lg:pt-2 xl:pl-4 lg:pl-10  lg:justify-between xs:justify-end flex flex-wrap md:justify-end justify-between bg-white'>
        <div className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center'>
          <Image
            priority
            src={homebanner}
            alt={'home banner'}
            height={1000}
            width={1000}
            className='lg:w-[600px] w-[300px]'
          />
          <div className="lg:text-left  lg:pl-12 text-black font-[500] xl:text-base text-xl pl-8 lg:pt-10 " data-wow-delay="50ms" data-wow-duration="200ms">
            <p className='xl:text-3xl lg:text-2xl text-xl  lg:pb-2 font-bold py-2 pl-5 lg:pl-0 w-fit lg:w-3/4'>Install Long Drive Cars Mobile app &
              Start Your Journey!</p>
            <div className='flex xs:flex-wrap lg:gap-8 pt-2 gap-2 lg:w-full xs:text-sm md:text-xs xl:text-lg'>
              <div className="flex items-center gap-1 py-2">
                <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                  <Image
                    priority
                    height={500}
                    width={500}
                    alt='apple'
                    className='lg:w-36 w-28'
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
                    className='lg:w-48 w-32'
                    src={google}
                  >
                  </Image>
                </Link>

              </div>
              <div>
                <div className="flex gap-4 pt-4 text-xs
                     font-medium lg:text-sm xs: lg:w-[90%] flex-wrap text-white">
                  {/* <p className='font-sans xl:text-5xl lg:text-5xl text-3xl mb-2 lg:pl-5 lg:pb-8'>Why Choose Us?</p> */}
                  <div className="flex items-center gap-1 p-2 bg-[#660066] lg:text-lg text-sm  border-[1px] border-black rounded-full lg:hover:scale-105 xl:w-[280px] w-[230px]">
                    <FaRegClock className="bg-white text-black rounded-full p-1" size={40} />
                    <p className="">Choose Your Own Hours</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] lg:text-lg text-sm  border-[1px] border-black rounded-full lg:hover:scale-105 xl:w-[280px] w-[230px]">
                    <SlSpeedometer className="bg-white text-black rounded-full p-1" size={40} />
                    <p className=" ml-2">Unlimited Kilometers</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] lg:text-lg text-sm  border-[1px] border-black rounded-full lg:hover:scale-105 xl:w-[280px] w-[230px]">
                    <RiMoneyRupeeCircleFill className="bg-white text-black rounded-full p-1" size={40} />
                    <p className="ml-2 ">Zero Deposit</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] lg:text-lg text-sm  border-[1px] border-black rounded-full lg:hover:scale-105 xl:w-[280px] w-[230px]">
                    <GiTowTruck className="bg-white text-black rounded-full p-1" size={40} />
                    <p className=" ml-2">24/7 Breakdown Service</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] lg:text-lg text-sm  border-[1px] border-black rounded-full lg:hover:scale-105 xl:w-[280px] w-[230px]">
                    <FaCar className="bg-white text-black rounded-full p-1" size={40} />
                    <p className="ml-2">Check Original Car Photo</p>
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
