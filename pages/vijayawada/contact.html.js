import ContactUS from "../components/ContactUs/ContactUs"
import Layout from "../components/Layout/Layout"
import Head from "next/head"
function contact({ canonicalUrl }) {

    return (
        <Layout locname={'vijayawada'} phoneno={"9666699583"}>
            <Head>
                <title>Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans</title>
                <meta id="meta-desc" name="Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans" />
                <meta property="og:Long Drive Cars is a self drive car rental app in Hyderabad offering unlimited kilometre plans, a zero deposit option, home and airport delivery, and 5-minute pickup from branches in Kukatpally, Dilsukhnagar and Hitech City. Cars from ₹1084 per 24 hours." />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <ContactUS />
        </Layout>
    )
}

export default contact
export async function getServerSideProps(context) {
    const { req, params } = context; // Extract `params` if using dynamic routes

    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
        ? `https://www.longdrivecars.in/vijayawada/contact.html`
        : `https://www.longdrivecars.com/vijayawada/contact.html`;

    return {
        props: {
            canonicalUrl,
        },
    };
}