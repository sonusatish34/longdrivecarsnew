import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import CarProducts from './components/CarProducts';
const DynCallBackForm = dynamic(() => import('./components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('./components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('./components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('./components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('./components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('./components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('./components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Layout from './components/Layout/Layout';
const PriceList = dynamic(() => import('./components/PriceList/PriceList'), {
    ssr: false, // Optionally disable SSR for this component
});
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import bang from './images/mysore.png'
import hyd from './images/hyderabad-charminar.png'
import wrg from './images/warangal.png'
import mys from './images/mysore.webp'
import viz from './images/vizag.webp'
import Loading from './components/Loading';
export default function Place({ cars, canonicalUrl }) {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=hyderabad`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData2(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, []);

    const [selectedLocation, setSelectedLocation] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]);

    const handleLocation = (location) => {
        if (location === 'hyderabad') {
            setSelectedLocation('hyderabad');
        } else if (location === 'bangalore') {
            router.push('/bangalore');
        }
        else if (location === 'warangal') {
            router.push('/warangal');
        }
        else if (location === 'mysore') {
            router.push('/mysore');
        }
        else if (location === 'vizag') {
            router.push('/vizag');
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 4000);

        return () => clearTimeout(timer); // Clean up timer
    }, []);

    return (
        <div>
            <Head>
                <title>No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad</title>
                <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="No Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
                <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
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
            {loading && <Loading />}

            {(!selectedLocation) && (
                <div>
                    {/* <p>hiii</p> */}
                    <div className='w-full flex justify-between items-center gap-3 lg:px-14 xl:px-16 px-2'>
                        <div className='xl:w-[86%] w-[60%] '>
                            <Marquee speed={75} >
                                <div className={'flex p-1 text-xs gap-24 lg:text-lg'}>
                                    {['No Deposit', 'Unlimited Kilometers', 'Neatly Washed Car', 'Choose your Favourite Color Car', 'Check Original Car Photos & Book', 'Choose Your Own Hours 36hr, 50hr', 'Car Starts ₹1488/day, min 24hrs', 'Any Problem 24/7 Service', 'Lowest Price Challenge', 'Baleno, Dzire 1776 per day', 'Just pay 10% Advance & book'].map((text, index) => (
                                        <p key={index} className='flex items-center gap-1 justify-center'>
                                            <TbPointFilled /><span>{text}</span>
                                        </p>
                                    ))}
                                </div>
                            </Marquee>
                        </div>
                        <ul className='flex lg:gap-6 gap-4 border-l-2 border-l-black lg:w-1/5 lg:pl-4 px-1'>
                            {[
                                { href: 'https://www.facebook.com/selfdrivecarsbylongdrivecars/', icon: <FaFacebook /> },
                                { href: 'https://www.instagram.com/longdrivecars_official/', icon: <FaInstagram /> },
                                { href: 'https://in.linkedin.com/company/long-drive-cars', icon: <SiLinkedin /> },
                                { href: 'https://www.youtube.com/@longdrivecars_official', icon: <FaYoutube /> },
                            ].map(({ href, icon }, index) => (
                                <li key={index}>
                                    <Link href={href} target='_blank'>
                                        {React.cloneElement(icon, { className: 'hover:text-blue-500 cursor-pointer lg:size-6' })}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center lg:gap-6 gap-3 border-4 border-purple-200'>
                        <Image
                            className="lg:w-32 w-14"
                            src="/logos/logo3.webp"
                            alt="Long Drive Cars"
                            width={500}
                            height={500}
                        // placeholder="blur"
                        />
                        <p className='font-semibold text-[#0456e8] text-xl xl:text-4xl lg:text-3xl lg:w-[384px] w-48 popins-text'>Long Drive Cars</p>
                    </div>
                    {showPopup &&
                        <div className='flex justify-center items-center flex-col lg:pt-32 py-10'>
                            <div className='flex justify-center items-center  flex-col gap-4 lg:text-3xl bg- opacity-90 bg-slate-200 w-fit h-fit lg:w-2/3 p-8 rounded-md animate-fadeIn'>
                                <p className='pb-3 lg:text-4xl font-semibold'>Please Select Your location</p>
                                <div className='flex lg:flex-row flex-wrap justify-center flex-col gap-8 lg:px-36'>
                                    <div className='flex gap-6 flex-col lg:flex-row'>
                                        <button onClick={() => handleLocation('hyderabad')} className='lg:hover:scale-105 p-2  border-2 border-[#0456e8]  rounded-md flex items-center gap-2 w-48 h-16 lg:w-64'><span><Image
                                            className="w-8 h-8 relative bottom-1"
                                            src={hyd}
                                            alt="Long Drive Cars"
                                            width={110}
                                            height={110}
                                        // placeholder="blur"
                                        /></span><span className='text-[#0456e8]'>Hyderabad</span></button>
                                        <button onClick={() => handleLocation('bangalore')} className='lg:hover:scale-105 p-2  border-2 border-[#0456e8] rounded-md flex items-center gap-2 w-48 lg:w-64 h-16'><span><Image
                                            className="w-12 h-12 relative bottom-1"
                                            src={bang}
                                            alt="Long Drive Cars"
                                            width={110}
                                            height={110}
                                        // placeholder="blur"
                                        /></span><span className='text-[#0456e8]'>Bangalore</span></button>
                                        <button onClick={() => handleLocation('warangal')} className='lg:hover:scale-105 p-2  border-2 border-[#0456e8]  rounded-md flex items-center gap-2 w-48 lg:w-64 h-16'><span><Image
                                            className="w-8 h-8 relative bottom-1"
                                            src={wrg}
                                            alt="Long Drive Cars"
                                            width={110}
                                            height={110}
                                        // placeholder="blur"
                                        /></span><span className='text-[#0456e8]'>Warangal</span></button>
                                    </div>
                                    <div className='flex gap-6 flex-col lg:flex-row'>
                                        <button onClick={() => handleLocation('vizag')} className='lg:hover:scale-105 p-2  border-2 border-[#0456e8] rounded-md flex items-center gap-2 w-48 lg:w-64 h-16'><span><Image
                                            className="w-10 h-10 relative bottom-1"
                                            src={viz}
                                            alt="Long Drive Cars"
                                            width={110}
                                            height={110}
                                        // placeholder="blur"
                                        /></span><span className='text-[#0456e8]'>Vizag</span></button>
                                        <button onClick={() => handleLocation('mysore')} className='lg:hover:scale-105 p-2  border-2 border-[#0456e8] rounded-md flex items-center gap-2 w-48 lg:w-64 h-16'><span><Image
                                            className="w-12 h-12 relative bottom-1"
                                            src={mys}
                                            alt="Long Drive Cars"
                                            width={110}
                                            height={110}
                                        // placeholder="blur"
                                        /></span><span className='text-[#0456e8]'>Mysore</span></button>
                                    </div>
                                </div>
                                {/* <Link href={'/warangal'}> warangal</Link> */}
                            </div>
                        </div>
                    }
                    {!showPopup && <DynImageChange />}

                </div>

            )}
            {selectedLocation === 'hyderabad' && (
                <Layout locname={''} phoneno={"9000-888-922"}>
                    <Head>
                        <title>No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad</title>
                        <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta property="og:title" content="No Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
                        <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
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
                    <div className='pt-32 lg:pt-0'>
                        {/* <DynImageChange /> */}
                        <div>
                            <DynNearByApi city={''} />
                        </div>
                        <CarProducts data={cars} branch={""} phoneno={'9000888922'} count={7} />
                        <div><DynNearYou /></div>
                        <FeaturedCars data={carData2} branch={""} />
                        <DynCallBackForm />
                        <DynWhyChooseUs />
                        <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                            <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                            <DynamicFaqComponent />
                        </div>
                        <GetInTouch phoneno={'9000888922'} />
                        <PriceList city={'hyd'} />
                    </div>
                </Layout>
            )}

        </div>
    );
}



export async function getServerSideProps({ req }) {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=hyderabad');
    const items = await response.json();
    const cars = items?.data?.results;
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? 'https://www.longdrivecars.in'
        : 'https://www.longdrivecars.com';

    return {
        props: {
            cars,
            canonicalUrl,
        },
    };
}