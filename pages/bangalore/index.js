import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import CarProducts from '../components/CarProducts';

const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import BangaloreLayout from '../components/Layout/BangaloreLayout';
import PriceList from '../components/PriceList/PriceList';
import Head from 'next/head';

export default function Place({ cars, canonicalUrl }) {
    const [carData, setCarData] = useState(null);
    return (
        <div>
            <BangaloreLayout locname={'bangalore'} phoneno={"988-6666-883"}>
                <Head>
                    <title>No Deposit & Unlimited Km - Self-Drive Car Rentals In Bangalore</title>
                    <meta name="description" content="Self-drive cars start at 77/hr, We offer Self Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="No Deposit & Unlimited km - Self-Drive Car Rentals In Bangalore" />
                    <meta property="og:description" content="Self-drive cars start at 77/hr, We offer Self Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹77/hr, Baleno @ ₹83/hr, Ertiga @ ₹116/hr, Swift @ ₹77/hr, Thar @ ₹208/hr." />

                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=AW-16605564791"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'AW-16605564791');
`,
                        }}
                    ></script>


                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className="min-h-screen">
                    <DynImageChange locname={'bangalore'} />
                    <div>
                        <DynNearByApi city={'bangalore'} />
                    </div>
                    <CarProducts data={cars} branch={"bangalore"} phoneno={'9886666883'} count={6} />
                    <div><DynNearYou /></div>
                    <FeaturedCars data={cars} branch={"bangalore"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs locname={'bangalore'} />
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent city={'bangalore'} />
                    </div>
                    <GetInTouch city={'bangalore'} phoneno={'9886666883'} />
                    <PriceList city={'bangalore'} phoneno={'9886666883'} />
                </div>
            </BangaloreLayout>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=bangalore');
    const items = await response.json();
    const cars = items?.data?.results;
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in/bangalore'
        : 'https://www.longdrivecars.com/bangalore';

    return {
        props: {
            cars,
            canonicalUrl,
        },
    };
}