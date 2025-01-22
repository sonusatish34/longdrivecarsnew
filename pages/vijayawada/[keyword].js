// pages/api/vijayawada/[keyword].js

function generateSiteMap(keyword) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://yourdomain.com/vijayawada</loc>
      </url>
      <url>
        <loc>https://yourdomain.com/vijayawada/${encodeURIComponent(keyword)}</loc>
      </url>
      <url>
        <loc>https://yourdomain.com/vijayawada/${encodeURIComponent(keyword)}/details</loc>
      </url>
      <url>
        <loc>https://yourdomain.com/vijayawada/${encodeURIComponent(keyword)}/reviews</loc>
      </url>
      <url>
        <loc>https://yourdomain.com/vijayawada/${encodeURIComponent(keyword)}/contact</loc>
      </url>
    </urlset>
  `;
}

export default function handler(req, res) {
  const { keyword } = req.query;

  // Generate the sitemap XML dynamically based on the keyword
  const sitemap = generateSiteMap(keyword);

  // Set the correct header for XML content
  res.setHeader('Content-Type', 'text/xml');
  
  // Send the XML sitemap to the browser
  res.status(200).send(sitemap);
}
