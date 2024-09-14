"use client";
import React from "react";
import { cn } from "../lib/utils";
interface ButtonProps {
  children?: React.ReactNode;
  className?: String;
  onClick?: () => void;
}
function Button({ children, className, onClick }: ButtonProps) {
  const handelClick = (e: any) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  return (
    <button
      onClick={(e) => {
        handelClick(e);
      }}
      className={cn(
        "bg-green px-2 lg:px-3 border-4 h-[50px] border-[#a9c788] hover:border-green duration-500 text-sm lg:text-medium rounded-xl text-white flex items-center justify-center",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
