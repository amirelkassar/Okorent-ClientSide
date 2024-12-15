"use client";
import ToolsIcon from "@/src/assets/icons/tools";
import { GetCategory } from "@/src/hooks/queries/user/add-lisiting";
import { CategoriesData } from "@/src/lib/dataUser";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import React from "react";

function Categories() {
  const { data, isLoading } = GetCategory();
  console.log(data);
  return (
    <div className="mb-10 lg:mb-16">
      <h2 className="text-center headTitle">Our Most Popular Categories </h2>
      <div className="flex justify-center flex-wrap mt-7 lg:mt-10 gap-1 lg:gap-7 ">
        {CategoriesData.map((category, index) => {
          return (
            <Link
              href={ROUTES.USER.CATEGORIES(category.title)}
              key={category.id}
              className="pt-3 px-3 pb-1 rounded-xl w-[108px] h-[102px] min-h-max flex flex-col justify-between  border border-transparent items-center gap-3 duration-300 hover:shadow-sidebar hover:border hover:border-green"
            >
              {category.img}
              <h3 className="text-sm lg:text-[16px] font-SemiBold text-center">
                {category.title}
              </h3>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center flex-wrap mt-7 lg:mt-10 gap-1 lg:gap-7 ">
        {data?.data.map((category: any, index: number) => {
          return (
            <Link
              href={`${ROUTES.USER.CATEGORIES(category.name)}&CategoryId=${
                category.id
              }`}
              key={category.id}
              className="pt-3 px-3 pb-1 rounded-xl w-[108px] h-[102px] min-h-max flex flex-col justify-between  border border-transparent items-center gap-3 duration-300 hover:shadow-sidebar hover:border hover:border-green"
            >
              <ToolsIcon className={"h-[30px] w-auto"} />
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
