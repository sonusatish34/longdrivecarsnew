

import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';


export default function AttachmentHelp() {
  return (
    <div className="bg-[#334B35] px-1 lg:px-8 py-7 lg:py-16 ">
      {/* Main Container */}
      <div className=" bg-[#6D8C54] rounded-[6px]  flex flex-col    items-center justify-center">
        {/* Text Section */}
        <p className="text-white text-sm font-bold py-5 lg:py-10  lg:text-3xl">For Attachment Help</p>

        {/* Buttons Section */}
        <div className="flex gap-3 lg:gap-4 pb-4 lg:pb-14 ">
        
           <Link href='https://api.whatsapp.com/send?phone=+9666677405&text=Hi%0AI%20am%20looking%20to%20Attach%20my%20Car' className="flex items-center text-xs  py-2 px-3 lg:py-2 lg:px-10 lg:text-xl   bg-white text-black  font-semibold rounded-[8px]">
            <RiWhatsappFill size={16}  className="mr-1 lg:size-8 text-green-600 lg:mr-2  "/>
            WhatsApp
          </Link>

          {/* Call Us Button */}
          <Link href="tel:9888988828" className="flex items-center text-xs lg:text-xl justify-center  py-2 px-2 lg:py-2 lg:px-7 bg-blue-600 text-white font-semibold rounded-[8px] ">
            <FaPhoneAlt className="mr-1 lg:mr-3 lg:size-7 " />
            Call Us
          </Link>
        </div>
      </div>
    </div>
  );
}
