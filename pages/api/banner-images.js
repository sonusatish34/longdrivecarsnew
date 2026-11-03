import { decryptFernetData } from '../../utils/crypto';

// In-memory cache to prevent hitting the backend API on every single client request
let cachedBannerPrices = null;
let lastBannerFetchTime = 0;
const BANNER_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours TTL

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const SECRET_KEY = process.env.LDC_SECRET_KEY;

  if (!SECRET_KEY) {
    console.error('Missing LDC_SECRET_KEY environment variable');
    return res.status(500).json({ message: 'Internal server configuration error' });
  }

  const now = Date.now();

  // Return cached version if still valid
  if (cachedBannerPrices && now - lastBannerFetchTime < BANNER_CACHE_TTL) {
    return res.status(200).json(cachedBannerPrices);
  }

  try {
    const response = await fetch('https://api.longdrivecars.com/l-site-dc/banner-images', {
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(10000), // 10s timeout
    });

    if (!response.ok) {
      throw new Error(`External banner API returned status ${response.status}`);
    }

    const payload = await response.json();
    
    // Decrypt the encrypted payload returned by the external backend
    const decryptedBanners = decryptFernetData(payload?.results, SECRET_KEY);

    if (!decryptedBanners) {
      throw new Error('Failed to decrypt banner payload');
    }

    // Update in-memory cache
    cachedBannerPrices = decryptedBanners;
    lastBannerFetchTime = now;

    // Cache header for browsers/CDNs (1 hour)
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json(decryptedBanners);
  } catch (error) {
    console.error('Error fetching/decrypting banner images:', error);

    // Fallback: If cache exists (even if expired), serve stale data on backend failure
    if (cachedBannerPrices) {
      console.warn('Serving stale banner cache due to upstream failure');
      return res.status(200).json(cachedBannerPrices);
    }

    return res.status(500).json({ 
      error: 'Failed to load banner images',
      results: [] 
    });
  }
}