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
          console.log(data);

          return (
            <div>
              <DataTable
                title=""
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
