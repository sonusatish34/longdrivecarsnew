import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
function maker_model({ canonicalUrl }) {
  return (
    <div>
      <Head>
        <title> No Deposit & Unlimited km - Rent a car under 5 kms with Self-drive car rental services</title>
        <meta name="description" content="Plan your trips with Lowest Price Self-Drive car rentals starting at just ₹1488/day. So book Dzire for ₹1680/day or Ertiga at ₹2496/day now with Unlimited kms at No Deposit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content=" No Deposit & Unlimited km - Rent a car under 5 kms with Self-drive car rental services" />
        <meta property="og:description" content="Plan your trips with Lowest Price Self-Drive car rentals starting at just ₹1488/day. So book Dzire for ₹1680/day or Ertiga at ₹2496/day now with Unlimited kms at No Deposit." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'warangal'} phoneno={"9000-777-665"}>
        <MakerModel city={'warangal'} phoneno={'9000777665'} />
      </Layout>
    </div>

  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { maker_model } = context.params; // Extract the dynamic route parameter
  const host = context.req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/warangal/car-rental/${maker_model}`
    : `http://www.longdrivecars.com/warangal/car-rental/${maker_model}`; // Use localhost for dev
  return {
    props: {
      canonicalUrl,
    },
  };
}