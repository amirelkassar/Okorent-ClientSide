import React from "react";
import ModalComp from "../modal-comp";
import NoteType from "../note-type";
import { useSearchParams } from "next/navigation";
import { GetNotesById } from "@/src/hooks/queries/admin/notes";
import { QueryWrapper } from "../query-wrapper";
import { Pagination } from "../pagination";
import { getDate } from "@/src/lib/utils";
import { DataTable } from "../data-table";
import { columns } from "./column-note-user";

function NoteDetailsModal({
  id,
  opened,
  close,
}: {
  id: any;
  opened: any;
  close: any;
}) {
  const searchParams = useSearchParams();
  const query = GetNotesById(`id=${id}&&${searchParams.toString()}`);
  console.log(query?.data);
  return (
    <ModalComp title="Note Details" opened={opened} close={close}>
      <div className="w-[720px] max-w-full">
        <QueryWrapper query={query}>
          {({ data }: { data: any }) => {
            console.log(data);
            return (
              <div>
                <div className="flex flex-col w-full max-w-full gap-2 border-b pb-4 mb-6">
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
                <div>
                  <h3 className="text-sm mdl:text-base font-SemiBold mb-4 ">
                    Sent To
                  </h3>
                  <div>
                    <DataTable
                      data={data?.sentToUsers?.items}
                      columns={columns}
                      functionSelect={[]}
                    />
                    <Pagination totalPages={data?.sentToUsers?.totalPages} />
                  </div>
                </div>
              </div>
            );
          }}
        </QueryWrapper>
      </div>
    </ModalComp>
  );
}

export default NoteDetailsModal;
