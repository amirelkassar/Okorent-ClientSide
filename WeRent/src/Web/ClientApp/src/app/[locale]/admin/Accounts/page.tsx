import React from "react";
import { UserData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
const FilterOptions = [
  {
    label: "Verified",
    type:'filter',
    key: true,
  },
  {
    label: "Not Verified",
    type:'filter',
    key: false,
  },
];
const sortingData = [
  {
    label: "Top Rated",
    type:'sort',
    key: "rating",
  },
];
function page() {
  return (
    <div>
      <DataTable
        title="All Accounts"
        filter="buttons"
        filterData={FilterOptions}
        filterBy="verified"
        data={UserData}
        columns={columns}
        sort
        sortingData={sortingData}
        addUser
      />
    </div>
  );
}

export default page;
