export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { action, ...payload } = req.body || {};

  const targetUrl = action === 'validate-otp'
    ? 'https://api.longdrivecars.com/admin/otp-validate'
    : 'https://api.longdrivecars.com/admin/send-otp';

  try {
    const remoteRes = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await remoteRes.text();
    let data = {};

    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { raw: responseText };
    }

    return res.status(remoteRes.status).json(data);
  } catch (error) {
    return res.status(502).json({
      status: 'error',
      message: 'Unable to reach the authentication service.',
    });
  }
}
