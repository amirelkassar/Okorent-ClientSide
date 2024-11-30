import { IconProps } from "@/src/types/type-icon";
import React from "react";

function GmailIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="27"
      height="22"
      viewBox="0 0 27 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 4.75L11.2061 11.8943C12.0326 12.4728 12.4458 12.7621 12.8953 12.8741C13.2924 12.9731 13.7076 12.9731 14.1047 12.8741C14.5542 12.7621 14.9674 12.4728 15.7938 11.8943L26 4.75M7 21H20C22.1002 21 23.1503 21 23.9525 20.5913C24.6581 20.2317 25.2317 19.6581 25.5913 18.9525C26 18.1503 26 17.1002 26 15V7C26 4.8998 26 3.8497 25.5913 3.04754C25.2317 2.34193 24.6581 1.76825 23.9525 1.40873C23.1503 1 22.1002 1 20 1H7C4.8998 1 3.8497 1 3.04754 1.40873C2.34193 1.76825 1.76825 2.34193 1.40873 3.04754C1 3.8497 1 4.8998 1 7V15C1 17.1002 1 18.1503 1.40873 18.9525C1.76825 19.6581 2.34193 20.2317 3.04754 20.5913C3.8497 21 4.8998 21 7 21Z"
        stroke="#344050"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GmailIcon;
