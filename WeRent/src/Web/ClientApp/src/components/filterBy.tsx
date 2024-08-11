import React from "react";
import Button from "./button";
interface FilterByProps {
  data: string[];
  search? :boolean
}
function FilterBy({ data,search }: FilterByProps) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-grayMedium text-[14px] font-Light">Filter By</h3>
      <ul className="flex items-center gap-3 flex-wrap">
        {data.map((item, i) => {
          return (
            <li
              key={i}
              className="bg-grayBack px-[10px] rounded-xl text-blue flex items-center justify-center h-10 text-[14px] font-S"
            >
              {item}
            </li>
          );
        })}
      </ul>
      <Button className={'h-10'}>
      Search a listing
      </Button>
    </div>
  );
}

export default FilterBy;
