import React from "react";
import { Rentals } from "@/src/lib/dataUser";
import CardRentals from "@/src/components/cardRentals";

function AccrountRentals({}) {
  return (
    <div className=" my-section  relative ">
      <div className="flex items-center justify-between gap-4 mb-5 relative z-[1]">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="headTitle">Mark Rentals</h2>
        </div>

        <p className="text-white text-[16px] font-Medium">View all</p>
      </div>
      <div className="flex gap-3 justify-center md:justify-start lg:gap-8 flex-wrap relative z-[1]">
        {Rentals.map((item) => {
          return <CardRentals data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default AccrountRentals;
