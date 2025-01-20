"use client";
import React from "react";
import HeaderDash from "./_components/header";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/columns";
import OngoingRentals from "./_components/ongoing-rentals";
import EarningReport from "./_components/earning-report";
import ROUTES from "@/src/routes";
import CardPhoneTable from "./_components/CardPhoneTable";
import { GetMyOrderOutAll } from "@/src/hooks/queries/user/booking";
import { TableHeader } from "@/src/components/table/table-header";
import LinkGreen from "@/src/components/linkGreen";
import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";

function page() {
  const query = GetMyOrderOutAll();
  return (
    <div>
      <HeaderDash />
      <div className="lg:mt-14 mt-8 items-start flex gap-7 lg:gap-10 lg:flex-row flex-col pb-10 border-b border-[#B6BFC6] ">
        <OngoingRentals />
        <EarningReport />
      </div>
      <div className="mt-6 lg:mt-10">
        <TableHeader>
          <TableHeader.First title="Rented Listings Overview" />
          <TableHeader.Last options={[]}>
            <LinkGreen
              href={ROUTES.USER.BOOKINGS}
              className={"h-10 w-fit gap-3 "}
            >
              <p className="text-white text-[16px]">View all</p>
              <ArrowWhiteIcon />
            </LinkGreen>
          </TableHeader.Last>
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
                  Component={CardPhoneTable}
                  functionSelect={[]}
                />
                <Pagination totalPages={totalPages} />
              </div>
            );
          }}
        </QueryWrapper>
      </div>
    </div>
  );
}

export default page;
