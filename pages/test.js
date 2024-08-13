import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

const LocationFetcher = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState('');
  const [lat, setLat] = useState('');

  const replaceText = (str) => {
    return str?.replace('https://s3.ap-south-2.amazonaws.com/ld-prod-image-urls3', 'https://d10uth61hedy2t.cloudfront.net');
  };
  // const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const day = today.getDate() + 1;
  const daynum = today.getDate() + 2;
  console.log(daynum + 1, "daynum");

  const compldate = `${year}-${month}-${day}`
  // return `${year}-${month}-${day}`;
  const compldateend = `${year}-${month}-${daynum}`
  console.log(compldate, "compldate");
  console.log(compldateend, "compldateend");
  console.log(lat, "lat");
  console.log(lon, "lon");

  // };

  // console.log(getCurrentDate()); // Output: e.g., "2024-08-12"
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLon(longitude);
          setLocation({ latitude, longitude });
        },
        (err) => {
          setError(err.message);
          setLoading(false); // Set loading to false if there's an error
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false); // Set loading to false if geolocation is not supported
    }
  }, []);

  useEffect(() => {
    if (!location) return; // Exit early if location is not available

    const fetchData = async () => {
      setLoading(true); // Set loading to true before starting fetch
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      
      try {
        const response = await fetch(`https://api.longdrivecarz.in/user/home?lat=${lat}&long=${lon}&start_date=${compldate}%2000%3A00%3A00&end_date=${compldateend}%2000%3A00%3A00&no_of_days=1&index=0&limit=20`, requestOptions);
        const result = await response.json();
        const realdata = result?.data?.results;
        setData(realdata);
        console.log(response,"resp");
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
        
        
      }
    };
    console.log(lat,"lat");
    console.log(lon,"lon");
    
    fetchData();
  }, [location]);

  return (
    <div className='text-red-800 pt-60 lg:pt-48 flex flex-col lg:flex-row flex-wrap gap-12'>
      {loading && <div className="text-center py-4">
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
        </div></div>}
      {error && <p>Error: {error}</p>}
      {data?.map((item, index) => (
        <React.Fragment key={index}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:w-[400px] w-[97%] md:w-80 h-full">
            <div className="relative rounded-lg overflow-hidden cursor-pointer">
              <div className="relative lg:h-[533px] h-[333px]">
                <Image fill alt='cars' className="object-cover" src={replaceText(item?.car_image_car_right_view)}></Image>
              </div>
            </div>
            <div className="px-2 flex flex-col gap-4 p-1">
              <div className="flex items-baseline justify-between px-2">
                <div>
                  <Link href={`/${item.maker_model.toLowerCase()}`}>
                    {/* <p className="text-gray-700 font-medium text-sm lg:text-md opacity-75 font-Montserrat">Dozzy Farm House</p> */}
                  </Link>
                  <Link href={`/${item.maker_model.toLowerCase()}`}>
                    <p className="text-[#556EE6] font-semibold text-xl hover:text-red-600 w-fit">
                      {item.maker_model}
                    </p>
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <p>{item?.address_area_name}</p>
                </div>
              </div>
              <div className="font-normal text-sm">
                <div className="flex items-baseline justify-between px-2">
                  <p className="text-black">Mon-Thu</p>
                  <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p>
                </div>
                <div className="flex items-baseline justify-between px-2">
                  <p className="text-black">Fri-Sun</p>
                  <p className="text-[#556EE6]">₹ {item.price_24_hours} /Day</p>
                </div>
              </div>

              <div className="text-black flex justify-center font-semibold">
                For Booking
              </div>
              <div className="flex justify-between gap-1 text-white ">
                <ul className="text-black flex w-full justify-between gap-5">
                  <li className="bg-green-500 w-full p-2 rounded-bl-md text-center text-white border-[1px] border-black">
                    <Link
                      href="https://api.whatsapp.com/send?phone=+9111911162text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking."
                      target="_blank"
                    >
                      <p className="flex gap-1 text-sm justify-center">
                        <span>
                          <FaWhatsapp size={20} />
                        </span>{" "}
                        <span>Whatsapp</span>
                      </p>
                    </Link>
                  </li>
                  <li className="bg-blue-500 w-full p-2 rounded-br-md text-white border-[1px] border-black">
                    <Link href="tel:9111911162" target="_blank">
                      <p className="flex gap-1 text-sm justify-center">
                        <span>
                          <BiPhoneCall size={20} />
                        </span>{" "}
                        <span>Call Us</span>
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LocationFetcher;
