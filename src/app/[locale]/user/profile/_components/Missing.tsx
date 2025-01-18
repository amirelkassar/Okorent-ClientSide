import MissingIcon from "@/src/assets/icons/Missing";
import React from "react";
interface PropsMissing {
  title: string;
}
function Missing({ title }: PropsMissing) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <MissingIcon className="w-4 h-auto md:w-6" />
      <p className=" text-sm md:text-base lg:text-lg text-green">{title}</p>
    </div>
  );
}

export default Missing;
