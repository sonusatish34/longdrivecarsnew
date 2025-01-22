// // pages/sitemap.xml.js

// function generateSiteMap() {
//     return `
//     <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <sitemap>
//   <loc>https://longdrivecarsnew-lime.vercel.app/hyderabad/sitemap.xml</loc>
//   </sitemap>
//   <sitemap>
//   <loc>https://longdrivecarsnew-lime.vercel.app/vizag/sitemap.xml</loc>
//   </sitemap>
//   <sitemap>
//   <loc>https://longdrivecarsnew-lime.vercel.app/vijayawada/sitemap.xml</loc>
//   </sitemap>
//   <sitemap>
//   <loc>https://longdrivecarsnew-lime.vercel.app/warangal/sitemap.xml</loc>
//   </sitemap>
//   </sitemapindex>
//      `;
//   }

//   function SiteMap() {
//     // This function doesn't need to return anything as it’s only used for the server-side logic
//   }

//   export async function getServerSideProps({ res }) {
//     // Generate the XML sitemap with manually entered URLs
//     const sitemap = generateSiteMap();

//     // Set the correct header for XML content
//     res.setHeader('Content-Type', 'text/xml');

//     // Send the XML sitemap to the browser
//     res.write(sitemap);
//     res.end();
//     return {
//       props: {},
//     };
//   }

//   export default SiteMap;
// //pages/sitemap.xml.js
// const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

// function generateSiteMap(cars) {
//     return `<?xml version="1.0" encoding="UTF-8"?>
//      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//        <!--We manually set the two URLs we know already-->
//        <url>
//          <loc>https://jsonplaceholder.typicode.com</loc>
//        </url>
//        <url>
//          <loc>https://jsonplaceholder.typicode.com/guide</loc>
//        </url>
//        ${cars?.map((item) => {
//                 return `
//          <url>
//              <loc>${`${EXTERNAL_DATA_URL}/${item?.maker_model}`}</loc>
//          </url>
//        `;
//             })
//             .join('')}
//      </urlset>
//    `;
// }

// function SiteMap() {
//     // getServerSideProps will do the heavy lifting
// }

// export async function getServerSideProps({ res }) {
//     // We make an API call to gather the URLs for our site
//     const request = await fetch(EXTERNAL_DATA_URL);
//     const posts = await request.json();
//     const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=hyderabad`);
//     const items = await response.json();
//     const cars = items?.data?.results;
//     // We generate the XML sitemap with the posts data
//     const sitemap = generateSiteMap(cars);
//     console.log(sitemap, "sitemap");

//     res.setHeader('Content-Type', 'text/xml');
//     // we send the XML to the browser
//     res.write(cars);
//     res.end();

//     return {
//         props: {},
//     };
// }

// export default SiteMap;


// pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

function generateSiteMap(cars) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://jsonplaceholder.typicode.com</loc>
       </url>
       <url>
         <loc>https://jsonplaceholder.typicode.com/guide</loc>
       </url>
       ${cars?.map((item) => {
        return `
         <url>
             <loc>${`https://longdrivecarsnew-lime.vercel.app/hyderabad/car-rental/${(item?.maker_model).toLowerCase().replace(" ", "-")}`}</loc>
         </url>
       `;
    })
            .join('')}
     </urlset>
   `;
}
// href={`${((branch?.length ? branch : "") +"/car-rental/" +item.maker_model).toLowerCase().replace(/ /g, "-")}`}

function SiteMap() {
    // This will be handled by getServerSideProps, no need for content in the component itself
}

export async function getServerSideProps({ res }) {
    // Fetch the car data
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=hyderabad');
    const items = await response.json();
    const cars = items?.data?.results;

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
