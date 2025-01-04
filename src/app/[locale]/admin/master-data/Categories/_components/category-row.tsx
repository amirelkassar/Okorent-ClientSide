import EditIcon from "@/src/assets/icons/edit";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";
interface CategoriesAdminDataProps {
  id: number;
  name: string;
  subCategoriesCount: string;
  iconPath: any;
}
interface CategoryRowProps {
  data: CategoriesAdminDataProps;
}
function CategoryRow({ data }: CategoryRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-blueLight/50 last-of-type:border-none py-7 flex-wrap">
      <div className="flex items-center gap-8 w-[300px]">
        <Image
          src={data?.iconPath}
          alt="categoryName"
          width={500}
          height={500}
          className="w-8 h-auto"
        />

        <h4 className="text-base max-w-[200px] w-full truncate">
          {data.name}
        </h4>
      </div>
      <p className="text-grayMedium font-Regular">
        {data?.subCategoriesCount} Subcategories
      </p>
      <Link href={ROUTES.ADMIN.CATEGORIESID(data?.id)}>
        <EditIcon fill="#006AFF" />
      </Link>
    </div>
  );
}

export default CategoryRow;
