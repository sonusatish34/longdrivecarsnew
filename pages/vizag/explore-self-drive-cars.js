import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'
function exploreselfdrivecars() {

  return (
    <Layout locname={'vizag'} phoneno={"96666-99583"}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16731119855"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16731119855');
                    `,
          }}
        ></script>
      </Head>
      <div>
        <ExploreCars loc={'vizag'} phoneno={"9666699583"} />
      </div>
    </Layout>

  )
}

export default exploreselfdrivecars