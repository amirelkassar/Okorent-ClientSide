import React from "react";
import OfferSlider from "./_components/offerSlider";
import Categories from "./_components/categories";
import HeaderAdmin from "./_components/headerAdmin";
import ProductHome from "./_components/product-home";

function page() {
  return (
    <div>
      <HeaderAdmin />
      <Categories />
      <OfferSlider />
      <ProductHome />
    </div>
  );
}

export default page;
