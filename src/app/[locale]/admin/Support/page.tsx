"use client";
import { DataTable } from "@/src/components/data-table";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
import { TableHeader } from "@/src/components/table/table-header";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetSupportsMessagesInAdmin } from "@/src/hooks/queries/admin/support";
import { Pagination } from "@/src/components/pagination";
import { useSearchParams } from "next/navigation";

const FilterOptions = [
  {
    label: "Complaints",
    key: "TicketType",
    value: "1",
  },
  {
    label: "Technical",
    key: "TicketType",
    value: "2",
  },
  {
    label: "Sales",
    key: "TicketType",
    value: "3",
  },
  {
    label: "Something else",
    key: "TicketType",
    value: "4",
  },
  {
    label: "Feedback",
    key: "TicketType",
    value: "5",
  },
  {
    label: "Guest Message",
    key: "TicketType",
    value: "6",
  },
];

function Page() {
  const searchParams = useSearchParams();
  const query = GetSupportsMessagesInAdmin(searchParams.toString());

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="All Tickets"></TableHeader.First>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          return (
            <div>
              <DataTable
                data={data}
                columns={columns}
                Component={CardPhoneAccount}
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
