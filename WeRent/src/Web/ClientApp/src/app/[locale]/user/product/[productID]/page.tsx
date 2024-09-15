import CardRentals from "@/src/components/cardRentals";
import { Rentals } from "@/src/lib/dataUser";
import React from "react";
import FAQ from "./_components/faq";
import Map from "./_components/map";
import Reviews from "./_components/reviews";
import CardProduct from "./_components/cardProduct";
import Description from "./_components/description";
import QuestionView from "./_components/question";

function page() {
  return (
    <div>
      <CardProduct />
      <Map />
      <Reviews />
      <div className="flex flex-col gap-5 mb-5">
        <Description
          title="Guarantee"
          description="Oko Rent damages up to £25,000 per item"
        />
        <Description
          title="Cancelation Policy"
          description="In case of cancellation 2 days before the rental period, 100% of the rental amount is refunded. If canceled one day before the rental period, 50% of the rental amount is refunded. If you cancel the same day the rental period starts, no refund is made."
        />
        <QuestionView/>
      </div>
      <FAQ />
      <div className="bg-grayBack max-w-full  pt-5 pb-8 lg:pb-16 relative before:content-[''] before:w-[calc(100%+32px)] lg:before:w-[calc(100%+130px)] before:bg-grayBack before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
        <h2 className=" relative text-xl lg:text-[24px] mb-8">
          Customers who rent this item also rent
        </h2>
        <div className="flex gap-4 max-w-full  lg:gap-8 overflow-x-auto  hideScroll md:flex-wrap relative z-[10]">
          {Rentals.map((item) => {
            return <CardRentals data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
