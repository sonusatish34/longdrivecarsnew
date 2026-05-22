import "@/styles/globals.css";
import React from 'react';
import Script from 'next/script';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="K-yUQ7uMsgEm12vv9UZMLhkZ_L_0MGD4mn3PCVbwuOg" />

            </Head>
            {/* Google Ads Global Site Tag (gtag.js) */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=AW-16731119855"
            />
            <Script
                id="google-ads"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16731119855');
                    `,
                }}
            />

            {/* Google Tag Manager */}
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
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": "Long Drive Cars - Self Drive Car Rental",
                        "description": "Self Drive Car Rental Starting From ₹1776/day, Swift ₹1680/day, Ertiga ₹2496/day. Get 1 day free car for new users. Home delivery available & Check real car images.",
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
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-8RGJTJSJCW"
            />

            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-8RGJTJSJCW');
                `,
                }}
            />
            {/* Meta Pixel */}
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
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
            fbq('init', '2086274652216753');
            fbq('track', 'PageView');
          `,
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=2086274652216753&ev=PageView&noscript=1"
                />
            </noscript>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
