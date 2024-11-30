import { IconProps } from "@/src/types/type-icon";
import React from "react";

function FileIcon({ className = "", fill }: IconProps) {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.2168 1.74389V5.40289C10.2168 5.899 10.2168 6.14706 10.3133 6.33655C10.3983 6.50323 10.5338 6.63875 10.7005 6.72368C10.89 6.82023 11.138 6.82023 11.6341 6.82023H15.2931M11.9885 11.2494H4.90176M11.9885 14.7927H4.90176M6.67344 7.70601H4.90176M10.2168 1.50513H5.61043C4.12208 1.50513 3.3779 1.50513 2.80943 1.79478C2.30938 2.04956 1.90284 2.45611 1.64805 2.95616C1.3584 3.52463 1.3584 4.26881 1.3584 5.75716V14.9699C1.3584 16.4582 1.3584 17.2024 1.64805 17.7709C1.90284 18.2709 2.30938 18.6775 2.80943 18.9323C3.3779 19.2219 4.12208 19.2219 5.61043 19.2219H11.2798C12.7682 19.2219 13.5123 19.2219 14.0808 18.9323C14.5808 18.6775 14.9874 18.2709 15.2422 17.7709C15.5318 17.2024 15.5318 16.4582 15.5318 14.9699V6.82017L10.2168 1.50513Z"
        stroke="#0F2A43"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FileIcon;
