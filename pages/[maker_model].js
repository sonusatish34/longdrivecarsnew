import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { Ri24HoursLine } from "react-icons/ri";
import { GiTowTruck } from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi2";
import Head from 'next/head';
const CarDetails = () => {
  const [caritem, setCarItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { maker_model } = router.query;
  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true);

      try {
        const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=Hyderabad');
        const items = await response.json();
        const cars = items?.data?.results;
        const car = cars?.find(i => i?.maker_model.toLowerCase() === maker_model?.toLowerCase());

        setCarItem(car);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    if (maker_model) {
      fetchCarDetails();
    }
  }, [maker_model]);
  const replaceText = (str) => {
    return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
};
  return (
    <div className='bg-white text-black'>
      <Head>
        <title>Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad</title>
        <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zero Deposit & Unlimited km - Self-Drive Car Rentals In Hyderabad" />
        <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & Zero deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        
      </Head>
      <div className=' lg:px-2 mx-auto lg:mx-36 xl:mx-16 md:p-28 lg:p-4 xs:px-5 sm:pt-44 px-2'>
        <div className='flex flex-col xs:mt-2 md:mt-20 lg:mt-2 md:flex-row p-2 border-2 border-orange-400 rounded-md'>
          {loading && <div>Loading...</div>}
          {!loading && (
            <div className="relative md:w-2/3 w-full p-1 xl:pt-6 xs:pt-8 border-1 border-gray-300 h-[434px]">
              <Image
                src={replaceText(caritem?.car_image_car_right_view)}
                alt="Car"
                style={{ objectFit: "cover" }}
                className="relative"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          )}
          <div className='flex flex-col justify-evenly'>
            <div>
              <h2 className='p-1 font-bold font-manrope text-3xl lg:pl-20'>{customData[maker_model?.toLowerCase()]?.id}</h2>
              <h2 className='p-1 font-bold md:text-3xl text-xl lg:pl-20'><span className='text-lg'>Starting from</span><span className='text-blue-400'> ₹ {caritem?.price_24_hours * 24}/day</span></h2>
            </div>
            <div className='pt-6 flex flex-col xs:hidden lg:flex lg:pl-20'>
              <h2 className='font-semibold text-2xl font-manrope'>Contact us by</h2>
              <div className='flex justify-start lg:gap-5 xl:gap-8 xl:pt-4 pb-2 xs:gap-6 xs:pt-2 text-white'>
                <button className='bg-green-500 rounded-full p-2 lg:p-3'>
                  <Link href="https://api.whatsapp.com/send?phone=+919000478478&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                    <p className=' flex items-center gap-1 text-xl'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-full p-2 lg:p-3 lg:px-7'>
                  <Link href="tel:9666677405" target='_blank'>
                    <p className=' flex items-center gap-1 text-xl'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-6 lg:hidden'>
          <h2 className='font-semibold text-2xl font-manrope'>Contact us by</h2>
          <div className='flex justify-start lg:gap-5 xl:gap-8 xl:pt-4 pb-2 xs:gap-6 xs:pt-2 text-white'>
            <button className='bg-green-500 rounded-full p-2 lg:p-3'>
              <Link href="https://api.whatsapp.com/send?phone=+919000478478&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking." target='_blank'>
                <p className=' flex items-center gap-1 text-xl'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2 lg:p-3 lg:px-7'>
              <Link href="tel:9000478478" target='_blank'>
                <p className=' flex items-center gap-1 text-xl'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
              </Link>
            </button>
          </div>
        </div>
        <div className='lg:w-3/5'>
          <div className="grid grid-cols-2 gap-2 lg:pt-12 xl:pt-8 pt-4 text-xs
                     font-semibold lg:text-base xs: lg:w-full">
            <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
              <HiCurrencyRupee className="bg-orange-200 rounded-md p-1" size={40} />
              <p className="ml-2">Zero Deposit</p>
            </div>
            <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
              <GiTowTruck className="bg-orange-200 rounded px-[4px]" size={40} />
              <p className=" ml-2">24/7 Breakdown Service</p>
            </div>
            <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
              <SlSpeedometer className="bg-orange-200 rounded-md p-1" size={40} />
              <p className=" ml-2">Unlimited Kilometers</p>
            </div>
            <div className="flex items-center gap-1 p-2 bg-[#ffffff]  border-[1px] border-black rounded-md">
              <Ri24HoursLine className="bg-orange-200 rounded-md p-1" size={40} />
              <p className=" ml-2 mt-1">Choose Your Own Hours</p>
            </div>
          </div>
        </div>
        <div className='overview pt-10'>
          <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-4 font-manrope'>Car Overview</h2>
          <ul className='my-2 flex flex-wrap pb-4'>
            <li className='w-32 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2   '>
              <BsFuelPump size={30} className='text-green-700' />
              <p className='font text-sm'>Fuel Type</p>
              <p className='font-bold text-lg'>{caritem?.fuel_type}</p>
            </li>
            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <PiCarFill size={30} className={`text-${caritem?.vehicle_color.toLowerCase()}-400`} />
              <p className='font text-sm'>Vehicle Color</p>
              <p className='font-bold text-lg'>{caritem?.vehicle_color}</p>
            </li>
            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <MdOutlineAirlineSeatReclineExtra size={30} className='text-amber-900' />
              <p className='font- text-sm'>Seater</p>
              <p className='font-bold text-lg'>{caritem?.seater}</p>
            </li>
            <li className='w-32 flex flex-col justify-center items-center gap-2 border-[1px] border-gray-100 py-2   '>
              <TbManualGearbox size={30} className='text-yellow-500' />
              <p className='font- text-sm'>Transmission</p>
              <p className='font-bold text-lg'>{caritem?.transmission_type}</p>
            </li>
          </ul>
        </div>
        <h2 className='font-bold text-2xl border-l-2 border-red-900 mb-3 mt-4 font-manrope' >Description</h2>
        <p className='font-light p-1 text-[12px] lg:text-[14px] leading-6 font-sans'>
          {customData[maker_model?.toLowerCase()]?.desc}
        </p>

        <h2 className='font-semibold text-xl mt-4 font-dmsans py-3'>Why Choose {customData[maker_model?.toLowerCase()]?.id} from Long Drive Cars Rental Hyderabad</h2>
        <p className='font-light p-1 leading-6 text-[12px] lg:text-[14px] font-sans pb-8'>
          {customData[maker_model?.toLowerCase()]?.subdesc}
        </p>
      </div>
    </div>
  );
};

export default CarDetails;

