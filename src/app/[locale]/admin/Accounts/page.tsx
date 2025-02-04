"use client";
import React from "react";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
import CardPhoneAccount from "./_components/card-phone-account";
import { useSearchParams } from "next/navigation";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { TableHeader } from "@/src/components/table/table-header";
import AddUser from "@/src/components/add-user";
import { useActionTable } from "./_hooks/use-action-table";
import { GetAccounts } from "@/src/hooks/queries/admin/account";
import DeactivateModalMany from "./_components/DeactivateModal-many";
import { useDisclosure } from "@mantine/hooks";
import LinkHistoryNote from "../_components/link-history-note";
import ROUTES from "@/src/routes";
import NoteModal from "@/src/components/NoteModal";

function Page() {
  const searchParams = useSearchParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const query = GetAccounts(searchParams.toString());
  const { functionSelectView, setSelectedFromTable, selectedFromTable } =
    useActionTable(open, open2);
  const totalCount = query.data?.data?.totalCount || 0;

  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title={`${totalCount ?? null} Account`}>
          <LinkHistoryNote link={ROUTES.ADMIN.NOTESACCOUNTS} />
        </TableHeader.First>
        <TableHeader.Last className="mdl:!flex !hidden">
          <AddUser />
        </TableHeader.Last>
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
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
      <DeactivateModalMany
        opened={opened}
        close={close}
        ids={selectedFromTable}
      />
      <NoteModal
        id={selectedFromTable?.map((item: any) => item.id)}
        opened={opened2}
        close={close2}
      />
    </div>
  );
}

export default Page;
