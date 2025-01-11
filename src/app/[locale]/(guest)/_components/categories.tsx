import ToolsIcon from "@/src/assets/icons/tools";
import { GetCategory } from "@/src/hooks/queries/admin/master-data/category";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";

function Categories() {
  const { data, isLoading } = GetCategory();

  return (
    <div className="mb-10 lg:mb-16">
      <h2 className="text-center headTitle">Our Most Popular Categories </h2>

      <div className="flex justify-center flex-wrap mt-7 lg:mt-10 gap-1 lg:gap-7 ">
      {data?.data?.items?.map((category: any, index: number) => {
          return (
            <Link
              href={`${ROUTES.GUEST.PRODUCTS(category.name)}&CategoryId=${
                category.id
              }`}
              key={category.id}
              className="pt-3 px-3 pb-1 rounded-xl w-[108px] h-[102px] min-h-max flex flex-col justify-between  border border-transparent items-center gap-3 duration-300 hover:shadow-sidebar hover:border hover:border-green"
            >
              {category.iconPath ? (
                <Image
                  src={category.iconPath}
                  alt={category.name}
                  width={30}
                  height={30}
                  className="h-[30px] w-auto"
                />
              ) : (
                <ToolsIcon className={"h-[30px] w-auto"} />
              )}

              <h3 className="text-sm lg:text-[16px] font-SemiBold text-center">
                {category?.name}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
