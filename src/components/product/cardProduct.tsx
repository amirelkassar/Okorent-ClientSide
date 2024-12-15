"use client";
import React, { useState } from "react";
import ImagesProduct from "./imagesProduct";
import PricingOptions from "./PricingOptions";
import RentalDuration from "./rentalDuration";
import PriceDetails from "./priceDetails";
import ShareIcon from "@/src/assets/icons/share";
import FavRedIcon from "@/src/assets/icons/favRed";
import FeaturesProduct from "./FeaturesProduct";
import ProductClient from "./productClient";
import ShowMore from "@/src/components/showMore";
function CardProduct({ data = [] }: { data?: any }) {
  const [daysNumber, setDaysNumber] = useState(0);
  console.log(daysNumber);

  return (
    <div className=" mb-section">
      <ImagesProduct />

      <div className=" w-full  border-b border-grayMedium/40 pb-6">
        <div className="flex w-full items-center  justify-between gap-3 mb-7 mt-section ">
          <h2 className="text-2xl lg:text-[32px] font-SemiBold ">
            {data.name || "Hbada E3 Air Ergonomic Office Chair"}
          </h2>
          <div className="flex items-center gap-5">
            <button className=" size-[46px] lg:size-[60px] rounded-full bg-grayBack flex items-center justify-center p-3 duration-300 hover:shadow-md">
              <ShareIcon />
            </button>
            <button className=" size-[46px] lg:size-[60px] rounded-full bg-grayBack flex items-center justify-center p-3 duration-300 hover:shadow-md">
              <FavRedIcon />
            </button>
          </div>
        </div>

        <FeaturesProduct />
      </div>
      <div className="flex mt-section items-start justify-between flex-col lg:flex-row gap-11">
        <div className="lg:max-w-[650px] w-full flex-1">
          <div>
            <h3 className="text-base font-SemiBold mb-1 lg:mb-2 lg:text-xl">
              Description
            </h3>
            <div className="text-sm font-Regular lg:text-base text-grayMedium">
              <ShowMore lines={3}>
                {data.description ||
                  " Hbada F3 Air ergonomic office chair combines the latest technologies to help you maintain a comfortable posture and live a healthy lifestyle. This office chair comes with elastic lumbar support, 3D adjustable headrest and armrests, durable and breathable mesh, 140-degree reclining, adjustable seat depth, and gravity-sensing chassis, offering lasting comfort even after all-day sitting."}
              </ShowMore>
            </div>
          </div>
          <PricingOptions
            daysNumber={daysNumber}
            priceOptions={{
              Daily: data.dailyPrice || 0,
              Weekly: data?.weeklyPrice || 0,
              Monthly: data?.monthlyPrice || 0,
            }}
          />
          <RentalDuration setDaysNumber={setDaysNumber} />
        </div>
        <div className="flex-1 flex flex-col gap-8 lg:max-w-[620px] w-full">
          <ProductClient />
          <PriceDetails
            daysNumber={daysNumber}
            priceOptions={{
              Daily: data.dailyPrice || 0,
              Weekly: data?.weeklyPrice || 0,
              Monthly: data?.monthlyPrice || 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
