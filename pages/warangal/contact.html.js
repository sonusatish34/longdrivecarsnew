import ContactUS from "../components/ContactUs/ContactUs"
import Head from "next/head"
import Layout from "../components/Layout/Layout"
function contact({ canonicalUrl }) {

    return (
        <Layout locname={'warangal'} phoneno={"9000-777-665"}>
            <Head>
        <title>Contact Long Drive Cars App | Rental Support</title>
        <meta
          name="description"
          content="Contact Long Drive Cars App for booking assistance, rental enquiries and service questions. Use the available contact options to discuss your requirements."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Contact Long Drive Cars App | Rental Support"
        />
        <meta
          property="og:description"
          content="Contact Long Drive Cars App for booking assistance, rental enquiries and service questions. Use the available contact options to discuss your requirements."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
            <ContactUS />
        </Layout>
    )
}

export default contact
export async function getServerSideProps(context) {
    const { req } = context; // Extract `params` if using dynamic routes
    const canonicalUrl = `https://www.longdrivecars.com/warangal/contact.html`;

    return {
        props: {
            canonicalUrl,
        },
    };
}