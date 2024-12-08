import { IconProps } from "@/src/types/type-icon";
import React from "react";

function AddUserIcon({ className='', fill = "white" }: IconProps) {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8787 6.66492V1.06067M14.0766 3.8628H19.6808M14.0766 16.9394V15.8185C14.0766 14.2492 14.0766 13.4645 13.7712 12.8651C13.5025 12.3379 13.0739 11.9092 12.5466 11.6405C11.9472 11.3351 11.1625 11.3351 9.59319 11.3351H5.4834C3.91406 11.3351 3.1294 11.3351 2.52999 11.6405C2.00273 11.9092 1.57406 12.3379 1.30541 12.8651C1 13.4645 1 14.2492 1 15.8185V16.9394M10.8074 4.32982C10.8074 6.13532 9.3438 7.59896 7.5383 7.59896C5.73279 7.59896 4.26915 6.13532 4.26915 4.32982C4.26915 2.52432 5.73279 1.06067 7.5383 1.06067C9.3438 1.06067 10.8074 2.52432 10.8074 4.32982Z"
        stroke={fill}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddUserIcon;
