import React from 'react';
import dynamic from 'next/dynamic';
import Layout from './components/Layout/Layout';
import Head from 'next/head';

const ExploreCars = dynamic(() => import('./components/ExploreCars/ExploreCars'), {
  ssr: false,
});

function exploreselfdrivecars({ canonicalUrl }) {
  return (
    <div>
      <Head>
        <title> Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans </title>
        <meta id="meta-desc" name="Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content=" Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans " />
        <meta property="og:Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
        <ExploreCars phoneno={"9000478478"} wspno={"9000478478"} />
      </Layout>
    </div>
  );
}

export default exploreselfdrivecars;

export async function getServerSideProps({ req }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/explore-self-drive-cars`
    : `https://www.longdrivecars.com/explore-self-drive-cars`;
  return {
    props: {
      canonicalUrl,
    },
  };
}