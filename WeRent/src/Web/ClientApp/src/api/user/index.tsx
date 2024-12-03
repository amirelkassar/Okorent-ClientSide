export const user = {
  addListing: {
    base: "/Product",
    category: "/Category",
  },
  register: {
    base: "/User/register",
  },
  product: {
    base: "/Product",
    getById: (id:any) => `/Product/${id}`,
  },
};
