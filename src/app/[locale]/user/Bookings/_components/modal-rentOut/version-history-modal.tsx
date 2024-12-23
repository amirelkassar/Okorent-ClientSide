import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { GetOrderTrackerByID } from "@/src/hooks/queries/user/order";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
// Define the type for our booking data
interface BookingHistory {
  modifiedBy: string;
  renter: string;
  changeType: string;
  dateTime: string;
}
const bookingHistoryData: BookingHistory[] = [
  {
    modifiedBy: "Ahmed Badr",
    renter: "James Cameron",
    changeType: "Booking Accepted",
    dateTime: "Nov 30, 2024 10:00 AM",
  },
  {
    modifiedBy: "Ahmed Badr",
    renter: "James Cameron",
    changeType: "Booking Accepted",
    dateTime: "Nov 30, 2024 10:00 AM",
  },
  {
    modifiedBy: "Ahmed Badr",
    renter: "James Cameron",
    changeType: "Booking Accepted",
    dateTime: "Nov 30, 2024 10:00 AM",
  },
  {
    modifiedBy: "Ahmed Badr",
    renter: "James Cameron",
    changeType: "Booking Accepted",
    dateTime: "Nov 30, 2024 10:00 AM",
  },
  {
    modifiedBy: "Ahmed Badr",
    renter: "James Cameron",
    changeType: "Booking Accepted",
    dateTime: "Nov 30, 2024 10:00 AM",
  },
];
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
  console.log(data);

  const columnHelper = createColumnHelper<BookingHistory>();
  console.log(id);
  const columns = [
    columnHelper.accessor("modifiedBy", {
      header: "Modified By",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("renter", {
      header: "Renter",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("changeType", {
      header: "Change Type",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("dateTime", {
      header: "Date & Time",
      cell: (info) => info.getValue(),
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
        <div className=" my-section  border border-[#dee2e6] rounded-3xl  pb-2 mb-phone ">
          {isLoading ? (
            <div className="flex flex-col gap-3 w-full py-5 px-5">
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
              <SkeletonLoading className="md:!w-full w-full !h-8 md:!h-9 rounded-xl" />
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-base font-medium    "
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
                          className="px-6 py-4 whitespace-nowrap text-sm text-grayMedium first-of-type:text-black"
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
                    <td
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default VersionHistoryModal;
