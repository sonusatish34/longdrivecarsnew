import React from 'react'

import About from '../components/ContactUs/About'
import Layout from '../components/Layout/Layout'
function about() {
    return (
        <Layout locname={'vizag'} phoneno={"998-6666-078"}>
            <div>
                <About/>
            </div>
        </Layout>
    )
}

export default about