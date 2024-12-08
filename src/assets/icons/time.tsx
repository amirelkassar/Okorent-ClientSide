import { IconProps } from "@/src/types/type-icon";
import React from "react";

function TimeIcon({ className = "" }: IconProps) {
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
        d="M5.5 9.9C7.92 9.9 9.9 7.92 9.9 5.5C9.9 3.08 7.92 1.1 5.5 1.1C3.08 1.1 1.1 3.08 1.1 5.5C1.1 7.92 3.08 9.9 5.5 9.9ZM5.5 0C8.525 0 11 2.475 11 5.5C11 8.525 8.525 11 5.5 11C2.475 11 0 8.525 0 5.5C0 2.475 2.475 0 5.5 0ZM8.25 5.225V6.05H4.95V2.75H5.775V5.225H8.25Z"
        fill="#6F6B7D"
      />
    </svg>
  );
}

export default TimeIcon;
