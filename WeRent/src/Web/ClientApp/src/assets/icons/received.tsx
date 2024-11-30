import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ReceivedIcon({ className = "", fill }: IconProps) {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.6645 7.25963V12.9998M1 7.25963V18.9247C1 20.5124 3.23406 21.4561 7.70103 23.3423C9.49539 24.1012 10.3932 24.48 11.3322 24.48V12.2593M14.7763 21.0359C14.7763 21.0359 15.7808 21.0359 16.7854 23.332C16.7854 23.332 19.9769 17.5919 22.8125 16.4438"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.44408 12.9996L6.74013 14.1477M17.0724 3.81542L5.59211 9.55555M7.11439 10.3488L3.761 8.72667C1.92072 7.8358 1 7.39037 1 6.68548C1 5.98059 1.92072 5.53516 3.761 4.64429L7.11324 3.02213C9.18543 2.0199 10.2187 1.51936 11.3322 1.51936C12.4458 1.51936 13.4802 2.0199 15.5501 3.02213L18.9035 4.64429C20.7438 5.53516 21.6645 5.98059 21.6645 6.68548C21.6645 7.39037 20.7438 7.8358 18.9035 8.72667L15.5512 10.3488C13.479 11.3511 12.4458 11.8516 11.3322 11.8516C10.2187 11.8516 9.18428 11.3511 7.11439 10.3488Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ReceivedIcon;
