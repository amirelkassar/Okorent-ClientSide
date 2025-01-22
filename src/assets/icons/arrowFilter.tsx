import { IconProps } from "@/src/types/type-icon";
import React from "react";

function ArrowFilter({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.9927 5.76282L0.750974 0.00890986L9.23443 0.0089106L4.9927 5.76282Z"
        fill={fill}
      />
    </svg>
  );
}

export default ArrowFilter;
