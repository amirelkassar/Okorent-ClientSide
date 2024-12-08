import { IconProps } from "@/src/types/type-icon";
import React from "react";

function OnlineIcon({ className = "", fill = "#6F6B7D" }: IconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.39106 1.67388H4.23464C3.10241 1.67388 2.53629 1.67388 2.10384 1.89423C1.72344 2.08805 1.41417 2.39732 1.22035 2.77772C1 3.21017 1 3.77629 1 4.90852V9.89525C1 11.0275 1 11.5936 1.22035 12.026C1.41417 12.4064 1.72344 12.7157 2.10384 12.9095C2.53629 13.1299 3.10241 13.1299 4.23464 13.1299H9.22136C10.3536 13.1299 10.9197 13.1299 11.3522 12.9095C11.7326 12.7157 12.0418 12.4064 12.2357 12.026C12.456 11.5936 12.456 11.0275 12.456 9.89525V7.73882M7.73882 10.4344H3.69553M9.08659 7.73882H3.69553M12.5378 1.59213C13.3273 2.38163 13.3273 3.66167 12.5378 4.45117C11.7483 5.24067 10.4682 5.24067 9.67871 4.45117C8.88921 3.66167 8.88921 2.38163 9.67871 1.59213C10.4682 0.802624 11.7483 0.802624 12.5378 1.59213Z"
        stroke={fill}
        stroke-width="1.1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default OnlineIcon;
