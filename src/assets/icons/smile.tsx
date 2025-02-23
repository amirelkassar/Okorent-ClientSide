import { IconProps } from "@/src/types/type-icon";
import React from "react";

function SmileIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.95 22.1168C11.95 22.1168 14.459 25.4621 18.6406 25.4621C22.8223 25.4621 25.3313 22.1168 25.3313 22.1168M27.0039 14.1549C26.3432 14.9662 25.44 15.4262 24.4949 15.4262C23.5499 15.4262 22.6717 14.9662 21.9859 14.1549M15.2953 14.1549C14.6346 14.9662 13.7314 15.4262 12.7863 15.4262C11.8413 15.4262 10.9631 14.9662 10.2773 14.1549M35.3672 18.7715C35.3672 28.0093 27.8785 35.498 18.6406 35.498C9.4028 35.498 1.91406 28.0093 1.91406 18.7715C1.91406 9.53366 9.4028 2.04492 18.6406 2.04492C27.8785 2.04492 35.3672 9.53366 35.3672 18.7715Z"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SmileIcon;
