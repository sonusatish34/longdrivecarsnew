import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import { FaAppStore } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { handleStoreRedirect } from '../../../utils/redirectUtils';

import ldcqr from '../../images/ldcqr.png'
import { trackEvent } from "@/utils/trackEvent";
const LocationFetcher = ({ phoneno, locname, wspno }) => {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const replaceText = (str) => {
    return str?.includes("cdn")
      ? str
      : str?.replace("https://ldcars.blr1.", "https://ldcars.blr1.cdn.");
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const compldate = formatDate(tomorrow);
  const compldateend = formatDate(dayAfterTomorrow);

  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLat(latitude);
            setLon(longitude);
            setLocation({ latitude, longitude });
            setError(null);
          },
          (err) => {
            setError(err.message);
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    fetchLocation();
  }, []); // Fetch location on mount

  useEffect(() => {
    if (!location) return;

    const fetchData = async () => {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          `https://api.longdrivecars.com/user/updated-home?lat=${lat}&long=${lon}&start_date=${compldate}%2000%3A00%3A00&end_date=${compldateend}%2000%3A00%3A00&no_of_days=1&color=Marron,Blue,Grey,Red,Green,Black,Orange&index=0&limit=20`,
          requestOptions
        );
        const result = await response.json();
        const realdata = result?.data?.results;
        setData(realdata);
      } catch (error) {
        setError(error.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location, lat, lon]);
  const getOrderedImages = (attributes) => {
    const imageMap = {};
    attributes.forEach((attr) => {
      imageMap[attr.attribute_name] = attr.car_image_duplicate_copy;
    });

    return [
      imageMap["car_image_front_view"],
      imageMap["car_image_car_right_view"],
      imageMap["car_image_back_view"],
      imageMap["car_image_reading_view"]
    ];
  };



  return (
    <div>
      <div className="pt-32 lg:py-8 flex flex-col lg:flex-row gap-12">
        {loading && (
          <div className="text-center py-4">
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
              <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
            </div>
          </div>
        )}
        {error && (
          <div className="lg:pl-12">
            <div className="bg-red-500 text-white w-fit py-4 px-2 mt-11 mx-3 rounded-md ">
              <p className="underline">{error}</p>
              <p className="pt-2">
                To enable location services, go to your settings and allow
                location access your browser.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white">
          {!error && (
            <p className="text-center py-5 text-xl font-bold text-black lg:text-3xl lg:pb-8">
              Explore Cars Near You in 20 Kms
            </p>
          )}
          <div className="flex flex-col gap-x-8 gap-y-12 lg:flex-wrap lg:flex-row lg:pl-36">
            {data?.map((item, index) => (
              <React.Fragment key={index}>
                {
                  <div className="lg:rounded-md flex flex-col w-full md:w-72 first-line:h-[555px]">
                    <div className="relative lg:rounded-md h-[445px]">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        autoplay={false}
                        pagination={false}
                        navigation={false}
                        className="relative lg:rounded-md h-[440px]"
                      >
                        {getOrderedImages(item?.attributes).map((img, i) => (
                          <SwiperSlide key={i}>
                            <Link onClick={()=>{trackEvent({ eventName: 'ViewContent', customData: { content_name: `${window.location.href}/car-rental/${item.maker_model.toLowerCase().replace(/ /g, "-")}` } })}} href={`/car-rental/${item?.maker_model?.toLowerCase().replace(/ /g, "-")}`}>
                              <div className="relative w-full h-[440px] rounded-md overflow-hidden bg-gray-200">
                                <Image
                                  alt={`${item?.maker_model?.toLowerCase()} view ${i + 1}`}
                                  src={replaceText(img)}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 412px"
                                  priority={i === 0}
                                  loading={i === 0 ? "eager" : "lazy"}
                                  fetchPriority={i === 0 ? "high" : "low"}
                                  className="object-cover object-center"
                                />
                              </div>
                            </Link>
                          </SwiperSlide>

                        ))}
                      </Swiper>

                      {/* Top gradient + car name */}
                      <div className="relative h-20 z-20 bg-gradient-to-b from-black opacity-90 lg:rounded-md bottom-[27.48rem]">
                        <div className="flex flex-col gap-2 items-end pt-4 pr-1">
                          <p className="relative bottom-3 capitalize p-1 text-white rounded-md font-manrope text-xs mxs:text-base pt-2">
                            {item?.maker_model.toLowerCase()}
                          </p>
                        </div>
                      </div>

                      {/* Bottom info + price */}
                      <div className="relative z-20 bottom-[12rem] bg-gradient-to-t from-black opacity-90 text-white">
                        <div className="flex gap-x-8 mxs:gap-x-16 items-center justify-center pt-5 pb-2">
                          <p className="text-[15px]">Book Now</p>
                          <p className="capitalize p-1 font-bold text-white font-manrope text-base">
                            ₹ {item?.price_24_hours * 24} / 24hrs
                          </p>
                        </div>
                        <ul className="flex gap-4 justify-center text-xs mxs:text-sm pt-2 pb-6">
                          <li className="border-r-2 border-white flex items-center gap-1 pr-2">
                            <BsFillFuelPumpFill /> {item?.fuel_type}
                          </li>
                          <li className="border-r-2 border-white flex items-center gap-1 pr-2">
                            <GrGroup /> {item?.seater} Seater
                          </li>
                          <li className="flex items-center gap-1">
                            <TbManualGearbox size={20} /> {item?.transmission_type}
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col justify-between text-white py-4">
                      <ul className="flex justify-center gap-x-8 px-3">
                        <li onClick={() => trackEvent({ eventName: 'Contact', customData: { content_name: 'Whatsapp Button' } })} className="bg-green-500 w-32 py-2 text-center rounded-md">
                          <Link
                            href={`https://api.whatsapp.com/send?phone=+91${wspno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`}
                            target="_blank"
                          >
                            <p className="flex gap-1 text-sm justify-center items-center">
                              <FaWhatsapp size={20} /> Whatsapp
                            </p>
                          </Link>
                        </li>
                        <li onClick={() => trackEvent({ eventName: 'Contact', customData: { content_name: 'Call Button' } })} className="bg-blue-500 w-32 py-2 rounded-md">
                          <Link href={`tel:${phoneno}`} target="_blank">
                            <p className="flex gap-1 text-sm justify-center items-center">
                              <BiPhoneCall size={20} /> Call Us
                            </p>
                          </Link>
                        </li>
                      </ul>

                      {/* App download CTA */}
                      <div onClick={handleStoreRedirect} className="lg:hidden flex justify-center cursor-pointer py-4 text-lg font-semibold">
                        <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 inline-block text-transparent bg-clip-text animate-gradient border border-[#5566ee] p-2 rounded-md">
                          Download Long Drive Cars App
                        </p>
                      </div>

                      <div onClick={() => setShowDown(true)} className="lg:flex hidden justify-center cursor-pointer py-4 text-base font-semibold">
                        <p className="bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-transparent bg-clip-text animate-gradient border border-[#5566ee] p-2 rounded-md">
                          Download Long Drive Cars App
                        </p>
                      </div>

                      {/* App download popup */}
                      {showDown && (
                        <div className="fixed inset-0 bg-white bg-opacity-5 z-50">
                          <div className="flex justify-center items-center h-full">
                            <div className="bg-white p-8 rounded-lg shadow-md max-w-lg lg:w-[800px] w-[500px] relative">
                              <button
                                onClick={() => setShowDown(false)}
                                className="absolute top-4 right-4 rounded-full bg-white text-black py-1 px-3 text-xl border border-gray-300"
                              >
                                x
                              </button>
                              <div className="flex gap-3">
                                <div>
                                  <h2 className="text-base font-semibold text-gray-900">
                                    Download the Longdrivecarz App and Book Your Favourite Car
                                  </h2>
                                  <ul className="mt-2 text-gray-600">
                                    <li>Scan the QR code to get the app from the Play Store or App Store.</li>
                                    <li className="flex gap-x-3 pt-3">
                                      <FaAppStore className="text-black" size={30} />
                                      <BiLogoPlayStore className="text-black" size={30} />
                                    </li>
                                  </ul>
                                </div>
                                <Image
                                  src={ldcqr}
                                  height={1000}
                                  width={1000}
                                  alt="Long Drive Cars App"
                                  className="w-full h-44 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                }

              </React.Fragment>
            ))}
          </div>
          {data?.length < 1 && <div>
            <p className="pl-6 py-4">Sorry no cars available near you </p>
            {/* <p>If possible you can check cars near </p>
            <ul>
              <li>Hyderabad</li>
              <li>Warangal</li>
              <li>Vizag</li>
              <li>Vijayawada</li>
            </ul> */}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default LocationFetcher;
