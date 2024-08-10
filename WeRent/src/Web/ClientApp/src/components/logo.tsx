import React from "react";
interface Logo {
  theme: "green" | "white" | "black";
}
function Logo({ theme }: Logo) {
  return (
    <div
      className={`w-fit text-[25px] font-Bold leading-[22px] ${
        theme === "white" ? "text-white" : ""
      }`}
      dir="ltr"
    >
      We <br /> Rent.
      <span
        className={` ${
          theme === "white"
            ? "text-white"
            : theme === "green"
            ? "text-green"
            : ""
        }`}
      >
        ch
      </span>
    </div>
  );
}

export default Logo;
