"use client";
import AppleIcon from "@/src/assets/icons/apple";
import GoogleIcon from "@/src/assets/icons/google";
import Button from "@/src/components/button";
import ErrorMsg from "@/src/components/error-msg";
import GetErrorMsg from "@/src/components/getErrorMsg";
import Input from "@/src/components/input";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { useLoginMutation } from "@/src/hooks/queries/auth";
import { Link, useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React, { useCallback, useState } from "react";
interface LoginData {
  username: string;
  password: string;
}
function PageLogin() {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const {
    mutateAsync: login,
    error,
    isLoading,
    isError,
    reset,
  } = useLoginMutation(formData);
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );
  const onSubmit = async () => {
    login();
  };

  return (
    <div className="flex-1 pt-4 lgl:pt-20  pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo theme="green" />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-lg lg:text-xLarge">Welcome Back!</h1>
          <p className="text-grayMedium text-sm lg:text-medium mb-6">
            Sign in to rent and lease some cool items
          </p>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
            <Input
              type="email"
              label="Email"
              name="username"
              placeholder="Write you email here"
              onChange={onChange}
              error={GetErrorMsg(error, "general")}
           
            />
            <Password
              label="Password"
              name="password"
              placeholder="Write password here"
              onChange={onChange}
            />
            <Link
              href={ROUTES.AUTH.FORGOT_PASSWORD}
              className="font-Light text-xs md:text-small text-end -mt-2 text-grayMedium"
            >
              Forget password
            </Link>
            <div className={"w-full mt-2 flex flex-col gap-2"}>
              <Button
                onClick={() => {
                  onSubmit();
                }}
                className={"w-full "}
              >
                Login
              </Button>
              <ErrorMsg error={GetErrorMsg(error, "general")} />
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
              Don’t have an account?
              <Link href={ROUTES.AUTH.SIGNUP} className="text-blue font-Medium">
                {" "}
                Sign up
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLogin;
