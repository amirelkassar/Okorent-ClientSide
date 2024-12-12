"use client";
import { DataTable } from "@/src/components/data-table";
import { RequestsData } from "@/src/lib/dataUser";
import ROUTES from "@/src/routes";
import React from "react";
import { columnsReq } from "../../Bookings/_components/columnsReq";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
const FilterOptionsReq = [
  {
    label: "New",
    type: "filter",
    key: "New",
  },
  {
    label: "Out for delivery",
    type: "filter",
    key: "Out for delivery",
  },
  {
    label: "Received",
    type: "filter",
    key: "Received",
  },
  {
    label: "Out For return",
    type: "filter",
    key: "Out For return",
  },
  {
    label: "Returned",
    type: "filter",
    key: "Returned",
  },
  {
    label: "Rejected",
    type: "filter",
    key: "Rejected",
  },
  {
    label: "Canceled",
    type: "filter",
    key: "Canceled",
  },
];
function TableRequestView({ setID, open }: { setID: any; open: any }) {
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
        <TableHeader.Last typeData="filter" options={FilterOptionsReq} />
      </TableHeader>
      <DataTable title="" data={RequestsData} columns={columnsWithOpen} />
    </div>
  );
}

export default TableRequestView;
