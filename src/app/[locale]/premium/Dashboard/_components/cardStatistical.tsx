import LinkGreen from "@/src/components/linkGreen";
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
    <div className="pt-[14px] lg:pt-7 mb-2 px-4 lg:px-9 pb-3 lg:pb-6 flex-1 min-w-[190px] lg:min-w-[300px] lg:max-w-[430px] bg-white lg:pe-10  rounded-[24px] border border-green flex items-center justify-between gap-5 shadow-md">
      <div>
        <div className="flex items-center gap-4">
          <div className="size-11 rounded-full p-[10px] flex lg:hidden justify-center items-center bg-[#E9F1F8]">
            {icon}
          </div>
          <h4 className="text-grayMedium text-base lg:text-[24px] font-Medium mb-3">
            {title}
          </h4>
        </div>
        <p className=" text-xl lg:text-[32px] font-Bold leading-9 px-2 lg:px-0  ">{number}</p>
        {percentage && (
          <span className="bg-[#ECF4FA] w-fit mt-1 lg:mt-5 px-3 min-h-6 flex items-center justify-center text-blue text-[14px] rounded-lg">
            +{percentage}%
          </span>
        )}
        {link && <LinkGreen href={link||'#'} className={"h-10 w-fit mt-1 lg:mt-3"}>{titleLink}</LinkGreen>}
      </div>
      <div className="size-[66px] rounded-full p-4 lg:flex hidden justify-center items-center bg-[#E9F1F8]">
        {icon}
      </div>
    </div>
  );
}

export default CardStatistical;
