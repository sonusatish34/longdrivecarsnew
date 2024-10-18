// import Homepage from "./components/HomePage/Homepage";
// import Head from "next/head";
// import Layout from "./components/Layout/Layout";

// export default function Home({ cars,canonicalUrl }) {
//   return (
//     <div className="bg-white">
//       <Layout phoneno={'9000-478-478'}>
//         <Head>
//           <title>Zero Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad</title>
//           <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
//           <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
//           <link rel="canonical" href={canonicalUrl} />
//         </Head>
//         <Homepage data={cars} />
//       </Layout>

//     </div>
//   );
// }

// export async function getServerSideProps({req}) {
//   const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
//   const items = await response.json();
//   const cars = items?.data?.results;
//   const host = req.headers.host;
//   const canonicalUrl = host.includes('.in')
//     ? 'https://www.longdrivecars.in'
//     : 'https://www.longdrivecars.com';

//   return {
//     props: {
//       cars,
//       canonicalUrl,
//     },
//   };
// }
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import CarProducts from './components/CarProducts';
import Header from './components/Hamburger/HamburgerMenu';
// import { useEffect } from 'react';
const DynCallBackForm = dynamic(() => import('./components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('./components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('./components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('./components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('./components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('./components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('./components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Layout from './components/Layout/Layout';
import PriceList from './components/PriceList/PriceList';
import Head from 'next/head';
const DynamicPriceList = dynamic(() => import('./components/PriceList/PriceList'));
// const allowedKeywords = ['', 'bangalore', 'keyword3'];

export default function Place({cars,canonicalUrl}) {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=hyderabad`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData2(cars);
            } catch (error) {``
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, []);

    return (
        <div>
            <Layout locname={''} phoneno={"9000-777-665"}>
                <Head>
                    <title>Zero Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad</title>
                    <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
                    <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=AW-16731119855"
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16731119855');
                    `,
                        }}
                    ></script>
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div >
                    <DynImageChange />
                    <div>
                        <DynNearByApi city={''} />
                    </div>
                    <CarProducts data={cars} branch={""} phoneno={'9000777665'} count={7}/>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={carData2} branch={""} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000777665'} />
                    <PriceList city={'hyd'} />
                </div>
            </Layout>
        </div>
    );
}



export async function getServerSideProps({req}) {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=hyderabad');
    const items = await response.json();
    const cars = items?.data?.results;
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
      ? 'https://www.longdrivecars.in/hyderabad'
      : 'https://www.longdrivecars.com/hyderabad';
  
    return {
      props: {
        cars,
        canonicalUrl,
      },
    };
  }