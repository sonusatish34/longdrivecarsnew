import ContactUS from "./components/ContactUs/ContactUs";
import Layout from "./components/Layout/Layout";
import Head from "next/head";
import { useEffect } from "react";

function Contact({ canonicalUrl }) {
  useEffect(() => {
    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Disable text copy
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);

    // Disable inspect via keys
    const disableInspectKeys = (e) => {
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", disableInspectKeys);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableInspectKeys);
    };
  }, []);

  return (
    <Layout locname={""} phoneno={"9000-478-478"}>
      <Head>
        <title>Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans</title>
        <meta
          name="description"
          content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Long Drive Cars | Self Drive Car Rental in Hyderabad, Zero Deposit Option, Unlimited Km Plans"
        />
        <meta
          property="og:description"
          content="1 day Free Car @ New User - Self Drive Cars @ 1776/Day - Check Real Photos & Book - Home Delivery"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Disable select/copy globally */}
      <div className="select-none" style={{ userSelect: "none" }}>
        <ContactUS />
      </div>
    </Layout>
  );
}

export default Contact;

export async function getServerSideProps(context) {
  const { req } = context;
  const host = req.headers.host;

  const canonicalUrl = host.includes(".in")
    ? "https://www.longdrivecars.in/contact.html"
    : "https://www.longdrivecars.com/contact.html";

  return {
    props: {
      canonicalUrl,
    },
  };
}
