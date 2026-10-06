export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { booking_id } = req.query;
  const authHeader = req.headers.authorization;

  try {
    const apiRes = await fetch(
      `https://dev.longdrivecars.com/l-admin-dc/booking-reviews?booking_id=${booking_id}`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': String(authHeader) || '',
        },
      }
    );

    const data = await apiRes.json();
    return res.status(apiRes.status).json(data);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to proxy request.' });
  }
}