import React from "react";
import HeaderDash from "./_components/header";
import ChartsPlatform from "./_components/charts";
import Button from "@/src/components/button";
import { columns } from "./_components/column";

import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import { UserData } from "@/src/lib/dataUser";
import { DataTable } from "@/src/components/data-table";
;
function page() {
  return (
    <div>
      <HeaderDash />
      <div className="mt-20 mb-32">
        <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          <div>
            <h2 className="text-[32px] font-Medium leading-7">
              Platform Performance
            </h2>
            <p className="text-grayMedium text-[20px]">
              See overview about the website performace
            </p>
          </div>
          <Button className={"!h-10"}>View Per Month</Button>
        </div>
        <ChartsPlatform />
      </div>
      <div className="mb-36">
        <div className="flex items-center justify-between gap-5 flex-wrap mb-11">
          <h2 className="text-[32px] font-Bold ">New subscriptions</h2>
          <Button className={"h-10 w-fit gap-3 "}>
            <p className="text-white text-[16px]">View all</p>
            <ArrowWhiteIcon />
          </Button>
        </div>
        <DataTable data={UserData} columns={columns} />
      </div>
    </div>
  );
}

export default page;
