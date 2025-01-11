import React from "react";
import { cn } from "../lib/utils";
interface ButtonProps {
  children?: React.ReactNode;
  className?: String;
  value?: any;
}
function InputSubmit({ children, className, value, ...props }: ButtonProps) {
  return (
    <input
      value={value}
      {...props}
      type="submit"
      className={cn(
        "bg-green px-2 font-Medium  lg:px-3 border-4 h-[50px] border-[#a9c788] hover:border-green duration-500 text-sm lg:text-medium rounded-xl text-white flex items-center justify-center",
        className
      )}
    />
  );
}

export default InputSubmit;
