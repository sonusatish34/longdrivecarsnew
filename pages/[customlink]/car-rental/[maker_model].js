import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import { getCarBySlug } from '../../../utils/serverCars';

function maker_model({ canonicalUrl, makerModel, initialCar, city }) {
  return (
    <div>
      <Head>
        <title>{`${initialCar?.maker_model || makerModel} for Rent | Long Drive Cars`}</title>
        <meta name="description" content={`View ${initialCar?.maker_model || makerModel} rental prices, specifications and availability with Long Drive Cars.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={city} phoneno={'9000-478-478'} wspno={'9000478478'}>
        <MakerModel city={city} phoneno={'9000478478'} wspno={'9000478478'} initialCar={initialCar} />
      </Layout>
    </div>
  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { customlink, maker_model: makerModel } = context.params;
  const city = String(customlink).toLowerCase();
  if (!['hyderabad', 'vizag', 'warangal', 'vijayawada'].includes(city)) {
    return { notFound: true };
  }
  try {
    const initialCar = await getCarBySlug(city, makerModel);
    if (!initialCar) return { notFound: true };
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/${city}/car-rental/${makerModel}`,
        makerModel,
        initialCar,
        city,
      },
    };
  } catch (error) {
    console.error(`Unable to load ${city} car details:`, error);
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/${city}/car-rental/${makerModel}`,
        makerModel,
        initialCar: null,
        city,
      },
    };
  }
}