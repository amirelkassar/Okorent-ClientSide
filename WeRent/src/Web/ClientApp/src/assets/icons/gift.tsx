import { IconProps } from "@/src/types/type-icon";
import React from "react";

function GiftIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 9.5H10.25C9.25544 9.5 8.30161 9.10491 7.59835 8.40165C6.89509 7.69839 6.5 6.74456 6.5 5.75C6.5 4.75544 6.89509 3.80161 7.59835 3.09835C8.30161 2.39509 9.25544 2 10.25 2C15.5 2 17 9.5 17 9.5ZM17 9.5H23.75C24.7446 9.5 25.6984 9.10491 26.4017 8.40165C27.1049 7.69839 27.5 6.74456 27.5 5.75C27.5 4.75544 27.1049 3.80161 26.4017 3.09835C25.6984 2.39509 24.7446 2 23.75 2C18.5 2 17 9.5 17 9.5ZM17 9.5L17 32M2 20H32M2 14.3L2 27.2C2 28.8802 2 29.7202 2.32698 30.362C2.6146 30.9265 3.07354 31.3854 3.63803 31.673C4.27976 32 5.11984 32 6.8 32L27.2 32C28.8802 32 29.7202 32 30.362 31.673C30.9265 31.3854 31.3854 30.9265 31.673 30.362C32 29.7202 32 28.8802 32 27.2V14.3C32 12.6198 32 11.7798 31.673 11.138C31.3854 10.5735 30.9265 10.1146 30.362 9.82698C29.7202 9.5 28.8802 9.5 27.2 9.5L6.8 9.5C5.11984 9.5 4.27976 9.5 3.63803 9.82698C3.07354 10.1146 2.6146 10.5735 2.32698 11.138C2 11.7798 2 12.6198 2 14.3Z"
        stroke="#0F2A43"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GiftIcon;
