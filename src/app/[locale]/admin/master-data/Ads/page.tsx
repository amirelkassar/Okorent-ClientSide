"use client";
import React from "react";
import LayoutMaster from "../_components/layout-master";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import AddPricingIcon from "@/src/assets/icons/add-pricing";
import CardPhoneAds from "./_components/card-phone-ads";
import ROUTES from "@/src/routes";
import { GetAdsUserInAdmin } from "@/src/hooks/queries/admin/master-data/ads";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
import { useActionTableAds } from "./_hooks/use-action-table-ads";
import { useSearchParams } from "next/navigation";
import Card from "@/src/components/card";
const FilterOptions = [
  {
    label: "Ongoing",
    key: "AdvertisementStatus",
    value: "1",
  },
  {
    label: "Suspend",
    key: "AdvertisementStatus",
    value: "2",
  },
  {
    label: "Stopped",
    key: "AdvertisementStatus",
    value: "3",
  },
  {
    label: "Cancelled",
    key: "AdvertisementStatus",
    value: "4",
  },
  {
    label: "Completed",
    key: "AdvertisementStatus",
    value: "5",
  },
];
function page() {
  const searchParams = useSearchParams();
  const { functionSelectView } = useActionTableAds();
  const query = GetAdsUserInAdmin(searchParams.toString());

  return (
    <LayoutMaster>
      <TableHeader>
        <TableHeader.First title="Ads Managment - 112">
          <Link
            href={ROUTES.ADMIN.ADSPRICING}
            className="text-sm border duration-300 hover:shadow-md border-black h-10 min-w-[140px] rounded-xl px-4 py-2 flex items-center gap-2"
          >
            <AddPricingIcon />
            Ads Pricing
          </Link>
        </TableHeader.First>
        <TableHeader.Last
          className="ms-auto"
          options={FilterOptions}
        ></TableHeader.Last>
      </TableHeader>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          console.log(data);

          return (
            <Card className="mdl:bg-white bg-transparent border-none mdl:border  px-0 mdl:px-8 py-0 mdl:py-2 mb-section">
              <DataTable
                data={data}
                columns={columns}
                functionSelect={functionSelectView}
                Component={CardPhoneAds}
              />
              <Pagination totalPages={totalPages} />
            </Card>
          );
        }}
      </QueryWrapper>
    </LayoutMaster>
  );
}

export default page;
