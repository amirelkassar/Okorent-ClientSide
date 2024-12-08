import { IconProps } from "@/src/types/type-icon";
import React from "react";

function CloseChatIcon({ className = "", fill = "#88BA52" }: IconProps) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 1L1 10M1 1L10 10"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CloseChatIcon;
