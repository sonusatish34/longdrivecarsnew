import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import disc from '../images/discoutn.webp'
import discfree from '../images/free.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarProducts({ data, branch ,phoneno}) {
  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 9);
  };
 
  const replaceText = (str) => {
    if (str?.includes("cdn"))
      return str;
    else {
      return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
    }
  };

  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className=' bg-white'>
      <p className='text-black xl:text-5xl lg:text-4xl text-lg font-bold text-center py-7 capitalize'>Explore Our Cars in {branch?.length ? branch : 'Hyderabad'}</p>
      <div className=' lg:mb-16 pl-3 flex flex-grow items-center justify-center pt-2 pb-14 lg:pb-2'>
        <input
          placeholder='Search for your favourite car'
          className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
          type='search'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-8 lg:items-start justify-center lg:pl-12 items-center text-white">

        {filteredData?.slice(0, visibleItems).map((item, index) => (
          <React.Fragment key={index}>
            <div className="bg-white lg:rounded-md  shadow-lg flex flex-col  w-[100%] md:w-72 lg:h-[530px]   h-[630px] lg:hover:scale-105">
              <div className="relative lg:h-[530px]  h-[630px] lg:rounded-md">
                <div className="relative z-20 bg-gradient-to-b from-black opacity-90 lg:rounded-md bottom-4">
                  {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                  <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 '>{item?.maker_model.toLowerCase()}</p>
                  </div>
                </div>
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  centerMode={true}
                  centerPadding={0}
                  focusOnSelect={true}
                  arrows={false}
                  // autoplay={true}
                  pauseOnFocus={true}
                  pauseOnHover={true}
                  className="relative bottom-[4.5rem] lg:rounded-md"
                >
                  <div>
                    {
                      <Link href={`${(((branch?.length?branch:'')+"/car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                        <Image className='lg:h-[505px] h-[598px] rounded-md' width={1000} height={1000} alt="cars" src={replaceText(item?.car_image_car_right_view)}></Image>
                      </Link>}
                  </div>
                  <div onClick={() => {
                   
                  }}>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="car" className='lg:h-[505px] h-[598px] rounded-md' width={1000} height={1000} src={replaceText(item?.car_image_back_inner)}></Image>
                    </Link>
                  </div>
                  <div>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="car" className='lg:h-[505px] h-[598px] rounded-md' width={1000} height={1000} src={replaceText(item?.car_image_reading_view)}></Image>
                    </Link>
                  </div>
                  <div>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="car" className='lg:h-[505px] h-[598px] rounded-md' width={1000} height={1000} src={replaceText(item?.car_image_back_view)}></Image>
                    </Link>
                  </div>
                </Slider>
                
                <div className="relative z-20 bottom-[12.5rem] lg:bottom-[12.1rem] bg-gradient-to-t from-black opacity-90">
                  <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                    <p className='font-bold text-lg shadow-black'>Book Now</p>
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 px-2 border-[1px] border-white'>₹ {item?.price_24_hours * 24}/day</p>
                  </div>
                  <ul className="flex gap-4 justify-center text-xs pt-2 pb-6 font-bold">
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><BsFillFuelPumpFill className="text-orange-500" /></span><span>{item?.fuel_type}</span></li>
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><GrGroup className="text-blue-500" /></span><span>{item?.seater} Seater</span></li>
                    <li className=" flex items-center gap-1"><span><TbManualGearbox size={20} className="text-red-600" /></span><span>{item?.transmission_type}</span></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="z-20 relative flex justify-between  text-white bottom-[3.25rem] lg:bottom-[2.3rem]">
                  <ul className="flex w-full justify-between">
                    <li className="bg-green-500 w-full py-3 lg:py-2 text-center lg:rounded-bl-md">
                      {" "}
                      <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`} target='_blank'>
                        <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                          <span>
                            <FaWhatsapp size={20} />
                          </span>{" "}
                          <span>Whatsapp</span>
                        </p>
                      </Link>
                    </li>
                    <li className="bg-blue-500 w-full py-3 lg:py-2 lg:rounded-br-md">
                      <Link href={`tel:${phoneno}`} target="_blank">
                        <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                          <span>
                            <BiPhoneCall size={20} />
                          </span>{" "}
                          <span>Call Us</span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {(index + 1 === 3) && (
              <div className="pb-9 ">
              <div className="bg-[#8d398d] lg:rounded-md  shadow-lg flex flex-col  w-[100%] md:w-72 lg:h-[500px]   h-[630px] lg:hover:scale-105 relative top-7">
                <div className="relative z-20 bg-[#8d398d] lg:rounded-md opacity-90 bottom-7">
                  
                </div>
                <div>
                  <Image
                    src={disc}
                    height={1000}
                    width={1000}
                    alt='discount'
                    className="scale-90 mxs:scale-75 lg:scale-100 relative mxs:bottom-12 rounded-md"
                  />
                </div>
              </div>
              </div>
            )}
            
            {(index + 1 === 5) && (
              <div className="bg-black lg:rounded-md  shadow-lg flex flex-col  w-[100%] md:w-72 lg:h-[530px]   h-[630px] lg:hover:scale-105 pb-9">
                <div className="relative z-20 bg-black lg:rounded-md opacity-90 bottom-6">
                  <div className="flex flex-col gap-2 items-end pt-6 pr-5 lg:rounded-t-md">
                  </div>
                </div>
                <div>
                  <Image
                    src={discfree}
                    height={1000}
                    width={1000}
                    alt='discount'
                    className="mxs:scale-90 lg:scale-100 relative  mxs:bottom-10 mxs:h-[680px] lg:h-full"
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {
        visibleItems < filteredData?.length && (
          <div className="text-center md:pb-10 py-6 pt-8 px-6">
            <button className="bg-[#4508a6] text-xl font-bold text-white w-full lg:w-96 py-4 rounded-full">
              <Link href={`${branch?.length?branch:''}/explore-self-drive-cars`}>View all cars</Link>
            </button>
          </div>
        )
      }
    </div >
  )
}

export default CarProducts;