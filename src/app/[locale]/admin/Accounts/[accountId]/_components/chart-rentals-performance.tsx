import Button from "@/src/components/button";
import React, { useState } from "react";
import ChartsPlatform from "./charts";
import { GetAccountRentalsPerformanceByID } from "@/src/hooks/queries/admin/account/dashboard";

function ChartRentalsPerformance({ accountId }: { accountId: string }) {
  // const [currentView, setcurrentView] = useState("Yearly");
  const { data } = GetAccountRentalsPerformanceByID(accountId);
  console.log(data);

  return (
    <div className=" border-green/50 w-full md:w-fit  border bg-white rounded-2xl pb-4  pt-6 md:pt-8 shadow-md ">
      <div className="px-4 md:px-8">
        <h3 className="text-lg lg:text-2xl text-grayMedium mb-4 md:mb-5">
          Rentals Performance
        </h3>

        <div className="flex items-center gap-3  ">
          {/* <Button
            className={` text-sm px-2 py-1 h-10 mdl:h-12 ${
              currentView === "Weekly"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => setcurrentView("Weekly")}
          >
            Quarter
          </Button>
          <Button
            className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
              currentView === "Monthly"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => setcurrentView("Monthly")}
          >
            Half Year
          </Button> */}
          <Button
            className={`text-sm px-4 py-1 h-10 mdl:h-12  hover:shadow-md`}
            // onClick={() => setcurrentView("Yearly")}
          >
            Year
          </Button>
        </div>
      </div>

      <ChartsPlatform data={data?.data} />
    </div>
  );
}

export default ChartRentalsPerformance;
