"use client";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import ROUTES from "@/src/routes";
import React, { useState } from "react";
import { columnsReq } from "../../Bookings/_components/columnsReq";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import CloseIcon from "@/src/assets/icons/close";
import CardRequest from "@/src/components/cardRequest";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const FilterOptionsReq = [
  {
    label: "New",
    key: "filter",
    value: "New",
  },
  {
    label: "Out for delivery",
    key: "filter",
    value: "Out for delivery",
  },
  {
    label: "Received",
    key: "filter",
    value: "Received",
  },
  {
    label: "Out For return",
    key: "filter",
    value: "Out For return",
  },
  {
    label: "Returned",
    key: "filter",
    value: "Returned",
  },
  {
    label: "Rejected",
    key: "filter",
    value: "Rejected",
  },
  {
    label: "Canceled",
    key: "filter",
    value: "Canceled",
  },
];
function TableRequestView() {
  const [opened, { open, close }] = useDisclosure(false);
  const [getID, setID] = useState(0);
  const openModalWithId = (id: number) => {
    setID(id);
    console.log("Row ID:", id);
    open();
  };
  const columnsWithOpen = columnsReq(openModalWithId);

  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="My Requests">
          <Link
            href={ROUTES.USER.BOOKINGS + "?card=true"}
            className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <CardIcon />
            <p>Card View</p>
          </Link>
        </TableHeader.First>
        <TableHeader.Middle>
          <RentSwitch typeUser="user" />
        </TableHeader.Middle>
        <TableHeader.Last options={FilterOptionsReq} />
      </TableHeader>
      <DataTable title="" data={RequestsData} columns={columnsWithOpen} />
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

export default TableRequestView;
