// pages/api/fb-track.js

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    try {
        const { event_name, event_id, event_source_url, custom_data } = req.body;

        const payload = {
            data: [{
                event_name: event_name, // ✅ now correct
                event_time: Math.floor(Date.now() / 1000),
                action_source: "website",
                event_id: event_id,
                event_source_url: event_source_url,
                user_data: {
                    client_ip_address:
                        req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
                        req.socket?.remoteAddress ||
                        '',
                    client_user_agent: req.headers['user-agent'] || '',
                },
                custom_data: custom_data || {}
            }]
        };
        // Only for local testing
        if (false) {
            payload.test_event_code = "TEST6741";
        }

        const accessToken = process.env.FB_ACCESS_TOKEN;
        const TokenId = process.env.META_PIXEL_ID;

        const fbRes = await fetch(
            `https://graph.facebook.com/v18.0/${TokenId}/events?access_token=${accessToken}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        const result = await fbRes.json();

        if (!fbRes.ok) {
            return res.status(fbRes.status).json(result);
        }

        return res.status(200).json(result);

    } catch (err) {
        console.error("FB Error:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}