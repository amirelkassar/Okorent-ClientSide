import RenderStatusAds from "@/src/components/render-status-ads";
import { getDate } from "@/src/lib/utils";
import React from "react";

function AdsDetails({ data }: { data: any }) {
  return (
    <div className="bg-blue/5 rounded-xl p-4 md:p-9 flex-1 ">
      <h3 className="text-blue text-lg md:text-2xl font-SemiBold mb-5 md:mb-12">
        Ad Details
      </h3>
      <div className="flex  flex-wrap w-full gap-y-5 mdl:gap-y-10">
        <InfoUser
          title="Starting date"
          info={getDate(data?.startDate).fullYearWithMonthName}
        />
        <InfoUser
          title="Ending Date"
          info={getDate(data?.endDate).fullYearWithMonthName}
        />
        <InfoUser title="Payment" info={`${data?.payment} $`} />
        <InfoUser
          title="Status"
          cell={() => (
            <RenderStatusAds status={data?.advertisementStatus || "0"} />
          )}
        />
      </div>
    </div>
  );
}

export default AdsDetails;

const InfoUser = ({
  title = "",
  info = "",
  cell,
}: {
  title: string;
  info?: string;
  cell?: () => React.ReactNode;
}) => {
  return (
    <div className=" pe-2 md:pe-3 min-w-[50%] flex-1 ">
      <h3 className="mb-1 font-SemiBold text-base md:text-xl">{title}</h3>
      {info && <p className=" text-grayMedium text-base md:text-xl">{info}</p>}
      {cell && cell()}
    </div>
  );
};
