import { buildQuery } from "@/src/lib/utils";

export const user = {
  addListing: {
    base: "/Product",
    category: "/Category",
    subCategory_by_category: (id:any) => `/SubCategory/by-parent/${id}`,
  },
  register: {
    base: "/User/register",
  },
  product: {
    base: "/Product",
    my_products: (queries = {}) =>
      buildQuery('/Product/my-products', queries),
    getById: (id: any) => `/Product/${id}`,
  },
  information: {
    base: (id: any) => `/User/${id}`,
    user_edit:  `/User`,
  },
  stock:{
    base: "/Stock",
    actions:{
      edit: (id: any) => `/Stock/${id}`,
    }
  },
 
};
