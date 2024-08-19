import React from "react";
import { UserData } from "@/src/lib/dataUser";
import { columns } from "./_components/column";
import { DataTable } from "@/src/components/data-table";
import Button from "@/src/components/button";
const FilterOptions = [
  {
    label: "Verified",
    type: "filter",
    key: true,
  },
  {
    label: "Not Verified",
    type: "filter",
    key: false,
  },
];
const sortingData = [
  {
    label: "Top Rated",
    type: "sort",
    key: "rating",
  },
];
function page() {
  return (
    <div className="mb-10">
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
      <Button className={"w-fit mx-auto"}>Load More</Button>
    </div>
  );
}

export default page;
