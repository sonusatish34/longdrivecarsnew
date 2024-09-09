import React, { useEffect } from 'react'
import Image from 'next/image'
// import carphotot from '../../images/rightimg.webp';
import { useState } from 'react';
import cust from '../../images/organic-flat.png'
const CallBackForm = () => {

    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{10}$/);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isError && mobile.length == 10) {
            fetch('https://longdrivecarz.in/site/contacts', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'user_phone': mobile,
                    'user_location': 'Hyderabad'
                })
            });
        }
        else {
            // console.log("some error");
        }

    };

    return (
        <div className='bg-white pt-4'>
            <div className='flex lg:mx-[77px] p-5 xl:mx-[98px] xs:mx-7 rounded-md justify-center bg-[#660066] items-center pb-5 lg:pt-5 text-white shadow-md'>
                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center xl:p-5 lg:w-2/3 xl:w-2/5 xs:p-0 lg:p-0'>
                    <div className='  xl:px-6 lg:py-3'>
                        <h2 className='md:text-2xl md:font-semibold font-sans sm:text-lg xl:text-2xl font-semibold xs:text-center'>Can't find the perfect car? </h2>
                        <p className='text-base lg:pl-9 xl:pl-0 xl:text-base font-sans xs:text-center pt-2 xs:pt-0 xs:text-xs font-normal'>Let us help you on a quick call</p>
                    </div>
                    <form onSubmit={handleSubmit} className='rounded-lg text-black text-xs flex pt-4'>

                        <input
                            value={mobile}
                            type="text"
                            placeholder="Enter mobile number"
                            onChange={(e) => {
                                setmobile(e.target.value);
                                if (!pattern.test(e.target.value))
                                    setIsError(true);
                                else setIsError(false);
                            }}
                            maxLength={10}
                            className='lg:rounded-md lg:w-full lg:p-3 xs:w-40 xs:rounded-sm xs:p-1'
                        />

                        <button className='bg-green-400 ml-0 border-2 xs:ml-1 xs:p-1  border-gray-400 lg:p-2 lg:text-[10px] text-white lg:w-28  w-fit xs:text-[8px] rounded' type="submit">Get Callback</button>
                    </form>
                    <div>{isError && mobile.length > 1 && <p className='text-sm text-center '>Please enter a valid number</p>}</div>
                </div>
            </div>
        </div>
    )
}

export default CallBackForm