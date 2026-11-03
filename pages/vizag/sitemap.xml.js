import { getCarsByLocation } from '@/utils/serverCars';

function generateSiteMap(cars) {
    return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.longdrivecars.com/vizag</loc>
            <changefreq>monthly</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/vizag/about</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/vizag/contact.html</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/vizag/get-near-by-cars</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/vizag/explore-self-drive-cars</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        

       ${cars?.map((item) => {
        return `

        <url>
            <loc>${`https://www.longdrivecars.com/vizag/car-rental/${item?.maker_model.replaceAll(' ', '-').toLowerCase()}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
        </url>
       `;
    })
            .join('')}
     </urlset>
   `;
}

function SiteMap() {
    // This will be handled by getServerSideProps, no need for content in the component itself
}

export async function getServerSideProps({ res }) {
    let cars = [];
    try {
        cars = await getCarsByLocation('vizag');
    } catch (error) {
        console.error('Unable to load Vizag cars for sitemap:', error);
    }

    const sitemap = generateSiteMap(cars)

    // Generate the XML sitemap

    // Set the response header for XML
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

    res.setHeader('Content-Type', 'text/xml');

    // Write the generated sitemap to the response
    res.write(sitemap);
    res.end();

    return {
        props: {}, // No page props are needed for the sitemap
    };
}

export default SiteMap;
