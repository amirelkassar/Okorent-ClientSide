"use client";
import { DataTable } from "@/src/components/data-table";
import { RentalsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import { useSearchParams } from "next/navigation";
import ROUTES from "@/src/routes";
import CardView from "./_components/cardView";
const FilterOptions = [
  {
    label: "Closed",
    key: "Closed",
  },
  {
    label: "Ongoing",
    key: "Ongoing",
  },
  {
    label: "Upcoming",
    key: "Upcoming",
  },
];
function Page() {
  const searchParams = useSearchParams();

  return (
    <div>
      {searchParams.get("cards") === "true" ? (
        <div>
          <CardView
            filterBy="completed"
            first
            title={"Ongoing Bookings"}
            haveRentSwitch
          />
          <CardView filterBy="completed" title={"Upcoming Rentals"} />
          <CardView filterBy="completed" title={"Closed Rentals"} />
        </div>
      ) : (
        <DataTable
          title="My Rentals"
          cardView={`${ROUTES.USER.RENTALS}?cards=true`}
          data={RentalsData}
          columns={columns}
          filter="buttons"
          filterData={FilterOptions}
          haveRentSwitch
          filterBy="status"
        />
      )}
    </div>
  );
}

export default Page;
