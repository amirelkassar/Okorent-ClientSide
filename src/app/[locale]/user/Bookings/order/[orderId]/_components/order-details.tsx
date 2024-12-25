"use client";
import ImgProduct from "@/src/components/img-product";
import OrderTable from "@/src/components/order-table";
import PriceRow from "@/src/components/price-row";
import React from "react";
import phoneImg from "@/src/assets/images/phone.png";
import PriceOrderTable from "@/src/components/price-order-table";
import { calculateDurationRange } from "@/src/lib/utils";
import OrderCardPhone from "@/src/components/order-card-phone";

function OrderDetails({ ProductDetails }: { ProductDetails: any }) {
  // تحويل المنتجات إلى مكونات الجدول
  const data = ProductDetails.map((product: any) => [
    <ImgProduct
      key={`product-img-${product.productId}`}
      src={phoneImg}
      productName={product.productName}
    />,
    product.quantity || 0,
    <PriceOrderTable
      key={`product-price-${product.id}`}
      price={
        (product.price + 50.82) /
        calculateDurationRange(new Date(product.from), new Date(product.to))
      }
      days={calculateDurationRange(
        new Date(product.from),
        new Date(product.to)
      ).toString()}
    />,
    `USD ${product.price.toFixed(2)}`,
  ]);
  return (
    <div className="flex mdl:min-w-[400px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <div className="flex mdl:min-w-[400px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/50">
        <div className="w-full hidden mdl:block">
          <OrderTable data={data} />
        </div>
        <div className="flex flex-col gap-4 w-full mdl:hidden  ">
          {ProductDetails.map((product: any, index: number) => (
            <OrderCardPhone key={index} data={product} />
          ))}
        </div>
        <div className="flex flex-col gap-2 md:ms-auto w-fit lg:me-20">
          <PriceRow label="Total" value={ProductDetails[0]?.price} />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
