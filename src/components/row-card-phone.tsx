import React from "react";
interface RowCardPhoneProps {
  title: string;
  info?: string|number;
  cell?: () => React.ReactNode;
}
function RowCardPhone({ title, info, cell }:RowCardPhoneProps) {
  return (
    <div className="flex items-center justify-between gap-y-1 gap-x-5    w-full">
      <h4 className="text-base font-SemiBold ">{title}</h4>
      {info && <p className=" text-sm md:text-base font-Medium text-grayMedium  truncate">{info}</p>}
      {cell && cell()}
    </div>
  );
}

export default RowCardPhone;
