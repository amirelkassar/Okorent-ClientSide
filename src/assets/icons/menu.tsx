import { IconProps } from "@/src/types/type-icon";
import React from "react";

function MenuIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="19"
      height="12"
      viewBox="0 0 19 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 12V10H18.5V12H0.5ZM0.5 7V5H18.5V7H0.5ZM0.5 2V0H18.5V2H0.5Z"
        fill="#1D1B20"
      />
    </svg>
  );
}

export default MenuIcon;
