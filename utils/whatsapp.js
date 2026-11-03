export function getWhatsAppUrl(phoneNumber, message = 'Hi\nI am looking for a car booking.') {
  const phone = String(phoneNumber || '').replace(/\D/g, '');
  const internationalPhone = phone.startsWith('91') ? phone : `91${phone}`;
  const query = new URLSearchParams({
    phone: internationalPhone,
    text: message,
  });
  return `https://api.whatsapp.com/send?${query.toString()}`;
}
