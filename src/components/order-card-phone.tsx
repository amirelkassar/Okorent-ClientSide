import React from "react";
import ImgProduct from "./img-product";
import phoneImg from "@/src/assets/images/phone.png";
import RowCardPhone from "./row-card-phone";
import { calculateDurationRange } from "../lib/utils";

function OrderCardPhone({ data }: { data: any }) {
  return (
    <div className="border border-green rounded-2xl py-5 px-4 w-full">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-base">Product </h2>
      </div>
      <div className="mb-7">
        <ImgProduct
          key={`product-img-${data.productId}`}
          src={phoneImg}
          productName={data.productName}
        />
      </div>
      <div className="flex flex-col gap-5">
        <RowCardPhone title="Quantity" info={data.quantity || 0}  />
        <RowCardPhone
          title="Price"
          cell={() => (
            <div className="px-2 w-fit border border-black/25 min-h-6 flex items-center justify-between gap-3 rounded-lg">
              <p className="font-Regular text-xs">
                {calculateDurationRange(
                  new Date(data.from),
                  new Date(data.to)
                ).toString()}{" "}
                Days
              </p>
              <p className="font-Regular text-xs text-blue">
                USD $
                {(data.price + 50.82) /
                  calculateDurationRange(
                    new Date(data.from),
                    new Date(data.to)
                  )}
              </p>
            </div>
          )}
        />
        <RowCardPhone title="Total" info={`USD ${data.price.toFixed(2)}`} />
      </div>
    </div>
  );
}

export default OrderCardPhone;
