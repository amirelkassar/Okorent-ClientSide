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
  },
  information: {
    base: (id: any) => `/User/${id}`,
    user_edit: `/User`,
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
};

export const admin = {
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
  },
  product: {
    base: (queries: any) => buildQuery("/AdminProduct", queries),
    getById: (id: any) => `/AdminProduct/${id}`,
    DeleteManyProducts: `/AdminProduct/Delete-Products`,
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
    base:(queries: any) => buildQuery("/AdminOrder", queries),
    BookingID: (id: any) => `/AdminOrder/${id}`,
    UpdateOrder: `/AdminOrder`,

  },
};

export const notifications = {
  base: "/notification",
  list: (queries: any) => buildQuery("/notification/list", queries),
  actions: {
    makeItRead: (id: any) => `/notification?id=${id}`,
    delete: (id: any) => `/notification?id=${id}`,
  },
};
