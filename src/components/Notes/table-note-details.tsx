"use client";
import React from "react";
import { TableHeader } from "../table/table-header";
import { QueryWrapper } from "../query-wrapper";
import { DataTable } from "../data-table";
import { Pagination } from "../pagination";
import { columns } from "./column-note-user";
import { useSearchParams } from "next/navigation";
import { GetNotesById } from "@/src/hooks/queries/admin/notes";
import Card from "../card";
import DeleteIcon from "@/src/assets/icons/delete";
import NoteType from "../note-type";
import { getDate } from "@/src/lib/utils";
import { useRowActionNotesInAdmin } from "./_hooks/use-row-action";
import CardPhoneNoteUser from "./card-phone-note-user";
import Button from "../button";

function TableNoteDetails({ id }: { id: any }) {
  const searchParams = useSearchParams();
  const query = GetNotesById(`id=${id}&&${searchParams.toString()}`);
  const { onSubmitDeleteManyNotesUser, onSubmitDeleteNotesFromPageNoteID } =
    useRowActionNotesInAdmin();
  const functionSelect = [
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto " />,
      onclick: (ids: any) => {
        console.log(ids);
        onSubmitDeleteManyNotesUser({
          noteId: id,
          userIds: ids?.map((item: any) => item.id),
        });
      },
    },
  ];
  return (
    <div className="mb-10 ">
      <TableHeader>
        <TableHeader.First title={`Notes History`}>
          <Button
            onClick={() => {
              onSubmitDeleteNotesFromPageNoteID(id);
            }}
            className={
              "bg-blueLight px-4 h-10 hover:shadow-md border-none  gap-2"
            }
          >
            <DeleteIcon className="w-3 mdl:w-4 h-auto" />
            <p className="text-sm md:text-base text-red font-SemiBold">
              Delete
            </p>
          </Button>
        </TableHeader.First>
      </TableHeader>
      <div>
        <QueryWrapper query={query}>
          {({ data }: { data: any }) => {
            console.log(data);
            return (
              <div>
                <div className="flex flex-wrap justify-between w-full max-w-full gap-2 mdl:gap-5 border-b pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm mdl:text-base font-SemiBold min-w-[130px]">
                      Note Type :
                    </h3>
                    <NoteType status={data?.noteType?.toString()} />
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm mdl:text-base font-SemiBold min-w-[130px]">
                      Note Content :
                    </h3>
                    <p className="text-sm mdl:text-base font-SemiBold min-w-[130px]">
                      {data?.content || ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm mdl:text-base font-SemiBold min-w-[130px]">
                      Date :
                    </h3>
                    <p className="text-sm mdl:text-base font-SemiBold min-w-[130px]">
                      {getDate(data?.created).timeFromNow || ""}
                    </p>
                  </div>
                </div>
                <Card className="p-3 mdl:p-11 bg-transparent border-none mdl:border mdl:bg-white">
                  <DataTable
                    data={data?.sentToUsers?.items}
                    columns={columns}
                    Component={CardPhoneNoteUser}
                    functionSelect={functionSelect}
                  />
                  <Pagination totalPages={data?.sentToUsers?.totalPages} />
                </Card>
              </div>
            );
          }}
        </QueryWrapper>
      </div>
    </div>
  );
}

export default TableNoteDetails;
