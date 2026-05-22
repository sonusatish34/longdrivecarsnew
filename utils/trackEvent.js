// utils/fbTrack.js

export const trackEvent = async ({
  eventName,
  customData = {}
}) => {
  const eventId = `ldc_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

  await fetch('/api/fb-track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      event_name:eventName,
      event_id:eventId,
      event_source_url: window.location.href,
      custom_data:customData
    })
  });

  return eventId;
};