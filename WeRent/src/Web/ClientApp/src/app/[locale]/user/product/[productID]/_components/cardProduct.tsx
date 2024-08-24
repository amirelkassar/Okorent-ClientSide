import React from "react";
import ImagesProduct from "./imagesProduct";
import ProductClient from "./productClient";
import PricingOptions from "./PricingOptions";
import RentalDuration from "./rentalDuration";
import PriceDetails from "./priceDetails";
import Button from "@/src/components/button";
import ShareIcon from "@/src/assets/icons/share";
import FavRedIcon from "@/src/assets/icons/favRed";
import FeaturesProduct from "./FeaturesProduct";
import ColorProduct from "./colorProduct";
import SizesProduct from "./SizesProduct";

function CardProduct() {
  return (
    <div className="flex items-start gap-10 justify-between mb-14">
      <div>
        <ImagesProduct />
        <ProductClient />
      </div>
      <div className="flex-1">
        <h2 className="text-[56px] font-SemiBold">Blink Video Doorbell</h2>
        <p className="text-[24px] font-Regular text-[#565656] leading-7 mb-12">
          Two-way audio, HD video, motion and chime app alerts and enabled —
          wired or wire-free
        </p>
        <div className="flex gap-12 flex-wrap mb-10">
          <ColorProduct />
          <SizesProduct/>
        </div>
        <FeaturesProduct />
        <div className="max-w-[550px]">
          <PricingOptions />
          <RentalDuration />
          <PriceDetails />
        </div>
        <div className="flex items-center justify-between gap-4 flex-wrap mt-5">
          <Button className={"w-full max-w-[550px]"}>Rent this item</Button>
          <div className="flex items-center gap-5">
            <button className=" size-[60px] rounded-full bg-grayBack flex items-center justify-center duration-300 hover:shadow-md">
              <ShareIcon />
            </button>
            <button className=" size-[60px] rounded-full bg-grayBack flex items-center justify-center duration-300 hover:shadow-md">
              <FavRedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
