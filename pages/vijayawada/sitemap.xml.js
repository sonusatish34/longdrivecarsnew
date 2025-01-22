
const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

function generateSiteMap(cars) {
    return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>kook</loc>
        </sitemap>
    
       ${cars?.map((item) => {
        return `
        <sitemap>
            <loc>${`https://longdrivecarsnew-lime.vercel.app/vijayawada/${item}.xml`}</loc>
        </sitemap>
       `;
    })
            .join('')}
     </sitemapindex>
   `;
}

function SiteMap() {
    // This will be handled by getServerSideProps, no need for content in the component itself
}

export async function getServerSideProps({ res }) {
    // Fetch the car data
    const response = await fetch(EXTERNAL_DATA_URL);
    const items = await response.json();
    const cars = ['book-a-rental-car-in-hyderabad','sedan-cars-for-rent-in-hyderabad','cars-rental-services-in-hyderabad'];

    // Generate the XML sitemap
    const sitemap = generateSiteMap(cars);

    // Set the response header for XML
    res.setHeader('Content-Type', 'text/xml');

    // Write the generated sitemap to the response
    res.write(sitemap);
    res.end();

    return {
        props: {}, // No page props are needed for the sitemap
    };
}

export default SiteMap;
