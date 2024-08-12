import React from "react";
import HeaderDash from "./_components/header";
import Button from "@/src/components/button";
import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import { columns } from "./_components/columns";
import OngoingRentals from "./_components/ongoing-rentals";
import EarningReport from "./_components/earning-report";
import ROUTES from "@/src/routes";

function page() {
  return (
    <div>
      <HeaderDash />
      <div className="mt-14 flex gap-10">
        <OngoingRentals />
        <EarningReport />
      </div>
      <div className="mt-16">
        <DataTable
          title="Listings Overview"
          viewAll={ROUTES.USER.DASHBOARD}
          data={RequestsData}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default page;
