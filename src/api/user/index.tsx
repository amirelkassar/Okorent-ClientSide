import { buildQuery } from "@/src/lib/utils";

export const user = {
  addListing: {
    base: "/Product",
    edit_listing: (id: any) => `/Product/${id}`,
    category: "/Category",
    subCategory_by_category: (id: any) => `/SubCategory/list?ParentId=${id}`,
  },
  register: {
    base: "/User/register",
  },
  product: {
    base: (queries: any) => buildQuery("/Product", queries),
    my_products: (queries: any) => buildQuery("/Product/my-products", queries),
    getById: (id: any) => `/Product/${id}`,
    upDateToOnlineById: (id: any) => `/Product/${id}/availability`,
    upDateManyToOnlineById: `/Product/update products availabilty`,
    getMyProductsById: (id: any) => `/Product/my-product/${id}`,
    favoriteProducts: `/FavouriteProduct`,
    DeleteFavoriteProducts: (id: any) => `/FavouriteProduct/${id}`,
    DeleteManyProduct: `/Product/DeleteMyProducts`,
    barcode_my_products: "Barcode/generate-product-barcode",
  },
  information: {
    base: (id: any) => `/User/${id}`,
    user_edit: `/User`,
    ProductsOrder: (id: any) => `/User/User-Order-Products/${id}`,
    Header_Dashboard: "/UserDashboard/User-Get-Dashboard",
    Ongoing_Rentals: "/UserDashboard/User-Get-Ongoing-Rentals",
    Vacation: "/User/UserVcation",
    End_Vacation: "/User/User-End-Vcation",
  },
  stock: {
    base: "/Stock",
    actions: {
      edit: (id: any) => `/Stock/${id}`,
    },
  },
  order: {
    base: "/BookingOrder/Direct-Order",
    booking: {
      i_rent: (queries: any) => buildQuery("/BookingOrder", queries),
      i_rent_card: (queries: any) =>
        buildQuery("/BookingOrder/BookingOrdersCarts", queries),
      i_rentOut: (queries: any) => buildQuery("/BookingOrder", queries),
      changeStatusById: (id: any) => `/BookingOrder/OrderStatus/${id}`,
      changeStatusByIds: `/BookingOrder/UpdateOrdersStatus`,
    },
    getById: (id: any) => `/BookingOrder/${id}`,
    order_tracker: (id: any) => `/OrderTracker/${id}`,
    cancel_iRent: `/OrderRequest/Cancel Order Request`,
    cancel_iRent_many: `/OrderRequest/Cancel Orders Request`,
    cancel_iRent_out: `/OrderRequest/Cancel Order Response`,
    refund_iRent: `/OrderRequest/Refund Order Request`,
    refunds_iRent: `/OrderRequest/Refund Orders Request`,
    refund_iRent_out: `/OrderRequest/Refund Order Response`,
    refunds_iRent_out: `/OrderRequest/Refund Orders Response`,
    reject_iRent: `/OrderRequest/Reject Order`,
    rejects_iRent: `/OrderRequest/Reject Orders`,
    review: {
      base: "/ProductReviews",
      getByID: (id: any) => `/ProductReviews/${id}`,
    },
    reviewUser: {
      base: "/UserReviews",
      getByID: (id: any) => `/UserReviews/${id}`,
    },
    barcode: "Barcode/generate",
  },
  user: {
    getByID: (id: any) => `User/${id}`,
  },
  MyProfile: {
    base: "/MyProfile",
    reviews: `/MyProfile/Reviews About Me`,
    ImageUpdate: "/MyProfile/Image",
    RecentActivities: "/MyProfile/My Recent Activities",
  },
};

