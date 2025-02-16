import React from "react";
import LogoOkoRent from "../assets/icons/logo";
interface Logo {
  theme: "green" | "white" | "black";
}
function Logo() {
  return (
    <div className="mx-auto mdl:mx-0">
      <LogoOkoRent className="w-[135px]  h-auto" />
    </div>
  );
}

export default Logo;
