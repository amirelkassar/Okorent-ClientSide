"use client";
import { cn } from "@/src/lib/utils";
import { Link, usePathname } from "@/src/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

export interface HandleFilter {
  (key: string | boolean): void;
}
export interface HandleSort {
  (key: string): void;
}
export interface FilterData {
  label: string;
  type: string;
  key: string | boolean;
}
interface TableFilterProps {
  data: FilterData[];
}
function TableFilter({ data }: TableFilterProps) {
  const searchParams = useSearchParams();
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex items-center gap-2">
      <h3 className="text-grayMedium text-[14px] font-Regular">Filter By</h3>
      <div className="flex items-center gap-3 flex-wrap">
        {data.map((item, i) => {
          return (
            <Link
              href={path +`?filter=${ item.label.replace(" ", "_") }`}
              onClick={() => {
                console.log(item.label);
              }}
              key={i}
              className={cn(
                "bg-grayBack cursor-pointer duration-300 hover:shadow-md hover:bg-green/20 px-[10px] rounded-xl text-blue flex items-center justify-center h-10 text-[14px] font-SemiBold",
                searchParams.get("filter") === item.label.replace(" ", "_")
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
  );
}

export default TableFilter;
