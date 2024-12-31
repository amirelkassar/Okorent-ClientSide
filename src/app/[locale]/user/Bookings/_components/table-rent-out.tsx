"use client";
import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import RentSwitch from "@/src/components/RentSwitch";
import { columnsReq } from "./columnsReq";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { useActionTableIRentOut } from "../_hooks/use-action-table-iRent-out";
import { FilterOptionsBooking } from "./filter-data";
import { Pagination } from "@/src/components/pagination";

function TableRentOut({ query }: { query: any }) {
  const { setSelectedFromTable, functionSelectView } = useActionTableIRentOut();
  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="My Requests">
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
        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(totalPages);

          return (
            <div>
              <DataTable
                title=""
                data={data || []}
                columns={columnsReq}
                functionSelect={functionSelectView}
                setSelectedFromTable={setSelectedFromTable}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default TableRentOut;
