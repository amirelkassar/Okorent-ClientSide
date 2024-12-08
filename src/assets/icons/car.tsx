import { IconProps } from "@/src/types/type-icon";
import React from "react";
function CarIcon({ className = "", fill = "white" }: IconProps) {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.00098 23C9.65783 23 11.001 21.6569 11.001 20C11.001 18.3432 9.65783 17 8.00098 17C6.34412 17 5.00098 18.3432 5.00098 20C5.00098 21.6569 6.34412 23 8.00098 23Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M18 23C19.6569 23 21 21.6569 21 20C21 18.3432 19.6569 17 18 17C16.3431 17 15 18.3432 15 20C15 21.6569 16.3431 23 18 23Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M2.5 11.5H11.5V1M11.5 1V4H1V16C1 16.7956 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19H5.5M11.5 1H17.5L24.4375 6.55C24.6129 6.69044 24.7545 6.86849 24.8519 7.071C24.9492 7.27351 24.9999 7.4953 25 7.72V10M25 10H19V4H20.5M25 10V16C25 16.7956 24.6839 17.5587 24.1213 18.1213C23.5587 18.6839 22.7956 19 22 19M16 19H11.5"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CarIcon;
