import React from "react";
interface TrueWhiteIconProps {
  active?: boolean;
}
function TrueWhiteIcon({ active = false }: TrueWhiteIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="15.5"
        fill={active ? "#88BA52" : "white"}
        stroke={active ? "#88BA52" : "#C9C9C9"}
      />
      <path
        d="M23.1109 11.5557L13.3332 21.3334L8.88867 16.889"
        stroke={active ? "white" : "#C9C9C9"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrueWhiteIcon;
