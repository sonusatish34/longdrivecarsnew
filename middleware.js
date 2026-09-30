import { NextResponse } from 'next/server';

export function middleware(request) {
  const ua = request.headers.get('user-agent') || '';

  const isAndroid = /android/i.test(ua);

  const isIOS =
    /iPad|iPhone|iPod/i.test(ua) ||
    (
      /Macintosh/i.test(ua) &&
      request.headers.get('sec-ch-ua-mobile') === '?1'
    );

  if (isIOS) {
    return NextResponse.redirect(
      'https://apps.apple.com/in/app/long-drive-cars-car-rental/id6466695391',
      302
    );
  }

//   https://apps.apple.com/in/app/long-drive-cars-car-rental/id6466695391

  if (isAndroid) {
    return NextResponse.redirect(
      'https://play.google.com/store/apps/details?id=com.long_drive_cars.car&pcampaignid=web_share',
      302
    );
  }
//   https://play.google.com/store/apps/details?id=com.long_drive_cars.car&pcampaignid=web_share

  return NextResponse.redirect(
    'https://www.longdrivecars.com/',
    302
  );
}

export const config = {
  matcher: ['/app'],
};