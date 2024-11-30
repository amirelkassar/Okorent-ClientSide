"use client";
import React from "react";
import { cn } from "../lib/utils";
import DeleteIcon from "../assets/icons/delete";
interface ButtonProps {
  children?: React.ReactNode;
  className?: String;
  onClick?: () => void;
}
function ButtonDelete({ children, className, onClick, ...props }: ButtonProps) {
  const handelClick = (e: any) => {
    e.preventDefault();
    if (onClick) onClick();
  };
  return (
    <button
      {...props}
      onClick={(e) => {
        handelClick(e);
      }}
      className={cn(
        "flex items-center justify-center duration-200 hover:shadow-md p-2 md:p-3 bg-blueLight rounded-full size-8 md:size-12",
        className
      )}
    >
      <DeleteIcon className="h-full w-auto" />
      {children}
    </button>
  );
}

export default ButtonDelete;
