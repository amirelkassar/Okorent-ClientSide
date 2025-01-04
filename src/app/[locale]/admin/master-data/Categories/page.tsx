"use client";
import React from "react";
import TitleMaster from "../_components/title-master";
import PlusIcon from "@/src/assets/icons/plus";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import LayoutMaster from "../_components/layout-master";
import CategoryRow from "./_components/category-row";
import { GetCategory } from "@/src/hooks/queries/admin/master-data/category";
import { QueryWrapper } from "@/src/components/query-wrapper";

function page() {
  const query = GetCategory();
  return (
    <LayoutMaster>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Categories" num={7} />
        <LinkGreen
          href={ROUTES.ADMIN.CATEGORYADD}
          className={"gap-2 h-10 !px-5"}
        >
          <PlusIcon className="w-4 h-auto" />
          <p className="text-base font-Regular font-medium">Add Category</p>
        </LinkGreen>
      </div>
      <QueryWrapper query={query}>
        {({ data, totalPages }: { data: any; totalPages?: any }) => {
          return (
            <div className="bg-white rounded-xl border border-green/30 shadow-md w-full px-8 py-2 mb-section">
              {data?.map((item: any, index: number) => (
                <CategoryRow key={index} data={item} />
              ))}
            </div>
          );
        }}
      </QueryWrapper>
    </LayoutMaster>
  );
}

export default page;
