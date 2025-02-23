"use client";
import Button from "@/src/components/button";
import Logo from "@/src/components/logo";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { PinInput } from "@mantine/core";
import React from "react";

function PageLogin() {
  const router = useRouter();

  return (
    <div className="flex-1 pt-20 pb-16  flex  min-h-full justify-start">
      <div className="max-w-[390px] w-full flex flex-col gap-4">
        <Logo />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-lg lg:text-xLarge">
            Confirm You Email
          </h1>
          <p className="text-grayMedium font-Light lg:leading-5 text-sm lg:text-medium mb-6 ">
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
                  }}
                  className="text-blue font-Bold"
                >
                  Sent new code
                </button>
              </h3>
            </div>
            <div
              className={
                "w-full mt-16 flex  gap-6 flex-col-reverse md:flex-row"
              }
            >
              <Button
                className={" w-full lg:w-[156px] bg-white border text-green "}
                onClick={() => {
                  router.push(ROUTES.AUTH.FORGOT_PASSWORD);
                }}
              >
                Back
              </Button>
              <Button
                className={" w-full lg:w-[156px] "}
                onClick={() => {
                  router.push(ROUTES.AUTH.RESET_PASSWORD);
                }}
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
