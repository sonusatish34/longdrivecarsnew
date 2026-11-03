import React from 'react'
import Head from 'next/head';
import MakerModel from '../MakerModel'
import Layout from '../components/Layout/Layout';
import { getCarBySlug } from '../../utils/serverCars';

function maker_model({ canonicalUrl, makerModel, initialCar }) {
  return (
    <>
      <Head>
        <title>{`${initialCar?.maker_model || makerModel} for Rent | Long Drive Cars`}</title>
        <meta name="description" content={`View ${initialCar?.maker_model || makerModel} rental prices, specifications and availability with Long Drive Cars.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    <Layout phoneno={'9000-478-478'} wspno={'9000478478'}>
      <div>
        <MakerModel city={'hyderabad'} phoneno={'9000478478'} wspno={'9000478478'} initialCar={initialCar} />
      </div>
    </Layout>
    </>
  )
}

export default maker_model;

export async function getServerSideProps({ params }) {
  const makerModel = params.maker_model;
  try {
    const initialCar = await getCarBySlug('hyderabad', makerModel);
    if (!initialCar) return { notFound: true };
    return {
      props: {
        makerModel,
        initialCar,
        canonicalUrl: `https://www.longdrivecars.com/car-rental/${makerModel}`,
      },
    };
  } catch (error) {
    console.error('Unable to load Hyderabad car details:', error);
    return {
      props: {
        makerModel,
        initialCar: null,
        canonicalUrl: `https://www.longdrivecars.com/car-rental/${makerModel}`,
      },
    };
  }
}