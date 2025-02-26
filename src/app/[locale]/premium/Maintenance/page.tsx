"use client";
import PlusIcon from "@/src/assets/icons/plus";
import { DataTable } from "@/src/components/data-table";
import LinkGreen from "@/src/components/linkGreen";
import { TableHeader } from "@/src/components/table/table-header";
import { Maintenance } from "@/src/lib/dataUser";
import ROUTES from "@/src/routes";
import React from "react";
import { columns } from "./_components/columns";
const FilterOptions = [
  {
    label: "Repaired",
    key: "Status",
    value: "Repaired",
  },
  {
    label: "Not Repaired",
    key: "Status",
    value: "Not Repaired",
  },
  {
    label: "Offline",
    key: "Status",
    value: "Offline",
  },
];
function page() {
  return (
    <div>
      <TableHeader>
        <TableHeader.First title="">
          <div className="flex items-center gap-3">
            <LinkGreen
              href={ROUTES.PREMIUM.MAINTENANCEADD}
              className={"gap-2 h-10"}
            >
              <PlusIcon className="w-4 h-auto" />
              Add Maintenance
            </LinkGreen>
          </div>
        </TableHeader.First>
        <TableHeader.Last
          className="mdl:!flex !hidden"
          options={FilterOptions}
        />
      </TableHeader>
      <div className=" hidden mdl:block">
        <div>
          <DataTable
            //Component={CardViewPhoneListing}
            data={Maintenance}
            columns={columns}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
