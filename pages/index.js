import React from 'react';
import dynamic from 'next/dynamic';
import { decryptFernetData } from '../utils/crypto';
import CarProducts from './components/CarProducts';
const DynCallBackForm = dynamic(() => import('./components/CallBackForm/CallBackForm'), { ssr: false });
const DynNearYou = dynamic(() => import('./components/NearYou/NearYou'), { ssr: false });
const DynImageChange = dynamic(() => import('./components/ImageChange/ImageChange'), { ssr: false });
const DynNearByApi = dynamic(() => import('./components/NearByApi/NearByApi'), { ssr: false });
const GetInTouch = dynamic(() => import('./components/GetInTouch/GetInTouch'), { ssr: false });
const FeaturedCars = dynamic(() => import('./components/FeaturedCars/FeaturedCars'), { ssr: false });
const DynamicFaqComponent = dynamic(() => import('./components/FaqAccordian/FaqAccordian'), { ssr: false });
const DynWhyChooseUs = dynamic(() => import('./components/WhyChooseUs/WhyChooseUs'), { ssr: false });
import Layout from './components/Layout/Layout';
import PriceList from './components/PriceList/PriceList';
import Head from 'next/head';
import PopUp from './components/PopUp';
import Image from 'next/image';
import { handleStoreRedirect } from '@/utils/redirectUtils';
export default function Place({ cars, canonicalUrl, prices }) {
    // Check if we are on the .in domain
    const isIndiaSite = canonicalUrl.includes('.in');

    return (
        <div className="relative">
            {/* OVERLAY FOR .IN SITE */}
            {isIndiaSite && (
                <div
                    className="fixed inset-0 z-[9999] block lg:hidden overflow-hidden touch-none bg-[linear-gradient(to_bottom,#566FE6,#6F84EA,#FFFFFF)]"
                >
                    <div className="relative w-full h-[100dvh] flex items-center justify-center">
                        <Image
                            src="/ldcadd.webp"
                            alt="Special Offer"
                            fill
                            className="object-contain"
                            priority
                            onClick={handleStoreRedirect}
                        />
                    </div>
                </div>
            )}
            <Layout phoneno={"9000-478-478"}>
                <Head>
                    <title>No Deposit | Unlimited Kms - Cheapest Self Drive Cars Near U</title>
                    <meta id="meta-desc" name="description" content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="No Deposit | Unlimited Kms - Cheapest Self Drive Cars Near U" />
                    <meta property="og:description" content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${canonicalUrl}`} />
                    <meta property="og:image" content="https://www.longdrivecars.com/logos/logo3.webp" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <CarProducts data={cars} phoneno={'9000478478'} wspno={'9000478478'} count={7} />
                    <DynImageChange locname={'hyderabad'} />
                    <div>
                        <DynNearByApi />
                    </div>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"hyderabad"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000478478'} wspno={'9000478478'} />
                    <PriceList city={'hyd'} prices={prices} />
                    <PopUp />
                </div>
            </Layout>
        </div>
    );
}
export const runtime = 'nodejs'

export async function getServerSideProps({ req }) {
    // -------- CARS API --------
    const response = await fetch('https://api.longdrivecars.com/l-site-dc/cars-info?location=hyderabad');
    const result = await response.json();

    const SECRET_KEY = process.env.LDC_SECRET_KEY;
    const decryptedCars = decryptFernetData(result?.data?.results, SECRET_KEY);

    // -------- PRICE API --------
    const priceRes = await fetch('https://api.longdrivecars.com/l-site-dc/hyd-prices');
    const priceData = await priceRes.json();
    const decryptedPrices = decryptFernetData(priceData?.results, SECRET_KEY);
    const finalPrices = decryptedPrices || {};

    // -------- FILTER CARS --------
    const carModels = [
        'MARUTHI WAGON R', 'MARUTHI SWIFT', 'MARUTHI DZIRE', 'GRAND NIOS', 'MARUTHI BALENO',
        'HYUNDAI I20', 'HYUNDAI VENUE', 'KIA SONET', 'KIA SELTOS', 'KIA SONET SUNROOF',
        'SELTOS SUNROOF', 'MARUTHI ERTIGA', 'MAHINDRA THAR 2024 Diesel',
        'INNOVA CRYSTA Diesel', 'MAHINDRA XUV 700 Diesel'
    ];

    const filteredItems = decryptedCars
        ?.filter(car => carModels.includes(car.maker_model))
        .map(car => ({
            maker_model: car.maker_model,
            price_24_hours: car.price_24_hours,
            car_image_front_view_duplicate: car.car_image_front_view_duplicate,
            car_image_back_view_duplicate: car.car_image_back_view_duplicate,
            car_image_car_left_view_duplicate: car.car_image_car_left_view_duplicate,
            car_image_reading_view_duplicate: car.car_image_reading_view_duplicate,
            fuel_type: car.fuel_type,
            transmission_type: car.transmission_type,
            seater: car.seater,
            manufacture_date: car.manufacture_date
        })) || [];

    // -------- CANONICAL & DOMAIN CHECK --------
    const host = req.headers.host || "";
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in'
        : 'https://www.longdrivecars.com';

    return {
        props: {
            cars: filteredItems,
            prices: finalPrices,
            canonicalUrl,
        },
    };
}