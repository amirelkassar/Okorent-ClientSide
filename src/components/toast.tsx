"use client";
import toast from "react-hot-toast";
import CloseIcon from "../assets/icons/close";

const Toast = {
  // Dismiss Toast
  dismiss: toast.dismiss,

  // Submit function with promise handling and toast updates
  Promise: (
    promise: Promise<any>,
    options: {
      success?: string;
      loading?: string;
      error?: string;
      onSuccess?: (res: any) => void;
      onError?: (err: any) => void;
    } = {
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
        return (
          <div className="flex items-center gap-5 *:shrink-0 relative">
            <div className="flex bg-white items-center justify-between gap-4 w-[550px]">
              <div>
                <p className="text-xs mdl:text-base font-medium">
                  {options.error || "Request failed"}
                </p>
              </div>
              <button className="w-10 h-10 bg-red">
                <CloseIcon />
              </button>
            </div>
          </div>
        );
      },
    });
  },
};

export { Toast };
