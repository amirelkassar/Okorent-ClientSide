import { DataTable } from "@/src/components/data-table";
import { BOOKINGS_ADMIN } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";

function page() {
  return (
    <div>
      <DataTable
        data={BOOKINGS_ADMIN}
        title=" Booking - 11054"
        columns={columns}
        Component={CardPhoneAccount}
      />
    </div>
  );
}

export default page;
