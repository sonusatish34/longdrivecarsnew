// pages/sitemap.xml.js

function generateSiteMap() {
  return `
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap>
<loc>https://longdrivecarsnew-lime.vercel.app/hyderabad/sitemap.xml</loc>
</sitemap>
<sitemap>
<loc>https://longdrivecarsnew-lime.vercel.app/vizag/sitemap.xml</loc>
</sitemap>
<sitemap>
<loc>https://longdrivecarsnew-lime.vercel.app/vijayawada/sitemap.xml</loc>
</sitemap>
<sitemap>
<loc>https://longdrivecarsnew-lime.vercel.app/warangal/sitemap.xml</loc>
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