export const admin = {
  Home: {
    DashboardCount: "/AdminDashBoard/Get-Users-Overview",
    performace_year: "/AdminDashBoard/Get-Monthly-Performace-Orders",
    performace_weekly: "/AdminDashBoard/Get-Weekly-Performace-Orders",
    performace_month: "/AdminDashBoard/Get-Daily-Performace-Orders",
  },
  Category: {
    base: "/Category",
    Category_ID: (id: any) => `/Category/${id}`,
  },
  SubCategory: {
    base: "/SubCategory",
    SubCategory_ID: (id: any) => `/SubCategory/${id}`,
    subCategory_by_category: (id: any) => `/SubCategory/list?ParentId=${id}`,
  },
  Accounts: {
    base: (queries: any) => buildQuery("/AdminManageUser", queries),
    AccountsID: (id: any) => `/AdminManageUser/${id}`,
    CreateAccounts: `/AdminManageUser`,
    DeActivate: "/AdminManageUser/deactivate",
    DeActivateMany: "/AdminManageUser/Bulk-Deactivate",
    Activate: "/AdminManageUser/Reactivate",
    DeleteManyAccounts: "/AdminManageUser/DeleteUsers",
    UpdateUserProfile: "/AdminManageUser/UpdateUserProfile",
    UpdateImageUserProfile: "/AdminManageUser/UpdateUserImage",
    ActiveManyUser: "/AdminManageUser/Bulk-Reactivate",
    Verification: "/AdminManageUser/Verification",
    Verification_Many: "/AdminManageUser/Bulk-Verification",
  },
  Account_Dashboard: {
    base: (id: any) => `/AdminGetUserDashBoard/${id}`,
    Transactions: (queries: any) =>
      buildQuery(
        `/AdminGetUserDashBoard/Admin-Get-UserRecentTransactions`,
        queries
      ),
    Rentals: (id: any) =>
      `/AdminGetUserDashBoard/Get-Monthly-Performace-Orders-ForUser/${id}`,
    Inventory: (id: any) =>
      `/AdminGetUserDashBoard/Admin-Get-InventoryAllocation-ForUser/${id}`,
  },
  product: {
    base: (queries: any) => buildQuery("/AdminProduct", queries),
    getById: (id: any) => `/AdminProduct/${id}`,
    DeleteManyProducts: `/AdminProduct/Delete-Products`,
    productUserOrder: (id: any) => `/AdminProduct/User-Order-Products/${id}`,
    quick_edit: `/AdminProduct/Update-Products`,
  },
  Stocks: {
    base: (id: any) => `/AdminUserStock/${id}`,
    add: `/AdminUserStock`,
  },
  ProductReviews: {
    base: (id: any) => `/AdminProductReview/${id}`,
    getByID: (id: any) => `/AdminProductReview/${id}`,
    Update: "/AdminProductReview",
  },
  userReview: {
    base: (id: any) => `/AdminUserReview/${id}`,
    delete: (id: any) => `/AdminUserReview/${id}`,
    Update: "/AdminUserReview",
  },
  Bookings: {
    base: (queries: any) => buildQuery("/AdminOrder", queries),
    BookingID: (id: any) => `/AdminOrder/${id}`,
    UpdateOrder: `/AdminOrder`,
    DeleteManyOrders: "/AdminOrder/DeleteOrders",
  },
  Invoices: {
    base: (queries: any) =>
      buildQuery("/AdminManageInvoices/GetAllInvoices", queries),
    delete: "/AdminManageInvoices/DeleteInvoices",
  },
  Notes: {
    get_all: (queries: any) =>
      buildQuery("/AdminNote/Admin-GetAll-Notes", queries),
    get_by_id: (queries: any) =>
      buildQuery("/AdminNote/Get-Note-ByID", queries),
    notes_id: (id: any) => `/AdminNote/${id}`,
    create: "/AdminNote",
    delete_bulk: "/AdminNote/DeleteNote-ForSpecificUsers",
    delete_group: "/AdminNote/DeleteNotes",
  },
};

export const notifications = {
  base: (queries: any) => buildQuery("/notification", queries),
  list: (queries: any) => buildQuery("/notification/list", queries),
  actions: {
    makeItRead: "/Notification/read",
    makeItReadAll: "/Notification/read-list",
    delete: (id: any) => `/notification?id=${id}`,
  },
};

export const Support = {
  get_all: (queries: any) =>
    buildQuery("/Tickets/User-GetAll-Tickets", queries),
  get_by_id: (id: any) => `/Tickets/User-Get-Ticket/${id}`,
  create_guest: "/Tickets/Guest-Create",
  reply_guest: "/Tickets/Guest-Reply",
  create_user: "/Tickets/User-Create",
  reply_user: "/Tickets/User-Reply",
  delete: `/Tickets/User-Delete`,
  solved: "/Tickets/User-End-Ticket",
};
export const SupportAdmin = {
  get_all: (queries: any) =>
    buildQuery("/AdminTicket/Admin-GetAll-Tickets", queries),
  get_by_id: (id: any) => `/AdminTicket/Admin-GetTicket-ByID?id=${id}`,
  reply_admin: "/AdminTicket/Admin-Reply",
  delete: (id: any) => `/AdminTicket/Admin-Delete/${id}`,
  solved: "/AdminTicket/Admin-End-Ticket",
};
