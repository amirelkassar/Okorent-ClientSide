import { DataTable } from "@/src/components/data-table";
import { BOOKINGS_ADMIN } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";

function page() {
  return (
    <div>
      <DataTable data={BOOKINGS_ADMIN} title=" Booking - 11054" columns={columns} />
    </div>
  );
}

export default page;
