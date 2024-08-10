import React from "react";
import ProductList from "./_components/productList";
import { Rentals } from "@/src/lib/dataUser";
import OfferSlider from "./_components/offerSlider";

function page() {
  return (
    <div>
      <OfferSlider/>
      <h2 className="mb-14 text-center headTitle">Products you may like</h2>
      <ProductList title={'Apartments for rent'} data={Rentals} />
      <ProductList title={'Cars for rent'} data={Rentals} />
    </div>
  );
}

export default page;
