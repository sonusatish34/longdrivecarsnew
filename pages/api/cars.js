import { getCarsByLocation } from '@/utils/serverCars';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const location = String(req.query.location || 'hyderabad').toLowerCase();
  try {
    const cars = await getCarsByLocation(location);
    res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ results: cars });
  } catch (error) {
    console.error("API ERROR:", error);
    return res.status(502).json({ error: 'Failed to fetch car inventory' });
  }
}