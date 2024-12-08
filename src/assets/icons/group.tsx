import { IconProps } from "@/src/types/type-icon";
import React from "react";

function GroupIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.2881 13.9258H6.78809C5.39252 13.9258 4.69474 13.9258 4.12694 14.098C2.84854 14.4858 1.84813 15.4862 1.46033 16.7646C1.28809 17.3324 1.28809 18.0302 1.28809 19.4258M13.7881 5.92578C13.7881 8.41106 11.7734 10.4258 9.28809 10.4258C6.8028 10.4258 4.78809 8.41106 4.78809 5.92578C4.78809 3.4405 6.8028 1.42578 9.28809 1.42578C11.7734 1.42578 13.7881 3.4405 13.7881 5.92578Z"
        stroke="#006AFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.9766 13.9258H18.4766C17.081 13.9258 16.3832 13.9258 15.8154 14.098C14.537 14.4858 13.5366 15.4862 13.1488 16.7646C12.9766 17.3324 12.9766 18.0302 12.9766 19.4258M25.4766 5.92578C25.4766 8.41106 23.4618 10.4258 20.9766 10.4258C18.4913 10.4258 16.4766 8.41106 16.4766 5.92578C16.4766 3.4405 18.4913 1.42578 20.9766 1.42578C23.4618 1.42578 25.4766 3.4405 25.4766 5.92578Z"
        stroke="#006AFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.1377 20.5742V13.4258M23.5635 17C26.3551 17 27.9203 17 30.7119 17"
        stroke="#006AFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GroupIcon;
