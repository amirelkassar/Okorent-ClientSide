"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useSwitchRent } from "@/src/store/rent-slice";
import { GetMyOrderAll, GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import PageCardRent from "./_components/page-card-rent";
import TableRent from "./_components/table-rent";
import TableRentOut from "./_components/table-rent-out";
import PageCardRentOut from "./_components/page-card-rent-out";

function Page() {
  const searchParams = useSearchParams();
  const { isRent } = useSwitchRent();
  const query = GetMyOrderAll(searchParams.toString());
  const queryOut = GetMyOrderOutAll(searchParams.toString());

  return isRent === "rent" ? (
    <div>
      {searchParams.get("card") === "true" ? (
        <PageCardRent query={query} />
      ) : (
        <>
          <TableRent query={query} />
          <div className=" block mdl:hidden">
            <PageCardRent query={query} />
          </div>
        </>
      )}
    </div>
  ) : (
    <div>
      {searchParams.get("card") === "true" ? (
        <PageCardRentOut query={queryOut} />
      ) : (
        <>
          <TableRentOut query={queryOut} />
          <div className=" block mdl:hidden">
            <PageCardRentOut query={queryOut} />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
