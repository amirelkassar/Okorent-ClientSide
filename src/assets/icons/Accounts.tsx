import { IconProps } from "@/src/types/type-icon";
import React from "react";

function AccountsIcon({ className }: IconProps) {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.2708 9.72012V1.87207M20.3468 5.7961H28.1948M20.3468 24.1082V22.5386C20.3468 20.341 20.3468 19.2421 19.9191 18.4027C19.5429 17.6644 18.9426 17.0641 18.2042 16.6879C17.3648 16.2602 16.266 16.2602 14.0683 16.2602H8.31311C6.11545 16.2602 5.01662 16.2602 4.17722 16.6879C3.43887 17.0641 2.83857 17.6644 2.46236 18.4027C2.03467 19.2421 2.03467 20.341 2.03467 22.5386V24.1082M15.7688 6.4501C15.7688 8.97848 13.7191 11.0281 11.1907 11.0281C8.66235 11.0281 6.6127 8.97848 6.6127 6.4501C6.6127 3.92172 8.66235 1.87207 11.1907 1.87207C13.7191 1.87207 15.7688 3.92172 15.7688 6.4501Z"
        stroke="#0F2A43"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AccountsIcon;
