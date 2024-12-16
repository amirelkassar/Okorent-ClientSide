"use client";
import { cn } from "@/src/lib/utils";
import { Link, usePathname } from "@/src/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";
import TableFilterPop from "./table-filter-pop";

export interface FilterData {
  label: string;
  key: string;
  value: any;
}
interface TableFilterProps {
  data: FilterData[];
}
function TableFilter({ data }: TableFilterProps) {
  const searchParams = useSearchParams();
  const path = usePathname();
  console.log(path);

  const ToggleFilterLink = (newFilterLabel: string, searchBy = "filter") => {
    // Remove filter if the same, otherwise apply the new filter
    if (searchParams.get(searchBy) === newFilterLabel) {
      return path;
    }
    return `${path}?${searchBy}=${newFilterLabel}`;
  };

  return (
    <div>
      <div
        className={` ${
          data.length > 4 ? "hidden" : "hidden lg:flex"
        }   items-center gap-2`}
      >
        <h3 className="text-grayMedium text-[14px] font-Regular">Filter By</h3>
        <div className="flex items-center gap-3 flex-wrap">
          {data.map((item, i) => {
            return (
              <Link
                href={ToggleFilterLink(
                  item.value?.toString().replace(" ", "_") ||
                    item.label.replace(" ", "_"),
                  item.key || "filter"
                )}
                onClick={() => {
                  console.log(item.label);
                }}
                key={i}
                className={cn(
                  "bg-grayBack cursor-pointer duration-300 hover:shadow-md hover:bg-green/20 px-[10px] rounded-xl text-blue flex items-center justify-center h-10 text-[14px] font-SemiBold",
                  searchParams.get(item.key || "filter") ===
                    (item.value?.toString().replace(" ", "_") ||
                      item.label.replace(" ", "_"))
                    ? "bg-green text-white hover:!bg-green"
                    : ""
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={` ${data.length > 4 ? "" : "lg:hidden"}  self-end "`}>
        <TableFilterPop data={data} />
      </div>
    </div>
  );
}

export default TableFilter;
