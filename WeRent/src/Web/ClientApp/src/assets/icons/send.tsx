import React from "react";
interface iconProps {
  className?: string;
  fill?: string;
}
function SendIcon({ className = "" }: iconProps) {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25.5005 12.9993H6.25022M25.5005 12.9993L1.87516 24.3744L6.25022 12.9993M25.5005 12.9993L1.87516 1.62411L6.25022 12.9993"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SendIcon;
