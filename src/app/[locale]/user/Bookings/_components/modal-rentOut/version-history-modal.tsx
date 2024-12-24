import { ScrollArea } from "@mantine/core";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { GetOrderTrackerByID } from "@/src/hooks/queries/user/order";
import { getDate } from "@/src/lib/utils";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

interface BookingHistory {
  changedByName: string;
  renter: string;
  orderStatusString: string;
  changeDate: string;
}

function VersionHistoryModal({
  opened,
  close,
  id,
}: {
  opened: boolean;
  close: any;
  id: any;
}) {
  const { data, isLoading } = GetOrderTrackerByID(id);

  const columnHelper = createColumnHelper<BookingHistory>();
  const columns = [
    columnHelper.accessor("changedByName", {
      header: "Modified By",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orderStatusString", {
      header: "Change Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("changeDate", {
      header: "Date & Time",
      cell: (info) => getDate(info.getValue()).fullYear,
    }),
  ];

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ModalComp title="Version History" opened={opened} close={close}>
      <div className="w-[850px] max-w-full">
        <div className="my-section border pe-2 md:pe-0 border-[#dee2e6] rounded-xl md:rounded-3xl pb-2">
          {isLoading ? (
            <div className="flex flex-col gap-3 w-full py-5 px-5">
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
            </div>
          ) : (
            <ScrollArea>
              <table className="min-w-[500px] w-full divide-y divide-gray-200">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-3 mdl:px-6 py-3 text-left text-xs md:text-base font-medium"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className=" px-3 mdl:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-grayMedium first-of-type:text-black"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </ScrollArea>
          )}
        </div>

        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={"flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default VersionHistoryModal;
