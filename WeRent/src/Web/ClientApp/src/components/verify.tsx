import TrueGreenIcon from "@/src/assets/icons/trueGreen";
import React from "react";
interface PropsVerify {
    title: string;
  }
function Verify({ title }: PropsVerify) {
  return (
    <div className="flex items-center gap-3">
      <TrueGreenIcon fill="#0F2A43" className="min-w-5 lg:min-w-6 h-auto w-5 lg:w-6" />
      <p className="text-base lg:text-xl ">{title}</p>
    </div>
  );
}

export default Verify;
