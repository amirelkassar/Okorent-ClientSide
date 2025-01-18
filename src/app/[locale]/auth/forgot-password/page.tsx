"use client";
import Button from "@/src/components/button";
import GetErrorMsg from "@/src/components/getErrorMsg";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import { Toast } from "@/src/components/toast";
import { useForgetPassword } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useCallback, useState } from "react";

function PageLogin() {
  const router = useRouter();
  const [Email, setEmail] = useState("");

  const {
    mutateAsync: ForgetPassword,
    error,
    isPaused,
    isError,
    reset,
  } = useForgetPassword();

  const onSubmit = useCallback(async () => {
    Toast.Promise(ForgetPassword({ email: Email }), {
      loading: "Sending Token To Your Email... ",
      success: "Successfully Sent Token To Your Email",
      onSuccess: async (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.error("ForgetPassword error:", err);
      },
    });
  }, [ForgetPassword, Email]);
  return (
    <div className="flex-1 pt-4 lgl:pt-20  pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px]  w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-lg lg:text-xLarge mb-7">
            Enter your email to reset your password
          </h1>

          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col gap-5 max-w-[470px]"
          >
            <Input
              type="email"
              label="Email"
              placeholder="Write you email here"
              onChange={(e) => setEmail(e.target.value)}
              error={GetErrorMsg(error, "Email")}
            />

            <div
              className={
                "w-full mt-16 flex   gap-6  flex-col-reverse md:flex-row"
              }
            >
              <Button
                type="button"
                className={" w-full lg:w-[156px] bg-white border text-green "}
                onClick={() => {
                  router.push(ROUTES.AUTH.LOGIN);
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                className={" w-full lg:w-[156px] "}
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

export default PageLogin;
