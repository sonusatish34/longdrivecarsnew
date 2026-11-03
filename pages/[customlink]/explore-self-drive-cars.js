import React from 'react';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import ExploreCars from '../components/ExploreCars/ExploreCars';
import { getCarsByLocation } from '../../utils/serverCars';

function exploreselfdrivecars({ canonicalUrl, cars, customlink }) {
  return (
    <div>
      <Head>
        <title> Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans </title>
        <meta name="description" content={`Compare self-drive rental cars, specifications and prices in ${customlink}.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content=" Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans " />
        <meta property="og:description" content={`Compare self-drive rental cars, specifications and prices in ${customlink}.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'hyderabad'} phoneno={'9000-478-478'} wspno={'9000478478'}>
        <ExploreCars loc={customlink} phoneno="9000478478" wspno="9000478478" initialCars={cars} />
      </Layout>
    </div>
  );
}

export default exploreselfdrivecars;

export async function getServerSideProps(context) {
  const customlink = String(context.params.customlink).toLowerCase();
  if (!['hyderabad', 'vizag', 'warangal', 'vijayawada'].includes(customlink)) {
    return { notFound: true };
  }
  let cars = [];
  try {
    cars = await getCarsByLocation(customlink);
  } catch (error) {
    console.error(`Unable to load ${customlink} car inventory:`, error);
  }

  return {
    props: {
      canonicalUrl: `https://www.longdrivecars.com/${customlink}/explore-self-drive-cars`,
      customlink,
      cars,
    },
  };
}