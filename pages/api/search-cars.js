import { decryptFernetData } from '@/utils/crypto';

export default async function handler(req, res) {
  try {
    const { search_key = "", location = "hyderabad" } = req.query;

    if (!search_key.trim()) {
      return res.status(200).json({ results: [] });
    }

    const response = await fetch(
      `https://api.longdrivecars.com/l-site-dc/cars-info?location=${location}&search_key=${search_key}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    // 🔐 Decrypt on server (SAFE)
    const decryptedCars = decryptFernetData(
      data?.data?.results,
      process.env.LDC_SECRET_KEY
    );

    return res.status(200).json({
      results: decryptedCars || [],
    });

  } catch (error) {
    console.error("API ERROR:", error);
    return res.status(500).json({
      results: [],
      error: "Failed to fetch cars",
    });
  }
}