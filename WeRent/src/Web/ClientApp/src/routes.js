const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CONFIRM: "/auth/confirm",
  },

  ADMIN: {
    DASHBOARD: "/admin",
    ACCOUNTS: "/admin/Accounts",
    ACCOUNTSDETAILS: (id) => `/admin/Accounts/${id}`,
    ACCOUNTSLISTDETAILS: (id) => `/admin/Accounts/list/${id}`,
    ACCOUNTSLISTDETAILSEDIT: (id) => `/admin/Accounts/list/${id}/edit`,
    LISTINGS: "/admin/Listings",
    LISTINGSADD: "/admin/Listings/add-list",
    LISTINGSDETAILS: (id) => `/admin/Listings/${id}`,
    LISTINGSDETAILSEdit: (id) => `/admin/Listings/${id}/edit`,
    SUPPORT: "/admin/Support",
    LESSORS: "/admin/Lessors",
    RENTERS: "/admin/Renters",
    BOOKINGS: "/admin/Bookings",
    BOOKINGSDETAILS: (id) => `/admin/Bookings/${id}`,
    RESERVATIONS: "/admin/Reservations",
    REPORTS: "/admin/Reports",
    MEMBERSHIPS: "/admin/Memberships",
    INBOX: "/admin/Inbox",
    MASTERDATA: "/admin/master-data",
    PLANSADD: "/admin/master-data/add",
    CATEGORIES: "/admin/master-data/Categories",
    CATEGORYADD: "/admin/master-data/Categories/add",
    BANNERS: "/admin/master-data/Banners",
    BANNERSADD: "/admin/master-data/Banners/add",
    ADS: "/admin/master-data/Ads",
    ADSDETAILS: (id) => `/admin/master-data/Ads/${id}`,
  },
  USER: {
    HOMEPAGE: "/user",
    DASHBOARD: "/user/Dashboard",
    CATEGORIES: (id) => `/user/Categories?category=${id}`,
    LISTINGS: "/user/Listings",
    LISTINGSDETAILS: (id) => `/user/Listings/${id}`,
    LISTINGSEDIT: (id) => `/user/Listings/${id}/edit`,
    RENTALS: "/user/Rentals",
    REQUESTS: "/user/Requests",
    BOOKINGS: "/user/Bookings",
    BOOKINGSID: (id) => `/user/Bookings/${id}`,
    INBOX: "/user/Inbox",
    CLIENTS: "/user/Clients",
    WISHLIST: "/user/Wishlist",
    CALENDAR: "/user/Calendar",
    BILLING: "/user/Billing",
    SUPPORT: "/user/Support",
    ADDLIST: "/user/add-list",
    PRODUCTDETAILS: (id) => `/user/product/${id}`,
    PRODUCTDETAILSCHECKOUT: (id) => `/user/product/${id}/checkout`,
    SUBSCRIPTION: "/user/subscription",
    CHECKOUT: "/user/checkout",
    CHECKOUTID: (id) => `/user/checkout/${id}`,
    PROFILE: "/user/profile",
    WALLET: "/user/Wallet",
  },
  GUEST: {
    HOMEPAGE: "/",
    ALLPRODUCTS: `/Products`,
    PRODUCTS: (id) => `/Products?category=${id}`,
    PRODUCTSDETAILS: (id) => `/Products/${id}`,
    PROFILE: (id, id2) => `/Products/${id}/profile/${id2}`,
    ADDLISTING: "Add-Listing",
    WHOWEARE: "/Who-We-Are",
    HOWITWORKS: "/How-It-Works",
    PRICING: "/Pricing",
    CONTACTUS: "/Contact-Us",
  },
};

export default ROUTES;
