"use client";
import { DataTable } from "@/src/components/data-table";
import { ListingsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import CardViewPhoneListing from "./_components/CardViewPhoneLisiting";
const FilterOptions = [
  {
    label: "Active",
    type: "filter",
    key: true,
  },
  {
    label: "Not Active",
    type: "filter",
    key: false,
  },
];
function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("list"));

  return (
    <div>
      {searchParams.get("list") === "true" ? (
        <DataTable
        Component={CardViewPhoneListing}
          title="My Listings"
          cardView={ROUTES.USER.LISTINGS}
          search
          data={ListingsData}
          filterBy="status"
          filter="buttons"
          filterData={FilterOptions}
          columns={columns}
        />
      ) : (
        <div>
          <CardView first title={"Active"} />
          <CardView title={"Not Active"} />
        </div>
      )}
    </div>
  );
}

export default Page;
