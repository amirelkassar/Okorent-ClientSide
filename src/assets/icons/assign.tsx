import { IconProps } from "@/src/types/type-icon";
import React from "react";

function AssignIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 14.2632V12.7895C1 12.0078 1.30905 11.2581 1.85915 10.7054C2.40926 10.1526 3.15536 9.84211 3.93333 9.84211H6.13333M8.33333 15L12 11.3158M12 11.3158V14.6316M12 11.3158H8.7M2.46667 3.94737C2.46667 4.72906 2.77571 5.47873 3.32582 6.03147C3.87593 6.58421 4.62203 6.89474 5.4 6.89474C6.17797 6.89474 6.92407 6.58421 7.47418 6.03147C8.02429 5.47873 8.33333 4.72906 8.33333 3.94737C8.33333 3.16568 8.02429 2.416 7.47418 1.86326C6.92407 1.31053 6.17797 1 5.4 1C4.62203 1 3.87593 1.31053 3.32582 1.86326C2.77571 2.416 2.46667 3.16568 2.46667 3.94737Z"
        stroke="#6F6B7D"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AssignIcon;
