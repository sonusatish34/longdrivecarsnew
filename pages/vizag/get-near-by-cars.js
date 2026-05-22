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
        <title>Self Drive Rentals in Vizag Available</title>
                    <meta name="description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="Self Drive Rentals in Vizag Available" />
                    <meta property="og:description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'vizag'} phoneno={"9000-478-478"}>
        <DynNearby locname={'vizag'} phoneno={"9000478478"} />
      </Layout>
    </div>
  )
}

export default getnearbycars;

export async function getServerSideProps({ req }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/vizag/get-near-by-cars`
    : `https://www.longdrivecars.com/vizag/get-near-by-cars`;
  return {
    props: {
      canonicalUrl,
    },
  };
}