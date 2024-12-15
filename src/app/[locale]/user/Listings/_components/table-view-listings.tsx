import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { columns } from "./columns";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import DeleteIcon from "@/src/assets/icons/delete";
const FilterOptions = [
  {
    label: "online",
    key: "active",
    value: true,
  },
  {
    label: "offline",
    key: "active",
    value: false,
  },
];
const functionSelect = [
  {
    title: "Delete",
    icon: <DeleteIcon className="max-h-4 w-auto" />,
    onclick: (ids: any) => {
      console.log([...ids]);
    },
  },
];
function TableViewListings({ data }: { data: any }) {
  console.log(data);

  return (
    <div className=" hidden mdl:block">
      <TableHeader>
        <TableHeader.First title="My Listings">
          <Link
            href={ROUTES.USER.LISTINGS + "?card=true"}
            className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <CardIcon />
            <p>Card View</p>
          </Link>
        </TableHeader.First>
        <TableHeader.Last options={FilterOptions} />
      </TableHeader>
      <DataTable
        //Component={CardViewPhoneListing}
        title=""
        data={data}
        columns={columns}
        functionSelect={functionSelect}
      />
    </div>
  );
}

export default TableViewListings;
