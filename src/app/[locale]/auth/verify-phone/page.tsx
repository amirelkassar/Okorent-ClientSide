"use client";
import { PinInput } from "@mantine/core";
import React from "react";
import TimerOtp from "./_components/timer-otp";
import { useVerifyPhone } from "./_hooks/use-verify-phone";
import Button from "@/src/components/button";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/src/navigation";
import GetErrorMsg from "@/src/components/getErrorMsg";

function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { form } = useVerifyPhone();
  const { setFormData, onSubmit,onSubmitReSendOTP, error } = form;

  return (
    <div className="flex-1 pt-4   pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className=" w-full max-w-[470px] flex flex-col gap-4">
        <div className="flex-1 content-center ">
          <h1 className=" font-Bold  text-xLarge">Confirm Your number</h1>
          <p className="text-grayMedium max-w-[390px] font-Light leading-5 text-medium mb-16 md:mb-6 ">
            We have sent you a code to {searchParams.get("phone_number")} please
            enter it below to verify your account
          </p>

          <form action="" className="w-full flex flex-col gap-5 max-w-[470px]">
            <PinInput
              placeholder=""
              type="number"
              length={6}
              className="gap-3"
              error={GetErrorMsg(error, "general") ? true : false}
              classNames={{
                input:
                  "bg-[#b6bfc67d] font-Bold text-black rounded-[8px] min-w-[44px] h-[44px]  h-11 rounded-[8px] placeholder:text-grayMedium ",
                pinInput: "min-w-[44px] h-[44px] bg-transparent rounded-[8px]",
              }}
              onChange={(e) => {
                console.log({
                  phoneNumber: searchParams.get("phone_number"),
                  otp: e,
                });

                setFormData({
                  phoneNumber: searchParams.get("phone_number"),
                  otp: e,
                });
              }}
            />
            {error && (
              <p className="text-red text-sm font-Regular">
                {GetErrorMsg(error, "general")}
              </p>
            )}
            <TimerOtp onSubmitReSendOTP={onSubmitReSendOTP} />

            <div
              className={
                "w-full mt-16 flex flex-col-reverse md:flex-row  gap-6 flex-wrap"
              }
            >
              <Button
                className={"md:w-[156px] w-full bg-white border text-green "}
                onClick={() => {
                  router.push(ROUTES.AUTH.SIGNUP);
                }}
              >
                Back
              </Button>
              <Button
                className={"md:w-[156px] w-full "}
                onClick={() => {
                  onSubmit();
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

export default Page;
