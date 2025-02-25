"use client";
import CalendarIcon from "@/src/assets/icons/Calendar";
import Card from "@/src/components/card";
import SkeletonLoading from "@/src/components/skeleton-loading";
import React, { useCallback } from "react";

function DurationAds({
  data,
  isLoading,
  Duration,
  setDuration,
}: {
  data: any;
  isLoading: boolean;
  Duration: any;
  setDuration: any;
}) {
  const formatDuration = useCallback((days: number) => {
    return days % 7 === 0
      ? `${days / 7} Week${days / 7 > 1 ? "s" : ""}`
      : `${days} Day${days > 1 ? "s" : ""}`;
  }, []);
  return (
    <Card className="flex-1 px-4 mdl:px-5 py-8 max-w-full">
      <h3 className="text-sm mb-1 mdl:mb-4  font-SemiBold mdl:text-base ">
        Duration
      </h3>
      <p className="text-xs mb-9 font-Regular text-grayMedium mdl:text-sm">
        Choose the Plan that Fits You and Start Promoting Today!
      </p>
      <div className="flex mdl:mb-8 items-center gap-3 lg:gap-4 flex-wrap mt-2">
        {isLoading ? (
          <>
            <SkeletonLoading className=" min-h-[118px] lg:!min-h-[170px] max-h-[118px] lg:max-h-[170px] max-w-[118px] lg:max-w-[170px]  min-w-[118px] lg:min-w-[170px] !rounded-xl" />
            <SkeletonLoading className=" min-h-[118px] lg:!min-h-[170px] max-h-[118px] lg:max-h-[170px] max-w-[118px] lg:max-w-[170px]  min-w-[118px] lg:min-w-[170px] !rounded-xl" />
          </>
        ) : (
          data?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => setDuration(item)}
                className={`border duration-300 hover:shadow-md cursor-pointer ${
                  Duration?.id === item.id
                    ? "border-green "
                    : "border-green/30 "
                } rounded-lg bg-white/50 px-3 py-4 min-w-[118px] lg:min-w-[170px]`}
              >
                <CalendarIcon />
                <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
                  {formatDuration(item?.durationDays || 0)}
                </h4>
                <p className="text-sm lg:text-base font-Bold text-black/80">
                  $ {item?.durationPrice || 0}
                </p>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
}

export default DurationAds;
