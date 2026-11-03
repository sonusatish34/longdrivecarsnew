import React from 'react'
import Layout from '../components/Layout/Layout'
import About from '../components/ContactUs/About'
import Head from 'next/head'
function about({ canonicalUrl }) {
    return (
        <Layout locname={'vizag'} phoneno={"9000-478-478"}>
            <Head>
                <title>About Long Drive Cars App | Self-Drive Rentals in Vizag</title>
                <meta property="og:title" content="About Long Drive Cars App | Self-Drive Rentals in Vizag" />
                <meta id="meta-desc" name="description" content="Learn about Long Drive Cars App and its self-drive car rental service. Find out how the platform helps customers choose cars for personal travel and trips.." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:description" content="Learn about Long Drive Cars App and its self-drive car rental service. Find out how the platform helps customers choose cars for personal travel and trips.." />

                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <About />
        </Layout>
    )
}

export default about
export async function getServerSideProps(context) {
    const { req } = context; // Extract `params` if using dynamic routes
    const canonicalUrl = `https://www.longdrivecars.com/vizag/about`;

    return {
        props: {
            canonicalUrl,
        },
    };
}