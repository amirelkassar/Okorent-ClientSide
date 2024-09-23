"use client";
import AppleIcon from "@/src/assets/icons/apple";
import GoogleIcon from "@/src/assets/icons/google";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { Link, useRouter } from "@/src/navigation";
import React, { useState } from "react";
import ROUTES from "@/src/routes";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function PageLogin() {
  const router = useRouter();
  const [AddPhone, setAddPhone] = useState(false);
  return (
    <div className="flex-1 pt-20 pb-16 flex  min-h-full justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        {!AddPhone ? (
          <div className="flex-1  content-center">
            <h1 className="mt-1 font-Bold text-xLarge">Create New Account</h1>
            <p className="text-grayMedium text-medium mb-6 opacity-">
              Let’s get started in leasing and renting some items
            </p>
            <form action="" className="w-full flex flex-col gap-5">
              <Input label="Name" placeholder="Write your name here" />
              <Input label="Email" placeholder="Write you email here" />
              <Password label="Password" placeholder="Write password here" />

              <div className={"w-full mt-2 flex flex-col gap-2"}>
                <Button
                  onClick={() => {
                    setAddPhone(true);
                  }}
                  className={"w-full "}
                >
                  Create an account
                </Button>
                <button
                  className={
                    "w-full flex items-center justify-center gap-2 py-3 h-[52px] border border-black rounded-xl"
                  }
                >
                  <GoogleIcon />
                  <p className="text-medium font-Medium">Sign in with google</p>
                </button>
                <button
                  className={
                    "w-full flex items-center justify-center gap-2 py-3 h-[52px] border border-black rounded-xl"
                  }
                >
                  <AppleIcon />
                  <p className="text-medium font-Medium">Sign in with apple</p>
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center py-5">
              <h3 className="flex items-center justify-center gap-1 font-Light">
                Already have an account?
                <Link
                  href={ROUTES.AUTH.LOGIN}
                  className="text-blue font-Medium"
                >
                  {" "}
                  Sign in
                </Link>
              </h3>
            </div>
          </div>
        ) : (
          <div className="flex-1  content-center flex flex-col mt-12">
            <h1 className="mt-1 font-Bold text-xLarge">One more step</h1>
            <p className="text-grayMedium text-medium mb-14 max-w-[240px] leading-6">
              Enter your phone number below to verify your identity
            </p>
            <form action="" className="w-full flex flex-col ">
              <p className="text-[16px] mb-2 font-Medium ms-1">Phone number</p>
              <div dir="ltr">
                <PhoneInput
                  specialLabel=""
                  enableSearch={true}
                  country={"eg"} // Set Egypt as the default country (matches your image)
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
                  buttonClass=" left-0 h-full border border-black/20 w-[64px] flex !rounded-s-lg items-center justify-center !top-1/2 transform -translate-y-1/2 !bg-white" // For flag dropdown
                  dropdownClass="top-full !shadow-none border overflow-x-hidden  !rounded-lg border-black/20 left-0 !overflow-y-auto border border-gray-300 rounded-lg bg-white" // Dropdown menu styling
                  searchClass="w-full relative  !py-2 !border-0 !px-3 text-sm ps-10 placeholder:text-xs " // Search input in dropdown
                  onChange={(phone) => {
                    console.log(phone);
                  }}
                />
              </div>
              <div className={"w-full mt-2 flex flex-col gap-2 mt-28"}>
                <Button
                  onClick={() => {
                    router.push(ROUTES.AUTH.SIGNUP_EMAIL_CONFIRM);
                  }}
                  className={"w-full "}
                >
                  Next
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center py-5 mt-auto">
              <h3 className="flex items-center justify-center gap-1 font-Light">
                Already have an account?
                <Link
                  href={ROUTES.AUTH.LOGIN}
                  className="text-blue font-Medium"
                >
                  {" "}
                  Sign in
                </Link>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageLogin;
