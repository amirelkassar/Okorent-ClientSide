"use client";
import { DataTable } from "@/src/components/data-table";
import { TableHeader } from "@/src/components/table/table-header";
import React from "react";
import CardPhoneInvoices from "./_components/card-phone-invoices";
import { columns } from "./_components/column";
import { GetInvoicesInAdmin } from "@/src/hooks/queries/admin/Invoices";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const query = GetInvoicesInAdmin(searchParams.toString());
  const totalCount = query.data?.data?.totalCount || 0;

  return (
    <div>
      <TableHeader>
        <TableHeader.First title={`Invoices - ${totalCount}`} />
        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);
          return (
            <div>
              <DataTable
                data={data}
                title=""
                columns={columns}
                Component={CardPhoneInvoices}
                functionSelect={[]}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;
