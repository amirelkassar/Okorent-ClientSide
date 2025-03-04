import React from "react";
import ImgProduct from "./img-product";
import placTableProduct from "@/src/assets/images/placTableProduct.png";
import RowCardPhone from "./row-card-phone";
import { calculateDurationRange } from "../lib/utils";
import CloseIcon from "../assets/icons/close";

function OrderCardPhone({
  data,
  cellCounter,
  cellDelete,
}: {
  data: any;
  cellCounter?: () => React.ReactNode;
  cellDelete?: () => React.ReactNode;
}) {
  return (
    <div className="border border-green rounded-2xl py-5 px-4 w-full">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h2 className="text-base">Product </h2>
        {cellDelete && cellDelete()}
      </div>
      <div className="mb-7">
        <ImgProduct
          key={`product-img-${data.productId}`}
          src={data.heroImage || placTableProduct}
          productName={data.productName}
        />
      </div>
      <div className="flex flex-col gap-5">
        {cellCounter ? (
          <RowCardPhone title="Quantity" cell={() => cellCounter()} />
        ) : (
          <RowCardPhone title="Quantity" info={data.quantity || 0} />
        )}

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
