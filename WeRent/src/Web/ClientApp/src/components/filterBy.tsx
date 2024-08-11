import React from "react";
interface FilterByProps {
  data: string[];
}
function FilterBy({ data }: FilterByProps) {
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
    </div>
  );
}

export default FilterBy;
