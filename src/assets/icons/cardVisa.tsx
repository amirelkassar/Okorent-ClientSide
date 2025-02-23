import { IconProps } from "@/src/types/type-icon";
import React from "react";

function CardVisaIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 9.25C3.58579 9.25 3.25 9.58579 3.25 10C3.25 10.4142 3.58579 10.75 4 10.75V9.25ZM7.5 10.75C7.91421 10.75 8.25 10.4142 8.25 10C8.25 9.58579 7.91421 9.25 7.5 9.25V10.75ZM3 1.75H17V0.25H3V1.75ZM18.25 3V11H19.75V3H18.25ZM17 12.25H3V13.75H17V12.25ZM1.75 11V3H0.25V11H1.75ZM3 12.25C2.30964 12.25 1.75 11.6904 1.75 11H0.25C0.25 12.5188 1.48122 13.75 3 13.75V12.25ZM18.25 11C18.25 11.6904 17.6904 12.25 17 12.25V13.75C18.5188 13.75 19.75 12.5188 19.75 11H18.25ZM17 1.75C17.6904 1.75 18.25 2.30964 18.25 3H19.75C19.75 1.48122 18.5188 0.25 17 0.25V1.75ZM3 0.25C1.48122 0.25 0.25 1.48122 0.25 3H1.75C1.75 2.30964 2.30964 1.75 3 1.75V0.25ZM1 5.75H19V4.25H1V5.75ZM4 10.75H7.5V9.25H4V10.75Z"
        fill="#0F2A43"
      />
    </svg>
  );
}

export default CardVisaIcon;
