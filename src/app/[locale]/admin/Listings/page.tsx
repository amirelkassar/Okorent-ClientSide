"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import { DataTable } from "@/src/components/data-table";
import { ListingsDataAdmin } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/column";
import QuickEditIcon from "@/src/assets/icons/quickEdit";
import { useDisclosure } from "@mantine/hooks";
import QuickEditModal from "./_components/QuickEditModal";
import CardPhoneAccount from "./_components/card-phone-account";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import { useSearchParams } from "next/navigation";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { TableHeader } from "@/src/components/table/table-header";
import { Pagination } from "@/src/components/pagination";
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
  const query = GetProductsAll(searchParams.toString());
  const functionSelect = [
    {
      title: "Quick Edit",
      icon: <QuickEditIcon className="max-h-4 w-auto" />,
      onclick: () => {
        open();
      },
    },
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick: (ids: any) => {
        console.log([...ids]);
      },
    },
  ];
  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title="11054 Listing"></TableHeader.First>
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
              functionSelect={functionSelect}
            />
            <Pagination totalPages={totalPages} />
           </div>
          );
        }}
      </QueryWrapper>
      <QuickEditModal opened={opened} close={close} />
    </div>
  );
}

export default Page;
