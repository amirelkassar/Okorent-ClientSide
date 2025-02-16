import React from "react";
import ErrorIcon from "../assets/icons/error";
interface ErrorMsgProps {
  error: string;
  textClassName?: string;
}
function ErrorMsg({ error = "", textClassName = "" }: ErrorMsgProps) {
  if (error) {
    return (
      <div className="flex items-center gap-2">
        <ErrorIcon className=" w-4 mdl:w-5 h-auto" />
        <p
          className={` text-xs mdl:text-sm font-Regular text-red lg:text-base ${textClassName}`}
        >
          {error}
        </p>
      </div>
    );
  }
}

export default ErrorMsg;
