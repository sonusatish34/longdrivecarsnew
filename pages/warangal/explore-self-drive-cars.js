import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
function exploreselfdrivecars({ canonicalUrl }) {

  return (
    <div>
      <Head>
        <title>  Self-Drive Cars in Warangal at Low Rates</title>
        <meta id="meta-desc" name="description" content="Discover top self-drive cars in Warangal. Book online, enjoy flexible trips, zero deposit, and unlimited kilometers today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="  Self-Drive Cars in Warangal at Low Rates" />
        <meta property="og:description" content="Discover top self-drive cars in Warangal. Book online, enjoy flexible trips, zero deposit, and unlimited kilometers today." />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Layout locname={'warangal'} phoneno={"9000-777-665"}>
        <ExploreCars loc={'warangal'} phoneno={"9000777665"} />
      </Layout>
    </div>
  )
}

export default exploreselfdrivecars

export async function getServerSideProps({ req }) {

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
    ? `https://www.longdrivecars.in/warangal/explore-self-drive-cars`
    : `https://www.longdrivecars.com/warangal/explore-self-drive-cars`;
  return {
    props: {
      canonicalUrl,
    },
  };
}