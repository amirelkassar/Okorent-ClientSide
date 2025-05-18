import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";
import { NextRequest, NextResponse } from "next/server";
import { authDecodedToken } from "@/token";
import ROUTES from "./routes";

export const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const locale = response.headers.get(
    "x-middleware-request-x-next-intl-locale"
  );

  const { nextUrl } = request;
  const token = request.cookies.get("accessToken")?.value;

  const { isAdminRoute, isAuthRoute, isClientRoute, isPremiumRoute } =
    getRoutesStatus(nextUrl.pathname);

  // Redirect unauthenticated users to the login page for protected routes
  if (
    !token &&
    (isClientRoute || isAdminRoute || isPremiumRoute) &&
    !isAuthRoute
  ) {
    const loginUrl = new URL(
      `/${locale || "en"}${ROUTES.AUTH.LOGIN}`,
      nextUrl.origin
    );
    return NextResponse.redirect(loginUrl);
  }

  const decoded = token ? await authDecodedToken() : null;

  // If token is invalid, clear cookies and return
  if (!decoded) {
    response.cookies.delete("accessToken");
    return response;
  }

  const { userRole, userID, isPremium } = decoded;

  // Redirect logged-in users from auth pages
  if (isAuthRoute) {
    const redirectTo = userRole === "User" ? ROUTES.USER.HOMEPAGE : ROUTES.HOME;
    const redirectUrl = new URL(
      `/${locale || "en"}${redirectTo}`,
      nextUrl.origin
    );
    return NextResponse.redirect(redirectUrl);
  }

  // Role-based access control
  if (
    (userRole === "User" && isAdminRoute) ||
    (userRole === "Administrator" && isClientRoute)
  ) {
    const forbiddenUrl = new URL(`/${locale || "en"}/404`, nextUrl.origin);
    return NextResponse.redirect(forbiddenUrl);
  }

  // Premium route protection - redirect non-premium users to subscription page
  if (isPremiumRoute && !isPremium) {
    const subscriptionUrl = new URL(
      `/${locale || "en"}${ROUTES.USER.SUBSCRIPTION}`,
      nextUrl.origin
    );
    return NextResponse.redirect(subscriptionUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // EXCLUDE STATIC FILES
    "/", // MATCH HOME PAGE
    "/(api|trpc)(.*)", // MATCH API ROUTES
    "/(ar|en)/:path*", // MATCH ROUTES WITH LOCALES
  ],
};

const AUTH_ROUTES = Object.values(ROUTES.AUTH);
const CLIENT_ROUTES = "/user";
const ADMIN_ROUTES = "/admin";
const PREMIUM_ROUTES = "/premium";

function getRoutesStatus(path: string) {
  if (!path)
    return {
      isAuthRoute: false,
      isClientRoute: false,
      isAdminRoute: false,
      isPremiumRoute: false,
    };

  const pathname = path.replace(/^\/(ar|en)(\/|$)/, "/");
  return {
    isAuthRoute: AUTH_ROUTES.includes(pathname),
    isClientRoute: pathname.startsWith(CLIENT_ROUTES),
    isAdminRoute: pathname.startsWith(ADMIN_ROUTES),
    isPremiumRoute: pathname.startsWith(PREMIUM_ROUTES),
  };
}
