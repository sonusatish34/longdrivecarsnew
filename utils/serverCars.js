import { decryptFernetData } from './crypto';

const CACHE_TTL = 10 * 60 * 1000;
const STALE_TTL = 15 * 60 * 1000;
const carCache = new Map();
const supportedLocations = new Set(['hyderabad', 'vizag', 'warangal', 'vijayawada']);

function getPublicCarFields(car) {
  return {
    maker_model: car.maker_model,
    price_24_hours: car.price_24_hours ?? null,
    car_image_front_view: car.car_image_front_view || car.car_image_front_view_duplicate || '/tempimg.jpg',
    car_image_front_view_duplicate: car.car_image_front_view_duplicate || car.car_image_front_view || '/tempimg.jpg',
    car_image_back_view: car.car_image_back_view || car.car_image_back_view_duplicate || '/tempimg.jpg',
    car_image_back_view_duplicate: car.car_image_back_view_duplicate || car.car_image_back_view || '/tempimg.jpg',
    car_image_car_left_view: car.car_image_car_left_view || car.car_image_car_left_view_duplicate || '/tempimg.jpg',
    car_image_car_left_view_duplicate: car.car_image_car_left_view_duplicate || car.car_image_car_left_view || '/tempimg.jpg',
    car_image_reading_view: car.car_image_reading_view || car.car_image_reading_view_duplicate || '/tempimg.jpg',
    car_image_reading_view_duplicate: car.car_image_reading_view_duplicate || car.car_image_reading_view || '/tempimg.jpg',
    fuel_type: car.fuel_type || '',
    transmission_type: car.transmission_type || '',
    seater: car.seater || '',
    vehicle_color: car.vehicle_color || '',
    manufacture_date: car.manufacture_date || '',
  };
}

export async function getCarsByLocation(location) {
  const normalizedLocation = String(location || '').toLowerCase();
  if (!supportedLocations.has(normalizedLocation)) {
    throw new Error(`Unsupported car inventory location: ${normalizedLocation}`);
  }

  const cached = carCache.get(normalizedLocation);
  if (cached && Date.now() - cached.updatedAt < CACHE_TTL) {
    return cached.cars;
  }

  try {
    const response = await fetch(
      `https://api.longdrivecars.com/l-site-dc/cars-info?location=${encodeURIComponent(normalizedLocation)}`,
      { signal: AbortSignal.timeout(10000) }
    );
    if (!response.ok) {
      throw new Error(`Car inventory API returned ${response.status}`);
    }

    const payload = await response.json();
    const decryptedCars = decryptFernetData(payload?.data?.results, process.env.LDC_SECRET_KEY);
    if (!Array.isArray(decryptedCars)) {
      throw new Error('Car inventory API returned invalid car data');
    }

    const cars = decryptedCars
      .filter((car) => car && typeof car.maker_model === 'string')
      .map(getPublicCarFields);
    carCache.set(normalizedLocation, { cars, updatedAt: Date.now() });
    return cars;
  } catch (error) {
    if (cached && Date.now() - cached.updatedAt < STALE_TTL) {
      console.warn(`Using cached ${normalizedLocation} car inventory after API failure:`, error);
      return cached.cars;
    }
    throw error;
  }
}

export async function getCarBySlug(location, slug) {
  const normalizedSlug = String(slug || '')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  const cars = await getCarsByLocation(location);
  return cars.find((car) =>
    car.maker_model.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim() === normalizedSlug
  ) || null;
}

export function getCarModelSlug(model) {
  return String(model || '').toLowerCase().replace(/\s+/g, '-');
}
