import React from 'react';
import Layout from './components/Layout/Layout';
import Head from 'next/head';
import ExploreCars from './components/ExploreCars/ExploreCars';
import { getCarsByLocation } from '../utils/serverCars';

function exploreselfdrivecars({ canonicalUrl, cars }) {
  return (
    <div>
      <Head>
        <title> Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans </title>
        <meta name="description" content="Compare self-drive rental cars, specifications and prices in Hyderabad with Long Drive Cars." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Self Drive Car Rentals in Hyderabad | Long Drive Cars" />
        <meta property="og:description" content="Compare self-drive rental cars, specifications and prices in Hyderabad with Long Drive Cars." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
        <ExploreCars loc="hyderabad" phoneno="9000478478" wspno="9000478478" initialCars={cars} />
      </Layout>
    </div>
  );
}

export default exploreselfdrivecars;

export async function getServerSideProps() {
  let cars = [];
  try {
    cars = await getCarsByLocation('hyderabad');
  } catch (error) {
    console.error('Unable to load Hyderabad car inventory:', error);
  }
  return {
    props: {
      canonicalUrl: 'https://www.longdrivecars.com/explore-self-drive-cars',
      cars,
    },
  };
}