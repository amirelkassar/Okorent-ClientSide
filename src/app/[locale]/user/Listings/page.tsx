"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import TableViewListings from "./_components/table-view-listings";
import { GetMyProductsAll } from "@/src/hooks/queries/user/lisitings";
import ROUTES from "@/src/routes";
import { QueryWrapper } from "@/src/components/query-wrapper";

function Page() {
  const searchParams = useSearchParams();
  const query = GetMyProductsAll(searchParams.toString());

  return (
    <div>
      <QueryWrapper query={query}>
        {({ data }) => {
          console.log(data);
          
          const DataIsActive = data?.filter(
            (item: any) => item.isActive === true
          );
          const DataIsNotActive = data?.filter(
            (item: any) => item.isActive === false
          );
          return searchParams.get("card") === "true" ? (
            <>
              {searchParams.get("active") === "true" ? (
                DataIsActive?.length > 0 && (
                  <CardView title={"Online"} data={DataIsActive} withStatus />
                )
              ) : searchParams.get("active") === "false" ? (
                DataIsNotActive?.length > 0 && (
                  <CardView
                    title={"Offline"}
                    data={DataIsNotActive}
                    withStatus
                  />
                )
              ) : (
                <div>
                  {DataIsActive?.length > 0 && (
                    <CardView
                      title={"Online"}
                      first
                      data={DataIsActive}
                      viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=true`}
                    />
                  )}
                  {DataIsNotActive?.length > 0 && (
                    <CardView
                      title={"Offline"}
                      data={DataIsNotActive}
                      viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=false`}
                    />
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <TableViewListings data={data || []} />
              <div className=" block mdl:hidden">
                <CardView title={"Online"} data={DataIsActive} />
                <CardView title={"Offline"} data={DataIsNotActive} />
              </div>
            </>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;
