import { IconProps } from "@/src/types/type-icon";
import React from "react";

function DeactivateIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.6843 11.1026L16.5625 14.9808M16.5625 11.1026L12.6843 14.9808M9.19389 10.7148H5.70352C4.62106 10.7148 4.07983 10.7148 3.63943 10.8484C2.64785 11.1492 1.87189 11.9251 1.5711 12.9167C1.4375 13.3571 1.4375 13.8983 1.4375 14.9808M11.133 4.50966C11.133 6.43734 9.57029 8.00004 7.64261 8.00004C5.71493 8.00004 4.15224 6.43734 4.15224 4.50966C4.15224 2.58198 5.71493 1.01929 7.64261 1.01929C9.57029 1.01929 11.133 2.58198 11.133 4.50966Z"
        stroke="#006AFF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DeactivateIcon;
