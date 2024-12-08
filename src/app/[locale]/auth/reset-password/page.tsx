'use client'
import Button from "@/src/components/button";
import LinkGreen from "@/src/components/linkGreen";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";

function Page() {
  const router =useRouter()
  return (
    <div className="flex-1 pt-4 lgl:pt-20 pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-lg lg:text-xLarge">Reset Your password</h1>
          <p className="text-grayMedium text-sm lg:text-medium  mb-6">
            Type below your new password
          </p>
          <form action="" className="w-full flex flex-col gap-5">
            <Password label="Password" placeholder="Write your password here" />
            <Password
              label="Confirm Password"
              placeholder="Confirm your new password "
            />
            <div className={"w-full mt-10 flex flex-col flex-col-reverse md:flex-row gap-6"}>
              <LinkGreen href={ROUTES.AUTH.LOGIN} className={'w-full lg:w-[156px] bg-white border text-green '}>
              Back to login
              </LinkGreen>
              <Button className={"w-full lg:w-[156px] "} onClick={()=>{router.push(ROUTES.AUTH.LOGIN)}}>Next</Button>
            </div>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Page;
