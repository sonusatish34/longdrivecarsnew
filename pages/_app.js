import "@/styles/globals.css";
import Head from "next/head";
import React from 'react';
import Layout from './components/Layout/Layout';
import Script from "next/script";

{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5F1QT47V0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5F1QT47V0');
            `,
          }} */}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-E5F1QT47V0"
      >

      </Script>
      <Script strategy="lazyOnload">
        {
          `   window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5F1QT47V0');`
        }
      </Script>
      <Layout>
        <Head>
          <link rel="icon" href="/sdcnew.png" />
          <link rel="canonical" href="https://selfdrivecarshyderabad.com" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
