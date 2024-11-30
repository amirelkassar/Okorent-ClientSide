import { IconProps } from "@/src/types/type-icon";
import React from "react";

function NotificationsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 20.7149V19.4639H2.57771V9.54956C2.57771 7.91489 3.10914 6.47747 4.172 5.23729C5.23486 3.99712 6.58229 3.22482 8.21429 2.9204V2.23735C8.21429 1.88956 8.339 1.59432 8.58843 1.35163C8.83786 1.10809 9.14086 0.986328 9.49743 0.986328C9.854 0.986328 10.1579 1.10809 10.409 1.35163C10.6601 1.59516 10.7857 1.8904 10.7857 2.23735V2.9204C12.4177 3.22482 13.7651 3.99753 14.828 5.23854C15.8909 6.47956 16.4223 7.91698 16.4223 9.55081V19.4626H18.5V20.7137L0.5 20.7149ZM9.49614 23.9863C8.92357 23.9863 8.435 23.7882 8.03043 23.3921C7.62586 22.9959 7.42357 22.5205 7.42357 21.9659H11.5764C11.5764 22.5247 11.3729 23.0009 10.9657 23.3946C10.5577 23.7882 10.0679 23.9863 9.49614 23.9863ZM3.86343 19.4639H15.1379V9.55081C15.1379 8.0304 14.5889 6.73602 13.4909 5.66764C12.3929 4.59927 11.0626 4.0655 9.5 4.06634C7.93743 4.06717 6.60714 4.60094 5.50914 5.66764C4.41114 6.73435 3.86257 8.02874 3.86343 9.55081V19.4639Z"
        fill="#012929"
      />
    </svg>
  );
}

export default NotificationsIcon;
