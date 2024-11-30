import { IconProps } from "@/src/types/type-icon";
import React from "react";

function BusIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 27V29C5 30.104 5.896 31 7 31C8.104 31 9.00001 30.104 9.00001 29V27H5ZM5 27C3.896 27 3 26.104 3 25V9.99998C3 4.47733 9.47737 1 15 1C20.5227 1 27 4.47733 27 9.99998V25C27 26.104 26.104 27 25 27M5 27H25M25 27V29C25 30.104 24.104 31 23 31C21.896 31 21 30.104 21 29V27H25ZM3.69067 7H26.3094M15 15V7M3 13H1M29 13H27M3 15H27C19 17 15 24 15 27C15 24 11 17 3 15ZM7 22.5C7.276 22.5 7.5 22.724 7.5 23C7.5 23.276 7.276 23.5 7 23.5C6.724 23.5 6.5 23.276 6.5 23C6.5 22.724 6.724 22.5 7 22.5ZM23 22.5C23.276 22.5 23.5 22.724 23.5 23C23.5 23.276 23.276 23.5 23 23.5C22.724 23.5 22.5 23.276 22.5 23C22.5 22.724 22.724 22.5 23 22.5Z"
        stroke="#0F2A43"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BusIcon;
