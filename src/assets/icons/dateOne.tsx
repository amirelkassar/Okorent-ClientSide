import { IconProps } from "@/src/types/type-icon";
import React from "react";

function DateOneIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="34"
      height="37"
      viewBox="0 0 34 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M32 15.2H2M23.6667 2V8.6M10.3333 2V8.6M10 35H24C26.8003 35 28.2004 35 29.27 34.4605C30.2108 33.9859 30.9757 33.2287 31.455 32.2973C32 31.2384 32 29.8523 32 27.08V13.22C32 10.4477 32 9.06161 31.455 8.00275C30.9757 7.07134 30.2108 6.31409 29.27 5.83952C28.2004 5.3 26.8003 5.3 24 5.3H10C7.19974 5.3 5.79961 5.3 4.73005 5.83952C3.78924 6.31409 3.02433 7.07134 2.54497 8.00275C2 9.06161 2 10.4477 2 13.22V27.08C2 29.8523 2 31.2384 2.54497 32.2973C3.02433 33.2287 3.78924 33.9859 4.73005 34.4605C5.79961 35 7.19974 35 10 35Z"
        stroke="#0F2A43"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.408 30V28.496H16.544V20.144H16.416L13.824 22.912L12.72 21.92L15.568 18.832H18.32V28.496H21.04V30H13.408Z"
        fill="#0F2A43"
      />
    </svg>
  );
}

export default DateOneIcon;
