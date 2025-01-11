import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
import React from "react";
import { columns } from "./columns";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import CardIcon from "@/src/assets/icons/card";
import { useActionTable } from "../_hooks/use-action-table";
import { Pagination } from "@/src/components/pagination";
import { QueryWrapper } from "@/src/components/query-wrapper";
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

function TableViewListings({ query }: { query: any }) {
  const { functionSelectView, setSelectedFromTable } = useActionTable();

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="My Listings">
          <Link
            href={ROUTES.USER.LISTINGS + "?card=true"}
            className="px-3 hidden mdl:flex duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black  items-center justify-center gap-2"
          >
            <CardIcon />
            <p>Card View</p>
          </Link>
        </TableHeader.First>
        <TableHeader.Last className="mdl:!flex !hidden" options={FilterOptions} />
      </TableHeader>
      <div className=" hidden mdl:block">
        <QueryWrapper query={query}>
          {({ data, totalPages }: { data: any; totalPages?: any }) => {
            console.log(data);

            return (
              <div>
                <DataTable
                  //Component={CardViewPhoneListing}
                  title=""
                  data={data}
                  columns={columns}
                  functionSelect={functionSelectView}
                  setSelectedFromTable={setSelectedFromTable}
                />
                <Pagination totalPages={totalPages} />
              </div>
            );
          }}
        </QueryWrapper>
      </div>
    </div>
  );
}

export default TableViewListings;
