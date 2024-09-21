import React from "react";

function AvailableIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.73465 1.02051L1.21875 8.83959C0.963568 9.14581 0.835976 9.29892 0.834026 9.42823C0.832331 9.54065 0.882423 9.64759 0.969866 9.71826C1.07045 9.79954 1.26976 9.79954 1.66837 9.79954H7.00307L6.27148 15.6522L12.7874 7.83314C13.0426 7.52692 13.1702 7.37381 13.1721 7.2445C13.1738 7.13209 13.1237 7.02514 13.0363 6.95448C12.9357 6.8732 12.7364 6.8732 12.3378 6.8732H7.00307L7.73465 1.02051Z"
        stroke="#88BA52"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AvailableIcon;
