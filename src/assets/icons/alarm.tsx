import { IconProps } from "@/src/types/type-icon";
import React from "react";

function AlarmIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="29"
      height="27"
      viewBox="0 0 29 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.01836 1.13086L1 5.14922M27.7891 5.14922L23.7707 1.13086M6.35781 22.5621L3.67891 25.241M22.4312 22.5621L25.1102 25.241M10.3762 15.1951L13.0551 17.874L19.0826 11.8465M14.3945 25.241C17.2365 25.241 19.9621 24.1121 21.9716 22.1025C23.9812 20.0929 25.1102 17.3674 25.1102 14.5254C25.1102 11.6834 23.9812 8.95787 21.9716 6.9483C19.9621 4.93873 17.2365 3.80977 14.3945 3.80977C11.5526 3.80977 8.82701 4.93873 6.81744 6.9483C4.80787 8.95787 3.67891 11.6834 3.67891 14.5254C3.67891 17.3674 4.80787 20.0929 6.81744 22.1025C8.82701 24.1121 11.5526 25.241 14.3945 25.241Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AlarmIcon;
