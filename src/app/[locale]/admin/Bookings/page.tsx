"use client";
import { DataTable } from "@/src/components/data-table";
import React from "react";
import { columns } from "./_components/column";
import CardPhoneAccount from "./_components/card-phone-account";
import { useDisclosure } from "@mantine/hooks";
import RefundModal from "./_components/refund-modal";
import NoteModal from "@/src/components/NoteModal";
import { TableHeader } from "@/src/components/table/table-header";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { FilterOptionsBooking } from "./_components/filter-data";
import { useActionTableBookingInAdmin } from "./_hooks/use-action-table";
import { GetOrdersInAdmin } from "@/src/hooks/queries/admin/booking";
import { useSearchParams } from "next/navigation";
import CancelManyModal from "./_components/cancel-many-modal";

function Page() {
  const searchParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const query = GetOrdersInAdmin(searchParams.toString());
  const { functionSelectView, selectedFromTable, setSelectedFromTable } =
    useActionTableBookingInAdmin({
      open,
      open2,
      open3,
    });
  const totalCount = query.data?.data?.totalCount || 0;

  return (
    <div>
      <TableHeader>
        <TableHeader.First title={`Booking - ${totalCount}`} />
        <TableHeader.Last options={FilterOptionsBooking} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: number }) => {
          return (
            <div>
              <DataTable
                data={data}
                title=""
                columns={columns}
                Component={CardPhoneAccount}
                setSelectedFromTable={setSelectedFromTable}
                functionSelect={functionSelectView}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>

      <RefundModal opened={opened} close={close} />
      <NoteModal opened={opened2} close={close2} />
      <CancelManyModal
        opened={opened3}
        close={close3}
        selectedFromTable={selectedFromTable}
      />
    </div>
  );
}

export default Page;
