"use client";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import ROUTES from "@/src/routes";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CloseIcon from "@/src/assets/icons/close";
import CardRequest from "./_components/cardRequest";
import CardViewReq from "./_components/cardViewReq";
import { columnsReq } from "./_components/columnsReq";


const FilterOptions = [
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
    label: "Declined",
     type: "filter",
    key: "Declined",
  },
];
function Page() {
  const searchParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [getID, setID] = useState(0);
  const openModalWithId = (id: number) => {
    setID(id);
    console.log("Row ID:", id);
    open();
  };
  const columnsWithOpen = columnsReq(openModalWithId);
  return (
    <div>
      {searchParams.get("cards") === "true" ? (
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
            filterBy='upcoming'
          />
            <CardViewReq
            title="Ongoing Bookings"
            data={RequestsData}
            filterBy='ongoing'
          />
          <CardViewReq
            title="Declined Requests"
            data={RequestsData}
            filterBy="decline"
          />
        </div>
      ) : (
        <DataTable
          title="My Requests"
          cardView={`${ROUTES.USER.REQUESTS}?cards=true`}
          filter="buttons"
          filterBy="status"
          filterData={FilterOptions}
          data={RequestsData}
          haveRentSwitch
          columns={columnsWithOpen}
        />
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
          icon: <CloseIcon />,
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
