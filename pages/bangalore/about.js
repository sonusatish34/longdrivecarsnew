import React from 'react'

import About from '../components/ContactUs/About'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function about() {
    return (
        <BangaloreLayout locname={'bangalore'} phoneno={"988-6666-883"}>
            <div>
                <About/>
            </div>
        </BangaloreLayout>
    )
}

export default about