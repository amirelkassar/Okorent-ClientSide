"use client";
import { DataTable } from "@/src/components/data-table";
import { TableHeader } from "@/src/components/table/table-header";
import { GetOrdersInAdmin } from "@/src/hooks/queries/admin/booking";
import React from "react";
import CardPhoneInvoices from "./_components/card-phone-invoices";
import { columns } from "./_components/column";
import { InvoicesData } from "@/src/lib/dataUser";

const FilterOptionsBooking = [
  {
    label: "Lowest Price",
    key: "Filter",
    value: "Lowest",
  },
  {
    label: "Highest price",
    key: "Filter",
    value: "Highest",
  },
  {
    label: "Oldest",
    key: "Filter",
    value: "Oldest",
  },
  {
    label: "Newest",
    key: "Filter",
    value: "Newest",
  },
];

function Page() {
  const query = GetOrdersInAdmin("");
  const totalCount = query.data?.data?.totalCount || 0;
  return (
    <div>
      <TableHeader>
        <TableHeader.First title={`Booking - ${totalCount}`} />

        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>

      <div>
        <DataTable
          data={InvoicesData}
          title=""
          columns={columns}
          Component={CardPhoneInvoices}
          functionSelect={[]}
        />
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}

export default Page;
