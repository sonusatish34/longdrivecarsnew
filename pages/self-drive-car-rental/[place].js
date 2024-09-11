import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import StaticData from '../components/StaticData/StaticData'
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import CarProducts from '../components/CarProducts';

import dynamic from 'next/dynamic';

const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'

export default function place() {
    const [carData, setCarData] = useState(null)
    const router = useRouter();
    const { place } = router.query;

    function replaceText(str) {
        let newstr = str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
        return newstr
    }

    useEffect(() => {
        async function fetchCarDetails() {

            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=${place}`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData(cars)
            } catch (error) {
            } finally {

            }
        }

        if (place) {
            fetchCarDetails();
        }
    }, [place]);
    return (
        <div className="min-h-screen">
            <DynImageChange />
            <div>
                <DynNearByApi />
            </div>
            <CarProducts data={carData} place={place}/>
            <div><DynNearYou /></div>
            <FeaturedCars data={carData}/>
            <DynCallBackForm />
            <DynWhyChooseUs />
            <div className='bg-white  rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                <h2 className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</h2>
                <DynamicFaqComponent />
            </div>
            <GetInTouch />
        </div>
    )
}

