import React from "react";
interface ProgressRev {
  val: number;
}
function ProgressRev({ val }: ProgressRev) {
  return (
    <div className="flex items-center gap-4 flex-1">
      <div className="flex-1 max-w-full  h-8 rounded-lg border overflow-hidden border-green/50">
        <span
          style={{ width: `${val}%` }}
          className={`block duration-300 bg-green h-full `}
        ></span>
      </div>
      <p className="text-xs lg:text-[14px] font-Regular text-grayMedium">{val}%</p>
    </div>
  );
}

export default ProgressRev;
