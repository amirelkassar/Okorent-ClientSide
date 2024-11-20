import React from "react";
interface iconProps {
  className?: string;
  fill?: string;
}
function NameIcon({ className, fill }: iconProps) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.32724 13.1309C6.15717 13.1309 3.33804 14.6615 1.54324 17.0368C1.15695 17.5481 0.963803 17.8037 0.970121 18.1491C0.975002 18.416 1.1426 18.7528 1.35261 18.9176C1.62443 19.1309 2.00111 19.1309 2.75448 19.1309H15.9C16.6534 19.1309 17.0301 19.1309 17.3019 18.9176C17.5119 18.7528 17.6795 18.416 17.6844 18.1491C17.6907 17.8037 17.4975 17.5481 17.1112 17.0368C15.3164 14.6615 12.4973 13.1309 9.32724 13.1309Z"
        stroke="#6F6B7D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.32724 10.1309C11.8125 10.1309 13.8272 8.11614 13.8272 5.63086C13.8272 3.14558 11.8125 1.13086 9.32724 1.13086C6.84196 1.13086 4.82724 3.14558 4.82724 5.63086C4.82724 8.11614 6.84196 10.1309 9.32724 10.1309Z"
        stroke="#6F6B7D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default NameIcon;
