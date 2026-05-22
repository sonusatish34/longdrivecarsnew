"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InstallPage() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || "";

    const isAndroid = /android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isInAppBrowser =
      /FBAN|FBAV|Instagram|Line|Twitter|wv/i.test(ua);

    let redirectUrl = "https://www.longdrivecars.com/app-download";

    if (isAndroid) {
      redirectUrl =
        "https://play.google.com/store/apps/details?id=com.long_drive_cars.car";
    } else if (isIOS) {
      redirectUrl =
        "https://apps.apple.com/in/app/long-drive-cars-car-rental/id6466695391";
    }

    // Slight delay improves success rate in mobile browsers
    const timer = setTimeout(() => {
      window.location.replace(redirectUrl);
    }, 800);

    // If blocked / in-app browser -> show buttons
    if (isInAppBrowser) {
      setShowButtons(true);
    }

    // Show fallback buttons after 2.5 sec
    const fallback = setTimeout(() => {
      setShowButtons(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white flex flex-col justify-center items-center px-4">
      
      <Image
        src="/250cashback.webp"
        alt="Long Drive Cars App"
        width={420}
        height={420}
        priority
        className="rounded-2xl shadow-xl max-w-full h-auto"
      />

      <p className="mt-4 text-sm text-gray-600 font-medium animate-pulse">
        Redirecting to App Store...
      </p>

      {showButtons && (
        <div className="mt-6 flex flex-col gap-3 w-full max-w-xs">
          <a
            href="https://play.google.com/store/apps/details?id=com.long_drive_cars.car"
            className="bg-black text-white text-center py-3 rounded-xl font-semibold"
          >
            Download for Android
          </a>

          <a
            href="https://apps.apple.com/in/app/long-drive-cars-car-rental/id6466695391"
            className="border border-black text-center py-3 rounded-xl font-semibold"
          >
            Download for iPhone
          </a>
        </div>
      )}
    </div>
  );
}