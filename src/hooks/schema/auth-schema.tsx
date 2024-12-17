import * as yup from "yup";
// تعريف المخطط باستخدام yup للتحقق من صحة البيانات
export const schemaSignUp = yup.object({
    Name: yup.string().required("Name is required"),
    Email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    Password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[@$!%*?&]/, "Must contain at least one special character")
      .required("Password is required"),
    PhoneNumber: yup
      .string()
      .matches(/^\+?[1-9]\d{9,14}$/, "Invalid phone number format")
      .required("Phone number is required"),
  });
  