import React from "react";
import HeaderDash from "./_components/header";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import { columns } from "./_components/columns";
import OngoingRentals from "./_components/ongoing-rentals";
import EarningReport from "./_components/earning-report";
import ROUTES from "@/src/routes";
import CardPhoneTable from "./_components/CardPhoneTable";

function page() {
  return (
    <div>
      <HeaderDash />
      <div className="lg:mt-14 mt-8 flex gap-7 lg:gap-10 lg:flex-row flex-col pb-10 border-b border-[#B6BFC6] ">
        <OngoingRentals />
        <EarningReport />
      </div>
      <div className="mt-6 lg:mt-10">
        <DataTable
          title="Rented Listings Overview"
          viewAll={ROUTES.USER.DASHBOARD}
          data={RequestsData}
          columns={columns}
          Component={CardPhoneTable}
        />
      </div>
    </div>
  );
}

export default page;
