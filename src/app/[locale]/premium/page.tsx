import React from "react";
import OfferSlider from "./_components/offerSlider";
import Categories from "./_components/categories";
import ProductHome from "./_components/product-home";
import HeaderPremium from "./_components/header-premium";

function page() {
  return (
    <div>
      <HeaderPremium />
      <Categories />
      <OfferSlider />
      <ProductHome />
    </div>
  );
}

export default page;
  