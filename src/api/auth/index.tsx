
export const auth = {
  login: {
    base: "/Auth/login",
  },
  register: {
    base: "/Auth/register",
    verify_phone: "/Auth/verify-phone",
    resend_otp: "/Auth/reset-phone",
  },
  forgot_password: {
    base: "/Auth/forget-password",
  },
  reset_password: {
    base: "/Auth/reset-password",
  },
};
