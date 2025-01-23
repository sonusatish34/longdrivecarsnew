// pages/api/vijayawada/[keyword].js

async function generateSiteMap(keyword, city) {
    // Fetch the car data from the API
    const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=${city}`);
    const items = await response.json();
    const cars = items?.data?.results || [];
  
    // Start the XML sitemap with the basic structure
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">  
    `;
  
    // Loop through the car data and add additional URLs for each car
    cars.forEach(car => {
      const carSlug = encodeURIComponent(car.maker_model.replace(/ /g, "-").toLowerCase()); // Assuming 'name' is a property in the car object
      sitemap += `
        <url>
          <loc>http://localhost:3000/hyderabad/car-rental/${encodeURIComponent(keyword)}_${carSlug}</loc>
        </url>
      `;
    });
  
    // Close the XML tag
    sitemap += '</urlset>';
  
    return sitemap;
  }
  
  export default async function handler(req, res) {
    const { keyword } = req.query;
  
    // Assume you have some logic to determine the city based on the keyword
    const city = 'hyderabad'; // This could be dynamic, depending on the keyword
  
    // Generate the sitemap XML dynamically based on the keyword and city
    const sitemap = await generateSiteMap(keyword, city);
  
    // Set the correct header for XML content
    res.setHeader('Content-Type', 'text/xml');
    
    // Send the XML sitemap to the browser
    res.status(200).send(sitemap);
  }
  