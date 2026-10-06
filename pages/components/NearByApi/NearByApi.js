import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import carnearbtn from "../../images/carnearbtn.png";
import mapright from "../../images/mapright.webp";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function NearByApi({ city,banners }) {
  const swiperRef = useRef(null);
  const bannerItems = Array.isArray(banners) ? banners : [];

  return (
    <div className="xl:px-20 lg:px-16 px-2 py-6 lg:py-14">
      <div className="text-white font-bold xl:px-28 lg:px-12 bg-[#660066] rounded-md py-4 flex flex-row items-center lg:justify-between poppins-text">
        <div className="pt-6 flex flex-col lg:gap-3 gap-2 items-center">
          <p className="xl:text-5xl lg:text-4xl text-2xl lg:pt-2">
            Explore Cars Near You
          </p>
          <p className="text-base xl:text-3xl lg:text-2xl relative">
            20Kms Around Your Location
          </p>
          <Link
            href={`${city?.length ? city : ""}/get-near-by-cars`}
            className={` w-fit lg:text-lg text-xs font-semibold text-black flex items-center lg:hover:scale-105 pt-6`}
          >
            <Image
              src={carnearbtn}
              alt="Long Drive Cars app"
              height={1000}
              width={1000}
              className="xl:w-full lg:w-96 lg:h-28 w-full pl-4"
            />
          </Link>
          <span className="animate-ping text-xl bg-red-800 rounded-full w-3 h-3 relative bottom-8 left-28 mxs:left-32 xl:bottom-10 xl:left-44 lg:bottom-10 lg:left-36"></span>
        </div>
        <div>
          <Link href={`${city?.length ? city : ""}/get-near-by-cars`}>
            <Image
              src={mapright}
              alt="Long Drive Cars app"
              height={1000}
              width={1000}
              className=":xl-80 lg:w-72 w-48 scale-110 hidden lg:block relative lg:hover:scale-125"
            />
          </Link>
        </div>
      </div>
      
      <div className="lg:pt-20 lg:py-4 py-8">
        <p className="flex lg:text-4xl text-2xl font-bold py-2">Offers And Discounts</p>
      </div>

      {/* Slider Container with padding to make room for custom buttons */}
      <div className="slider-container h-[600px] mx-auto relative px-4 lg:px-1 group">
        
        {/* Custom Left Button */}
        <button className="custom-prev absolute left-0 top-1/3 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#660066] transition-all hover:bg-[#660066] hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            nextEl: '.custom-next', // Linking the custom next button
            prevEl: '.custom-prev', // Linking the custom prev button
          }}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, // FIX: Pauses sliding when hovering or touching
          }}
          breakpoints={{
            1440: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 1 },
            200: { 
              slidesPerView: 1, 
              // Keep navigation off for very small screens if desired
            },
          }}
          className="w-full h-full"
        >
          {bannerItems.map((item, idx) => (
            <SwiperSlide key={idx} className="pb-10">
              {/* <p>{item.banner_title} = {idx+1}</p> */}
              <Image
                src={`${item.banner_image_url}`}
                height={1000}
                width={1000}
                alt={`Offer ${idx + 1}`}
                className="rounded-xl object-cover h-auto w-full transition-transform duration-300 hover:scale-[1.02]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Right Button */}
        <button className="custom-next absolute right-0 top-1/3 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#660066] transition-all hover:bg-[#660066] hover:text-white hover:scale-110 opacity-0 group-hover:opacity-100 disabled:opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </div>
  );
}

export default NearByApi;
