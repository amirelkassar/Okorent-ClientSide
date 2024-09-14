"use client";
import { DataTable } from "@/src/components/data-table";
import { RentalsData, RequestsData } from "@/src/lib/dataUser";
import React, { useState } from "react";
import { columns } from "./_components/columns";
import { useSearchParams } from "next/navigation";
import ROUTES from "@/src/routes";
import CardView from "./_components/cardView";
import { useSwitchRent } from "@/src/store/rent-slice";
import CardViewReq from "./_components/cardViewReq";
import { Modal } from "@mantine/core";
import CloseIcon from "@/src/assets/icons/close";
import { useDisclosure } from "@mantine/hooks";
import { columnsReq } from "./_components/columnsReq";
import CardRequest from "@/src/components/cardRequest";
import CardReqPhone from "./_components/CardReqPhone";
import CardBookPhone from "./_components/CardBookPhone";
const FilterOptions = [
  {
    label: "Completed",
    type: "filter",
    key: "Completed",
  },
  {
    label: "Ongoing",
    type: "filter",
    key: "Ongoing",
  },
  {
    label: "Upcoming",
    type: "filter",
    key: "Upcoming",
  },
  {
    label: "Declined",
    type: "filter",
    key: "Declined",
  },
];
const FilterOptionsReq = [
  {
    label: "New",
    type: "filter",
    key: "New",
  },
  {
    label: "Ongoing",
    type: "filter",
    key: "Ongoing",
  },
  {
    label: "Completed",
    type: "filter",
    key: "Completed",
  },
  {
    label: "Declined",
    type: "filter",
    key: "Declined",
  },
];
function Page() {
  const searchParams = useSearchParams();
  const { isRent } = useSwitchRent();
  const [opened, { open, close }] = useDisclosure(false);
  const [getID, setID] = useState(0);
  const openModalWithId = (id: number) => {
    setID(id);
    console.log("Row ID:", id);
    open();
  };
  const columnsWithOpen = columnsReq(openModalWithId);

  return isRent === "rent" ? (
    <div>
      {searchParams.get("list") === "true" ? (
        <DataTable
          title="My Rentals"
          cardView={ROUTES.USER.BOOKINGS}
          data={RentalsData}
          columns={columns}
          filter="buttons"
          filterData={FilterOptions}
          haveRentSwitch
          filterBy="status"
          Component={CardBookPhone}
        />
      ) : (
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
      )}
    </div>
  ) : (
    <div>
      {searchParams.get("list") === "true" ? (
        <DataTable
          title="My Requests"
          cardView={ROUTES.USER.BOOKINGS}
          filter="buttons"
          filterBy="status"
          filterData={FilterOptionsReq}
          data={RequestsData}
          haveRentSwitch
          columns={columnsWithOpen}
          Component={CardReqPhone}
        />
      ) : (
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
