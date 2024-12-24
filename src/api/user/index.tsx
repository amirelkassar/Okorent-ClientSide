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
    },
    getById: (id: any) => `/BookingOrder/${id}`,
    order_tracker: (id: any) => `/OrderTracker/${id}`,
    cancel_iRent: `/OrderRequest/Cancel Order Request`,
    reject_iRent: `/OrderRequest/Reject Order`,
  },
  user: {
    getByID: (id: any) => `User/${id}`,
  },
};
