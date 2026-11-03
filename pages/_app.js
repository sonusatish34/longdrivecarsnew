import "@/styles/globals.css";
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Poppins } from "next/font/google";
import Loading from './components/Loading';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
  variable: "--font-poppins",
});

function RouteChangeLoader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = (url) => {
      if (url !== router.asPath) setLoading(true);
    };
    const stop = () => setLoading(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', stop);
    router.events.on('routeChangeError', stop);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', stop);
      router.events.off('routeChangeError', stop);
    };
  }, [router]);

  if (!loading) return null;
  return <Loading />;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="K-yUQ7uMsgEm12vv9UZMLhkZ_L_0MGD4mn3PCVbwuOg" />
        
        {/* Preconnect & DNS-Prefetch to reduce third-party connection latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://a.quora.com" />
      </Head>

      {/* JSON-LD Schema (Kept early for search engine crawlers) */}
      <Script
        id="schema-product"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Long Drive Cars - Self Drive Car Rental",
            "description": "Self Drive Car Rental Starting From ₹1180/day, Swift ₹1680/day, Ertiga ₹2496/day. Get 1 day free car for new users. Home delivery available & Check real car images.",
            "url": "https://www.longdrivecars.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "bestRating": "5",
              "ratingValue": "4.8",
              "ratingCount": "33500"
            }
          }),
        }}
      />

      {/* Primary Analytics Container: Google Tag Manager */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBCJDV6F');
          `,
        }}
      />

      {/* Combined Single Gtag Script Entry (Loaded during browser idle time) */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-8RGJTJSJCW"
      />
      
      {/* Consolidated Google Ads & GA4 Configuration */}
      <Script
        id="google-gtag-combined"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            /* Google Ads Configuration */
            gtag('config', 'AW-16731119855');

            /* Google Analytics 4 Configuration */
            gtag('config', 'G-8RGJTJSJCW');
          `,
        }}
      />

      {/* Quora Pixel (Deferred to avoid main thread blocking) */}
      <Script
        id="quora-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '15491475592c4c25be5862d0e4bb7dfa');
            qp('track', 'ViewContent');
          `,
        }}
      />

      {/* Meta/Facebook Pixel (Deferred to avoid main thread blocking) */}
      <Script
        id="facebook-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2480970719039521');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Noscript Fallbacks */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://q.quora.com/_/ad/15491475592c4c25be5862d0e4bb7dfa/pixel?tag=ViewContent&noscript=1"
        />
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://www.facebook.com/tr?id=2480970719039521&ev=PageView&noscript=1"
        />
      </noscript>

      <main className={`${poppins.className} ${poppins.variable}`}>
        <RouteChangeLoader />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;