"use client";
import React, { useState } from "react";
import { UserData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
import DeleteIcon from "@/src/assets/icons/delete";
import TrueIcon from "@/src/assets/icons/true";
import ExportIcon from "@/src/assets/icons/export";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import CardPhoneAccount from "./_components/card-phone-account";
import { GetAccounts } from "@/src/hooks/queries/Accounts";
import { useSearchParams } from "next/navigation";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { TableHeader } from "@/src/components/table/table-header";
import AddUser from "@/src/components/add-user";

const functionSelect = [
  {
    title: "Verify",
    icon: <TrueIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Export",
    icon: <ExportIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Deactivate",
    icon: <DeactivateIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Send Note",
    icon: <NoteTableIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
  {
    title: "Delete",
    icon: <DeleteIcon className="max-h-4 w-auto " />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function Page() {
  const searchParams = useSearchParams();
  const query = GetAccounts(searchParams.toString());
  const [counterAccount, setCounterAccount] = useState(10);
  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First
          title={`${counterAccount ?? null} Account`}
        ></TableHeader.First>
        <TableHeader.Last className="mdl:!flex !hidden">
          <AddUser />
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
                Component={CardPhoneAccount}
                functionSelect={functionSelect}
              ></DataTable>
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default Page;
