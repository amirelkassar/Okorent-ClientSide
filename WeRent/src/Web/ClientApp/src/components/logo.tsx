import Image from "next/image";
import React from "react";
import logo from "@/src/assets/images/logo.png";
interface Logo {
  theme: "green" | "white" | "black";
}
function Logo({ theme }: Logo) {
  return (
    <div className={`w-fit text-[25px] font-Bold leading-[22px]`} dir="ltr">
      <Image src={logo} alt="logo" width={135} height={45} />
    </div>
  );
}

export default Logo;
