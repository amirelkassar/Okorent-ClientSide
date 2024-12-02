"use client";
import AppleIcon from "@/src/assets/icons/apple";
import GoogleIcon from "@/src/assets/icons/google";
import Input from "@/src/components/input";
import LinkGreen from "@/src/components/linkGreen";
import Password from "@/src/components/password";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";
interface SignupViewProps {
  onChange: (e: any) => void;
  formData: any;
}
function SignupView({ onChange, formData }: SignupViewProps) {
  return (
    <div className="flex-1  content-center">
      <h1 className="mt-1 font-Bold text-lg lg:text-xLarge">
        Create New Account
      </h1>
      <p className="text-grayMedium text-sm lg:text-medium mb-6 opacity-">
        Let’s get started in leasing and renting some items
      </p>
      <form action="" className="w-full flex flex-col gap-5">
        <Input
          onChange={onChange}
          value={formData.Name}
          name="Name"
          label="Name"
          placeholder="Write your name here"
        />
        <Input
          onChange={onChange}
          value={formData.Email}
          name="Email"
          label="Email"
          placeholder="Write you email here"
        />
        <Password
          onChange={onChange}
          value={formData.Password}
          name="Password"
          label="Password"
          placeholder="Write password here"
        />

        <div className={"w-full mt-2 flex flex-col gap-2"}>
          <LinkGreen
            href={ROUTES.AUTH.SIGNUP + "?step=addPhone"}
            className={"w-full "}
          >
            Create an account
          </LinkGreen>
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
          <Link href={ROUTES.AUTH.LOGIN} className="text-blue font-Medium">
            {" "}
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default SignupView;
