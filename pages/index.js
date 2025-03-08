import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";
import ScrollServices from "@/components/ScrollServices/ScrollServices";
import Footer from "@/components/Footer/Footer";
import CTA from "@/components/CTA/CTA";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import OurServices from "@/components/OurServices/OurServices";
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const text = "Welcome to Zebrank";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      // Typing effect: add one character at a time
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Typing speed (100ms per character)

      return () => clearTimeout(timeout);
    } else {
      // Reset after a 2-second delay
      const resetTimeout = setTimeout(() => {
        setDisplayText(""); // Clear the text
        setCurrentIndex(0); // Reset the index
      }, 2000); // Delay before repeating (2 seconds)

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text])
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] bg-white`}
    >
      <Header />
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="lg:w-full lg:h-full w-fit h-[500px] object-cover"
        >
          <source src="/videos/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-44 z-10">
          <p className="text-[#CA7373] font-bold lg:text-5xl text-2xl pl-4"> {displayText}</p>
          <p className="text-white font-bold lg:text-5xl text-xl pl-4 w-3/4 pt-10 leading-relaxed">Transforming Ideas into Innovative Software Solutions</p>
          {/* <div className="">
            <h1 className="text-4xl font-mono text-white">
              {displayText}
              <span className="animate-blink">|</span> 
            </h1>
          </div> */}
        </div>
      </div>
      {/* <p>kkkkk</p> */}
      {/* <ScrollServices /> */}
      <div>
        <OurServices />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
