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
import { Checkbox, Table } from "@mantine/core";
import { useState } from "react";
import ArrowWhiteIcon from "../assets/icons/arrowWhite";
import FilterBy from "./filterBy";
import { Link } from "../navigation";
import CardIcon from "../assets/icons/card";
import RentSwitch from "./RentSwitch";
import TrueIcon from "../assets/icons/true";
import DeleteIcon from "../assets/icons/delete";
import ExportIcon from "../assets/icons/export";
import AddUser from "./add-user";
import LinkGreen from "./linkGreen";
import Events from "./Events";
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
export interface functionSelectProps {
  title: string;
  icon: React.JSX.Element;
  onclick: (ids: any) => void;
}
interface DataTableProps<TData extends { id: any }, TValue> {
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
  Component?: React.ComponentType<{ dataCard: TData }>;
  children?: React.ReactNode;
  functionSelect?: functionSelectProps[];
}
export function DataTable<TData extends { id: any }, TValue>({
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
  Component,
  children,
  functionSelect,
}: DataTableProps<TData, TValue>) {
  const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());

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

  const handelFilter = (key: string | boolean) => {
    table.getColumn(filterBy)?.setFilterValue(key);
  };
  const handelSort = (key: string) => {
    table.getColumn(key)?.getIsSorted() !== "desc"
      ? table.getColumn(key)?.toggleSorting()
      : table.resetSorting();
    return table.getColumn(key)?.getIsSorted();
  };

  const toggleAll = () => {
    if (selectedUsers.size === table.getRowModel().rows.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(
        new Set(table.getRowModel().rows.map((item) => item.original.id))
      );
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-6 flex-wrap mb-8">
        <div className="flex items-center gap-3 mdl:gap-5 flex-wrap">
          <h2 className="headTitle mdl:min-h-10 text-nowrap">{title}</h2>
          {cardView && (
            <Link
              href={cardView}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <CardIcon />
              <p>Card View</p>
            </Link>
          )}
          {}
          <div className="flex items-center gap-3 flex-wrap">
            {selectedUsers.size > 0 ? (
              functionSelect ? (
                functionSelect.map((item, index) => {
                  return <Events key={index} item={item} ids={selectedUsers} />;
                })
              ) : (
                <>
                  <div className="px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
                    <TrueIcon />
                    <p className="text-blue text-[14px]">Verify</p>
                  </div>
                  <div className="px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
                    <ExportIcon />
                    <p className="text-blue text-[14px]">Export</p>
                  </div>
                  <div className="px-4 min-h-10 bg-blueLight duration-300 hover:shadow-lg cursor-pointer rounded-xl flex items-center gap-2">
                    <DeleteIcon className="h-[14px] w-auto" />
                    <p className="text-red text-[14px]">Delete</p>
                  </div>
                </>
              )
            ) : null}
          </div>
        </div>
        {haveRentSwitch && <RentSwitch typeUser="user" />}
        {viewAll && (
          <LinkGreen href={viewAll || "#"} className={"h-10 w-fit gap-3 "}>
            <p className="text-white text-[16px]">
              {viewAllTitle || "View all"}{" "}
            </p>
            <ArrowWhiteIcon />
          </LinkGreen>
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
        ) : (
          addUser && <AddUser />
        )}
      </div>
      {Component && (
        <div className=" flex flex-col w-full gap-5 mdl:hidden mb-14">
          {table.getRowModel().rows.map((row, i) =>
            row.original !== null ? (
              <div key={i} className="w-full flex gap-2">
                <div className="mt-4">
                  <Checkbox
                    color="#88BA52"
                    classNames={{
                      input: "bg-transparent",
                    }}
                    size="xs"
                    checked={selectedUsers.has(row.original?.id)}
                    onChange={() => toggleUser(row.original?.id)}
                  />
                </div>
                <Component dataCard={row.original as TData} />
              </div>
            ) : null
          )}
        </div>
      )}

      <div className="space-y-5 border hidden mdl:block border-[#dee2e6] rounded-3xl pt-3 pb-6 mb-phone lg:mb-section">
        {/* Table */}
        <Table>
          <Table.Thead className="  ">
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
                      selectedUsers.size === table.getRowModel().rows.length
                    }
                    indeterminate={
                      selectedUsers.size > 0 &&
                      selectedUsers.size < table.getRowModel().rows.length
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
                      checked={selectedUsers.has(row.original?.id)}
                      onChange={() => toggleUser(row.original?.id)}
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
