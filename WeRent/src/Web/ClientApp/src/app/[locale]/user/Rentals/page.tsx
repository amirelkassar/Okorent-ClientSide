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
  console.log(searchParams.get("cards"));
  return (
    <div>
      {searchParams.get("cards") === "true" ? (
        <div>
          <CardView first title={"My Current Rentals"} />
          <CardView title={"Upcoming Rentals"} />
          <CardView title={"Closed Rentals"} />
        </div>
      ) : (
        <DataTable
          title="My Rentals"
          cardView={`${ROUTES.USER.RENTALS}?cards=true`}
          data={RentalsData}
          columns={columns}
          filter="buttons"
          filterData={FilterOptions}
          search
          filterBy="status"
        />
      )}
    </div>
  );
}

export default Page;
