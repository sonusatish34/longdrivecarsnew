import React from 'react'
import Layout from './components/Layout/Layout'
import About from './components/ContactUs/About'
import Head from 'next/head'
function about({ canonicalUrl }) {
    return (
        <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
            <Head>
                <title>About Long Drive Cars App | Self-Drive Rentals</title>
                <meta id="meta-desc" name="description" content="Learn about Long Drive Cars App and its self-drive car rental service. Find out how the platform helps customers choose cars for personal travel and trips.." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="About Long Drive Cars App | Self-Drive Rentals" />
                <meta property="og:description" content="Learn about Long Drive Cars App and its self-drive car rental service. Find out how the platform helps customers choose cars for personal travel and trips.." />
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

    const canonicalUrl = `https://www.longdrivecars.com/about`;

    return {
        props: {
            canonicalUrl,
        },
    };
}