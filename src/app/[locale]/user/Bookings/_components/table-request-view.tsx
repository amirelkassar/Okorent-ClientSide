"use client";
import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import {  GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import { columnsReq } from "./columnsReq";
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

  const {data} = GetMyOrderOutAll();

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
      <DataTable title="" data={data?.data||[]} columns={columnsReq} />
      
    </div>
  );
}

export default TableRequestView;
