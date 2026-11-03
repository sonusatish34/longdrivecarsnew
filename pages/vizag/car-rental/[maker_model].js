import React from 'react';
import MakerModel from '../../MakerModel';
import Layout from '../../components/Layout/Layout';
import Head from 'next/head';
import { getCarBySlug } from '../../../utils/serverCars';

function maker_model({ canonicalUrl, makerModel, initialCar }) {
  return (
    <div>
      <Head>
        <title>{`${initialCar?.maker_model || makerModel} for Rent in Vizag | Long Drive Cars`}</title>
        <meta name="description" content={`View ${initialCar?.maker_model || makerModel} rental prices, specifications and availability in Vizag.`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'vizag'} phoneno={'9000-478-478'}>
        <MakerModel city={'vizag'} phoneno={'9000478478'} initialCar={initialCar} />
      </Layout>
    </div>

  )
}

export default maker_model;

export async function getServerSideProps(context) {
  const { maker_model: makerModel } = context.params;
  try {
    const initialCar = await getCarBySlug('vizag', makerModel);
    if (!initialCar) return { notFound: true };
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/vizag/car-rental/${makerModel}`,
        makerModel,
        initialCar,
      },
    };
  } catch (error) {
    console.error('Unable to load Vizag car details:', error);
    return {
      props: {
        canonicalUrl: `https://www.longdrivecars.com/vizag/car-rental/${makerModel}`,
        makerModel,
        initialCar: null,
      },
    };
  }
}