"use client";
import React from "react";
import LayoutSupport from "../_components/layout-support";
import { Link } from "@/src/navigation";
import SupportIcon from "@/src/assets/icons/Support";
import ROUTES from "@/src/routes";
import Card from "@/src/components/card";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import CardPhoneSupport from "./_components/card-phone-support";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { GetSupportsMessages } from "@/src/hooks/queries/admin/support";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchparams = useSearchParams();
  const query = GetSupportsMessages(searchparams.toString());
  return (
    <LayoutSupport>
      <div className="flex items-center  gap-4 flex-wrap mb-section">
        <h3 className=" text-lg md:text-xl mdl:text-[32px] font-SemiBold">
          Support History
        </h3>
        <Link
          href={ROUTES.USER.SUPPORT}
          className="text-sm border justify-center duration-300 hover:shadow-md border-black h-10 min-w-[110px] rounded-xl px-4 py-2 flex items-center gap-2"
        >
          <SupportIcon className="w-4 h-auto " />
          Support
        </Link>
      </div>
      <Card className="mdl:p-11 rounded-2xl bg-transparent mdl:bg-white border-none mdl:border">
        <QueryWrapper query={query}>
          {({ data, totalPages }: { data: any; totalPages?: any }) => {
            console.log(data);
            return (
              <div>
                <DataTable
                  title=""
                  data={data}
                  columns={columns}
                  Component={CardPhoneSupport}
                  functionSelect={[]}
                />
                <Pagination totalPages={totalPages} />
              </div>
            );
          }}
        </QueryWrapper>
      </Card>
    </LayoutSupport>
  );
}

export default Page;
