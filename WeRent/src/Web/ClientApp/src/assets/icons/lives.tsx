import { IconProps } from "@/src/types/type-icon";
import React from "react";

function LivesIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 1C16.0015 4.28602 17.7073 8.55044 17.8 13C17.7073 17.4496 16.0015 21.714 13 25M13 1C9.99846 4.28602 8.2927 8.55044 8.2 13C8.2927 17.4496 9.99846 21.714 13 25M13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25M13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25M1.60002 9.4H24.4M1.6 16.6H24.4"
        stroke="#344050"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LivesIcon;
