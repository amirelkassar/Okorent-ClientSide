import React from "react";
import Categories from "../_components/categories";
import { Rentals } from "@/src/lib/dataUser";
import HeaderAdmin from "../_components/headerAdmin";
import LookingFor from "../_components/lookingFor";
import ProductList from "@/src/components/product/productList";

function page() {
  return (
    <div>
      <HeaderAdmin />
      <div className="w-full py-14 mb-5 bg-white rounded-t-[60px]">
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
