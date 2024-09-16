import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
function contact() {

    const router = useRouter();
    
    return (
        <div>
            <p>Get the Long Drive Cars Mobile app and Start Your Journey!</p>
            <ul>
                <li>
                    <Image
                    src={"ll"}
                    height={111}
                    width={111}
                    alt='sss'
                    ></Image>
                    <p>Easy ti rsss</p>
                </li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default contact