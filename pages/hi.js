import React from 'react'
import Image from 'next/image';
import imgg from './images/dozz_icon.png'
function hi() {
    return (
        <div className='pl-28 bg-black pb-28'>
            <p>hi</p>
            <Image
                src={imgg}
                height={1000}
                width={1000}
                className='rounded-full h-80 w-80'
            />
        </div>
    )
}

export default hi;