import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import CarProducts from '../CarProducts';

import carnearbtn from '../../images/carnearbtn.png';
import mapright from '../../images/mapright.webp';
import inv from '../../changeimg/innova.webp'
import i10 from '../../changeimg/i10.webp'
import i20 from '../../changeimg/i20.webp'
import swift from '../../changeimg/swift.webp'
import ertiga from '../../changeimg/ERTIGA_RED.webp'
import creta from '../../changeimg/creta-thumbnail-pc.png'
import baleno from '../../changeimg/baleno.webp'
import renault from '../../images/renault.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import left from '../../images/left.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';

import styles from './HomePage.module.css';
import { FaSearch } from 'react-icons/fa';
const DynCallBackForm = dynamic(() => import('../CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../NearYou/NearYou'));
// const DynWhyChooseUs = dynamic(() => import('../WhyChooseUs/WhyChooseUs'));
import DynWhyChooseUs from '../WhyChooseUs/WhyChooseUs'
const DynImageChange = dynamic(() => import('../ImageChange/ImageChange'));
import { IoLocationSharp } from "react-icons/io5";
import rightimg from '../../images/iii.png'
import './HomePage.module.css'
import Marquee from 'react-fast-marquee';
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import innova from '../../images/discount.webp'
const DynamicFaqComponent = dynamic(() => import('../FaqAccordian/FaqAccordian'));

