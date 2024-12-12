"use client";
import { RequestsData } from "@/src/lib/dataUser";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import CardView from "./_components/cardView";
import { useSwitchRent } from "@/src/store/rent-slice";
import CardViewReq from "./_components/cardViewReq";
import { Modal } from "@mantine/core";
import CloseIcon from "@/src/assets/icons/close";
import { useDisclosure } from "@mantine/hooks";
import CardRequest from "@/src/components/cardRequest";
import TableRequestView from "./_components/table-request-view";
import TableRentalsView from "./_components/table-rentals-view";

function Page() {
  const searchParams = useSearchParams();
  const { isRent } = useSwitchRent();
  const [opened, { open, close }] = useDisclosure(false);
  const [getID, setID] = useState(0);

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
          <TableRequestView setID={setID} open={open} />
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
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        classNames={{
          header: "p-0 h-0 min-h-0",
          body: "min-h-[300px] p-0",
          content: "rounded-3xl ",
        }}
        closeButtonProps={{
          icon: <CloseIcon className="lg:w-6 w-5 h-auto" />,
          className: "mb-[-40px] absolute end-4 top-3",
        }}
        centered
      >
        <CardRequest
          data={RequestsData.find((item) => item.id === getID)}
          dataByModal={true}
        />
      </Modal>
    </div>
  );
}

export default Page;
