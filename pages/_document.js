import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>       
      </Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        {/* Google Tag Manager (noscript) */}
      <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-P3SZC8HS"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
