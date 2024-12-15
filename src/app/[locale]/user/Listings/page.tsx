"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import TableViewListings from "./_components/table-view-listings";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";
import ROUTES from "@/src/routes";

function Page() {
  const searchParams = useSearchParams();

  const { data } = GetMyProductsAll(searchParams.toString());
  console.log(data);
  const DataIsActive = data?.data?.filter(
    (item: any) => item.isActive === true
  );
  const DataIsNotActive = data?.data?.filter(
    (item: any) => item.isActive === false
  );
  return (
    <div>
      {searchParams.get("card") === "true" ? (
        <>
          {searchParams.get("active") === "true" ? (
            <CardView title={"Online"} data={DataIsActive} withStatus />
          ) : searchParams.get("active") === "false" ? (
            <CardView title={"Offline"} data={DataIsNotActive} withStatus />
          ) : (
            <div>
              <CardView
                title={"Online"}
                first
                data={DataIsActive}
                viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=true`}
              />
              <CardView
                title={"Offline"}
                data={data?.data?.filter(
                  (item: any) => item.isActive === false
                )}
                viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=false`}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <TableViewListings data={data?.data || []} />
          <div className=" block mdl:hidden">
            <CardView title={"Online"} data={DataIsActive} />
            <CardView title={"Offline"} data={DataIsNotActive} />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
