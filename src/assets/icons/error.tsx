import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ErrorIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="10"
        cy="10.0764"
        r="9.25"
        stroke="#FF001F"
        strokeWidth="1.5"
      />
      <path d="M10 12.0764L10 4.07635" stroke="#FF001F" strokeWidth="1.5" />
      <circle cx="10" cy="15.0764" r="1" fill="#FF001F" />
    </svg>
  );
}

export default ErrorIcon;
