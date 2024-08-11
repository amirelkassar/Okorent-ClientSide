import React from "react";
import HeaderDash from "./_components/header";
import Button from "@/src/components/button";
import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import { columns } from "./_components/columns";
import OngoingRentals from "./_components/ongoing-rentals";
import EarningReport from "./_components/earning-report";


function page() {
  return (
    <div>
      <HeaderDash />
      <div className="mt-14 flex gap-10">
        <OngoingRentals/>
        <EarningReport/>
      </div>
      <div className="mt-16">
        <div className="flex items-center justify-between gap-5 flex-wrap mb-8">
          <h2 className="headTitle  ">Listings Overview</h2>
          <Button className={"h-10 w-fit gap-3 "}>
            <p className="text-white text-[16px]">View all</p>
            <ArrowWhiteIcon />
          </Button>
        </div>
        <DataTable data={RequestsData} columns={columns}/>
      </div>
    </div>
  );
}

export default page;
