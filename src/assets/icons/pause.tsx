import { IconProps } from "@/src/types/type-icon";
import React from "react";

function PauseIcon({ className = "", fill = "#006AFF" }: IconProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 13H10V5H12V13ZM8 13H6V5H8V13ZM12.73 0L18 5.27V12.73L12.73 18H5.27L0 12.73V5.27L5.27 0H12.73ZM11.9 2H6.1L2 6.1V11.9L6.1 16H11.9L16 11.9V6.1L11.9 2Z"
        fill={fill}
      />
    </svg>
  );
}

export default PauseIcon;
