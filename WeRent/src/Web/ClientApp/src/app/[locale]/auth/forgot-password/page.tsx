'use client'
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";

function PageLogin() {
  const router =useRouter()
  return (
    <div className="flex-1 pt-20 pb-16  flex  min-h-full justify-start">
      <div className=" w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-xLarge mb-7">
            Enter your email to reset your password
          </h1>

          <form action="" className="w-full flex flex-col gap-5 max-w-[370px]">
            <Input
              type="email"
              label="Email"
              placeholder="Write you email here"
            />

            <div className={"w-full mt-16 flex flex-col gap-2"}>
              <Button className={"w-full "} onClick={()=>{router.push(ROUTES.AUTH.CONFIRM)}}>Next</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;
