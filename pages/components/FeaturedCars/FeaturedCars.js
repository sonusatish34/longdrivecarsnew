import React, { useRef, useEffect, useState } from 'react';
import apple from '../../images/apple.webp';
import google from '../../images/ggle.webp';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const fddata = [
  { carname: "MARUTHI WAGON R", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Wagon-R_8_11zon-transformed.webp" },
  { carname: "MARUTHI SWIFT", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Swift.webp" },
  { carname: "MARUTHI DZIRE", src: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Swift-Dzire.webp' },
  { carname: "GRAND NIOS", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Grand-I10-Nios.webp" },
  { carname: "MARUTHI BALENO", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Baleno.webp" },
  { carname: "HYUNDAI I20", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/I20.webp" },
  { carname: "HYUNDAI VENUE", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Venue.webp" },
  { carname: "KIA SONET", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/sonnet.webp" },
  { carname: "KIA SELTOS", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Seltos.webp" },
  { carname: "KIA SONET SUNROOF", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Kia-Sonet-sunroof.webp" },
  { carname: "SELTOS SUNROOF", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/seltos-sunroof.webp" },
  { carname: "MARUTHI ERTIGA", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/ERTIGA_RED.webp" },
  { carname: "MAHINDRA THAR 2024", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/Mahindra-Thar.webp" },
  { carname: "INNOVA CRYSTA", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/InnovaCrysta.webp" },
  { carname: "MAHINDRA XUV 700", src: "https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/XUV700.webp" },
];



function FeaturedCars({ data, branch }) {
  
  const swiperRef = useRef(null);

  return (
    <div className='feature-cars bg text-black px-7 py-6 h-[655px] bg-gray-800'>
      <p className='text-center lg:text-4xl text-2xl font-semibold lg:py-8 py-4 text-white'>Check Out Our Featured Cars</p>
      
      <div className="slider-container h-[600px] mx-auto relative">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2000, // time between slides (3 seconds)
            disableOnInteraction: false, // ensures autoplay continues after interaction
          }}
          breakpoints={{
            1440: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 1,
            },
            200: {
              slidesPerView: 1,
              navigation: false,
            },
          }}
        >
          
          {data?.map((item, index) => (
            fddata?.map((inside, index) => (
              item?.maker_model === inside.carname && (
                <SwiperSlide key={index}>
                  <div className='pt-3 flex flex-col text-black w-[250px] mxs:w-[300px] rounded-md'>
                    <div className='relative border-2 border-[#660066]-200 bg-white rounded-md'>
                      <p className='bg-[#660066] text-white rounded-t-md px-3 flex justify-between'>
                        <span>Make Year</span>
                         <span>{item?.manufacture_date}</span>  </p>
                      <div>
                        <Image
                          src={(inside.src)}
                          alt="Long Drive Cars app"
                          width={1000}
                          height={1000}
                          className='w-[250px] h-[150px] lg:scale-100 scale-90 '
                        />
                      </div>
                      <div className={`flex flex-col gap-3 text-center`}></div>
                      <div className={`flex flex-col justify-center text-black`}>
                        <div className="flex items-center gap-3 justify-around text-black font-normal text-base px-3">
                          <div className="flex items-center">
                            <BsFuelPump size={15} className="mr-1" />
                            <span>{item?.fuel_type}</span>
                          </div>
                          <div className="flex items-center">
                            <TbManualGearbox size={15} className="mr-1" />
                            <span>{item?.transmission_type}</span>
                          </div>
                          <div className="flex items-center">
                            <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                            <span>{item?.seater}</span>
                          </div>
                        </div>
                        <p className='text-left text-lg pt-2 font-bold px-3 border-t-2 border-b-2 border-gray-200'>{item?.maker_model}</p>
                        <div className='flex flex-col gap-1'>
                          <p className='flex justify-between px-4 font-semibold'><span>24hrs</span><span>₹ {item?.price_24_hours * 24}</span></p>
                          <p className='flex justify-between px-4 text-sm'><span>4 days</span><span>₹ {item?.price_24_hours * 24 * 4}</span></p>
                          <p className='flex justify-between px-4 text-sm pb-2'><span>10 days</span><span>₹ {(item?.price_24_hours * 24 * 10) - 2000}</span></p>
                        </div>
                        <div className="flex items-center justify-center gap-4 pt-1 border-t-2 border-gray-200">
                          <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                            <Image
                              height={500}
                              width={500}
                              alt='apple'
                              className='w-24 h-11'
                              src={apple}
                            />
                          </Link>
                          <Link href='https://play.google.com/store/search?q=long+drive+cars&c=apps'>
                            <Image
                              height={500}
                              width={500}
                              alt='google'
                              className='w-28 h-16'
                              src={google}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            ))
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedCars;
