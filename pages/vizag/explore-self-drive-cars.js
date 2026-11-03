import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import { getCarsByLocation } from '../../utils/serverCars';

function exploreselfdrivecars({ canonicalUrl, cars }) {

  return (
    <div>
      <Head>
        <title>Self Drive Rentals in Vizag Available</title>
        <meta name="description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Self Drive Rentals in Vizag Available" />
        <meta property="og:description" content="Rent self drive cars in Vizag at affordable prices. Quick booking, flexible durations & no driver required." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'vizag'} phoneno={"9000-478-478"}>

        <ExploreCars loc="vizag" phoneno="9000478478" initialCars={cars} />
      </Layout>
    </div>

  )
}

export default exploreselfdrivecars

export async function getServerSideProps() {
  let cars = [];
  try {
    cars = await getCarsByLocation('vizag');
  } catch (error) {
    console.error('Unable to load Vizag car inventory:', error);
  }
  return {
    props: {
      canonicalUrl: 'https://www.longdrivecars.com/vizag/explore-self-drive-cars',
      cars,
    },
  };
}