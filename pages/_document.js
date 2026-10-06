import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          id="meta-keywords"
          name="keywords"
          content="best car rental, rent a car, car rental, self drive car rental, self drive car, monthly car rental, car on rent without driver, luxury car rental, car rent for one day, booking car rental, airport car rental, online car rental"
        />
        <meta
          name="facebook-domain-verification"
          content="4a5060u6ifh2t04q3dtfpzbudg4tgp"
        />
        <meta
          id="meta-keyphrases"
          name="keyphrases"
          content="Self-drive car rentals at the best prices in Hyderabad, Luxury and budget-friendly car rentals near you, Affordable self-drive car rental services in Hyderabad"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Long Drive Cars",
              "alternateName": "Long Drive Cars",
              "url": "https://www.longdrivecars.com",
              "logo": "https://www.longdrivecars.com/logos/logo3.webp"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Long Drive Cars",
              "url": "https://www.longdrivecars.com",
              "logo": "https://www.longdrivecars.com/logos/logo3.webp"
            })
          }}
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
