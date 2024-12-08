import React from "react";
import TitleMaster from "../_components/title-master";
import PlusIcon from "@/src/assets/icons/plus";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import LayoutMaster from "../_components/layout-master";
import { CategoriesAdminData } from "@/src/lib/dataUser";
import CategoryRow from "./_components/category-row";

function page() {
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

      <div className="bg-white rounded-xl border border-green/30 shadow-md w-full px-8 py-2 mb-section">
        {CategoriesAdminData.map((item, i) => (
          <CategoryRow key={i} data={item} />
        ))}
      </div>
    </LayoutMaster>
  );
}

export default page;
