import EditIcon from "@/src/assets/icons/edit";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";
interface CategoriesAdminDataProps {
  id: number;
  title: string;
  subcategories: string;
  img: JSX.Element;
}
interface CategoryRowProps {
  data: CategoriesAdminDataProps;
}
function CategoryRow({ data }: CategoryRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-blueLight/50 last-of-type:border-none py-7 flex-wrap">
      <div className="flex items-center gap-8 w-[300px]">
        <div className="w-8 h-auto">{data.img}</div>
        <h4 className="text-base max-w-[200px] w-full truncate">{data.title}</h4>
      </div>
      <p className="text-grayMedium font-Regular">
        {data.subcategories} Subcategories
      </p>
      <Link href={ROUTES.ADMIN.CATEGORYADD}>
        <EditIcon fill="#006AFF" />
      </Link>
    </div>
  );
}

export default CategoryRow;
