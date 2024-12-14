"use client";
import { ListingsData } from "@/src/lib/dataUser";
import React from "react";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import TableViewListings from "./_components/table-view-listings";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";

function Page() {
  const searchParams = useSearchParams();

  const { data } = GetMyProductsAll(searchParams.toString());

  return (
    <div>
      {searchParams.get("card") === "true" ? (
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
      ) : (
        <>
          <TableViewListings data={data?.data || []} />
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
      )}
    </div>
  );
}

export default Page;
