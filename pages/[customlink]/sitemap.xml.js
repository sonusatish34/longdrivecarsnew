
// const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

// function generateSiteMap(cars) {
//     return `
//     <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         <sitemap>
//             <loc>kook</loc>
//         </sitemap>

//        ${cars?.map((item) => {
//         return `
//         <sitemap>
//             <loc>${`http://localhost:3000/hyderabad/${item}.xml`}</loc>
//         </sitemap>
//        `;
//     })
//             .join('')}
//      </sitemapindex>
//    `;
// }

// function SiteMap() {
//     // This will be handled by getServerSideProps, no need for content in the component itself
// }

// export async function getServerSideProps({ res }) {
//     // Fetch the car data
//     const response = await fetch(EXTERNAL_DATA_URL);
//     const items = await response.json();
//     // const cars = ['book-a-rental-car-in-hyderabad','sedan-cars-for-rent-in-hyderabad','cars-rental-services-in-hyderabad'];
//     const cars = [
//         "book-a-rental-car-in-hyderabad",
//         "book-best-rental-car-in-hyderabad-at-low-prices",
//         "self-drive-cars-near-me-in-hyderabad-no-deposit-unlimited-kilometers",
//         "sedan-cars-for-rent-in-hyderabad",
//         "sedan-car-rental-in-hyderabad",
//         "cars-rental-services-in-hyderabad",
//         "lowest-cost-car-rental-services-in-hyderabad",
//         "suv-cars-for-rent-in-hyderabad",
//         "book-best-rental-car-for-a-month-in-hyderabad-at-low-prices",
//         "book-a-brezza-car-for-1-month-on-rent-in-hyderabad",
//         "self-drive-cars-hyderabad",
//         "car-rental-services",
//         "car-rental-services-in-hyderabad",
//         "car-for-rent-in-hyderabad",
//         "rental-cars-in-hyderabad",
//         "rent-a-car-in-hyderabad",
//         "car-rentals-in-hyderabad",
//         "self-drive-cars-hyderabad",
//         "car-rental-services",
//         "car-rental-services-in-hyderabad",
//         "car-for-rent-in-hyderabad",
//         "rental-cars-in-hyderabad",
//         "rent-a-car-in-hyderabad",
//         "car-rentals-in-hyderabad",
//         "self-drive-cars-in-hyderabad",
//         "self-drive-cars-kukatpally",
//         "self-drive-cars-near-me",
//         "best-self-drive-car-rental-hyderabad",
//         "best-self-drive-car-in-hyderabad",
//         "car-rental-hyderabad",
//         "rental-cars-hyderabad",
//         "car-on-rent-hyderabad",
//         "self-drive-cars-in-madhapur",
//         "self-drive-cars-in-dilshuknagar",
//         "self-drive-cars-in-uppal",
//         "self-drive-cars-in-ecil",
//         "self-drive-cars-in-gachibowli",
//         "car-rental-in-uppal"
//     ]
//         ;

//     // Generate the XML sitemap
//     const sitemap = generateSiteMap(cars);

//     // Set the response header for XML
//     res.setHeader('Content-Type', 'text/xml');

//     // Write the generated sitemap to the response
//     res.write(sitemap);
//     res.end();

//     return {
//         props: {}, // No page props are needed for the sitemap
//     };
// }

// export default SiteMap;
const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

function generateSiteMap(cars, domain) {
    return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
            <loc>${`https://${domain}/kook`}</loc>
        </sitemap>
    
       ${cars?.map((item) => {
        return `
        <sitemap>
            <loc>${`https://${domain}/hyderabad/${item}.xml`}</loc>
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

export async function getServerSideProps({ req, res }) {
    // Check if the request is from the .com domain
    const isComDomain = req.headers.host.includes('.app');

    // If not .com domain, don't generate sitemap
    if (!isComDomain) {
        res.setHeader('Content-Type', 'text/plain');
        res.write('Sitemap is only available for the .com domain.');
        res.end();
        return { props: {} };
    }

    // Fetch the car data
    const response = await fetch(EXTERNAL_DATA_URL);
    const items = await response.json();
    const cars = [
        "book-a-rental-car-in-hyderabad",
        "book-best-rental-car-in-hyderabad-at-low-prices",
        "self-drive-cars-near-me-in-hyderabad-no-deposit-unlimited-kilometers",
        "sedan-cars-for-rent-in-hyderabad",
        "sedan-car-rental-in-hyderabad",
        "cars-rental-services-in-hyderabad",
        "lowest-cost-car-rental-services-in-hyderabad",
        "suv-cars-for-rent-in-hyderabad",
        "book-best-rental-car-for-a-month-in-hyderabad-at-low-prices",
        "book-a-brezza-car-for-1-month-on-rent-in-hyderabad",
        "self-drive-cars-hyderabad",
        "car-rental-services",
        "car-rental-services-in-hyderabad",
        "car-for-rent-in-hyderabad",
        "rental-cars-in-hyderabad",
        "rent-a-car-in-hyderabad",
        "car-rentals-in-hyderabad",
        "self-drive-cars-hyderabad",
        "car-rental-services",
        "car-rental-services-in-hyderabad",
        "car-for-rent-in-hyderabad",
        "rental-cars-in-hyderabad",
        "rent-a-car-in-hyderabad",
        "car-rentals-in-hyderabad",
        "self-drive-cars-in-hyderabad",
        "self-drive-cars-kukatpally",
        "self-drive-cars-near-me",
        "best-self-drive-car-rental-hyderabad",
        "best-self-drive-car-in-hyderabad",
        "car-rental-hyderabad",
        "rental-cars-hyderabad",
        "car-on-rent-hyderabad",
        "self-drive-cars-in-madhapur",
        "self-drive-cars-in-dilshuknagar",
        "self-drive-cars-in-uppal",
        "self-drive-cars-in-ecil",
        "self-drive-cars-in-gachibowli",
        "car-rental-in-uppal"
    ];

    // Generate the XML sitemap
    const sitemap = generateSiteMap(cars, 'yourdomain.com');  // Replace 'yourdomain.com' with the actual domain

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
