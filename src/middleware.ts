import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
import { NextRequest, NextResponse } from 'next/server';
import { decodedToken } from '@/token';
import { getToken } from './lib/token';
import { getLocale } from 'next-intl/server';

export default createMiddleware({
  // A list of all locales that are supported
  defaultLocale: 'ar',
  localePrefix,
  locales
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/(ar|en)', '/(ar|en)/:path*']
};

// export async function middleware(req: NextRequest) {

//   const locale = req.nextUrl.pathname.split('/')[1] || 'ar';
//   // Get the token from cookies
//   const token = req.cookies.get('accessToken')?.value;

//   if (!token) {
//     // If no token is found, redirect to login
//     return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.url));
//   }

//   try {
//     // Decode the token to get the user's role and token expiration
//     const decoded = await decodedToken(token);

//     if (!decoded || !decoded.userRole) {
//       // If no decoded data or no role found, redirect to login
//       return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.url));
//     }

//     const role = decoded.userRole;

//     // Check if the user is accessing an admin page without being an admin
//     if (req.nextUrl.pathname.startsWith('/admin') && role !== 'Administrator') {
//       return NextResponse.redirect(new URL('/user', req.url)); // Redirect to user page
//     }

//     // Check if the user is accessing a user page without being a user
//     if (req.nextUrl.pathname.startsWith('/user') && role !== 'Client') {
//       return NextResponse.redirect(new URL('/admin', req.url)); // Redirect to admin page
//     }
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     // If there's an error decoding the token, redirect to login
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   return NextResponse.next();
// }