// pages/_middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.pathname === '/index.html') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
