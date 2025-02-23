import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ArrowRightIcon({ className = "", fill = "white" }: IconProps) {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.689 22.4356L22.8135 16.3111M22.8135 16.3111L16.689 10.1867M22.8135 16.3111H10.5646M32.0002 16.3111C32.0002 24.7672 25.1451 31.6222 16.689 31.6222C8.23295 31.6222 1.37793 24.7672 1.37793 16.3111C1.37793 7.85502 8.23295 1 16.689 1C25.1451 1 32.0002 7.85502 32.0002 16.3111Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowRightIcon;
