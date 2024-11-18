import React from "react";
import { Rentals } from "@/src/lib/dataUser";
import ProductList from "@/src/components/product/productList";
import HeaderAdmin from "./_components/headerAdmin";
import LookingFor from "./_components/lookingFor";
import Categories from "./_components/categories";

function page() {
  return (
    <div>
      <HeaderAdmin />
      <div className="w-full py-10 px-3 mdl:py-14 mb-5 bg-white rounded-t-[50px] lg:rounded-t-[60px]">
        <LookingFor />
      </div>
      <Categories />
      <div className="mt-10 lg:my-20 mx-auto">
        <ProductList more={false} title="" data={Rentals} />
      </div>
    </div>
  );
}

export default page;
