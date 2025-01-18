import { IconProps } from "@/src/types/type-icon";
import React from "react";

function SomethingIcon({ className = "", fill = "#006AFF" }: IconProps) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 17C16.771 17 18.657 17 19.828 15.828C20.999 14.656 21 12.771 21 9C21 5.229 21 3.343 19.828 2.172C18.656 1.001 16.771 1 13 1H9C5.229 1 3.343 1 2.172 2.172C1.001 3.344 1 5.229 1 9C1 12.771 1 14.657 2.172 15.828C2.825 16.482 3.7 16.771 5 16.898"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99731 6.484C9.49731 5.494 9.99731 5 10.9973 5C12.2433 5 12.9973 5.989 12.9973 6.978C12.9973 7.967 12.4973 8.011 10.9973 9V10M10.9973 12.5V13M12.9973 17C11.7613 17 10.3993 17.5 9.15631 18.145C7.15831 19.182 6.15931 19.701 5.66731 19.37C5.17531 19.039 5.26831 18.015 5.45531 15.966L5.49731 15.5"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SomethingIcon;
