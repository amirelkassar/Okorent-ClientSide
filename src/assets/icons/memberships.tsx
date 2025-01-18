import { IconProps } from "@/src/types/type-icon";
import React from "react";

function MembershipsIcon({ className = "", fill = "#0F2A43" }: IconProps) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.16667 11.0909V13.1847C1.16667 13.3623 1.24133 13.5256 1.39067 13.6746C1.54 13.8236 1.7045 13.8977 1.88417 13.8969H19.1158C19.2947 13.8969 19.4592 13.8228 19.6093 13.6746C19.7594 13.5263 19.8341 13.3627 19.8333 13.1836V11.0909H1.16667ZM1.88417 0H19.1158C19.6369 0 20.0814 0.182204 20.4493 0.546612C20.8164 0.911021 21 1.35263 21 1.87145V13.1847C21 13.702 20.8164 14.1432 20.4493 14.5084C20.0822 14.8728 19.6377 15.055 19.1158 15.055H13.9102V20L10.5 18.3057L7.08983 19.9977V15.055H1.88533C1.36267 15.055 0.917778 14.8728 0.550667 14.5084C0.183555 14.144 0 13.7028 0 13.1847V1.8703C0 1.35302 0.183555 0.911793 0.550667 0.546612C0.917778 0.182204 1.36267 0 1.88533 0M1.16667 8.59641H19.8333V1.87145C19.8333 1.69311 19.7587 1.52943 19.6093 1.38043C19.46 1.23142 19.2955 1.15731 19.1158 1.15808H1.88417C1.70528 1.15808 1.54078 1.23219 1.39067 1.38043C1.24056 1.52866 1.16589 1.69195 1.16667 1.8703V8.59641ZM1.16667 13.1847V1.15808H1.88533C1.70567 1.15808 1.54078 1.23219 1.39067 1.38043C1.24056 1.52866 1.16589 1.69195 1.16667 1.8703V13.1847ZM1.16667 13.1847C1.16667 13.3623 1.24133 13.5256 1.39067 13.6746C1.54 13.8236 1.7045 13.8977 1.88417 13.8969H1.16667V13.1847Z"
        fill={fill}
      />
    </svg>
  );
}

export default MembershipsIcon;
