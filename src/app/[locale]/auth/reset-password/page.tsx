"use client";
import InputSubmit from "@/src/components/input-submit";
import LinkGreen from "@/src/components/linkGreen";
import Logo from "@/src/components/logo";
import Password from "@/src/components/password";
import { Toast } from "@/src/components/toast";
import { useResetPassword } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(/[@$!%*?&]/, "Must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm password is required"),
});

function Page() {
  const router = useRouter();
  const { mutateAsync: ResetPassword } = useResetPassword();
  const searchParams = new URLSearchParams(window.location.search);
  const decodedToken = searchParams.get("token") || "";
  const email = searchParams.get("email") || "";

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: { newPassword: string }) => {
      Toast.Promise(
        ResetPassword({
          newPassword: data.newPassword,
          token: decodedToken,
          email: email,
        }),
        {
          loading: "Sending New Password ...",
          success: "Successfully Changed Password",
          error: "Failed to change the password",
          onSuccess: async (res) => {
            router.push(ROUTES.AUTH.LOGIN);
          },
          onError: (err) => {
            console.error("ResetPassword error:", err);
          },
        }
      );
    },
    [ResetPassword, router, decodedToken, email]
  );
  return (
    <div className="flex-1 pt-4 lgl:pt-20 pb-8 md:pb-16  flex  min-h-full justify-center lgl:justify-start">
      <div className="max-w-[470px] w-full flex flex-col gap-4">
        <Logo />
        <div className="flex-1 content-center">
          <h1 className=" font-Bold text-lg lg:text-xLarge">
            Reset Your password
          </h1>
          <p className="text-grayMedium text-sm lg:text-medium  mb-6">
            Type below your new password
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            <Password
              label="Password"
              placeholder="Write your password here"
              {...register("newPassword")}
              error={errors.newPassword?.message || ""}
            />
            <Password
              label="Confirm Password"
              placeholder="Confirm your new password "
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message || ""}
            />
            <div className={"w-full mt-10 flex flex-col  md:flex-row gap-6"}>
              <LinkGreen
                href={ROUTES.AUTH.LOGIN}
                className={"w-full lg:w-[156px] bg-white border text-green "}
              >
                Back to login
              </LinkGreen>
              <InputSubmit value={"Next"} className={"w-full lg:w-[156px] "} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
