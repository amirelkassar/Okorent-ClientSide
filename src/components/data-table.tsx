"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Checkbox, Table } from "@mantine/core";
import { useCallback } from "react";
import Events from "./Events";
import { useSelectRowTable } from "./select-row-table-context";
export interface functionSelectProps {
  title: string;
  icon: React.JSX.Element;
  onclick: (ids: any) => void;
}

interface DataTableProps<TData extends { id: any }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  Component?: React.ComponentType<{ dataCard: TData }>;
  functionSelect?: functionSelectProps[];
  setSelectedFromTable?: any;
}
export function DataTable<TData extends { id: any }, TValue>({
  columns,
  data,
  Component,
  functionSelect,
  setSelectedFromTable,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  //use context
  const { selectRowTable, setSelectRowTable } = useSelectRowTable();

  const toggleUser = useCallback(
    (row: any) => {
      setSelectRowTable((prev: any) => {
        const existingIndex = prev.findIndex((user: any) => user.id === row.id);
        if (existingIndex !== -1) {
          // Remove user
          return prev.filter((_: any, index: any) => index !== existingIndex);
        }
        // Add user
        return [...prev, row];
      });
      if (setSelectedFromTable) {
        setSelectedFromTable((prev: any) => {
          const existingIndex = prev.findIndex(
            (user: any) => user.id === row.id
          );
          if (existingIndex !== -1) {
            // Remove user
            return prev.filter((_: any, index: any) => index !== existingIndex);
          }
          // Add user
          return [...prev, row];
        });
      }
    },
    [setSelectedFromTable, setSelectRowTable]
  );
  const toggleAll = useCallback(() => {
    setSelectRowTable((prev) =>
      prev.length === table.getRowModel().rows.length
        ? []
        : table.getRowModel().rows.map((row) => row.original)
    );
    if (setSelectedFromTable) {
      setSelectedFromTable((prev: any) =>
        prev.length === table.getRowModel().rows.length
          ? []
          : table.getRowModel().rows.map((row) => row.original)
      );
    }
  }, [table, setSelectedFromTable, setSelectRowTable]);

  return (
    <div>
      <div className="flex items-center justify-between gap-6 flex-wrap ">
        <div className="flex items-center gap-3 mdl:gap-5 flex-wrap">
          {functionSelect?.length ? (
            <div
              className={`mb-5 flex gap-2 flex-wrap transition-all duration-300 ease-in-out ${
                selectRowTable.length
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 h-0"
              }`}
            >
              {functionSelect.map((item, index) => {
                return <Events key={index} item={item} ids={selectRowTable} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {Component && (
        <div className=" flex flex-col w-full gap-5 lg:hidden mb-14">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, i) =>
              row.original !== null ? (
                <div key={i} className="w-full flex gap-2">
                  <div className="mt-4">
                    <Checkbox
                      color="#88BA52"
                      classNames={{
                        input: "bg-transparent",
                      }}
                      size="xs"
                      checked={selectRowTable.some(
                        (user) => user.id === row.original.id
                      )}
                      onChange={() => toggleUser(row.original)}
                    />
                  </div>
                  <Component dataCard={row.original as TData} />
                </div>
              ) : null
            )
          ) : (
            <p className="my-7 px- text-sm text-center"> No results.</p>
          )}
        </div>
      )}
      <div className="space-y-5 border hidden lg:block border-[#dee2e6] rounded-3xl pt-3 pb-6 mb-phone lg:mb-section">
        {/* Table */}
        <Table>
          <Table.Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                <Table.Th className=" pb-4 max-w-[20px] w-[20px]  ">
                  <Checkbox
                    size="xs"
                    color="#88BA52"
                    classNames={{
                      input: "bg-transparent",
                    }}
                    checked={
                      data.length > 0
                        ? selectRowTable.length ===
                          table.getRowModel().rows.length
                        : false
                    }
                    indeterminate={
                      selectRowTable.length > 0 &&
                      selectRowTable.length < table.getRowModel().rows.length
                    }
                    onChange={toggleAll}
                  />
                </Table.Th>
                {headerGroup.headers.map((header, i) => {
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
          <Table.Tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <Table.Tr
                  className="min-h-[72px]  h-[72px]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  <Table.Td>
                    <Checkbox
                      color="#88BA52"
                      classNames={{
                        input: "bg-transparent",
                      }}
                      size="xs"
                      checked={selectRowTable.some(
                        (user) => user.id === row.original.id
                      )}
                      onChange={() => toggleUser(row.original)}
                    />
                  </Table.Td>
                  {row.getVisibleCells().map((cell, i) => (
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
    </div>
  );
}
