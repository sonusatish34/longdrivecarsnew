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
import Layout from './components/Layout/Layout';
import PriceList from './components/PriceList/PriceList';
import Head from 'next/head';
import PopUp from './components/PopUp';
import Image from 'next/image';
import { handleStoreRedirect } from '@/utils/redirectUtils';
import HeroBanner from './components/HeroBanner';

export default function Place({ cars, canonicalUrl, prices, res, decryptedCars, banners }) {
    const isIndiaSite = canonicalUrl?.includes('longdrivecars.in');
    const tt = banners.find(item => item.banner_title == 'hyderabad_banner_10')

    return (
        <div className="relative">
            {/* OVERLAY FOR .IN SITE ONLY */}
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
                    <title>Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans</title>
                    <meta id="meta-desc" name="Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans" />
                    <meta property="og:Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={`${canonicalUrl}`} />
                    <meta property="og:image" content="https://www.longdrivecars.com/logos/logo3.webp" />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={canonicalUrl} />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                name: "Long Drive Cars",
                                url: canonicalUrl,
                                telephone: "+919000478478",
                                areaServed: {
                                    "@type": "City",
                                    name: "Hyderabad",
                                },
                                hasLocation: [
                                    {
                                        "@type": "Place",
                                        name: "Long Drive Cars - Kukatpally",
                                        address: {
                                            "@type": "PostalAddress",
                                            addressLocality: "Kukatpally",
                                            addressRegion: "Hyderabad",
                                            addressCountry: "IN",
                                        },
                                    },
                                    {
                                        "@type": "Place",
                                        name: "Long Drive Cars - Dilsukhnagar",
                                        address: {
                                            "@type": "PostalAddress",
                                            addressLocality: "Dilsukhnagar",
                                            addressRegion: "Hyderabad",
                                            addressCountry: "IN",
                                        },
                                    },
                                    {
                                        "@type": "Place",
                                        name: "Long Drive Cars - Hitech City",
                                        address: {
                                            "@type": "PostalAddress",
                                            addressLocality: "Hitech City",
                                            addressRegion: "Hyderabad",
                                            addressCountry: "IN",
                                        },
                                    },
                                ],
                            }),
                        }}
                    />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <HeroBanner />
                    <section className="mx-auto max-w-7xl px-4 py-6 text-lg leading-9 text-gray-700">
                        <p>
                            <b>Long Drive Cars</b>  is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Booking needs one ID (Aadhaar or passport) plus a driving licence, and repeat customers need no documents. Cars start at ₹1084 per 24 hours with hourly, 120 km, 300 km and unlimited km plans, and every rental includes 24/7 breakdown help with a replacement car and free toll gates on national highways. Long Drive Cars operates across Hyderabad including Gachibowli, Madhapur, Manikonda, Ameerpet, Secunderabad, Begumpet, LB Nagar, Uppal, Shamshabad and Shamirpet. Contact: <b>9000-478-478</b> | <a className='underline' href='https://www.longdrivecars.com/'>longdrivecars.com</a>
                        </p>
                    </section>
                    <CarProducts banner={tt} data={cars} phoneno={'9000478478'} wspno={'9000478478'} count={7} />
                    <DynImageChange locname={'hyderabad'} />
                    <div>
                        <DynNearByApi banners={banners} />
                    </div>
                    {/* <div><DynNearYou /></div> */}
                    <FeaturedCars data={cars} branch={"hyderabad"} />
                    <DynCallBackForm />
                    <div className='bg-white rounded xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000478478'} wspno={'9000478478'} />
                    <PriceList city={'hyd'} prices={prices} />
                    <PopUp banner={tt} />
                </div>
            </Layout>
        </div>
    );
}

export const runtime = 'nodejs';

// ---------------- SERVER-SIDE CACHE SETUP ----------------
let cachedBannerPrices = null;
let lastBannerFetchTime = 0;
const BANNER_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in ms

async function getCachedBannerPrices(secretKey) {
    const now = Date.now();

    // Serve from server memory if still within TTL
    if (cachedBannerPrices && (now - lastBannerFetchTime < BANNER_CACHE_TTL)) {
        return cachedBannerPrices;
    }

    try {
        const priceRes = await fetch('https://api.longdrivecars.com/l-site-dc/banner-images');
        const priceData = await priceRes.json();
        const decryptedPrices = decryptFernetData(priceData?.results, secretKey);

        cachedBannerPrices = decryptedPrices || {};
        lastBannerFetchTime = now;

        return cachedBannerPrices;
    } catch (err) {
        console.error('Error fetching banner-images:', err);
        // Fall back to stale cache if available, else empty object
        return cachedBannerPrices || {};
    }
}

export async function getServerSideProps({ req }) {
    const SECRET_KEY = process.env.LDC_SECRET_KEY;

    // Run dynamic cars API and cached banner call in parallel
    const [response, finalPrices] = await Promise.all([
        fetch('https://api.longdrivecars.com/l-site-dc/cars-info?location=hyderabad'),
        getCachedBannerPrices(SECRET_KEY),
    ]);

    const result = await response.json();
    const decryptedCars = decryptFernetData(result?.data?.results, SECRET_KEY);
    // -------- PRICE API --------
    const priceRes = await fetch('https://api.longdrivecars.com/l-site-dc/hyd-prices');
    const priceData = await priceRes.json();
    const decryptedPrices = decryptFernetData(priceData?.results, SECRET_KEY);
    const finalPrices1 = decryptedPrices || {};
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
            prices: finalPrices1,
            banners: finalPrices,
            canonicalUrl,
        },
    };
}