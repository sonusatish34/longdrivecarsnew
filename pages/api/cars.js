import { decryptFernetData } from '@/utils/crypto';

export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://api.longdrivecars.com/l-site-dc/cars-info?location=hyderabad',
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );

    const data = await response.json();

    // 🔐 Decrypt here using server env key
    const decryptedCars = decryptFernetData(
      data?.data?.results,
      process.env.LDC_SECRET_KEY
    );

    res.status(200).json({
      ...data,
      data: {
        ...data.data,
        results: decryptedCars || [],
      },
    });

  } catch (error) {
    console.error("API ERROR:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}