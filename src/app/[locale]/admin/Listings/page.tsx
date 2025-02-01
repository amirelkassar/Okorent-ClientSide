"use client";
import { DataTable } from "@/src/components/data-table";
import React from "react";
import { columns } from "./_components/column";
import { useDisclosure } from "@mantine/hooks";
import QuickEditModal from "./_components/QuickEditModal";
import CardPhoneAccount from "./_components/card-phone-account";
import { useSearchParams } from "next/navigation";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { TableHeader } from "@/src/components/table/table-header";
import { Pagination } from "@/src/components/pagination";
import { GetProductsInAdmin } from "@/src/hooks/queries/admin/lisiting";
import { useActionTable } from "./_hooks/use-action-table";
const FilterOptions = [
  {
    label: "online",
    key: "active",
    value: true,
  },
  {
    label: "offline",
    key: "active",
    value: false,
  },
];
function Page() {
  const searchParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const { functionSelectView, setSelectedFromTable, selectedFromTable } =
    useActionTable(open);

  const query = GetProductsInAdmin(searchParams.toString());
  const totalCount = query.data?.data?.totalCount || 0;

  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title={`${totalCount} Listing`}></TableHeader.First>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);
          return (
            <div>
              <DataTable
                data={data}
                columns={columns}
                Component={CardPhoneAccount}
                functionSelect={functionSelectView}
                setSelectedFromTable={setSelectedFromTable}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
      <QuickEditModal
        opened={opened}
        close={close}
        selectedFromTable={selectedFromTable}
      />
    </div>
  );
}

export default Page;
