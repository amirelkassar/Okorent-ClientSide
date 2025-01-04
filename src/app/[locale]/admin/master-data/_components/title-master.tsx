import React from "react";
interface TitleMasterProps {
  title: string;
  num?: number;
}
function TitleMaster({ title = "", num = 0 }: TitleMasterProps) {
  return (
    <h3 className=" text-xl mdl:text-[32px] font-SemiBold">
      {title}{" "}
      {num ? (
        <>
          {" "}
          - <span className="font-Regular text-2xl">{num}</span>
        </>
      ) : null}
    </h3>
  );
}

export default TitleMaster;
