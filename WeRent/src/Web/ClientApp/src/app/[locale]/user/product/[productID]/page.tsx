import CardRentals from "@/src/components/cardRentals";
import { Rentals } from "@/src/lib/dataUser";
import React from "react";
import FAQ from "./_components/faq";
import Map from "./_components/map";
import Reviews from "./_components/reviews";
import CardProduct from "./_components/cardProduct";

function page() {
  return (
    <div>
     <CardProduct/>
      <Map />
      <Reviews />
      <FAQ />
      <div className="bg-grayBack  pt-5 pb-16 relative before:content-[''] before:w-[calc(100%+130px)] before:bg-grayBack before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
        <h2 className=" relative text-[24px] mb-8">
          Customers who rent this item also rent
        </h2>
        <div className="flex gap-8 flex-wrap relative z-[1]">
          {Rentals.map((item) => {
            return <CardRentals data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
