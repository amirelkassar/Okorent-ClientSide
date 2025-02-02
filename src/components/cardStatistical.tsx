import React from "react";
interface CardStatisticalProps {
  title: string;
  number: string;
  percentage: number;
  icon: React.JSX.Element;
}
function CardStatistical({
  title,
  number,
  percentage,
  icon,
}: CardStatisticalProps) {
  return (
    <div className=" pt-3 lg:pt-7 ps-4 lg:ps-6 flex-1 shadow-md min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] bg-white pe-2 lg:pe-5 pb-3 lg:pb-7 rounded-[24px] border border-green flex items-center justify-between gap-4 ">
      <div className="  size-11 lg:size-16 rounded-full hidden lg:flex items-center justify-center p-2 lg:p-3 bg-green/10">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <div className=" size-11 lg:size-16 rounded-full flex lg:hidden items-center justify-center p-3 bg-green/10">
            {icon}
          </div>
          <h4 className="text-grayMedium text-base lg:text-[24px]  mb-0">
            {title}
          </h4>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl lg:text-[32px] font-Bold leading-9  ">
            {number}
          </p>
          <span className="bg-[#ECF4FA] px-3 min-h-6 flex items-center justify-center text-blue text-[10px] mdl:text-sm font-Regular rounded-lg">
            +{percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardStatistical;
