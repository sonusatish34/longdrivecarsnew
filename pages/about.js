import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Layout/Layout'

import About from './components/ContactUs/About'
function about() {
    return (
        <Layout>
            <div>
                <About/>
            </div>
        </Layout>
    )
}

export default about