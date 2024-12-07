import { buildQuery } from "@/src/lib/utils";

export const auth = {
  login: {
    base: "/Auth/login",
  },
  register: {
    base: "/Auth/register",
    verify_phone: "/Auth/verify-phone",
   
  },
};