export default function Homepage({ data }) {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data2 = data;
  const [searchQuery, setSearchQuery] = useState('');
  var settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    speed: 1000,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          pauseOnHover: true,
          pauseOnFocus: true,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          initialSlide: 2,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnFocus: true,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          // rows: 2,
          infinite: true,
          autoplay: true,
          speed: 2000,
          arrows: false

        }
      }
    ]
  };
  function scrollToTarget() {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // console.log(data, "ddata");
  function replaceText(str) {
    let newstr = str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    return newstr
  }
  const fd = ["MARUTHI BALENO", "HYUNDAI CRETA", "INNOVA CRYSTA", "HYUNDAI GRAND I10", "MARUTHI DZIRE"];

  const fddata = [
    {
      carname: "MARUTHI SWIFT",
      src: swift
    },
    {
      carname: "MARUTHI ERTIGA",
      src: ertiga
    },
    {
      carname: "INNOVA CRYSTA",
      src: inv
    },
    {
      carname: "MARUTHI BALENO",
      src: baleno
    },
    {
      carname: "HYUNDAI CRETA",
      src: creta
    },
  ]
  const hiddenkey = 'hidden';
  const blockkey = 'block';

  return (
    <div className="min-h-screen">
      <DynImageChange />
      <div>

        <div className='px-8 py-8'>
          <div className='text-white flex flex-col justify-center items-center bg-[#660066] rounded-md'>
            <div className='flex flex-col items-center font-bold pt-4 lg:pt-16'>
              <p className='bg-gradient-to-r from-violet-100 to-yellow-500 animate-bounce lg:text-3xl text-lg bg-white text-black p-1 lg:p-2 rounded-md'>New Feature</p>
              <p className='lg:text-6xl text-xl lg:pt-2'>Explore Cars Near You</p>
              <Link href={'/test'} className={` w-fit lg:text-lg text-xs font-semibold text-black flex items-center lg:hover:scale-105 pt-6`}>
                <Image
                  priority
                  src={carnearbtn}
                  alt={'home banner'}
                  height={1000}
                  width={1000}
                  className='lg:w-full lg:h-32 w-full pl-4'
                />
              </Link>
              <p className='text-base lg:text-5xl relative lg:top-7'>20Kms Around Your Location</p>
            </div>

            <div className='flex lg:justify-between justify-center w-full lg:px-10 lg:relative lg:bottom-8'>
              <Image
                priorit
                src={left}
                alt={'home banner'}
                height={1000}
                width={1000}
                className='lg:w-56 w-20 lg:scale-150 hidden lg:block'
              />
              <Image
                priority
                src={mapright}
                alt={'home banner'}
                height={1000}
                width={1000}
                className='lg:w-56 w-36 lg:scale-125 relative'
              />
            </div>
          </div>
        </div>
        <div className=' lg:mb-16 pl-3 flex flex-grow items-center justify-center py-4 pb-16'>
          <input
            placeholder='Search for your favourite car'
            className=' text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
            type='search' pb-16
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
      </div>
      <CarProducts data={data2} searchQuery={searchQuery} />
      <div><DynNearYou /></div>
      <div className='feature-cars bg  text-black px-7 py-6 h-[655px] bg-gray-800'>
        <p className='text-center text-4xl font-semibold py-8 pb-4 text-white'>Check Out Our Featured Cars</p>
        <div className="slider-container h-[600px] ">
          <Slider {...settings}>
            {
              data?.map((item, index) => (
                fddata?.map((inside, index) => (
                  (item?.maker_model === inside.carname) ?
                    <div className='mont-text '>
                      {(item.maker_model == inside.carname) && <div
                        key={index}
                        // className='relative flex flex-col text-black bg-white rounded overflow-hidden'
                        className={`pt-3 flex flex-col text-black w-[270px] rounded-md`}
                      >
                        {/* Image Container */}
                        <div className='relative border-2 border-gray-200 bg-white rounded-md'>
                          <p className='bg-gray-100 pl-5'>Make Year {item?.manufacture_date}</p>
                          <Image
                            src={(inside.src)}
                            alt={'carss'}
                            width={1000}
                            height={1000}
                            className='w-[250px] h-[150px] '
                          />
                          <div className={`flex flex-col gap-3 text-center $`}>
                            {/* <p className='text-base font-semibold'>{item.carname} Starting From ₹2000/day</p> */}
                          </div>
                          <div
                            className={` flex flex-col justify-center   text-black`}
                          >
                            <div className="flex items-center gap-3 justify-around  text-black font-normal text-base px-3">
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
                            <div>
                            </div>
                            <p className='text-left text-lg pt-2 font-bold px-3 border-t-2 border-b-2 border-gray-200'>{item?.maker_model}</p>
                            <div className='flex flex-col gap-1'>
                              <p className='flex justify-between px-4 font-semibold'><span>24hrs</span><span>₹ {item?.price_24_hours * 24}</span></p>
                              <p className='flex justify-between px-4 text-sm'><span>4 days</span><span>₹ {item?.price_24_hours * 24 * 4}</span></p>
                              <p className='flex justify-between px-4 text-sm pb-2'><span>10 days</span><span>₹ {item?.price_24_hours * 24 * 10}</span></p>
                            </div>
                            <div className="flex items-center justify-center gap-6 pt-1 border-t-2 border-gray-200">
                              <Image
                                priority
                                height={1000}
                                width={1000}
                                alt='Apple'
                                className='w-20 h-10'
                                src={apple}
                              />
                              <a href='/'>
                                <Image
                                  priority
                                  height={1000}
                                  width={1000}
                                  alt='Google'
                                  className='w-28 h-14'
                                  src={google}
                                />
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>}
                    </div> : null
                ))
              ))
            }
          </Slider>
        </div>
      </div>
      <DynCallBackForm />
      <DynWhyChooseUs />
      <div className='bg-white  rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
        <DynamicFaqComponent />
      </div>

      <div className='flex p-5 justify-around xl:justify-between lg:p-8 flex-wrap bg-[#660066] rounded-md text-white mx-[14px] lg:mx-[58px] my-3 items-center font-sans'>
        <div className='xl:w-5/12 xl:text-left xs:w-full xs:text-center lg:w-2/5 xl:text-4xl lg:text-2xl text-left text-lg  lg:p-4 lg:pl-14 font-semibold'>
          Get in touch with us to arrange your booking
        </div>
        <div className='flex flex-col pt-4 lg:pr-16 items-center justify-start gap-2 text-sm lg:p-4 font-semibold cursor-pointer pr-'>
          <p>CONTACT US NOW</p>
          <div className='flex justify-around gap-3 pb-2 text-white'>
            <button className='bg-green-500  rounded-full p-2 '>
              <Link href="https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                <p className=' flex items-center justify-center gap-1 text-sm text-white'><span><FaWhatsapp size={30} /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2'>
              <Link href="tel:9666677405" target='_blank'>

                <p className='flex items-center justify-center gap-1 text-sm'><span><BiPhoneCall size={30} /></span> <span>Call Us</span></p>

              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

