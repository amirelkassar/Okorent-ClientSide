"use client";
import { DataTable } from "@/src/components/data-table";
import SwitchControl from "@/src/components/switch-control";
import { TICKETS } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
import { TableHeader } from "@/src/components/table/table-header";

const FilterOptions = [
  {
    label: "Un Assigned",
    key: "filter",
    value: "Un Assigned",
  },
  {
    label: "Sales",
    key: "filter",
    value: "Sales",
  },
  {
    label: "Technical",
    key: "filter",
    value: "Technical",
  },
  {
    label: "Feedback",
    key: "filter",
    value: "Feedback",
  },
];

function page() {
  return (
    <div>
      <TableHeader>
        <TableHeader.First title="All Tickets"></TableHeader.First>
        <TableHeader.Middle>
          <div className="w-fit mx-auto mb-5 lgl:mb-0">
            <SwitchControl
              options={[
                { label: "All Tickets", value: "allTickets" },
                { label: "My Tickets", value: "myTickets" },
              ]}
              radius={"lg"}
              rootClassName="!h-10 !w-auto"
              size="md"
            />
          </div>
        </TableHeader.Middle>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <DataTable
        title=""
        data={TICKETS}
        columns={columns}
        //filterBy="category"
        //filter="buttons"
        //filterData={FilterOptions}
        Component={CardPhoneAccount}
      />
    </div>
  );
}

export default page;
