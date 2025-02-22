import { IconProps } from "@/src/types/type-icon";
import React from "react";

function StopIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.24219 1.39258L0.992188 5.75308V11.3092L5.24219 15.5592H10.9089L15.1589 11.3092V5.75308L10.9089 1.39258H5.24219Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9089 8.47656H5.24219"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default StopIcon;
