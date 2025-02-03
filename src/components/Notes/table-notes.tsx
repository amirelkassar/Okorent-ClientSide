"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import { DataTable } from "@/src/components/data-table";
import { Pagination } from "@/src/components/pagination";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { TableHeader } from "@/src/components/table/table-header";
import { GetAllNotes } from "@/src/hooks/queries/admin/notes";
import { useSearchParams } from "next/navigation";
import React from "react";
import { columns } from "./column-note";
import CardPhoneNote from "./card-phone-note";
import { useRowActionNotesInAdmin } from "./_hooks/use-row-action";

function TableNotes() {
  const searchParams = useSearchParams();
  const query = GetAllNotes(searchParams.toString());
  const { onSubmitDeleteManyNotes } = useRowActionNotesInAdmin();
  const functionSelect = [
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto " />,
      onclick: (ids: any) => {
        console.log(ids);
        onSubmitDeleteManyNotes({ noteIds: ids.map((item: any) => item.id) });
      },
    },
  ];
  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title={`Notes History`}></TableHeader.First>
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);

          return (
            <div>
              <DataTable
                data={data}
                columns={columns}
                Component={CardPhoneNote}
                functionSelect={functionSelect}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default TableNotes;
