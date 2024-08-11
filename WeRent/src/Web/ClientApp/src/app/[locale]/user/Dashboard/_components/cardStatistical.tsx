import React from "react";
interface CardStatisticalProps {
  title: string;
  number: number;
  percentage: number;
}
function CardStatistical({ title, number, percentage }: CardStatisticalProps) {
  return (
    <div className="pt-9 ps-7 flex-1 min-w-[300px] lg:max-w-[430px] bg-white pe-10 pb-6 rounded-[24px] border border-green flex items-center justify-between gap-4 ">
      <div>
        <h4 className="text-grayMedium text-[24px] font-Medium mb-0">
          {title}
        </h4>
        <p className=" text-[32px] font-Bold leading-9  ">{number}</p>
      </div>
      <span className="bg-[#ECF4FA] px-3 min-h-6 flex items-center justify-center text-blue text-[14px] rounded-lg">
        +{percentage}%
      </span>
    </div>
  );
}

export default CardStatistical;
