import FAQ from "@/src/components/faq";
import MapComponent from "@/src/components/map";
import CardProduct from "@/src/components/product/cardProduct";
import Description from "@/src/components/product/description";
import React from "react";

function Preview() {
  return (
    <div>
      <CardProduct />
      <div className="bg-[#D9D9D933] px-3 lg:px-10 lg:rounded-[50px] rounded-[30px] pt-8 lg:pt-11 pb-9 lg:pb-7 mb-section">
        <h2 className="text-xl mb-5 px-2 lg:text-2xl">
          How to receive this item
        </h2>

        <MapComponent stocks={[]} />
        <p className="text-sm lg:text-base text-grayMedium font-Regular mt-5">
          This item is available for in-store pickup. Request it from the lessor
          and select your preferred pickup location. Once the lessor approves,
          you can make your payment and proceed to pick up your order.
        </p>
      </div>
     
      <div className="flex flex-col gap-5 mb-section">
        <Description
          title="Guarantee"
          description="Oko Rent damages up to £25,000 per item"
        />
        <Description
          title="Cancelation Policy"
          description="In case of cancellation 2 days before the rental period, 100% of the rental amount is refunded. If canceled one day before the rental period, 50% of the rental amount is refunded. If you cancel the same day the rental period starts, no refund is made."
        />
   
      </div>
      <FAQ />
    </div>
  );
}

export default Preview;
