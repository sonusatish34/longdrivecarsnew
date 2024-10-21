import React from 'react'

import About from '../components/ContactUs/About'
import BangaloreLayout from '../components/Layout/BangaloreLayout'
function about() {
    return (
        <BangaloreLayout locname={'bangalore'} phoneno={"912-912-2525"}>
            <div>
                <About/>
            </div>
        </BangaloreLayout>
    )
}

export default about