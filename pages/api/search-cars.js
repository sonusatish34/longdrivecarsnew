import { getCarsByLocation } from '@/utils/serverCars';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ results: [], error: 'Method not allowed' });
  }

  try {
    const searchKey = Array.isArray(req.query.search_key)
      ? req.query.search_key[0]
      : String(req.query.search_key || '');
    const location = Array.isArray(req.query.location)
      ? req.query.location[0]
      : String(req.query.location || 'hyderabad');

    if (!searchKey.trim()) {
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
      return res.status(200).json({ results: [] });
    }

    const cars = await getCarsByLocation(location);
    const normalizedSearch = searchKey.trim().toLowerCase();

    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({
      results: cars.filter((car) =>
        car.maker_model.toLowerCase().includes(normalizedSearch)
      ),
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return res.status(502).json({
      results: [],
      error: "Failed to fetch cars",
    });
  }
}