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
import Head from 'next/head';
import { getCarsByLocation } from '@/utils/serverCars';

export default function Place({ cars, canonicalUrl,prices }) {

    return (
        <div>
            <Layout locname={'vizag'} phoneno={"9000-478-478"}>
                <Head>
                    <title>Long Drive Cars App | Self Drive Car Rentals in Vizag Available</title>
                    <meta name="description" content="Book Self Drive Cars in Vizag with the Long Drive Cars app. Enjoy flexible rental plans, unlimited kilometre options, a zero deposit option, and convenient car rentals for city trips and weekend getaways." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Self Drive Rentals in Vizag Available" />
                    <meta property="og:description" content="Book Self Drive Cars in Vizag with the Long Drive Cars app. Enjoy flexible rental plans, unlimited kilometre options, a zero deposit option, and convenient car rentals for city trips and weekend getaways." />
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
                    {/* <PriceList city={'hyd'} prices={prices} /> */}
                    <PopUp />
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    let cars = [];
    try {
        cars = await getCarsByLocation('vizag');
    } catch (error) {
        console.error('Unable to load Vizag car inventory:', error);
    }

    return {
        props: {
            cars,
            canonicalUrl: 'https://www.longdrivecars.com/vizag',
        },
    };
}