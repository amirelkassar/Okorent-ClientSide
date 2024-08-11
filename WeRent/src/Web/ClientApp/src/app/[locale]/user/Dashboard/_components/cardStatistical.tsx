import Button from "@/src/components/button";
import React from "react";
interface CardStatisticalProps {
  title: string;
  number: string;
  percentage?: number;
  icon?: any;
  link?: string;
  titleLink?: string;
}
function CardStatistical({
  title,
  number,
  percentage,
  icon,
  link,
  titleLink,
}: CardStatisticalProps) {
  return (
    <div className="pt-7 px-9 pb-6 flex-1 min-w-[300px] lg:max-w-[430px] bg-white pe-10  rounded-[24px] border border-green flex items-center justify-between gap-5 shadow-sidebar">
      <div>
        <h4 className="text-grayMedium text-[24px] font-Medium mb-3">
          {title}
        </h4>
        <p className=" text-[32px] font-Bold leading-9  ">{number}</p>
        {percentage && (
          <span className="bg-[#ECF4FA] w-fit mt-5 px-3 min-h-6 flex items-center justify-center text-blue text-[14px] rounded-lg">
            +{percentage}%
          </span>
        )}
        {link && <Button className={'h-10 mt-3'}>{titleLink}</Button>}
      </div>
      <div className="size-[66px] rounded-full p-4 flex justify-center items-center bg-[#E9F1F8]">
        {icon}
      </div>
    </div>
  );
}

export default CardStatistical;
