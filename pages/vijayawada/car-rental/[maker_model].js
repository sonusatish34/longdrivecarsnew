import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import { getCarBySlug } from '../../../utils/serverCars';

function maker_model({ canonicalUrl, makerModel, initialCar }) {
  return (
    <div>
      <Head>
        <title>{`${initialCar?.maker_model || makerModel} for Rent in Vijayawada | Long Drive Cars`}</title>
        <meta name="description" content={`View ${initialCar?.maker_model || makerModel} rental prices, specifications and availability in Vijayawada.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="  Unlimited km - Travel with low-cost Self drive car rentals services" />
        <meta property="og:description" content="Explore with Self-drive cars starting at ₹1180/day. With low prices, Book Dzire ₹1680/day,Ertiga ₹2496/day or Install Long Drive Cars app for more options." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'vijayawada'} phoneno={'96666-99583'}>
        <MakerModel city={'vijayawada'} phoneno={'9666699583'} initialCar={initialCar} />
      </Layout>
    </div>

  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { maker_model: makerModel } = context.params;
  try {
    const initialCar = await getCarBySlug('vijayawada', makerModel);
    if (!initialCar) return { notFound: true };
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/vijayawada/car-rental/${makerModel}`,
        makerModel,
        initialCar,
      },
    };
  } catch (error) {
    console.error('Unable to load Vijayawada car details:', error);
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/vijayawada/car-rental/${makerModel}`,
        makerModel,
        initialCar: null,
      },
    };
  }
}