import { IconProps } from "@/src/types/type-icon";
import React from "react";

function XIcon({ className = "", fill = "white" }: IconProps) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.40002 2L2 8.40002M2.00002 2L8.40004 8.40002"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default XIcon;
