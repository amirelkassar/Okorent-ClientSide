"use client";

import toast from "react-hot-toast";
import GetErrorMsg from "./getErrorMsg";
import ErrorIcon from "../assets/icons/error";
import HourGlassIcon from "../assets/icons/hourglass";
import TrueGreenIcon from "../assets/icons/trueGreen";

// Main Toast component that exports the toast functions
export const Toast = () => {
  return toast;
};

// Success Toast
const Success = (message: string = "") => {
  if (!message) return null;

  return toast(
    () => (
      <div className="flex items-center gap-5 *:shrink-0 relative">
        <TrueGreenIcon className="text-greenMain" />
        <p className="text-xs mdl:text-base font-medium">{message}</p>
      </div>
    ),
    {
      className: "h-14 border-b-[3px] border-greenMain rounded-xl shadow-md",
      style: {
        background: "linear-gradient(90.87deg, #FFFFFF 60.75%, #DBF3F6 96.31%)",
        boxShadow:
          "0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
      },
    }
  );
};

//Toast.Success = Success;

// Error Toast
const Error = (message: string = "") => {
  if (!message) return null;

  return toast(
    () => (
      <div className="flex items-center gap-5 *:shrink-0 relative">
        <ErrorIcon className="size-5" />
        <p className="text-xs mdl:text-base font-medium">{message}</p>
      </div>
    ),
    {
      className: "h-14 border-b-[3px] border-red rounded-xl shadow-md",
      style: {
        background: "linear-gradient(90.87deg, #FFFFFF 60.75%, #FFB1B1 96.31%)",
        boxShadow:
          "0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
      },
      duration: 4000,
    }
  );
};

//Toast.Error = Error;

// Loading Toast
const Loading = (message: string = "جاري الارسال") => {
  return toast(
    () => (
      <div className="flex flex-col items-center gap-2 *:shrink-0 relative">
        <HourGlassIcon className="text-grayDark animate-spin" />
        <p className="text-xs mdl:text-base font-medium">{message}</p>
      </div>
    ),
    {
      duration: 10000,
      className: "!h-fit border-b-[3px] border-grayDark rounded-xl shadow-md",
      style: {
        background: "linear-gradient(90.87deg, #FFFFFF 60.75%, #EBEBEB 96.31%)",
        boxShadow:
          "0px 8px 10px 0px rgba(0, 0, 0, 0.2), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)",
      },
    }
  );
};

//Toast.Loading = Loading;

// Dismiss Toast
Toast.Dismiss = toast.dismiss;

// Submit function with promise handling and toast updates
type SubmitOptions = {
  success?: string;
  loading?: string;
  error?: string;
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
};

const Submit = (
  promise: Promise<any>,
  options: SubmitOptions = {
    success: "",
    loading: "",
    error: "",
    onSuccess: () => {},
    onError: () => {},
  }
) => {
  if (!promise) return;

  return toast.promise(promise, {
    loading: (
      <div className="flex flex-col items-center gap-2 *:shrink-0 relative">
        <p className="text-xs mdl:text-base font-medium">
          {options.loading || "Sending Request"}
        </p>
      </div>
    ),
    success: (res: any) => {
      if (options?.onSuccess) options?.onSuccess(res);
      return (
        <div className="flex items-center gap-5 *:shrink-0 relative">
          <p className="text-xs mdl:text-base font-medium">
            {options.success || "Operation Finished Successfully!"}
          </p>
        </div>
      );
    },
    error: (err: any) => {
      if (options?.onError) options?.onError(err);
      const generalError = GetErrorMsg(err, "general");
      return (
        <div className="flex items-center gap-5 *:shrink-0 relative">
          <p className="text-xs mdl:text-base font-medium">
            {generalError || options.error || "Request failed"}
          </p>
        </div>
      );
    },
  });
};

Toast.Promise = Submit;
