"use client";
import DailyIcon from "@/src/assets/icons/daily";
import MonthlyIcon from "@/src/assets/icons/Monthly";
import WeekIcon from "@/src/assets/icons/week";
import Card from "@/src/components/card";
import React, { useState } from "react";

function DurationAds() {
  const [Duration, setDuration] = useState("day");

  return (
    <Card className="flex-1 px-4 mdl:px-5 py-8 max-w-full">
      <h3 className="text-sm mb-1 mdl:mb-4  font-SemiBold mdl:text-base ">Duration</h3>
      <p className="text-xs mb-9 font-Regular text-grayMedium mdl:text-sm">
        Choose the Plan that Fits You and Start Promoting Today!
      </p>
      <div className="flex mdl:mb-8 items-center gap-3 lg:gap-4 flex-wrap mt-2">
        <div
          onClick={() => setDuration("day")}
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            Duration === "day" ? "border-green " : "border-green/30 "
          } rounded-lg bg-white/50 px-3 py-4 min-w-[118px] lg:min-w-[170px]`}
        >
          <DailyIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            Day
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            $ 25.00
          </p>
        </div>
        <div
          onClick={() => setDuration("3Day")}
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            Duration === "3Day" ? "border-green " : "border-green/30 "
          }  rounded-lg bg-white/50 px-3 py-4 min-w-[118px] lg:min-w-[170px]`}
        >
          <WeekIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            3 Days
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            $ 30.00
          </p>
        </div>
        <div
          onClick={() => setDuration("week")}
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            Duration === "week" ? "border-green " : "border-green/30 "
          }  rounded-lg bg-white/50 px-3 py-4 min-w-[118px] lg:min-w-[170px]`}
        >
          <MonthlyIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            1 week
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            $ 40.00
          </p>
        </div>
      </div>
    </Card>
  );
}

export default DurationAds;
