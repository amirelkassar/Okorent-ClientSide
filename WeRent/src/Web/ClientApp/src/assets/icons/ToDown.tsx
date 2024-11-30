import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ToDownIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="24"
      height="33"
      viewBox="0 0 24 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.51562 2C11.9556 6.58585 17.5052 13.6379 16.648 29.2856M10.6478 24.5353L16.7928 31.3638L22.4849 24.7603"
        stroke="#0F2A43"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ToDownIcon;
