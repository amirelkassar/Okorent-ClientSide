import { cn } from "@/src/lib/utils";
import React from "react";
interface StepProps {
  stepNum: number;
  active?: boolean;
  title: string;
  children: React.ReactNode;
  dec?: string;
  last?: boolean;
}
function Step({
  stepNum = 1,
  children,
  active = false,
  title,
  dec,
  last=false,
}: StepProps) {
  return (
    <div
      className={cn(
        "flex gap-4 w-full max-w-full",
        !active && "opacity-40 pointer-events-none  "
      )}
    >
      <div className="flex flex-col  items-center gap-1">
        <p className=" size-8 lg:size-[46px] text-white text-base lg:text-[24px] border-[3px] border-[#a9c788] font-Medium rounded-full bg-green flex items-center justify-center">
          {stepNum}
        </p>
        {!last && (
          <span className="flex-1 block h-full w-[1px] bg-black/40 mb-1"></span>
        )}
      </div>
      <div className="mt-[7px] pb-5 lg:pb-12 flex-1 max-w-[calc(100%-50px)]">
        <h3 className={cn("text-sm lg:text-[24px] lg:mb-1 ", !dec && "!mb-3 lg:!mb-6")}>{title}</h3>
        {dec && (
          <p className="text-grayMedium mb-3 lg:mb-4 text-sm lg:text-base font-Regular">{dec}</p>
        )}
        {children}
      </div>
    </div>
  );
}

export default Step;
