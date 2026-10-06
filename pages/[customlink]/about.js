import React from 'react'
import Layout from '../components/Layout/Layout'
import About from '../components/ContactUs/About'
import Head from 'next/head'
function about({ canonicalUrl }) {
    return (
        <Layout locname={'hyderabad'} phoneno={'9000-478-478'} wspno={'9000478478'}>
            <Head>
                <title>Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans</title>
                <meta id="meta-desc" name="Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans" />
                <meta property="og:Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <About />
        </Layout>
    )
}

export default about
export async function getServerSideProps(context) {
    const { req, params } = context; // Extract `params` if using dynamic routes
    const { customlink } = params; // Example fallback for category

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? `https://www.longdrivecars.in/${customlink}/about`
        : `https://www.longdrivecars.com/${customlink}/about`;

    return {
        props: {
            canonicalUrl,
        },
    };
}