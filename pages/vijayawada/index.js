import React from 'react';
import dynamic from 'next/dynamic';

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
import PopUp from '../components/PopUp';
import { getCarsByLocation } from '@/utils/serverCars';

export default function Place({ cars, canonicalUrl, prices }) {
    return (
        <div>
            <Layout locname={'vijayawada'} phoneno={"96666-99583"}>
                <Head>
                    <title>Self Drive Car Rentals Vijayawada</title>
                    <meta id="meta-desc" name="description" content="Enjoy flexible car rental in Vijayawada. Choose self drive cars with quick booking and excellent service.y" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Self Drive Car Rentals Vijayawada" />
                    <meta property="og:description" content="Enjoy flexible car rental in Vijayawada. Choose self drive cars with quick booking and excellent service.y" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${canonicalUrl}`} />
                    <meta property="og:image" content="https://www.longdrivecars.com/logos/logo3.webp" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <CarProducts data={cars} branch={"vijayawada"} wspno={'9666699583'} phoneno={'9666699583'} count={7} />
                    <DynImageChange locname={'Vijayawada'} />
                    <div>
                        <DynNearByApi city={'vijayawada'} />
                    </div>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"vijayawada"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9666699583'} />
                    {/* <PriceList city={'hyd'} prices={prices}/> */}
                    <PopUp />
                </div>
            </Layout>
        </div>
    );
}



export async function getServerSideProps() {
    let cars = [];
    try {
        cars = await getCarsByLocation('vijayawada');
    } catch (error) {
        console.error('Unable to load Vijayawada car inventory:', error);
    }

    return {
        props: {
            cars,
            canonicalUrl: 'https://www.longdrivecars.com/vijayawada',
        },
    };
}