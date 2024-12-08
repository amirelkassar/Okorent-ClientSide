import { IconProps } from "@/src/types/type-icon";
import React from "react";

function MoneyIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.4 22.2667C12.4 24.3285 14.0715 26 16.1333 26H19.6C21.8091 26 23.6 24.2091 23.6 22C23.6 19.7909 21.8091 18 19.6 18H16.4C14.1909 18 12.4 16.2091 12.4 14C12.4 11.7909 14.1909 10 16.4 10H19.8667C21.9285 10 23.6 11.6715 23.6 13.7333M18 7.6V10M18 26V28.4M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18Z"
        stroke="#0F2A43"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MoneyIcon;
