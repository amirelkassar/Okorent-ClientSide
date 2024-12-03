"use client";
import Button from "@/src/components/button";
import LinkGreen from "@/src/components/linkGreen";
import Timer from "@/src/components/timer";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { PinInput } from "@mantine/core";
import React, { useState } from "react";

function ConfirmPhone() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(60);
  const [start, setStart] = useState(false);
  return (
    <div className="flex-1 pt-4   pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className=" w-full max-w-[470px] flex flex-col gap-4">
        <div className="flex-1 content-center ">
          <h1 className=" font-Bold  text-xLarge">Confirm Your number</h1>
          <p className="text-grayMedium max-w-[390px] font-Light leading-5 text-medium mb-16 md:mb-6 ">
            We have sent you a code to +20 1067373528 please enter it below to
            verify your account
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
              <h3 className="flex items-center flex-wrap gap-1 font-Light">
                Didn’t receive a code?
                {start ? (
                  <div className="flex items-center gap-1">
                    <p className="text-green font-SemiBold text-base">
                      Request another one after
                    </p>
                    <Timer
                      setSeconds={setSeconds}
                      setStart={setStart}
                      seconds={seconds}
                      time={60}
                    />
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("send agin");
                    }}
                    className="text-blue font-Bold"
                  >
                    Sent new code
                  </button>
                )}
              </h3>
            </div>

            <div
              className={
                "w-full mt-16 flex flex-col-reverse md:flex-row  gap-6 flex-wrap"
              }
            >
              <Button
                className={"md:w-[156px] w-full bg-white border text-green "}
                onClick={() => {
                  router.push(ROUTES.AUTH.LOGIN);
                }}
              >
                Back
              </Button>
              <Button
                className={"md:w-[156px] w-full "}
                onClick={() => {
                  setStart(true);
                  setSeconds(60);
                }}
              >
                Next
              </Button>
              <LinkGreen
                href={ROUTES.AUTH.SIGNUP + "?step=makeHome"}
                className={"md:w-[156px] w-full "}
              >
                Next
              </LinkGreen>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPhone;
