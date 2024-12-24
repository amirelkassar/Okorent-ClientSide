import React from "react";
import { cn } from "../lib/utils";
import { Link } from "../navigation";
interface ButtonProps {
  children?: React.ReactNode;
  className?: String;
  href: string;
}
function LinkGreen({ children, className, href = "#" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-green hover:shadow-md px-2 lg:px-3 text-sm lg:text-base text-white border-4 h-[50px] border-[#a9c788] hover:border-green duration-500  rounded-xl  flex items-center justify-center",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default LinkGreen;
