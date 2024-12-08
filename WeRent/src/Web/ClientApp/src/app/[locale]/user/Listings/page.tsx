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
    label: "online",
    type: "filter",
    key: true,
  },
  {
    label: "offline",
    type: "filter",
    key: false,
  },
];
function Page() {
  const searchParams = useSearchParams();
  return (
    <div>
      {searchParams.get("list") === "true" ? (
        <>
          <div className=" hidden mdl:block">
            <DataTable
              //Component={CardViewPhoneListing}
              title="My Listings"
              cardView={ROUTES.USER.LISTINGS}
              data={ListingsData}
              filterBy="status"
              filter="buttons"
              filterData={FilterOptions}
              columns={columns}
            />
          </div>
          <div className=" block mdl:hidden">
            <CardView
              title={"Online"}
              data={ListingsData.filter((item) => item.status === true)}
            />
            <CardView
              title={"Offline"}
              data={ListingsData.filter((item) => item.status === false)}
            />
          </div>
        </>
      ) : (
        <div>
          <CardView
            title={"Online"}
            first
            data={ListingsData.filter((item) => item.status === true)}
          />
          <CardView
            title={"Offline"}
            data={ListingsData.filter((item) => item.status === false)}
          />
        </div>
      )}
    </div>
  );
}

export default Page;
