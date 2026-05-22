import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import PopUp from '../components/PopUp';
import CarProducts from '../components/CarProducts';
import Header from '../components/Hamburger/HamburgerMenu';
// import { useEffect } from 'react';
const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Layout from '../components/Layout/Layout';
import PriceList from '../components/PriceList/PriceList';
import Head from 'next/head';
import { decryptFernetData } from '@/utils/crypto';

export default function Place({ cars, canonicalUrl }) {

    return (
        <div>
            <Layout locname={'vizag'} phoneno={"9000-478-478"}>
                <Head>
                    <title>Self Drive Rentals in Vizag Available</title>
                    <meta name="description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Self Drive Rentals in Vizag Available" />
                    <meta property="og:description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <CarProducts data={cars} branch={"vizag"} wspno={'9000478478'} phoneno={'9000478478'} count={7} />
                    <DynImageChange locname={'Vizag'} />
                    <div>
                        <DynNearByApi city={'vizag'} />
                    </div>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"vizag"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000478478'} />
                    <PriceList city={'hyd'} />
                    <PopUp />
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const response = await fetch('https://api.longdrivecars.com/l-site-dc/cars-info?location=hyderabad');
    const items = await response.json();
    const decryptedCars = decryptFernetData(items?.data?.results, process.env.LDC_SECRET_KEY)
        const cars = decryptedCars;
    // const cars = items?.data?.results;

    const filteredCars = cars?.map(car => ({
        maker_model: car.maker_model,
        price_24_hours: car.price_24_hours,
        car_image_front_view: car.car_image_front_view_duplicate,
        car_image_back_view: car.car_image_back_view_duplicate,
        car_image_car_left_view: car.car_image_car_left_view_duplicate,
        car_image_reading_view: car.car_image_reading_view_duplicate,
        fuel_type: car.fuel_type,
        transmission_type: car.transmission_type,
        seater: car.seater,
    }));

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in/vizag'
        : 'https://www.longdrivecars.com/vizag';

    return {
        props: {
            cars: filteredCars,  // Return only the filtered data
            canonicalUrl,
        },
    };
}