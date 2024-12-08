import { IconProps } from "@/src/types/type-icon";
import React from "react";

function OfflineIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.99053 0.848633L0.619874 7.29342C0.409542 7.54582 0.304376 7.67202 0.302769 7.7786C0.301372 7.87126 0.342659 7.95941 0.414733 8.01765C0.497641 8.08465 0.661915 8.08465 0.990465 8.08465H5.38753L4.78453 12.9087L10.1552 6.46387C10.3655 6.21147 10.4707 6.08527 10.4723 5.97869C10.4737 5.88603 10.4324 5.79788 10.3603 5.73964C10.2774 5.67264 10.1131 5.67264 9.78459 5.67264H5.38753L5.99053 0.848633Z"
        fill="#6F6B7D"
      />
    </svg>
  );
}

export default OfflineIcon;
