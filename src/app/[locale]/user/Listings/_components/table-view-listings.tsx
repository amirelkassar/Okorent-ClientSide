import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { columns } from "./columns";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import { useActionTable } from "../_hooks/use-action-table";
import { Pagination } from "@/src/components/pagination";
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

function TableViewListings({ data }: { data: any }) {
  const { functionSelectView, setSelectedFromTable } = useActionTable();
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
        functionSelect={functionSelectView}
        setSelectedFromTable={setSelectedFromTable}
      />
      <Pagination totalPages={5} />
    </div>
  );
}

export default TableViewListings;
