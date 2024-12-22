"use client";
import { RequestsData } from "@/src/lib/dataUser";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useSwitchRent } from "@/src/store/rent-slice";
import CardViewReq from "./_components/cardViewReq";
import TableRequestView from "./_components/table-request-view";
import TableRentalsView from "./_components/table-rentals-view";
import { GetMyOrderAll } from "@/src/hooks/queries/user/booking";
import PageCardRent from "./_components/page-card-rent";

function Page() {
  const searchParams = useSearchParams();
  const { isRent } = useSwitchRent();
  const query = GetMyOrderAll(searchParams.toString());

  return isRent === "rent" ? (
    <div>
      {searchParams.get("card") === "true" ? (
        <PageCardRent query={query} />
      ) : (
        <>
          <TableRentalsView query={query} />
          <div className=" block mdl:hidden">
            <PageCardRent query={query} />
          </div>
        </>
      )}
    </div>
  ) : (
    <div>
      {searchParams.get("card") === "true" ? (
        <div>
          <CardViewReq
            title="New Requests"
            first
            data={RequestsData}
            filterBy="accept"
            haveRentSwitch
          />
          <CardViewReq
            title="Upcoming Bookings"
            data={RequestsData}
            filterBy="upcoming"
          />
          <CardViewReq
            title="Ongoing Bookings"
            data={RequestsData}
            filterBy="ongoing"
          />
          <CardViewReq
            title="Declined Requests"
            data={RequestsData}
            filterBy="decline"
          />
        </div>
      ) : (
        <>
          <TableRequestView />
          <div className=" block mdl:hidden">
            <CardViewReq
              title="New Requests"
              first
              data={RequestsData}
              filterBy="accept"
              haveRentSwitch
            />
            <CardViewReq
              title="Upcoming Bookings"
              data={RequestsData}
              filterBy="upcoming"
            />
            <CardViewReq
              title="Ongoing Bookings"
              data={RequestsData}
              filterBy="ongoing"
            />
            <CardViewReq
              title="Declined Requests"
              data={RequestsData}
              filterBy="decline"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
