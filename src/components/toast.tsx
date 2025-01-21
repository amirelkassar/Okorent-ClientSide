"use client";
import { toast, Toaster as HotToaster, ToastBar } from "react-hot-toast";
import CloseNotficationsIcon from "../assets/icons/closeNotfications";
import SuccessIcon from "../assets/icons/success";
import ErrorNotficationIcon from "../assets/icons/error-notfication";
import NotificationsIcon from "../assets/icons/Notifications";
import NotificationIcon from "../assets/icons/notfication";
import Image from "next/image";
import notificationGif from "@/src/assets/images/notification.gif";
interface ToastOptions {
  success?: string;
  loading?: string;
  error?: string;
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}

const Toast = {
  dismiss: toast.dismiss,

  Promise: <T,>(
    promise: Promise<T>,
    options: ToastOptions = {}
  ): Promise<T> => {
    if (!promise) return Promise.reject(new Error("No promise provided"));

    return toast.promise(
      promise,
      {
        loading: (
          <div className="flex flex-col items-center gap-2 *:shrink-0 relative">
            <p className="text-xs mdl:text-base font-medium">
              {options.loading || "Sending Request"}
            </p>
          </div>
        ),
        success: (res: T) => {
          if (options?.onSuccess) options.onSuccess(res);
          return (
            <div className="flex items-center gap-5 *:shrink-0 relative">
              <p className="text-xs mdl:text-base font-medium">
                {options.success || "Operation Finished Successfully!"}
              </p>
            </div>
          );
        },
        error: (err: any) => {
          console.log(err);

          if (options?.onError) options.onError(err);
          return (
            <div className="flex items-center justify-between w-full">
              <p className="text-xs mdl:text-base font-medium">
                {options.error ||
                  err?.response?.data?.errors?.error ||
                  err?.response?.data?.errors?.Error ||
                  "Request failed"}
              </p>
            </div>
          );
        },
      },
      {
        success: {
          duration: 5000,
        },
        error: {
          duration: 5000,
        },
        loading: {
          duration: Infinity,
        },
      }
    );
  },

  Notification: (message = "") => {
    if (!message) return null;

    return toast.custom(
      (t) => (
        <div
          className={`flex items-center justify-between max-w-[94%] w-[550px] rounded-xl bg-white shadow-md p-4 ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          <div className="flex items-center">
            <Image
              src={notificationGif} // Replace with the path to your GIF
              alt="Notification"
              className="mdl:w-10 w-8  h-auto"
            />

            <div className="ml-2 text-sm mdl:text-base font-medium text-gray-800">
              {message}
            </div>
          </div>
          <button onClick={() => toast.dismiss(t.id)} className="ml-4">
            <CloseNotficationsIcon className="w-4 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      ),
      {
        duration: 7000,
      }
    );
  },
};

export function Toaster() {
  return (
    <HotToaster
      position="top-center"
      gutter={8}
      containerClassName="w-[550px] mx-auto justify-center max-w-full !left-0 !right-0"
      toastOptions={{
        className: " max-w-full !rounded-xl",
        duration: 5000,
        style: {
          background: "#fff",
          color: "#363636",
          padding: "16px",
          maxWidth: "94%",
          width: "550px",
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{ padding: 0, width: "100%", maxWidth: "100%" }}
        >
          {({ icon, message }) => (
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                {t.type === "error" ? (
                  <ErrorNotficationIcon />
                ) : t.type === "success" ? (
                  <SuccessIcon className="w-5 mdl:w-8 h-auto" />
                ) : (
                  icon
                )}

                <div className="md:ml-2">{message}</div>
              </div>
              {t.type !== "loading" && (
                <button onClick={() => toast.dismiss(t.id)} className="">
                  <CloseNotficationsIcon className="w-4 h-auto" />
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </HotToaster>
  );
}

export { Toast };
