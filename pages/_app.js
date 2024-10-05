import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/LDC.png" />
        <link rel="canonical" href="https://selfdrivecarshyderabad.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
