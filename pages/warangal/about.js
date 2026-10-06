import React from 'react'
import Layout from '../components/Layout/Layout'
import About from '../components/ContactUs/About'
import Head from 'next/head'
function about({ canonicalUrl }) {
    return (
        <Layout locname={'warangal'} phoneno={"9000-777-665"}>
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
    const { req } = context; // Extract `params` if using dynamic routes

    const host = req.headers.host;
    // <link rel="canonical" href={canonicalUrl} />
    // Ensure that the category is lowercase, as it's used in the URL
    const canonicalUrl = host.includes('.in')
        ? `https://www.longdrivecars.in/warangal/about`
        : `https://www.longdrivecars.com/warangal/about`;

    return {
        props: {
            canonicalUrl,
        },
    };
}