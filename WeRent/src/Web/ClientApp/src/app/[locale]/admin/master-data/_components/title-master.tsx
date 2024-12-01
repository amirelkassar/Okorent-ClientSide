import React from "react";
interface TitleMasterProps {
  title: string;
  num?: number;
}
function TitleMaster({ title = "", num = 0 }: TitleMasterProps) {
  return (
    <h3 className="text-[32px] font-SemiBold">
      {title} - <span className="font-Regular text-2xl">{num}</span>
    </h3>
  );
}

export default TitleMaster;
