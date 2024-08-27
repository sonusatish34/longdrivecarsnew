import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import Link from 'next/link';
import disc from '../images/discountonbook.webp'
import { FaSearch } from 'react-icons/fa';
import carphoto from '../images/car_image.jpeg'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarProducts({ data, searchQuery }) {
  // console.log(data,"dasya");
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          // slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: true,
          pauseOnFocus: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true,
          infinite: true,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnFocus: true,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // rows: 2,
          slidesPerRow: 1, // 2 slides per row (2 columns)
          pauseOnHover: true,
          autoplay: true,
          speed: 2000,
          vertical: true,
          verticalSwiping: true, // Enable vertical swiping
          swipeToSlide: true,
          arrows: false

        }
      }
    ]
  };
  const [visibleItems, setVisibleItems] = useState(8);
  // const [searchQuery, setSearchQuery] = useState('');

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 9);
  };

  const replaceText = (str) => {
    return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
  };

  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className=' bg-white'>
      <div className="flex flex-wrap gap-x-8 gap-y-8 lg:items-start justify-center lg:pl-12 items-center text-white">

        {filteredData?.slice(0, visibleItems).map((item, index) => (
          <React.Fragment key={index}>
            <div className="bg-white lg:rounded-md  shadow-lg  flex flex-col  xs:w-[100%] md:w-72 lg:h-[530px]  h-[630px] lg:hover:scale-105">
              <div className="relative lg:h-[530px]  h-[630px] lg:rounded-md">
                <div className="relative z-20 bg-gradient-to-b from-black opacity-90 bottom lg:rounded-md">
                  {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                  <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 '>{item?.maker_model.toLowerCase()}</p>
                    {/* <span className='p-1 font-bold bg-[#8C52FF] rounded-bl-md  z-50 font-manrope text-sm '>₹{item?.price_24_hours * 24}/day</span> */}
                    <p className='flex justify-center items-center p-1 font-bold z-50 text-sm bg-white text-blue-700 rounded-md '> <span></span><span>{item?.address_area_name}</span></p>

                    {/* <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p> */}
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
                  autoplay={true}
                  pauseOnFocus= {true}
                  pauseOnHover= {true}
                  className="relative bottom-[4.5rem] lg:rounded-md"
                >
                  <div onClick={() => {
                    // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                  }}>
                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image className='lg:h-[498px] h-[598px] ' width={1000} height={1000} src={replaceText(item?.car_image_car_left_view)}></Image>
                    </Link>

                  </div>
                  <div onClick={() => {
                    // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                  }}>
                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image className='lg:h-[498px] h-[598px]' width={1000} height={1000} src={replaceText(item?.car_image_back_inner)}></Image>
                    </Link>
                  </div>
                  <div onClick={() => {
                    // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                  }}>
                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image className='lg:h-[498px] h-[598px]' width={1000} height={1000} src={replaceText(item?.car_image_reading_view)}></Image>
                    </Link>
                  </div>
                  <div onClick={() => {
                    // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                  }}>
                    <Link href={`/${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image className='lg:h-[498px] h-[598px]' width={1000} height={1000} src={replaceText(item?.car_image_back_view)}></Image>
                    </Link>
                  </div>


                </Slider>
                {/* </Link> */}
                <div className="relative z-20 bottom-[12.5rem] lg:bottom-[12.1rem] bg-gradient-to-t from-black opacity-90">
                  {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                  <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                    <p className='font-bold text-lg shadow-black'>Book Now</p>
                    {/* <span className='p-1 font-bold bg-[#8C52FF] rounded-bl-md  z-50 font-manrope text-sm '>₹{item?.price_24_hours * 24}/day</span> */}
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 px-2 border-[1px] border-white'>₹ {item?.price_24_hours * 24}/day</p>
                    {/* <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p> */}
                  </div>
                  <ul className="flex gap-4 justify-center text-sm pt-2 pb-6 font-bold">
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><BsFillFuelPumpFill className="text-orange-500" /></span><span>{item?.fuel_type}</span></li>
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><GrGroup className="text-blue-500" /></span><span>{item?.seater} Seater</span></li>
                    <li className=" flex items-center gap-1"><span><TbManualGearbox size={20} className="text-red-600" /></span><span>{item?.transmission_type}</span></li>

                  </ul>
                </div>
              </div>
              <div>

                <div className="z-20 relative flex justify-between  text-black bottom-9 lg:bottom-[2.25rem]">
                  <ul className="text-black flex w-full justify-between">
                    <li className="bg-green-500 w-full p-2  text-center text-black lg:rounded-bl-md">
                      {" "}
                      <Link
                        href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking."
                        target="_blank"
                      >
                        <p className=" flex gap-1 text-sm justify-center">
                          <span>
                            <FaWhatsapp size={20} />
                          </span>{" "}
                          <span>Whatsapp</span>
                        </p>
                      </Link>
                    </li>
                    <li className="bg-blue-500 w-full p-2  text-black lg:rounded-br-md">
                      <Link href="tel:9111911162" target="_blank">
                        <p className=" flex gap-1 text-sm justify-center">
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

              {/* <p className='p-1 font-bold text-red-500 bg-yellow-200 z-50 font-manrope text-3xl lg:pl-20'>{item?.maker_model}</p> */}
            </div>
            {/* {(index + 1) % 5 === 0 && (
                            <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-72 h-[529px] lg:hover:scale-105">
                                <div>
                                    <Image
                                        src={disc}
                                        height={400}
                                        width={400}
                                        alt='discount'
                                    />
                                </div>
                            </div>

                        )} */}
          </React.Fragment>
        ))}
      </div>
      {
        visibleItems < filteredData?.length && (
          <div className="text-center md:pb-10 py-6 pt-8">
            <button className="bg-[#660066] text-lg font-bold text-white px-9 py-2 rounded-full">
              <Link href={"/explore-self-drive-cars"}>View all cars</Link>
            </button>
          </div>
        )
      }
    </div >
  )
}

export default CarProducts