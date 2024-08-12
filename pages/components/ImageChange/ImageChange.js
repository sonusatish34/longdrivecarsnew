import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import homebanner from '../../images/homebanner.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import styles from '../HomePage/HomePage.module.css';
import { FaCar } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import img2 from '../../changeimg/ertiga.webp'
import img3 from '../../changeimg/polo.webp'
import img4 from '../../changeimg/swift.webp'
import img5 from '../../changeimg/i20.webp'
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

    <div className='mt-28 xl:mt-0 2xl:mt-0 lg:mt-0'>
      <div className='h-full xs:pt-8 lg:pt-2 xl:pl-4 lg:pl-10  lg:justify-between xs:justify-end flex flex-wrap md:justify-end justify-between bg-white'>
        <div className='lg:w-6/12 md:w-2/4 xl:pt-20 xs:pt-20 pl-12'>
          <h2 className="lg:text-left text-black font-[500] xl:text-base text-xl font-opensans " data-wow-delay="50ms" data-wow-duration="200ms">
            <p className='xl:text-5xl lg:text-4xl xs:text-2xl font-jakarta lg:pb-2 font-bold pb-1'>Long Drive Car Rental </p>
            <p className='xl:text-5xl lg:text-4xl xs:text-2xl font-jakarta font-bold'>Starting at <span className='pl-2 text-blue-500'>₹ 62/hr</span></p>
            <div className='flex xs:flex-wrap xl:pt-16 lg:gap-8 pt-8 gap-2 lg:w-full xs:text-sm md:text-xs xl:text-lg'>
              {/* <div className="xl:w-56 flex items-center gap-1 p-2 bg-[#ffffff] border-[2px] shadow-sm border-orange-500 rounded-md">
                <RiMoneyRupeeCircleFill className="bg-orange-200 rounded-md p-1 xs:size-8" size={40} />
                <p className="ml-2">Zero Deposit</p>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[2px] shadow-sm border-orange-500 rounded-md">
                <FaCar className="bg-orange-200 rounded-md p-1 xs:size-8" size={40} />
                <p className="ml-2">Check Original Car Photo</p>
              </div> */}
              <div className="flex items-center gap-1 p-2 bg-[#ffffff]">
                <Image
                  priority
                  height={500}
                  width={500}
                  alt='apple'
                  className='w-36'
                  src={apple}
                >
                </Image>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff]  shadow-sm  rounded-md">
              <Image
                  priority
                  height={500}
                  width={500}
                  alt='google'
                  className='w-44'
                  src={google}
                >
                </Image>
              </div>
            </div>
          </h2>
        </div>
        {/* <div className={`${styles.triangleElement} xl:w-[660px] xs:pt-16 lg:pt-0 lg:w-[460px] lg:h-[500px] w-`}>
          <div className="image-container block lg:mt-24 lg:w-full h-[400px] w-[600px] aspect-w-1 aspect-h-1 xs:w-[300px] xs:h-[240px]">
            <Image  priority src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} height={600} width={600} layout='responsive' />
          </div>
        </div> */}
        <Image
          priority
          src={homebanner}
          alt={'home banner'}
          height={1000}
          width={1000}
          className='w-[600px]'
        />

      </div>
    </div>
  );
};

export default ImageChange;
