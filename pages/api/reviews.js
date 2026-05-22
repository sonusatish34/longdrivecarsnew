export default async function handler(req, res) {
  try {
    const { car_owner_id } = req.query;

    const response = await fetch(
      `https://dev.longdrivecars.com/l-site-dc/car-reviews?car_owner_id=${car_owner_id}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}