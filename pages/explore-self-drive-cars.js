import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { FaExchangeAlt } from "react-icons/fa";
import Link from 'next/link';
import disc from './images/discountonbook.webp'
import { FaSearch } from 'react-icons/fa';
import StaticData from './components/StaticData/StaticData'
import { useMemo } from "react";
import img2 from './changeimg/ertiga.webp'
import img3 from './changeimg/polo.webp'
import img4 from './changeimg/swift.webp'
import img5 from './changeimg/i20.webp'
import { IoLocationSharp } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import Slider from 'react-slick';
export default function car_products({ cars }) {

    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{10}$/);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isError && mobile.length == 10) {
            fetch('https://longdrivecarz.in/site/contacts', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'user_phone': mobile,
                    'user_location': 'Bangalore'
                })
            });
        }
        else {
            // console.log("some error");
        }

    };
    const [searchQuery, setSearchQuery] = useState('');

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedSeater, setSelectedSeater] = useState('');
    const [selectedFuelType, setSelectedFuelType] = useState('');
    const [selectedTransType, setSelectedTransType] = useState('');
    const [priceRanges, setPriceRanges] = useState({
        '1000-2000': false,
        '2000-3000': false,
    });

    const replaceText = (str) => {
        return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
    };

    const handlePriceRangeChange = (e) => {
        const { value, checked } = e.target;
        setPriceRanges(prev => ({ ...prev, [value]: checked }));
    };

    const uniqueBrands = ["maruthi", "kia", "hyundai", "tata", "mahindra", "honda", "mg"]
    const uniqueFuelTypes = ["petrol", "diesel"]
    const uniqueSeaters = ["5", "7"];
    const uniqueTrasmission = ["manual", "automatic"];

    const filteredData = useMemo(() => {
        if (!Array.isArray(cars)) return [];

        return cars.filter(item => {
            if (!item) return false;

            const matchesBrand = selectedBrand ? item.maker_model.toLowerCase().includes(selectedBrand.toLowerCase()) : true;
            const matchesSeater = selectedSeater ? item.seater === selectedSeater : true;
            const matchesFuelType = selectedFuelType ? item.fuel_type.toLowerCase() === selectedFuelType.toLowerCase() : true;
            const matchesTransType = selectedTransType ? item.transmission_type.toLowerCase() === selectedTransType.toLowerCase() : true;
            const matchesSearch = item.maker_model.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesBrand && matchesSeater && matchesFuelType && matchesSearch && matchesTransType;
        });
    }, [cars, searchQuery, selectedBrand, selectedSeater, selectedFuelType, selectedTransType]);

    const clearFilters = () => {
        setSelectedBrand('');
        setSelectedSeater('');
        setSelectedFuelType('');
        setSelectedTransType('');
        setSearchQuery('');
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img2, img3, img4, img5
    ];
    const imgalt = [
        "self drive car rental Innova", "cars for rent polo", "car rentals near me swift", "rent a car for self drive i20"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    const [filter, setFilter] = useState(false);
    function handleFilter() {
        if (filter) {
            setFilter(false);
        }
        else {
            setFilter(true);
        }
    }
    const blockd = "block";
    const hiddend = "hidden";
    return (
        <div className="produvt-page flex flex-col lg:flex-row gap-10 bg-slate-100 font-sans">
            <div className='lg:pt-12 pt-40 bg-white'>
                <div className="text-black-400 lg:px-20  text-black pl-10 pt-4">
                    <div>
                        <div className="image-container block lg:h-[140px] w-[180px] aspect-w-1 aspect-h-1  xs:h-[112px]">
                            <Image
                                // priority
                                src={images[currentIndex]}
                                alt={imgalt[currentIndex]}
                                title={imgalt[currentIndex]}
                                height={600}
                                width={600}
                                layout='responsive'
                                loading="lazy" />
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-col capitalize gap-6 mb-6 lg:pt-2 pt-2 w-64 hidden'>
                        <div className="flex gap-6">
                            <p onClick={handleFilter} className="text-black text-2xl font-bold">Filters</p>
                            <button className="text-xs opacity-85" onClick={clearFilters}>Clear all </button>
                        </div>
                        <div>
                            <label className='font-semibold text-lg w-full'>Brand</label>
                            <div className='flex flex-wrap lg:flex-col w-64 overflow-hidden capitalize gap-1'>
                                {uniqueBrands.map(brand => (
                                    <label key={brand} className='flex items-center flex-wrap lg:w-full'>
                                        <input
                                            type='checkbox'
                                            name='brand'
                                            value={brand}
                                            checked={selectedBrand === brand}
                                            onChange={() => setSelectedBrand(brand)}
                                            className='mr-2'
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>

                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold text-lg w-full'>Seater</label>
                                {uniqueSeaters.map(seater => (
                                    <label key={seater} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            name='seater'
                                            value={seater}
                                            checked={selectedSeater === seater}
                                            onChange={() => setSelectedSeater(seater)}
                                            className='mr-2'
                                        />
                                        {seater}
                                    </label>
                                ))}
                            </div>
                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold text-lg w-full'>Fuel Type</label>
                                {uniqueFuelTypes.map(fuelType => (
                                    <label key={fuelType} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            name='fuelType'
                                            value={fuelType}
                                            checked={selectedFuelType === fuelType}
                                            onChange={() => setSelectedFuelType(fuelType)}
                                            className='mr-2'
                                        />
                                        {fuelType}
                                    </label>
                                ))}
                            </div>
                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold text-lg w-full'>Transmission Type</label>
                                {uniqueTrasmission.map(TransType => (
                                    <label key={TransType} className='flex items-center'>
                                        <input
                                            type='checkbox'
                                            name='TransType'
                                            value={TransType}
                                            checked={selectedTransType === TransType}
                                            onChange={() => setSelectedTransType(TransType)}
                                            className='mr-2'
                                        />
                                        {TransType}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col capitalize gap-6 mb-6 lg:pt-2 pt-2 w-64 lg:hidden`}>
                        <div className="flex gap-6">
                            <p onClick={handleFilter} className="text-black text-lg font-bold flex gap-2 items-center border-2 border-orange-400 p-2 rounded-md"><span><FaExchangeAlt /></span><span>Filters</span> </p>
                            <button className={`${filter ? blockd : hiddend} text-xs opacity-85`} onClick={clearFilters}>Clear all </button>
                        </div>
                        <div className={`${filter ? blockd : hiddend} text-sm flex flex-col gap-2`}>
                            <div className='flex flex-wrap lg:flex-col gap-2 w-64 overflow-hidden capitalize'>
                                <label className='font-semibold  w-full'>Brand</label>
                                {uniqueBrands.map(brand => (
                                    <label key={brand} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                        <input
                                            type='checkbox'
                                            name='brand'
                                            value={brand}
                                            checked={selectedBrand === brand}
                                            onChange={() => setSelectedBrand(brand)}
                                            className='mr-2'
                                        />
                                        {brand}
                                    </label>
                                ))}
                            </div>

                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold  w-full'>Seater</label>
                                {uniqueSeaters.map(seater => (
                                    <label key={seater} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                        <input
                                            type='checkbox'
                                            name='seater'
                                            value={seater}
                                            checked={selectedSeater === seater}
                                            onChange={() => setSelectedSeater(seater)}
                                            className='mr-2'
                                        />
                                        {seater}
                                    </label>
                                ))}
                            </div>
                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold  w-full'>Fuel Type</label>
                                {uniqueFuelTypes.map(fuelType => (
                                    <label key={fuelType} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                        <input
                                            type='checkbox'
                                            name='fuelType'
                                            value={fuelType}
                                            checked={selectedFuelType === fuelType}
                                            onChange={() => setSelectedFuelType(fuelType)}
                                            className='mr-2'
                                        />
                                        {fuelType}
                                    </label>
                                ))}
                            </div>
                            <div className='flex lg:flex-col flex-wrap gap-2'>
                                <label className='font-semibold w-full'>Transmission Type</label>
                                {uniqueTrasmission.map(TransType => (
                                    <label key={TransType} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                        <input
                                            type='checkbox'
                                            name='TransType'
                                            value={TransType}
                                            checked={selectedTransType === TransType}
                                            onChange={() => setSelectedTransType(TransType)}
                                            className='mr-2'
                                        />
                                        {TransType}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full'>
                <h2 id='explore' className="px-3 font-bold text-2xl pt-8 text-blue-950 mb-2 lg:text-5xl lg:mb-9 text-center">Explore Self Drive
                    Car Rentals</h2>
                <div className='mb-9 lg:mb-16 flex flex-grow items-center justify-center'>
                    <input
                        placeholder='Search for the cars'
                        className='placeholder-black text-black px-4 py-3 rounded-md w-full max-w-56 md:max-w-96 lg:max-w-2xl'
                        type='search'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
                </div>
                <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-x-8 gap-y-8 flex flex-col gap-2 items-center justify-center lg:max-w-7xl py-4">
                    {filteredData?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="bg-white rounded-md  shadow-lg  flex flex-col  xs:w-[100%] md:w-72 h-[530px] lg:hover:scale-105">
                                <div className="relative h-[530px] rounded-md">
                                    <div className="relative z-20 bg-gradient-to-b from-black opacity-90 bottom rounded-md">
                                        {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                                        <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                                            <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 '>{item?.maker_model.toLowerCase()}</p>
                                            {/* <span className='p-1 font-bold bg-[#8C52FF] rounded-bl-md  z-50 font-manrope text-sm '>₹{item?.price_24_hours * 24}/day</span> */}
                                            <p className='flex justify-center items-center p-1 font-bold z-50 text-sm bg-white text-blue-700 rounded-md '> <span></span><span>{item?.address_area_name}</span></p>
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
                                        autoplay={false}
                                        className="relative bottom-[4.5rem] rounded-md"
                                    >
                                        <div onClick={() => {
                                            // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image className='h-[498px] rounded-md' width={1000} height={1000} src={replaceText(item?.car_image_car_left_view)}></Image>
                                        </div>
                                        <div onClick={() => {
                                            // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image className='h-[498px]' width={1000} height={1000} src={replaceText(item?.car_image_back_inner)}></Image>
                                        </div>
                                        <div onClick={() => {
                                            // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image className='h-[498px]' width={1000} height={1000} src={replaceText(item?.car_image_car_right_view)}></Image>
                                        </div>
                                        <div onClick={() => {
                                            // router.push(`/${item.farm_name.toLowerCase().replace(/ /g, "-")}`)
                                        }}>
                                            <Image className='h-[498px]' width={1000} height={1000} src={replaceText(item?.car_image_car_right_view)}></Image>
                                        </div>
                                    </Slider>
                                    <div className="relative z-20 bottom-[12.5rem] bg-gradient-to-t from-black opacity-90">
                                        {/* <p className='p-1 font-bold font-manrope text-3xl '>{item?.maker_model}</p> */}
                                        <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                                            <p className='font-bold text-lg'>Book Now</p>
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

                                    <div className="z-20 relative flex justify-between  text-black bottom-9">
                                        <ul className="text-black flex w-full justify-between">
                                            <li className="bg-green-500 w-full p-2  text-center text-black rounded-bl-md">
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
                                            <li className="bg-blue-500 w-full p-2 text-black rounded-br-md">
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
}
export async function getStaticProps() {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
    const items = await response.json();
    const cars = items?.data?.results
    return {
        props: {
            cars
        },
    };
}