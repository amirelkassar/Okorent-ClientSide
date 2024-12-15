"use client";
import { ListingsData } from "@/src/lib/dataUser";
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

  return (
    <div>
      {searchParams.get("card") === "true" ? (
        <>
          {searchParams.get("active") === "true" ? (
            <CardView
              title={"Online"}
              data={data?.data?.filter((item:any) => item.isNew === true)}
              withStatus
            />
          ) : searchParams.get("active") === "false" ? (
            <CardView
              title={"Offline"}
              data={data?.data?.filter((item:any) => item.isNew === false)}
              withStatus
            />
          ) : (
            <div>
              <CardView
                title={"Online"}
                first
                data={ListingsData.filter((item) => item.status === true)}
                viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=true`}
              />
              <CardView
                title={"Offline"}
                data={ListingsData.filter((item) => item.status === false)}
                viewAllLink={`${ROUTES.USER.LISTINGS}?card=true&active=false`}
              />
            </div>
          )}
        </>
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
