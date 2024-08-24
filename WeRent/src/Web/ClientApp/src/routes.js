const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    SIGNUP_EMAIL_CONFIRM: "/auth/signup-email-confirm",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CONFIRM: "/auth/confirm",
    MAKE_HOME: "/auth/make-home",
  },

  ADMIN: {
    DASHBOARD: "/admin",
    ACCOUNTS: "/admin/Accounts",
    ACCOUNTSDETAILS:(id)=> `/admin/Accounts/${id}`,
    ACCOUNTSLISTDETAILS:(id)=> `/admin/Accounts/list/${id}`,
    ACCOUNTSLISTDETAILSEDIT:(id)=> `/admin/Accounts/list/${id}/edit`,
    LISTINGS: "/admin/Listings",
    SUPPORT: "/admin/Support",
    LESSORS: "/admin/Lessors",
    RENTERS: "/admin/Renters",
    BOOKINGS: "/admin/Bookings",
    RESERVATIONS: "/admin/Reservations",
    REPORTS: "/admin/Reports",
    MEMBERSHIPS: "/admin/Memberships",
    MANAGEMENT: "/admin/Management",
  },
  USER: {
    HOMEPAGE: "/user",
    DASHBOARD: "/user/Dashboard",
    LISTINGS: "/user/Listings",
    LISTINGSDETAILS: (id) => `/user/Listings/${id}`,
    LISTINGSEDIT: (id) => `/user/Listings/${id}/edit`,
    RENTALS: "/user/Rentals",
    REQUESTS: "/user/Requests",
    BOOKINGS: "/user/Bookings",
    INBOX: "/user/Inbox",
    CLIENTS: "/user/Clients",
    WISHLIST: "/user/Wishlist",
    CALENDAR: "/user/Calendar",
    BILLING: "/user/Billing",
    SUPPORT: "/user/Support",
    ADDLIST: "/user/add-list",
    PRODUCTDETAILS: (id) => `/user/product/${id}`,
    SUBSCRIPTION: "/user/subscription",


  },
};

export default ROUTES;
