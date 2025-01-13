import MissingIcon from "@/src/assets/icons/Missing";
import React from "react";
interface PropsMissing {
  title: string;
}
function Missing({ title }: PropsMissing) {
  return (
    <div className="flex items-center gap-3">
      <MissingIcon />
      <p className="text-base lg:text-lg text-green">{title}</p>
    </div>
  );
}

export default Missing;
