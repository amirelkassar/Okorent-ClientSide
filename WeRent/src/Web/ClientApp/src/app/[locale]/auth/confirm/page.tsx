"use client";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { Link, useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { PinInput } from "@mantine/core";
import React from "react";

function PageLogin() {
  const router = useRouter();

  return (
    <div className="flex-1 pt-20 pb-16  flex  min-h-full justify-start">
      <div className="max-w-[390px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-xLarge">Confirm You Email</h1>
          <p className="text-grayMedium font-Light leading-5 text-medium mb-6 ">
            We have sent you a code to ahmed5vadr5@gmail.com please enter it
            below to verify your account
          </p>

          <form action="" className="w-full flex flex-col gap-5 max-w-[470px]">
            <PinInput
              placeholder=""
              type="number"
              length={6}
              className="gap-3"
              classNames={{
                input:
                  "bg-[#b6bfc67d] font-Bold text-black rounded-[8px] min-w-[44px] h-[44px] border-none h-11 rounded-[8px] placeholder:text-grayMedium ",
                pinInput: "min-w-[44px] h-[44px] bg-transparent rounded-[8px]",
              }}
            />

            <div className="flex items-center  py-5">
              <h3 className="flex items-center justify-center gap-1 font-Light">
                Didn’t receive a code?
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("send agin");
                  }}
                  className="text-blue font-Bold"
                >
                  Sent new code
                </button>
              </h3>
            </div>
            <div className={"w-full mt-9 flex flex-col gap-2"}>
              <Button
                onClick={() => {
                  router.push(ROUTES.AUTH.RESET_PASSWORD);
                }}
                className={"w-full "}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;
