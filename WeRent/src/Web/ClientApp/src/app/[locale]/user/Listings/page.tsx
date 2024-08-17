"use client";
import { DataTable } from "@/src/components/data-table";
import { ListingsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import RentSwitch from "@/src/components/RentSwitch";
const FilterOptions = [
  {
    label: "Active",
    key: true,
  },
  {
    label: "Not Active",
    key: false,
  },
];
function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("cards"));

  return (
    <div>
      {searchParams.get("cards") === "true" ? (
        <div>
          <CardView first title={"Active"} />
          <CardView title={"Not Active"} />
        </div>
      ) : (
        <DataTable
          title="My Listings"
          cardView={`${ROUTES.USER.LISTINGS}?cards=true`}
          search
          data={ListingsData}
          filterBy="status"
          filter="buttons"
          filterData={FilterOptions}
          columns={columns}
          
        />
      )}
    </div>
  );
}

export default Page;
