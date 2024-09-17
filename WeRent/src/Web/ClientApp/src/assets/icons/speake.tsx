import React from "react";

function SpeakIcon({ className }: { className?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7 13H7.01333M13 13H13.0133M19 13H19.0133M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 14.5962 1.31165 16.1196 1.87742 17.5127C1.9857 17.7793 2.03984 17.9126 2.06399 18.0204C2.08762 18.1258 2.09626 18.2038 2.09628 18.3118C2.09629 18.4223 2.07624 18.5426 2.03614 18.7831L1.2455 23.527C1.16271 24.0238 1.12131 24.2721 1.19835 24.4518C1.26577 24.609 1.39104 24.7342 1.54825 24.8017C1.72786 24.8787 1.97624 24.8373 2.47301 24.7545L7.21687 23.9639C7.45745 23.9238 7.57774 23.9037 7.68818 23.9037C7.7962 23.9037 7.87421 23.9124 7.97963 23.936C8.08739 23.9602 8.2207 24.0143 8.48732 24.1226C9.88041 24.6884 11.4038 25 13 25ZM7.66667 13C7.66667 13.3682 7.36819 13.6667 7 13.6667C6.63181 13.6667 6.33333 13.3682 6.33333 13C6.33333 12.6318 6.63181 12.3333 7 12.3333C7.36819 12.3333 7.66667 12.6318 7.66667 13ZM13.6667 13C13.6667 13.3682 13.3682 13.6667 13 13.6667C12.6318 13.6667 12.3333 13.3682 12.3333 13C12.3333 12.6318 12.6318 12.3333 13 12.3333C13.3682 12.3333 13.6667 12.6318 13.6667 13ZM19.6667 13C19.6667 13.3682 19.3682 13.6667 19 13.6667C18.6318 13.6667 18.3333 13.3682 18.3333 13C18.3333 12.6318 18.6318 12.3333 19 12.3333C19.3682 12.3333 19.6667 12.6318 19.6667 13Z"
        stroke="#344050"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SpeakIcon;
