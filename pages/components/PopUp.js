import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdOutlineCancel } from 'react-icons/md';
import { handleStoreRedirect } from '@/utils/redirectUtils';

const PopUp = ({ banner }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1ruppe, setIsVisible1ruppe] = useState(false);

  // 3-second delay for the promotional offer popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible1ruppe(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // 65-second delay for the app download popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 65000);

    return () => clearTimeout(timer);
  }, []);

  // Consolidate body scroll locking to prevent layout shifts
  // useEffect(() => {
  //   if (isVisible || isVisible1ruppe) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isVisible, isVisible1ruppe]);

  return (
    <div>
      {/* 65-Second App Download Popup */}
      {isVisible && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsVisible(false)}
          />
          <div
            className="fixed lg:top-52 top-40 z-50 left-1/2 -translate-x-1/2 w-5/6 max-w-sm p-4 bg-white border-2 border-[#0456e8] rounded-lg shadow-xl text-black flex"
            role="dialog"
            aria-modal="true"
          >
            <div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">
                  <p className="uppercase text-2xl font-light pb-4 flex flex-col">
                    <span>Download</span>
                    <span>our app</span>
                  </p>
                  <p className="animate-bounce">
                    <span className="bg-gradient-to-r from-green-700 to-green-700 bg-clip-text text-transparent text-3xl font-bold">
                      ₹ 200 off
                    </span>{' '}
                  </p>
                  <p className="capitalize">on your first booking!</p>
                </div>

                {/* Optimized dimensions, lazy loading, and async decoding */}
                <Image
                  className="lg:w-44 w-28 scale-90 cursor-pointer object-contain"
                  src="/popup.webp"
                  alt="Long Drive Cars App"
                  width={176}
                  height={176}
                  loading="lazy"
                  decoding="async"
                  onClick={handleStoreRedirect}
                  onError={() => console.error('Popup image failed to load!')}
                />
              </div>

              <div className="mt-3 text-sm">
                <p className="font-medium">Hurry, offer ends soon!</p>
              </div>

              <div
                onClick={handleStoreRedirect}
                className="my-3 flex lg:hidden justify-center"
              >
                <button
                  type="button"
                  className="py-2 px-4 text-white font-semibold rounded-full shadow-lg border border-[#5566ee] bg-gradient-to-r from-green-600 via-[#556ee6] to-indigo-400 text-xs capitalize cursor-pointer active:scale-95 transition"
                >
                  download long drive cars app
                </button>
              </div>

              <div className="mt-3 lg:flex flex-col gap-y-2 items-center hidden justify-center">
                <p className="capitalize text-xs text-gray-600">Scan QR to download the app</p>
                <Image
                  className="w-28 h-auto object-contain"
                  src={'/qr.webp'}
                  alt="Download App QR Code"
                  width={112}
                  height={112}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-500 transition-colors z-50 focus:outline-none"
              aria-label="Close popup"
            >
              <MdOutlineCancel size={28} />
            </button>
          </div>
        </>
      )}

      {/* 3-Second Promotional Banner Popup */}
      {isVisible1ruppe && banner?.duplicate_banner_image_url && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsVisible1ruppe(false)}
          />
          <div
            className="fixed lg:top-10 top-20 z-50 left-1/2 -translate-x-1/2 w-5/6 max-w-sm p-3 lg:p-6 bg-white rounded-lg shadow-xl text-black"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full h-[400px] cursor-pointer"
              onClick={handleStoreRedirect}
            >
              {/* Uses fill with responsive sizes; priority removed to prevent network bottleneck */}
              <Image
                src={banner.duplicate_banner_image_url}
                alt="Rental Promotional Banner"
                fill
                sizes="(max-width: 640px) 85vw, 380px"
                className="object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <button
              onClick={() => setIsVisible1ruppe(false)}
              className="absolute top-2 right-2 p-1 text-gray-500 hover:text-red-500 transition-colors z-50 focus:outline-none"
              aria-label="Close promotion"
            >
              <MdOutlineCancel size={28} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PopUp;