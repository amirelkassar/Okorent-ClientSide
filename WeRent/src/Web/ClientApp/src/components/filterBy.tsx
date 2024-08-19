import React from "react";
import Button from "./button";
import { Link } from "../navigation";
import ROUTES from "../routes";
import { cn } from "../lib/utils";
import AddUser from "./add-user";
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
interface FilterByProps {
  data: FilterData[];
  filterfun: HandleFilter | null;
  sortFun: HandleSort | null;
  search?: boolean;
  addUser?: boolean;
}
function FilterBy({ data, search, filterfun, sortFun ,addUser=false}: FilterByProps) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-grayMedium text-[14px] font-Regular">Filter By</h3>
      <ul className="flex items-center gap-3 flex-wrap">
        {data.map((item, i) => {
          return (
            <li
              onClick={() => {
                item.type === "filter"
                  ? filterfun && filterfun(item.key)
                  : item.type === "sort"
                  ? sortFun && sortFun(item.key.toString())
                  : null;
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
       {addUser && <AddUser/>}
    </div>
  );
}

export default FilterBy;
