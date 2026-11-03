// pages/sitemap.xml.js

function generateSiteMap() {
  return `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>https://www.longdrivecars.com/other-pages-sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://www.longdrivecars.com/hyderabad/sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://www.longdrivecars.com/vizag/sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://www.longdrivecars.com/vijayawada/sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://www.longdrivecars.com/warangal/sitemap.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://www.longdrivecars.com/blog-sitemap.xml</loc>
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
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

  res.setHeader('Content-Type', 'text/xml');

  // Send the XML sitemap to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
