import React from "react";

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.3346 11.6667C15.3346 12.0203 15.1942 12.3594 14.9441 12.6095C14.6941 12.8595 14.3549 13 14.0013 13H2.0013C1.64768 13 1.30854 12.8595 1.05849 12.6095C0.808445 12.3594 0.667969 12.0203 0.667969 11.6667V4.33333C0.667969 3.97971 0.808445 3.64057 1.05849 3.39052C1.30854 3.14048 1.64768 3 2.0013 3H4.66797L6.0013 1H10.0013L11.3346 3H14.0013C14.3549 3 14.6941 3.14048 14.9441 3.39052C15.1942 3.64057 15.3346 3.97971 15.3346 4.33333V11.6667Z"
        stroke="#1E1E1E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.0013 10.3333C9.47406 10.3333 10.668 9.13943 10.668 7.66667C10.668 6.19391 9.47406 5 8.0013 5C6.52854 5 5.33464 6.19391 5.33464 7.66667C5.33464 9.13943 6.52854 10.3333 8.0013 10.3333Z"
        stroke="#1E1E1E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default CameraIcon;
