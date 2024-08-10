"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Checkbox, Table, TextInput } from "@mantine/core";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());
  const toggleAll = () => {
    if (selectedUsers.size === data.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(data.map((_, i) => i)));
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  const toggleUser = (index: number) => {
    const newSelectedUsers = new Set(selectedUsers);
    if (newSelectedUsers.has(index)) {
      newSelectedUsers.delete(index);
    } else {
      newSelectedUsers.add(index);
    }
    setSelectedUsers(newSelectedUsers);
  };

  return (
    <div className="space-y-5 border border-[#dee2e6] rounded-3xl pt-3 pb-6">
      {/* Table */}
      <Table>
        <Table.Thead className="  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              <Table.Th className=" pb-4 max-w-[20px] w-[20px]  ">
                <Checkbox
                  size="xs"
                  checked={selectedUsers.size === data.length}
                  indeterminate={
                    selectedUsers.size > 0 && selectedUsers.size < data.length
                  }
                  onChange={toggleAll}
                />
              </Table.Th>
              {headerGroup.headers.map((header, i) => {
                console.log(header);

                return (
                  <Table.Th
                    key={header.id}
                    className="text-start  font-medium font-Medium pb-4 text-[18px]"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Table.Th>
                );
              })}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody classNames={{ tbody: "pb-10" }}>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <Table.Tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <Table.Td>
                  <Checkbox
                    size="xs"
                    checked={selectedUsers.has(index)}
                    onChange={() => toggleUser(index)}
                  />
                </Table.Td>
                {row.getVisibleCells().map((cell, i) => (
                  <Table.Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Td>
                ))}
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={columns.length} className="h-24 text-center">
                No results.
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}
