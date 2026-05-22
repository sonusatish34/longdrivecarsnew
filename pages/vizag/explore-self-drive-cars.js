import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
function exploreselfdrivecars({ canonicalUrl }) {

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

        <ExploreCars loc={'vizag'} phoneno={"9000478478"} />
      </Layout>
    </div>

  )
}

export default exploreselfdrivecars

export async function getServerSideProps({ req }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/vizag/explore-self-drive-cars`
    : `https://www.longdrivecars.com/vizag/explore-self-drive-cars`;
  return {
    props: {
      canonicalUrl,
    },
  };
}