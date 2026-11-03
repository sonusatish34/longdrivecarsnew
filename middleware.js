import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.longdrivecars.com';
const REDIRECT_HOSTS = new Set([
  'longdrivecars.com',
  'longdrivecars.in',
  'www.longdrivecars.in',
  'longdrivecarsnew-lime.vercel.app',
]);

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = (request.headers.get('host') || url.host).split(':')[0].toLowerCase();
  const forwardedProtocol = request.headers.get('x-forwarded-proto');
  const isLocalHost = host === 'localhost' || host === '127.0.0.1';

  if (!isLocalHost && (
    REDIRECT_HOSTS.has(host) ||
    (url.protocol === 'http:' && forwardedProtocol !== 'https')
  )) {
    url.protocol = 'https:';
    url.hostname = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = url.pathname;
  }

  if (pathname === '/hyderabad' ||
      pathname === '/selfdrivecars_hyderabad' ||
      pathname === '/car_rentals_in_hyderabad' ||
      pathname === '/index.html') {
    url.pathname = '/';
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/attach&earn' || pathname.startsWith('/attach&earn/')) {
    url.pathname = pathname.replace('/attach&earn', '/attach-and-earn');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
