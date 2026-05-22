import React from 'react'
import Layout from './components/Layout/Layout'
import About from './components/ContactUs/About'
import Head from 'next/head'
function about({ canonicalUrl }) {
    return (
        <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
            <Head>
                <title>Learn About Our Self Drive Car Rental Services</title>
                <meta id="meta-desc" name="description" content="Discover how Long Drive Cars makes self drive cars accessible, affordable, and convenient for your travel needs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Learn About Our Self Drive Car Rental Services" />
                <meta property="og:description" content="Discover how Long Drive Cars makes self drive cars accessible, affordable, and convenient for your travel needs." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <div>
                <About />
            </div>
        </Layout>
    )
}

export default about
export async function getServerSideProps(context) {
    const { req } = context;
    const host = req.headers.host;

    const canonicalUrl = host.includes('.in')
        ? `https://www.longdrivecars.in/about`
        : `https://www.longdrivecars.com/about`;

    return {
        props: {
            canonicalUrl,
        },
    };
}