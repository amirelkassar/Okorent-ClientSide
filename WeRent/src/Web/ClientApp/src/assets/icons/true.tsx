import React from "react";

function TrueIcon({ className ,fill='#006AFF' }: { className?: string,fill?:string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.217 8.34015V9.00413C16.2161 10.5605 15.7122 12.0748 14.7803 13.3213C13.8485 14.5678 12.5387 15.4797 11.0462 15.921C9.55374 16.3623 7.95862 16.3093 6.49875 15.7699C5.03887 15.2306 3.79244 14.2338 2.94537 12.9281C2.0983 11.6225 1.69596 10.0781 1.79836 8.52513C1.90076 6.97218 2.50241 5.49394 3.51359 4.31086C4.52477 3.12779 5.89129 2.30327 7.40935 1.96029C8.92741 1.6173 10.5157 1.77422 11.9373 2.40764M16.217 3.22627L8.99987 10.4506L6.83473 8.2855"
        stroke={fill}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TrueIcon;
