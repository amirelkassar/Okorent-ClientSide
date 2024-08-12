import FilterBy from "@/src/components/filterBy";
import React from "react";

import { UserData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
const FilterOptions = [
  {
    label: "Pro Package",
    icon: null,
    key: "Pro Package",
  },
  {
    label: "Pro Plus Package",
    icon: null,
    key:  "Pro Plus Package",
  },
];
const sortingData = [
  {
    label: 'Top Rated',
    key: 'rating',
  },
];
function page() {
  return (
    <div>
     
      <DataTable
        title="All Accounts"
       
        data={UserData}
        columns={columns}
        sort
        sortingData={sortingData}
      />
    </div>
  );
}

export default page;
