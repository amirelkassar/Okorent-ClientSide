import React from "react";
import ErrorIcon from "../assets/icons/error";
interface ErrorMsgProps {
  error: string;
}
function ErrorMsg({ error = "" }: ErrorMsgProps) {
  if (error) {
    return (
      <div className="flex items-center gap-2">
        <ErrorIcon />
        <p className=" text-sm font-Regular text-red lg:text-base">{error}</p>
      </div>
    );
  }
}

export default ErrorMsg;
