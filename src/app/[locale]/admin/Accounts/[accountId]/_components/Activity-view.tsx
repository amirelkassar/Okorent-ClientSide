'use client';
import React from "react";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./column";
import InventoryReport from "./Inventory-report";
import CardPhoneAccount from "./card-phone-account";
import DoughnutChart from "@/src/components/DoughnutChart";
import ChartRentalsPerformance from "./chart-rentals-performance";
import ActivityHeader from "./activity-header";
import { GetAccountTransactionsDashboardByID } from "@/src/hooks/queries/admin/account/dashboard";
import { TableHeader } from "@/src/components/table/table-header";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";

function ActivityView({ accountId = "" }: { accountId: string }) {
  const query = GetAccountTransactionsDashboardByID(accountId);
  return (
    <div>
      <ActivityHeader accountId={accountId} />
      <div className="flex flex-wrap  justify-center xl:justify-between  my-section gap-8">
        <ChartRentalsPerformance />
        <DoughnutChart />
        <div className="max-w-[700px] w-full">
          <InventoryReport />
        </div>
      </div>
      <div className="mt-14">
        <TableHeader>
          <TableHeader.First title="Recent Transactions" />
        </TableHeader>
        <QueryWrapper query={query}>
          {({ data, totalPages }: { data: any; totalPages?: any }) => {
            console.log(data);
            return (
              <div>
                <DataTable
                  title=""
                  data={data||[]}
                  columns={columns}
                  Component={CardPhoneAccount}
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

export default ActivityView;
