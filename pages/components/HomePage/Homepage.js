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
import mahindra from '../../images/mahindra.webp';
import suzuki from '../../images/suz.webp';

import renault from '../../images/renault.webp'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './HomePage.module.css';
import { FaSearch } from 'react-icons/fa';
const DynCallBackForm = dynamic(() => import('../CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../NearYou/NearYou'));
const DynWhyChooseUs = dynamic(() => import('../WhyChooseUs/WhyChooseUs'));
const DynImageChange = dynamic(() => import('../ImageChange/ImageChange'));

import './HomePage.module.css'


const DynamicFaqComponent = dynamic(() => import('../FaqAccordian/FaqAccordian'));
export default function Homepage({ data }) {
  const data2 = data;
  const [searchQuery, setSearchQuery] = useState('');
  var settings = {
    // infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: true,
    // arrows: false,

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
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          pauseOnFocus: true,
          pauseOnHover: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          // rows: 2,
          slidesPerRow: 2, // 2 slides per row (2 columns)
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
  function scrollToTarget() {
    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="min-h-screen">
      <DynImageChange />
      <div className='bg-gray-800 flex flex-col justify-center items-center gap-y-6 py-20'>
        <div className='text-center'>
          <p className='py-3 md:text-5xl xs:text-3xl mb-7 text-white  font-bold'>Browse By Brand</p>
          <div className="flex items-center text-black justify-center">

            <div className="slider-container my-2 ">
              <Slider className={`${styles.widthscreenset} lg:w-[80vw] w-[70vw]`} {...settings}>

                <div>
                  <div onClick={() => { setSearchQuery("mahindra"); scrollToTarget() }} className='my-2 p-6 bg-white rounded-lg  lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2  hover:border-blue-700 cursor-pointer '>
                    <Image
                      src={mahindra}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded-lg"
                    />
                    <p className='pt-2 font-bold'>Mahindra</p>
                  </div>
                </div>
                <div>
                  <div onClick={() => { setSearchQuery("tata"); scrollToTarget() }} className='p-6 my-2 bg-white rounded-lg  lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={tata}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded-lg lg:mb-5"
                    />
                    <p className='pt-2 font-bold'>Tata</p>
                  </div>
                </div>
                <div>
                  <div onClick={() => { setSearchQuery("skoda"); scrollToTarget() }} className='lg:p-6 my-2 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={skoda}
                      alt="Car"
                      width={100}
                      height={100}
                      className="rounded-lg w-16"
                    />
                    <p className='pt-2 font-bold'>Skoda</p>
                  </div>
                </div>
                <div>
                  <div onClick={() => { setSearchQuery("toyota"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={toyota}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded w-20"

                    />
                    <p className='pt-2 font-bold'>Toyota</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("mg"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={mg}
                      alt="Car"
                      width={200}
                      height={220}
                      className="rounded lg:h-24 lg:w-36"
                    />
                    <p className='pt-2 font-bold'>MG</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("kia"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer  '>
                    <Image
                      src={kia}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded"

                    />
                    <p className='pt-2 font-bold'>Kia</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("maruthi"); scrollToTarget() }} className='my-2 lg:p-6 bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center  items-center flex-col hover:border-2 hover:border-blue-700 hover: -105 cursor-pointer'>
                    <Image
                      src={suzuki}
                      alt="Car"
                      width={180}
                      height={180}
                      className="rounded hover:bg-red-500"
                    />
                    <p className='pt-2 font-bold'>Suzuki</p>
                  </div>
                </div>
                <div >
                  <div onClick={() => { setSearchQuery("renault"); scrollToTarget() }} className='p- bg-white rounded-lg lg:w-28 md:w-24 h-32 w-24 flex justify-center items-center flex-col hover:border-2  mt-2 hover:border-blue-700 hover: -105 cursor-pointer'>
                    <Image
                      src={renault}
                      alt="Car"
                      className="rounded hover:bg-red-500 xs:h-24 lg:h-16"
                    />
                    <p className='pt- font-bold'>Renault</p>
                  </div>
                </div>

              </Slider>

            </div>
          </div>
        </div>
      </div>
      <div><DynNearYou /></div>
      <div>
      <div className='text-center'>
          <h2 id='explore' className="px-3 font-bold text-2xl font-jakarta pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9">Explore Long Drive Car Rentals</h2>
          <div className='py-3'>
          <Link href={'/test'} className='p-2 bg-blue-400 text-lg rounded-full'>Get Near By Cars</Link>
          </div>
        </div>
        <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center pt-3'>
          <input
            placeholder='Search for the cars'
            className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full max-w-56 md:max-w-96 lg:max-w-2xl'
            type='search'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
        </div>
      </div>
      <CarProducts data={data2} searchQuery={searchQuery}/>

      <DynCallBackForm />
      <DynWhyChooseUs />
      <div className='bg-white text-black rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
        <h2 className='uppercase p-2 mb-4 text-center font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
        <DynamicFaqComponent />
      </div>
      <div className='flex p-5 justify-around xl:justify-between lg:p-8 flex-wrap bg-orange-500 rounded-md text-white mx-[14px] lg:mx-[58px] my-3 items-center font-sans'>
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

