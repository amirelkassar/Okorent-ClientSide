import { DataTable } from "@/src/components/data-table";
import SwitchControl from "@/src/components/switch-control";
import { TICKETS } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
const FilterOptions = [
  {
    label: "Un Assigned",
    type: "filter",
    key: "Un Assigned",
  },
  {
    label: "Sales",
    type: "filter",
    key: "Sales",
  },
  {
    label: "Technical",
    type: "filter",
    key: "Technical",
  },
  {
    label: "Feedback",
    type: "filter",
    key: "Feedback",
  },
];

function page() {
  return (
    <div>
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
      <DataTable
        title="All Tickets"
        data={TICKETS}
        columns={columns}
        filterBy="category"
        filter="buttons"
        filterData={FilterOptions}
        Component={CardPhoneAccount}
      />
    </div>
  );
}

export default page;
