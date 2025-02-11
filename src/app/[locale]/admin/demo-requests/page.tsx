"use client";
import { DataTable } from "@/src/components/data-table";
import { TableHeader } from "@/src/components/table/table-header";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneDemo from "./_components/card-phone-demo";
import { GetAllDemoRequestsInAdmin } from "@/src/hooks/queries/admin/demo-req";
import { useSearchParams } from "next/navigation";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";

const FilterOptionsBooking = [
  {
    label: "New",
    key: "Status",
    value: "1",
  },
  {
    label: "In Progress",
    key: "Status",
    value: "2",
  },
  {
    label: "Completed",
    key: "Status",
    value: "3",
  },
];




function Page() {
  const searchParams = useSearchParams();
  const query = GetAllDemoRequestsInAdmin(searchParams.toString());
 
  return (
    <div>
      <TableHeader>
        <TableHeader.First title={`Demo Reqests - 1105`} />
        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);
          return (
            <div>
              <DataTable
                data={data}
                columns={columns}
                Component={CardPhoneDemo}
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
