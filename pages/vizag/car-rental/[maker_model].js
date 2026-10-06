import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
function maker_model({ canonicalUrl }) {
  return (
    <div>
      <Head>
        <title> No Deposit & km - Lowest priced Self-drive car rental for Sedans in Vizag</title>
        <meta name="Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
        <meta property="og:title" content=" No Deposit &   Unlimited km - Lowest priced Self-drive car rental for Sedans in Vizag" />
        <meta property="og:Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'vizag'} phoneno={'9000-478-478'}>
        <MakerModel city={'vizag'} phoneno={'9000478478'} />
      </Layout>
    </div>

  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { maker_model } = context.params;
  const host = context.req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/vizag/car-rental/${maker_model}`
    : `https://www.longdrivecars.com/vizag/car-rental/${maker_model}`;
  return {
    props: {
      canonicalUrl,
    },
  };
}