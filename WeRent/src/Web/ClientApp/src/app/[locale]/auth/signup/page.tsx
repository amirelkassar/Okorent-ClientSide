"use client";
import AppleIcon from "@/src/assets/icons/apple";
import GoogleIcon from "@/src/assets/icons/google";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { Link,useRouter } from "@/src/navigation";
import React from "react";
import ROUTES from "@/src/routes";
function PageLogin() {
  const router = useRouter();
  return (
    <div className="flex-1 pt-20 pb-16 flex  min-h-full justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
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
              <Button onClick={()=>router.push(ROUTES.AUTH.SIGNUP_EMAIL_CONFIRM)} className={"w-full "}>Create an account</Button>
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
      </div>
    </div>
  );
}

export default PageLogin;
