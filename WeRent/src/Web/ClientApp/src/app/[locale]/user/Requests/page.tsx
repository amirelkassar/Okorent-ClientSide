import { DataTable } from "@/src/components/data-table";
import FilterBy from "@/src/components/filterBy";
import { RequestsData } from "@/src/lib/dataUser";
import React from "react";
import { columns } from "./_components/columns";

function page() {
  return (
    <div>
      <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
        <h2 className="text-[32px] font-Bold">My Requests</h2>
        <FilterBy data={["New", "Ongoing", "Declined"]} />
      </div>
      <DataTable data={RequestsData} columns={columns}/>
    </div>
  );
}

export default page;
