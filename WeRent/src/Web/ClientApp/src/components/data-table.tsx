"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { Checkbox, Table, TextInput } from "@mantine/core";
import { Fragment, useState } from "react";
import { cn } from "../lib/utils";
import ArrowWhiteIcon from "../assets/icons/arrowWhite";
import FilterBy from "./filterBy";
import { Link } from "../navigation";
import CardIcon from "../assets/icons/card";
import ROUTES from "../routes";
import { strict } from "assert";
import Button from "./button";
import RentSwitch from "./RentSwitch";
export interface FilterData {
  label: string;
  type: string;
  key: string | boolean;
}
export interface SortingData {
  label: string;
  type: string;
  key: string;
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  viewAll?: string;
  viewAllTitle?: string;
  search?: boolean;
  cardView?: string;
  filter?: "buttons" | null;
  filterBy?: string;
  filterData?: FilterData[];
  sort?: boolean;
  sortingData?: SortingData[];
  haveRentSwitch?: boolean;
  addUser?: boolean;
}
export function DataTable<TData, TValue>({
  columns,
  data,
  title,
  viewAll,
  viewAllTitle,
  search,
  cardView,
  filter = null,
  filterBy = "",
  filterData = [],
  sort = false,
  sortingData = [],
  haveRentSwitch = false,
  addUser = false,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
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
  const getFillterValue = () => {
    const tableColumn = table.getColumn(filterBy);

    if (tableColumn) return tableColumn.getFilterValue();
  };
  const handelFilter = (key: string | boolean) => {
    table.getColumn(filterBy)?.setFilterValue(key);
  };
  const handelSort = (key: string) => {
    table.getColumn(key)?.getIsSorted() !== "desc"
      ? table.getColumn(key)?.toggleSorting()
      : table.resetSorting();
    return table.getColumn(key)?.getIsSorted();
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
        <div className="flex items-center gap-5">
          <h2 className="headTitle">{title}</h2>
          {cardView && (
            <Link
              href={cardView}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <CardIcon />
              <p>Card View</p>
            </Link>
          )}
        </div>
        {haveRentSwitch && <RentSwitch />}
        {viewAll && (
          <Button className={"h-10 w-fit gap-3 "}>
            <p className="text-white text-[16px]">
              {viewAllTitle || "View all"}{" "}
            </p>
            <ArrowWhiteIcon />
          </Button>
        )}
        {filter && sort ? (
          <FilterBy
            data={filterData.concat(sortingData)}
            filterfun={handelFilter}
            sortFun={handelSort}
            search={search}
            addUser={addUser}
          />
        ) : filter ? (
          <FilterBy
            data={filterData}
            filterfun={handelFilter}
            sortFun={() => {}}
            search={search}
            addUser={addUser}
          />
        ) : sort ? (
          <FilterBy
            data={sortingData}
            filterfun={() => {}}
            sortFun={handelSort}
            search={search}
            addUser={addUser}
          />
        ) : null}
       
      </div>

      <div className="space-y-5 border border-[#dee2e6] rounded-3xl pt-3 pb-6 mb-20">
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
                  className="min-h-[72px] h-[72px]"
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
