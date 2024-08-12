import React from "react";
import Button from "./button";
import { Link } from "../navigation";
import ROUTES from "../routes";
import { cn } from "../lib/utils";
export interface HandleFilter {
  (key: string|boolean): void;
}
export interface HandleSort {
  (key: string): void;
}
export interface FilterData {
  label: string;
  key: string|boolean;
}
interface FilterByProps {
  data: FilterData[];
  filterfun: HandleFilter | null;
  sortFun: HandleSort | null;
  search?: boolean;
}
function FilterBy({ data, search, filterfun, sortFun }: FilterByProps) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-grayMedium text-[14px] font-Regular">Filter By</h3>
      <ul className="flex items-center gap-3 flex-wrap">
        {data.map((item, i) => {
          return (
            <li
              onClick={() => {
                if (filterfun) {
                  filterfun(item.key);
                }
                if (sortFun) {
                  sortFun(item.key.toString());
                }
              }}
              key={i}
              className={cn(
                "bg-grayBack cursor-pointer duration-300 hover:shadow-md px-[10px] rounded-xl text-blue flex items-center justify-center h-10 text-[14px] font-S"
              )}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
      {search && (
        <Link
          href={ROUTES.USER.HOMEPAGE}
          className={
            "h-10 bg-green px-3 border-4 border-[#a9c788] hover:border-green duration-500 text-medium rounded-xl text-white flex items-center justify-center "
          }
        >
          Search a listing
        </Link>
      )}
    </div>
  );
}

export default FilterBy;
