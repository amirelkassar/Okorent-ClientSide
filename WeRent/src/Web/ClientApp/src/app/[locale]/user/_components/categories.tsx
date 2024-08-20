import ElectronicsIcon from "@/src/assets/icons/electronics";
import { CategoriesData } from "@/src/lib/dataUser";
import React from "react";

function Categories() {
  return (
    <div className="mb-16">
      <h2 className="text-center headTitle">Our Most Popular Categories  </h2>
      <div className="flex justify-center mt-10 gap-7 ">
        {CategoriesData.map((category, index) => {
          return (
            <div key={category.id} className="pt-3 px-3 pb-1 rounded-xl w-[108px] h-[102px] min-h-max flex flex-col justify-between  border border-transparent items-center gap-3 duration-300 hover:shadow-sidebar hover:border hover:border-green">
            {category.img}
              <h3 className="text-[16px] font-SemiBold text-center">{category.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
