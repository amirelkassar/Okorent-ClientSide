import React from "react";
import Card from "./card";
interface CardStatisticalProps {
  title: string;
  number?: string;
  percentage: number;
  icon: React.JSX.Element;
  cell?: () => React.ReactNode;
}
function StatsCardUser({
  title,
  number,
  percentage,
  icon,
  cell,
}: CardStatisticalProps) {
  return (
    <Card className=" pt-3 lg:pt-7 ps-4 lg:ps-6 flex-1 rounded-3xl min-w-[120px] lg:min-w-[300px]  bg-white pe-2 lg:pe-5 pb-3 lg:pb-7 !border-green   flex items-center justify-between gap-4 ">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className=" size-9  rounded-full flex lg:hidden items-center justify-center p-2 bg-blueLight">
            {icon}
          </div>
          <h4 className="text-grayMedium text-base lg:text-[24px]  mb-0">
            {title}
          </h4>
        </div>
        <div className="flex flex-col gap-3 mt-2 md:mt-4  ">
          {number?.toString() ? (
            <p className="text-lg lg:text-[32px] font-Bold leading-6 lg:leading-9  ps-2">
              {number}
            </p>
          ) : null}
          {cell && cell()}
          <span className="bg-[#ECF4FA] px-3 w-fit min-h-6 flex items-center justify-center text-blue text-[10px] mdl:text-sm font-Regular rounded-lg">
            +{percentage}%
          </span>
        </div>
      </div>
      <div className="  size-16 rounded-full hidden lg:flex items-center justify-center p-3 bg-blueLight">
        {icon}
      </div>
    </Card>
  );
}

export default StatsCardUser;
