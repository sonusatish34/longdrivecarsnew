import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import About from '../components/ContactUs/About'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function about() {
    const router = useRouter();
    console.log(router.query,"-------");
    
    return (
        <BangaloreLayout>
            <div>
                <About/>
            </div>
        </BangaloreLayout>
    )
}

export default about;