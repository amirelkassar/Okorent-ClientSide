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

  console.log('🔍 [MIDDLEWARE] Route status:', { isAdminRoute, isAuthRoute, isClientRoute, isPremiumRoute });

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

  console.log('🔍 [MIDDLEWARE] decoded:', decoded);

  // If token is invalid, clear cookies and return
  if (!decoded) {
    response.cookies.delete("accessToken");
    return response;
  }

  const { userRole,  membershipId } = decoded;

  // Log membership information for debugging
  if (userRole === "User") {
  
    // MembershipId "3" = Premium, MembershipId "1" = Free
    const isPremiumUser = membershipId === "1";
   
    if (isPremiumUser && isClientRoute && nextUrl.pathname.includes('/user')) {
      console.log("🚀 Redirecting premium user from /user to /premium routes");
      const premiumPath = nextUrl.pathname.replace('/user', '/premium');
      const premiumUrl = new URL(premiumPath, nextUrl.origin);
      return NextResponse.redirect(premiumUrl);
    }
    
    if (!isPremiumUser && nextUrl.pathname.includes('/premium')) {
      console.log("❌ Redirecting non-premium user from /premium to subscription");
      const subscriptionUrl = new URL(
        `/${locale || "en"}${ROUTES.USER.SUBSCRIPTION}`,
        nextUrl.origin
      );
      return NextResponse.redirect(subscriptionUrl);
    }
    
    if (isPremiumUser && isPremiumRoute) {
      console.log("✅ Premium user accessing premium route - allowing");
    }
  }

  // Redirect logged-in users from auth pages
  if (isAuthRoute) {
    let redirectTo;
    if (userRole === "User") {
      // For premium users (membershipId = "3"), redirect to premium homepage
      const isPremiumUser = membershipId === "1";
      redirectTo = isPremiumUser ? ROUTES.PREMIUM.HOMEPAGE : ROUTES.USER.HOMEPAGE;
    } else {
      redirectTo = ROUTES.HOME;
    }
    
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
