import ContactUS from "./components/ContactUs/ContactUs"
import Layout from "./components/Layout/Layout"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from './components/Loading';
function contact() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router.events]);
    return (
        <Layout phoneno={'9000-888-922'}>
            {loading && <Loading />}
            <ContactUS />
        </Layout>
    )
}

export default contact