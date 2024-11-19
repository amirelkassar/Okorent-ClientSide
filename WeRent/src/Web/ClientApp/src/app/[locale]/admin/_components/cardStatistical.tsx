import { Icon } from "ol/style";
import React from "react";
interface CardStatisticalProps {
  title: string;
  number: string;
  percentage: number;
  icon: React.JSX.Element;
}
function CardStatistical({ title, number, percentage,icon }: CardStatisticalProps) {
  return (
    <div className="pt-7 ps-6 flex-1 shadow-md min-w-[300px] lg:max-w-[430px] bg-white pe-5 pb-7 rounded-[24px] border border-green flex items-center justify-between gap-4 ">
      <div className=" size-16 rounded-full flex items-center justify-center p-3 bg-green/10">{icon}</div>
      <div className="flex-1">
        <h4 className="text-grayMedium text-[24px] font-Regular mb-0">
          {title}
        </h4>
        <div className="flex items-center justify-between">
          <p className=" text-[32px] font-Bold leading-9  ">{number}</p>
          <span className="bg-[#ECF4FA] px-3 min-h-6 flex items-center justify-center text-blue text-[14px] rounded-lg">
            +{percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardStatistical;
