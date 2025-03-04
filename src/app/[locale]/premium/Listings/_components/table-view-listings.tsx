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
import LinkGreen from "@/src/components/linkGreen";
import PlusIcon from "@/src/assets/icons/plus";
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
  const totalCount = query.data?.data?.totalCount || 0;

  return (
    <div>
      <TableHeader>
        <TableHeader.First title="">
          <div className="flex items-center gap-3">
            <LinkGreen
              href={ROUTES.PREMIUM.CREATEORDER}
              className={"gap-2 h-10"}
            >
              <PlusIcon className="w-4 h-auto" />
              Create Order
            </LinkGreen>
            {+totalCount > 0 ? (
              <Link
                href={ROUTES.PREMIUM.LISTINGS + "?card=true"}
                className="px-3 hidden lg:flex duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black  items-center justify-center gap-2"
              >
                <CardIcon />
                <p>Card View</p>
              </Link>
            ) : null}
          </div>
        </TableHeader.First>
        <TableHeader.Last
          className="lg:!flex !hidden"
          options={FilterOptions}
        />
      </TableHeader>
      <div className=" hidden lg:block">
        <QueryWrapper query={query}>
          {({ data, totalPages }: { data: any; totalPages?: any }) => {
            console.log(data);

            return (
              <div>
                <DataTable
                  //Component={CardViewPhoneListing}
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
