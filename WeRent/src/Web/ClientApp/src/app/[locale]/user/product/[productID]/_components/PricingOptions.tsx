import DailyIcon from "@/src/assets/icons/daily";
import MonthlyIcon from "@/src/assets/icons/Monthly";
import WeekIcon from "@/src/assets/icons/week";
import React from "react";

function PricingOptions() {
  return (
    <div className="pt-3 border-t-2 border-grayMedium/40 mb-7">
      <h3 className="text-[24px] ">Pricing Options</h3>
      <div className="flex items-center gap-4 flex-wrap mt-2">
        <div className="border duration-300 hover:shadow-md cursor-pointer border-green/30 rounded-lg bg-white/50 px-3 py-4 min-w-[170px]">
          <DailyIcon />
          <h4 className="text-base font-Regular my-3">Daily</h4>
          <p className="text-base font-Bold text-black/80">
            ₣ 25.00 / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
        <div className="border duration-300 hover:shadow-md cursor-pointer border-green/30 rounded-lg bg-white/50 px-3 py-4 min-w-[170px]">
          <WeekIcon />
          <h4 className="text-base font-Regular my-3">Weekly</h4>
          <p className="text-base font-Bold text-black/80">
            ₣ 22.00 / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
        <div className="border duration-300 hover:shadow-md cursor-pointer border-green rounded-lg bg-white/50 px-3 py-4 min-w-[170px]">
          <MonthlyIcon />
          <h4 className="text-base font-Regular my-3">Monthly</h4>
          <p className="text-base font-Bold text-black/80">
            ₣ 20.00 / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingOptions;
