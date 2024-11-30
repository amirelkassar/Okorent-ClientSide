import { IconProps } from "@/src/types/type-icon";
import React from "react";

function TwoLineIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="95"
      height="17"
      viewBox="0 0 95 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 8.00019C21.3333 3.66686 66.6 -2.39981 93 8.00019"
        stroke="#006AFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 15.7424C21.3333 11.409 66.6 5.34238 93 15.7424"
        stroke="#006AFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default TwoLineIcon;
