import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import { getCarBySlug } from '../../../utils/serverCars';

function maker_model({ canonicalUrl, makerModel, initialCar }) {
  return (
    <div>
      <Head>
        <title>{`${initialCar?.maker_model || makerModel} for Rent in Warangal | Long Drive Cars`}</title>
        <meta name="description" content={`View ${initialCar?.maker_model || makerModel} rental prices, specifications and availability in Warangal.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans" />
        <meta property="og:description" content="Plan your trips with Lowest Price Self-Drive car rentals starting at just ₹1180/day. So book Dzire for ₹1680/day or Ertiga at ₹2496/day now with Zero Deposit Option & Unlimited kms ." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'warangal'} phoneno={"9000-777-665"}>
        <MakerModel city={'warangal'} phoneno={'9000777665'} initialCar={initialCar} />
      </Layout>
    </div>

  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { maker_model: makerModel } = context.params;
  try {
    const initialCar = await getCarBySlug('warangal', makerModel);
    if (!initialCar) return { notFound: true };
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/warangal/car-rental/${makerModel}`,
        makerModel,
        initialCar,
      },
    };
  } catch (error) {
    console.error('Unable to load Warangal car details:', error);
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/warangal/car-rental/${makerModel}`,
        makerModel,
        initialCar: null,
      },
    };
  }
}