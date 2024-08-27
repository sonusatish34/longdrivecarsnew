import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import CarProducts from '../CarProducts';
import tata from '../../images/tata2.webp';
import skoda from '../../images/skoda1.webp';
import toyota from '../../images/toyota1.webp';
import mg from '../../images/mg.webp';
import kia from '../../images/kia.webp';
import mahindra from '../../images/mhlogo.webp';
import suzuki from '../../images/suz.webp';
import inv1 from '../../changeimg/innova.webp'
import inv2 from '../../changeimg/i10.webp'
import inv3 from '../../changeimg/i20.webp'
import inv4 from '../../changeimg/swift.webp'
import inv5 from '../../changeimg/polo.webp'
import inv6 from '../../changeimg/polo.webp'
import inv7 from '../../changeimg/polo.webp'
import renault from '../../images/renault.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import left from '../../images/left.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    // infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          pauseOnHover: true,
          pauseOnFocus: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          pauseOnHover: true,
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
          initialSlide: 2
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
  const fddata = [
    {
      carname: "Innova",
      src: inv1
    },
    {
      carname: "I10",
      src: inv2
    },
    {
      carname: "I20",
      src: inv3
    },
    {
      carname: "Swift",
      src: inv4
    },
    {
      carname: "Polo",
      src: inv5
    },
    {
      carname: "swift",
      src: inv1
    },

  ]
  const hiddenkey = 'hidden';
  const blockkey = 'block';
  return (
    <div className="min-h-screen">
      <DynImageChange />
      <div>

        <div className='flex lg:mx-[87px] p-5 w- xl:mx-[168px] xs:mx-7 rounded-md justify-center bg-[#660066]  items-center pb-5 lg:pt-5 text-white shadow-md'>
          <div className='flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:gap-0'>
            <div>
              <Image
                src={left}
                alt="Car"
                // width={1000}
                // height={1000}
                className="rounded-full w-52 h-52 lg:scale-125"
              />
            </div>
            <div className='lg:w-[560px] lg:pl-20'>
              <p className="lg:text-2xl text-sm font-bold lg:w-[81%] text-center">Looking For Self Drive Car Rentals In Your Location?</p>
              <div className='flex flex-col justify-center items-center py-4'>
                <button className='p-1 bg-white rounded hover:scale-105'>
                  <Link href={'/test'} className={` w-fit lg:text-lg text-xs font-semibold text-black flex items-center`}><span><IoLocationSharp size={20} className="text-orange-400" /></span> Get Near By Cars<span></span></Link>
                </button>
              </div>
            </div>
            <div>
              <Image
                src={rightimg}
                alt="Car"
                width={1000}
                height={1000}
                className=" lg:w-52 lg:h-52 h-44 w-44"
              />
            </div>
          </div>
        </div>
        <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center pt-3'>
          <input
            placeholder='Search for the cars'
            className='placeholder-black  px-4 py-3 rounded-full bg-gray-200 w-full max-w-56 md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
      </div>
      <CarProducts data={data2} searchQuery={searchQuery} />
      <div><DynNearYou /></div>
      <div className='feature-cars bg bg-gray-800 px-7 py-6 h-[655px]'>
        <p className='text-center text-4xl font-semibold py-8 pb-14'>Check Out Our Featured Cars</p>
        <div className="slider-container">
          <Slider {...settings}>
            {fddata.map((item, index) => (
              <div
                key={index}
                // className='relative flex flex-col text-black bg-white rounded overflow-hidden'
                className={`${hoveredIndex === index ? 'h-80 sca transition-opacity ease' : 'h-auto'} pt-3 p-2 flex flex-col text-black bg-white rounded `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className='relative'>
                  <Image
                    src={item.src}
                    alt={item.carname}
                    width={1000}
                    height={1000}
                    className='w-full h-32 object-cover'
                  />
                  {/* <p className={`${hoveredIndex === index ? 'opacity-0' : 'opacity-100 text-center text-xl font-semibold'}`}>{item.carname} Starting From </p> */}
                  <div className={`flex flex-col gap-3 text-center ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                    <p className='text-base font-semibold'>{item.carname} Starting From ₹2000/day</p>
                    {/* <p className='text-lg'>12 hrs - ₹1000</p>
                  <p className='text-lg'>24 hrs - ₹2000</p> */}
                  </div>
                  {/* Overlay for hover effect */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-center items-center  text-black p-4  ${hoveredIndex === index ? 'opacity-100 top-52 transition-opacity duration-600 ease-in' : 'opacity-0'}`}
                  >
                    <div className='flex flex-col gap-3 text-center'>
                      <p className='text-xl font-semibold'>{item.carname} Starting From</p>
                      <p className='text-lg'>24 hrs - ₹1000</p>
                      <p className='text-lg'>2 days - ₹2000</p>
                    </div>
                    <div className="flex items-center justify-center gap-6 mt-4">
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
              </div>
            ))}
          </Slider>
        </div>

      </div>

      <DynCallBackForm />
      <DynWhyChooseUs />
      <div className='bg-white  rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
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
                <p className=' flex items-center justify-center gap-1 text-sm'><span><FaWhatsapp size={30} /></span> <span>Whatsapp</span></p>
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

