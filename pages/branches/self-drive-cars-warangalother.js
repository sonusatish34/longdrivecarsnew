import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState} from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaSearch } from 'react-icons/fa';
// const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
export default function car_products({ cars }) {

  const [searchQuery, setSearchQuery] = useState('');
  const replaceText = (str) => {
    return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
};

  const filteredData = cars?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="produvt-page flex flex-col lg:flex-row gap-10 bg-slate-100 font-sans">

      <div className='lg:pt-12 pt-4 bg-white'>
      </div>
      <div className='w-full'>
        <h2 id='explore' className="px-3 font-bold text-2xl pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9 text-center">Explore Self Drive
          Car Rentals in Warangal</h2>
          <div className=' lg:mb-16 pl-3 flex flex-grow items-center justify-center py-4'>
          <input
            placeholder='Search for your favourite car'
            className='outline-gray-500 placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
        <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-x-8 gap-y-8 flex flex-col gap-2 items-center justify-center lg:max-w-7xl py-4 xl:pl-[12rem]">
          {filteredData?.map((item, index) => (
            <React.Fragment key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] md:w-72 h-[500px] lg:hover:scale-105">
                <div className="relative h-80">
                  <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                    <Image
                      src={replaceText(item?.car_image_car_right_view)}
                      // alt={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                      // title={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                      layout="fill"
                      alt="cars-warangal"
                      objectFit="cover"
                      className="rounded-t-lg relative"
                      // priority
                      loading='lazy'
                    />
                  </Link>
                </div>

                <div className="pt-4 flex flex-col gap-4">
                  <div className='flex items-baseline justify-between px-2'>
                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <p className="text-gray-700 cursor-pointer font-sans font-semibold text-xs hover:text-red-600 w-fit">{item.maker_model}</p>
                    </Link>
                    <p className="text-blue-500 font-bold">₹ {item.price_24_hours * 24}/day</p>
                  </div>
                  <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base px-2">
                    <div className="flex items-center">
                      <BsFuelPump size={15} className="mr-1" />
                      <span>{item.fuel_type}</span>
                    </div>
                    <div className="flex items-center">
                      <TbManualGearbox size={15} className="mr-1" />
                      <span>{item.transmission_type}</span>
                    </div>
                    <div className="flex items-center">
                      <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                      <span>{item.seater}</span>
                    </div>
                  </div>
                  <div className='pt-2'>
                    <p className='text-black text-lg text-center font-semibold pb-2'>For Booking</p>
                    <div className="flex justify-around text-white">
                      <button className='bg-green-500 w-full rounded-bl-md p-2 flex justify-center'>
                        <Link href="https://api.whatsapp.com/send?phone=+919000478478&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking" target='_blank'>
                          <p className=' flex gap-1 text-lg items-center'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                        </Link>
                      </button>
                      <button className='bg-blue-500 w-full rounded-br-md p-2 flex justify-center' >
                        <Link href="tel:9000478478" target='_blank'>
                          <p className='flex gap-1 text-lg items-center px-1'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {(index + 1) % (4) === 0 && (
                <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-72 h-[500px]  lg:hover:scale-105">
                  <div>
                    <Image
                      src={""}
                      height={1000}
                      width={1000}
                      alt='discount'
                      className="scale-90"
                      
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <p>HII</p>
      <div>
        {/* <DynamicFaqComponent /> */}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch('https://longdrivecarz.in/site/cars-info?location=warangal');
  const items = await response.json();
  const cars = items?.data?.results
  return {
    props: {
      cars
    },
  };
}