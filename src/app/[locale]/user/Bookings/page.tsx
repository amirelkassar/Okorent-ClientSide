"use client";
import { RequestsData } from "@/src/lib/dataUser";
import React from "react";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import { useSwitchRent } from "@/src/store/rent-slice";
import CardViewReq from "./_components/cardViewReq";
import TableRequestView from "./_components/table-request-view";
import TableRentalsView from "./_components/table-rentals-view";

function Page() {
  const searchParams = useSearchParams();
  const { isRent } = useSwitchRent();

  return isRent === "rent" ? (
    <div>
      {searchParams.get("card") === "true" ? (
        <div>
          <CardView
            filterBy="completed"
            first
            title={"Ongoing Bookings"}
            haveRentSwitch
          />
          <CardView filterBy="completed" title={"Upcoming Rentals"} />
          <CardView filterBy="completed" title={"Closed Rentals"} />
        </div>
      ) : (
        <>
          <TableRentalsView />
          <div className=" block mdl:hidden">
            <CardView
              filterBy="completed"
              first
              title={"Ongoing Bookings"}
              haveRentSwitch
            />
            <CardView filterBy="completed" title={"Upcoming Rentals"} />
            <CardView filterBy="completed" title={"Closed Rentals"} />
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
