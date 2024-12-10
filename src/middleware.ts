import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
import { NextRequest, NextResponse } from 'next/server';
import { decodedToken } from '@/token';
import { getToken } from './lib/token';
import { getLocale } from 'next-intl/server';

export default createMiddleware({
  // A list of all locales that are supported
  defaultLocale: 'en',
  localePrefix,
  locales
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};

