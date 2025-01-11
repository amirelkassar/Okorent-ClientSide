"use client";
import React from "react";
import AppleIcon from "@/src/assets/icons/apple";
import GoogleIcon from "@/src/assets/icons/google";
import Input from "@/src/components/input";
import Password from "@/src/components/password";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import PhoneInput from "react-phone-input-2";
import { useSignUp } from "../_hooks/use-sign-up";
import { useForm } from "react-hook-form";
import ErrorMsg from "@/src/components/error-msg";
import InputSubmit from "@/src/components/input-submit";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSignUp } from "@/src/hooks/schema/auth-schema";
import GetErrorMsg from "@/src/components/getErrorMsg";
import TermsModal from "./terms-modal";

interface FormData {
  Name: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
}

function SignupView() {
  const { form } = useSignUp();
  const { onSubmit, error } = form;

  // استخدام useForm للتحقق من صحة البيانات باستخدام yup
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaSignUp),
  });

  // إرسال البيانات عند تقديم النموذج
  const handleFormSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
    onSubmit(data); // استدعاء دالة onSubmit من useSignUp
  };
  console.log(error);

  return (
    <div className="flex-1 content-center">
      <h1 className="mt-1 font-Bold text-lg lg:text-xLarge">
        Create New Account
      </h1>
      <p className="text-grayMedium text-sm lg:text-medium mb-6">
        Let’s get started in leasing and renting some items
      </p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)} // استخدام handleSubmit من useForm
        className="w-full flex flex-col gap-5"
      >
        {/* Name Input */}
        <Input
          {...register("Name")}
          name="Name"
          id="Name"
          label="Name"
          placeholder="Write your name here"
          error={errors.Name?.message}
        />

        {/* Email Input */}
        <Input
          {...register("Email")}
          name="Email"
          id="Email"
          label="Email"
          placeholder="Write your email here"
          error={errors.Email?.message || GetErrorMsg(error, "Email")}
        />

        {/* Password Input */}
        <Password
          {...register("Password")}
          label="Password"
          placeholder="Write password here"
          error={errors.Password?.message}
        />

        {/* Phone number input */}
        <div className="w-full flex flex-col">
          <p className="text-[16px] mb-2 font-Medium ms-1">Phone number</p>
          <div dir="ltr">
            <PhoneInput
              specialLabel=""
              enableSearch={true}
              country={"eg"} // Set Egypt as the default country
              enableAreaCodes={true}
              searchPlaceholder="Search for country"
              autoFormat={false}
              inputClass="!rounded-lg h-11 w-full text-base border-0 bg-[#D9D9D980] ps-[70px] placeholder:text-base"
              inputProps={{
                type: "text",
                required: true,
                className:
                  " py-2 w-full text-base border-0 bg-[#D9D9D980] h-11  !rounded-lg ps-[70px] outline-none",
                placeholder: "",
                id: "phone",
              }}
              {...register("PhoneNumber")} // ربط الحقل بالتحقق
              buttonClass="left-0 h-full border border-black/20 w-[64px] flex !rounded-s-lg items-center justify-center !top-1/2 transform -translate-y-1/2 !bg-white"
              dropdownClass="top-full !shadow-none border overflow-x-hidden  !rounded-lg border-black/20 left-0 !overflow-y-auto border border-gray-300 rounded-lg bg-white"
              searchClass="w-full relative !py-2 !border-0 !px-3 text-sm ps-10 placeholder:text-xs"
              onChange={(phone) => setValue("PhoneNumber", phone)}
            />
          </div>
          {errors.PhoneNumber?.message && (
            <ErrorMsg error={errors.PhoneNumber.message} />
          )}
        </div>
        <TermsModal />
        {/* Buttons */}
        <div className="w-full mt-2 flex flex-col gap-2">
          <InputSubmit className="w-full" value="Create an account" />
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-3 h-[52px] border border-black rounded-xl"
          >
            <GoogleIcon />
            <p className="text-medium font-Medium">Sign in with Google</p>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-3 h-[52px] border border-black rounded-xl"
          >
            <AppleIcon />
            <p className="text-medium font-Medium">Sign in with Apple</p>
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center py-5">
        <h3 className="flex items-center justify-center gap-1 font-Light">
          Already have an account?{" "}
          <Link href={ROUTES.AUTH.LOGIN} className="text-blue font-Medium">
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default SignupView;
