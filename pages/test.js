import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import { IoReload } from "react-icons/io5";
import { BsFuelPump } from 'react-icons/bs';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import Slider from 'react-slick';
import { SlSpeedometer } from "react-icons/sl";
import disc from './images/discountonbook.webp'
import { FaSearch } from 'react-icons/fa';
import carphoto from './images/car_image.jpeg'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const LocationFetcher = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');

    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };
    // const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = today.getDate() + 1;
    const daynum = today.getDate() + 2;

    const compldate = `${year}-${month}-${day}`
    // return `${year}-${month}-${day}`;
    const compldateend = `${year}-${month}-${daynum}`


    // };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLat(latitude);
                    setLon(longitude);
                    setLocation({ latitude, longitude });
                },
                (err) => {
                    setError(err.message);
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!location) return;

        const fetchData = async () => {
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://api.longdrivecarz.in/user/updated-home?lat=17&long=78&start_date=${compldate}%2000%3A00%3A00&end_date=${compldateend}%2000%3A00%3A00&no_of_days=1&index=0&limit=20`, requestOptions);
                const result = await response.json();
                const realdata = result?.data?.results;

                setData(realdata);
                console.log(response,'respppp');
                console.log(realdata,"rdd");
                
            } catch (error) {
                setError(error.message || 'An error occurred while fetching data.');
            } finally {
                setLoading(false);

            }
        };

        fetchData();
    }, [location]);
    const getOrderedImages = (attributes) => {
        const imageMap = {};

        attributes.forEach(attr => {
            imageMap[attr.attribute_name] = attr.car_image_duplicate_copy;
        });

        return [
            imageMap["car_image_front_view"],
            imageMap["car_image_car_right_view"],
            imageMap["car_image_back_inner"],
            imageMap["car_image_back_view"]
        ];
    };

    return (
        <div className='pt-20 lg:py-8 flex flex-col lg:flex-row gap-12'>
            {/* <p className='text-red-500'>hjo</p> */}
            {loading && <div className="text-center py-4">
                <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
                    <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
                </div></div>}
            {error && <p>Error: {error}</p>}
            <div className=' bg-white'>
                <p className='text-black text-center py-5 text-lg font-bold'>Explore Cars Near You in 20 Kms</p>
                <div className='flex flex-col gap-x-8 gap-y-8 lg:flex-wrap lg:flex-row lg:pl-36'>
                    {data?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white lg:rounded-md  shadow-lg  flex flex-col  xs:w-[100%] overflow-hidden md:w-72 h-[530px] lg:hover:scale-105">
                                <div className="relative h-[530px] lg:rounded-md ">
                                    <div className="relative z-20 bg-gradient-to-b from-black opacity-90 bottom lg:rounded-md">
                                        {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                                        <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                                            <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base px-2'>{item?.maker_model.toLowerCase()}</p>
                                            <p className='flex justify-center items-center p-1 font-bold z-50 text-sm bg-white text-blue-700 rounded-md '> <span></span><span>{Math.round((item?.distance) * 100) / 100} km near you</span></p>
                                        </div>
                                    </div>
                                    <Slider
                                        dots={false}
                                        infinite={false}
                                        speed={500}
                                        slidesToShow={1}
                                        slidesToScroll={1}
                                        arrows={false}
                                        autoplay={false}
                                        swipe= {true}
                                        className=" bottom-[5.5rem] lg:rounded-md kkky"
                                    >
                                        {getOrderedImages(item?.attributes).map((imageSrc, index) => (
                                            <div key={index} onClick={() => {
                                                // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                            }}>
                                                <Image className='h-[500px]' width={1000} height={1000} src={replaceText(imageSrc)} alt={`Car image ${index + 1}`} />
                                            </div>
                                        ))}

                                    </Slider>
                                    {/* </Link> */}
                                    <div className="relative z-20 bottom-[13.5rem] bg-gradient-to-t from-black opacity-90">
                                        <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                                            <p className='font-bold text-lg shadow-black'>Book Now</p>
                                            <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50  text-base pt-2 px-2 border-[1px] border-white'>₹ {item?.price_24_hours * 24}/day</p>
                                        </div>
                                        <ul className="flex gap-4 justify-center text-sm pt-2 pb-6 font-bold">
                                            <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><BsFillFuelPumpFill className="text-orange-500" /></span><span>{item?.fuel_type}</span></li>
                                            <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><GrGroup className="text-blue-500" /></span><span>{item?.seater} Seater</span></li>
                                            <li className=" flex items-center gap-1"><span><TbManualGearbox size={20} className="text-red-600" /></span><span>{item?.transmission_type}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="z-20 relative flex justify-between  text-black bottom-9">
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
                                                {" "}
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
            </div>
        </div>
    );
};

export default LocationFetcher;
