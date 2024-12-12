"use client";
import { DataTable } from "@/src/components/data-table";
import { RentalsData } from "@/src/lib/dataUser";
import ROUTES from "@/src/routes";
import React from "react";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import { columns } from "./columns";
const FilterOptions = [
  {
    label: "Pending Approval",
    type: "filter",
    key: "Pending Approval",
  },
  {
    label: "Accepted",
    type: "filter",
    key: "Accepted",
  },
  {
    label: "Out for delivery",
    type: "filter",
    key: "Out for delivery",
  },
  {
    label: "Completed",
    type: "filter",
    key: "Completed",
  },
  {
    label: "Rejected",
    type: "filter",
    key: "Rejected",
  },
];
function TableRentalsView() {
  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="Bookings">
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
        <TableHeader.Last typeData="filter" options={FilterOptions} />
      </TableHeader>
      <DataTable title="" data={RentalsData} columns={columns} />
    </div>
  );
}

export default TableRentalsView;
