import React from "react";
import { Rentals } from "@/src/lib/dataUser";
import OfferSlider from "./_components/offerSlider";
import Categories from "./_components/categories";
import HeaderAdmin from "./_components/headerAdmin";
import ProductList from "@/src/components/product/productList";
import MapWithCircle from "@/src/components/MapWithCircle";


function page() {
  return (
    <div>
     
      <HeaderAdmin />
      <Categories />
      <OfferSlider />
      <ProductList title="Items you may like" data={Rentals} />
    </div>
  );
}

export default page;
