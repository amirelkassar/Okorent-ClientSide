import React from "react";
interface iconProps {
  className?: string;
  fill?: string;
}
function DownloadIcon({ className }: iconProps) {
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.05034 21.1729H13.9589C18.8828 21.1729 20.8523 19.2033 20.8523 14.2795V8.3709C20.8523 3.44707 18.8828 1.47754 13.9589 1.47754H8.05034C3.12651 1.47754 1.15698 3.44707 1.15698 8.3709V14.2795C1.15698 19.2033 3.12651 21.1729 8.05034 21.1729Z"
        stroke="#6F6B7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.05073 10.8428L11.005 13.7971L13.9593 10.8428M11.005 13.7971V5.91895M5.09644 15.7666C8.92717 17.0468 13.0829 17.0468 16.9136 15.7666"
        stroke="#6F6B7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DownloadIcon;
