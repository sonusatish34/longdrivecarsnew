import React from 'react'
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
const DynNearby = dynamic(() => import('../components/GetNearByPage/GetNearByPage'), {
  ssr: false, // Set to false if you want to load it only on the client side

});
function getnearbycars({ canonicalUrl }) {
  return (
    <div className='bg-white'>
      <Head>
        <title> No Deposit & Unlimited km - Rent a car under 5 kms with Self-drive car rental services</title>
        <meta name="description" content="Plan your trips with Lowest Price Self-Drive car rentals starting at just ₹1488/day. So book Dzire for ₹1680/day or Ertiga at ₹2496/day now with Unlimited kms at No Deposit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content=" No Deposit & Unlimited km - Rent a car under 5 kms with Self-drive car rental services" />
        <meta property="og:description" content="Plan your trips with Lowest Price Self-Drive car rentals starting at just ₹1488/day. So book Dzire for ₹1680/day or Ertiga at ₹2496/day now with Unlimited kms at No Deposit." />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'warangal'} phoneno={"9000-777-665"}>
        <DynNearby locname={'warangal'} phoneno={"9000777665"} />
      </Layout>
    </div>
  )
}

export default getnearbycars


export async function getServerSideProps({ req }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `http://www.longdrivecars.in/warangal/get-near-by-cars`
    : `http://www.longdrivecars.com/warangal/get-near-by-cars`;
  return {
    props: {
      canonicalUrl,
    },
  };
}