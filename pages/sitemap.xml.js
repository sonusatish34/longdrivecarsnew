// pages/sitemap.xml.js

function generateSiteMap() {
    return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
  <loc>http://localhost:3000/hyderabad/sitemap.xml</loc>
  </sitemap>
  <sitemap>
  <loc>http://localhost:3000/vizag/sitemap.xml</loc>
  </sitemap>
  <sitemap>
  <loc>http://localhost:3000/vijayawada/sitemap.xml</loc>
  </sitemap>
  <sitemap>
  <loc>http://localhost:3000/warangal/sitemap.xml</loc>
  </sitemap>
  </sitemapindex>
     `;
  }

  function SiteMap() {
    // This function doesn't need to return anything as it’s only used for the server-side logic
  }

  export async function getServerSideProps({ res }) {
    // Generate the XML sitemap with manually entered URLs
    const sitemap = generateSiteMap();

    // Set the correct header for XML content
    res.setHeader('Content-Type', 'text/xml');

    // Send the XML sitemap to the browser
    res.write(sitemap);
    res.end();
    return {
      props: {},
    };
  }

  export default SiteMap;
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

