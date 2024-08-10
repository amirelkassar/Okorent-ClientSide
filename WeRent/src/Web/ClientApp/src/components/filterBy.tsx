import React from "react";

function FilterBy({ data }: any) {
  return (
    <div className="flex items-center gap-2">
      <h3>Filter By</h3>
      <ul className="flex items-center gap-3 flex-wrap">
        <li className="bg-grayBack px-[10px] rounded-xl text-blue flex items-center justify-center h-10 text-[14px] font-S">Top Rated</li>
      </ul>
    </div>
  );
}

export default FilterBy;
