import React, { useMemo } from "react";
import Categories from "../_components/categories";
import { Rentals } from "@/src/lib/dataUser";
import ProductList from "../_components/productList";
import HeaderAdmin from "../_components/headerAdmin";

function page() {
  return (
    <div>
      <HeaderAdmin />
      <Categories />
      <ProductList more={false} title="" data={Rentals} />
    </div>
  );
}

export default page;
