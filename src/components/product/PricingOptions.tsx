import DailyIcon from "@/src/assets/icons/daily";
import MonthlyIcon from "@/src/assets/icons/Monthly";
import WeekIcon from "@/src/assets/icons/week";
import React from "react";
interface PricingOptionsProps {
  daysNumber: number;
  priceOptions: { Daily: any; Weekly: any; Monthly: any };
}
function PricingOptions({
  daysNumber,
  priceOptions = { Daily: 0, Weekly: 0, Monthly: 0 },
}: PricingOptionsProps) {
  return (
    <div className="mt-7  mb-7">
      <h3 className="text-base lg:text-xl ">Pricing Options</h3>
      <div className="flex items-center gap-3 lg:gap-4 flex-wrap mt-2">
        <div
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            daysNumber < 7 ? "border-green " : "border-green/30 "
          } rounded-lg bg-white/50 px-3 py-4 min-w-[134px] lg:min-w-[170px]`}
        >
          <DailyIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            Daily
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            ₣ {priceOptions.Daily} / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
        <div
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            daysNumber > 6 && daysNumber < 29
              ? "border-green "
              : "border-green/30 "
          }  rounded-lg bg-white/50 px-3 py-4 min-w-[134px] lg:min-w-[170px]`}
        >
          <WeekIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            Weekly
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            ₣ {priceOptions.Weekly} / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
        <div
          className={`border duration-300 hover:shadow-md cursor-pointer ${
            daysNumber >= 29 ? "border-green " : "border-green/30 "
          }  rounded-lg bg-white/50 px-3 py-4 min-w-[134px] lg:min-w-[170px]`}
        >
          <MonthlyIcon />
          <h4 className="text-sm lg:text-base font-Regular my-2 lg:my-3">
            Monthly
          </h4>
          <p className="text-sm lg:text-base font-Bold text-black/80">
            ₣ {priceOptions.Monthly} / <span className=" font-Regular text-black">day</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingOptions;
