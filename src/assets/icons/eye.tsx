import { IconProps } from "@/src/types/type-icon";
import React from "react";

function EyeIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="42"
      height="30"
      viewBox="0 0 42 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.995 13.3991C39.5683 14.2025 39.8549 14.606 39.8549 15.2C39.8549 15.7959 39.5683 16.1975 38.995 17.0009C36.4191 20.6139 29.8399 28.4 20.9978 28.4C12.1538 28.4 5.5764 20.612 3.00051 17.0009C2.42725 16.1975 2.14062 15.794 2.14062 15.2C2.14062 14.6041 2.42725 14.2025 3.00051 13.3991C5.5764 9.78611 12.1557 2 20.9978 2C29.8418 2 36.4191 9.788 38.995 13.3991Z"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.658 15.2001C26.658 13.6997 26.062 12.2608 25.0011 11.1999C23.9402 10.139 22.5013 9.54297 21.0009 9.54297C19.5005 9.54297 18.0616 10.139 17.0007 11.1999C15.9398 12.2608 15.3438 13.6997 15.3438 15.2001C15.3438 16.7005 15.9398 18.1394 17.0007 19.2003C18.0616 20.2612 19.5005 20.8573 21.0009 20.8573C22.5013 20.8573 23.9402 20.2612 25.0011 19.2003C26.062 18.1394 26.658 16.7005 26.658 15.2001Z"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EyeIcon;
