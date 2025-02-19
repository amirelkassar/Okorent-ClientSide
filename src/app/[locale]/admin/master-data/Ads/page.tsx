"use client";
import React from "react";
import LayoutMaster from "../_components/layout-master";
import { DataTable } from "@/src/components/data-table";
import EditIcon from "@/src/assets/icons/edit";
import DeleteIcon from "@/src/assets/icons/delete";
import { columns } from "./_components/column";
import VerifyIcon from "@/src/assets/icons/verify";
import PauseIcon from "@/src/assets/icons/pause";
import { TableHeader } from "@/src/components/table/table-header";
import { Link } from "@/src/navigation";
import AddPricingIcon from "@/src/assets/icons/add-pricing";
import CardPhoneAds from "./_components/card-phone-ads";
import ROUTES from "@/src/routes";
import { GetAdsUserInAdmin } from "@/src/hooks/queries/admin/master-data/ads";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { Pagination } from "@/src/components/pagination";
const FilterOptions = [
  {
    label: "Activate",
    key: "filter",
    value: "Activate",
  },
  {
    label: "Suspend",
    key: "filter",
    value: "Suspend",
  },
];
function page() {
  const functionSelect = [
    {
      title: "Activate",
      icon: <VerifyIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {},
    },
    {
      title: "Suspend",
      icon: <PauseIcon className="max-h-4 w-auto" />,
      onclick: () => {},
    },

    {
      title: "Edit",
      icon: <EditIcon fill="#006AFF" className="max-h-4 w-auto" />,
      onclick: () => {},
    },
    {
      title: "Delete",
      icon: <DeleteIcon className="max-h-4 w-auto" />,
      onclick: () => {},
    },
  ];
  const query = GetAdsUserInAdmin();

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
            <div className="bg-white rounded-xl border border-green/30 shadow-md w-full px-3 mdl:px-8 py-1 mdl:py-2 mb-section">
              <DataTable
                data={data}
                columns={columns}
                functionSelect={functionSelect}
                Component={CardPhoneAds}
              />
              <Pagination totalPages={totalPages} />
            </div>
          );
        }}
      </QueryWrapper>
    </LayoutMaster>
  );
}

export default page;
