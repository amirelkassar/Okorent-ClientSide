"use client";
import ImgProduct from "@/src/components/img-product";
import OrderTable from "@/src/components/order-table";
import PriceRow from "@/src/components/price-row";
import React from "react";
import phoneImg from "@/src/assets/images/phone.png";
import ProductAvailable from "@/src/components/product-available";
import PriceOrderTable from "@/src/components/price-order-table";

function OrderDetails() {
  const products = [
    {
      id: 1,
      image: phoneImg,
      name: "Iphone 15 Pro",
      available: 2,
      quantity: 1,
      price: 150.0,
      days: "3",
      total: 150.0,
    },
    {
      id: 2,
      image: phoneImg,
      name: "Iphone 15 Pro",
      available: 2,
      quantity: 2,
      price: 120.0,
      days: "3",
      total: 240.0,
    },
  ];

  // تحويل المنتجات إلى مكونات الجدول
  const data = products.map((product) => [
    <ImgProduct
      key={`product-img-${product.id}`}
      src={product.image}
      productName={product.name}
    />,
    <ProductAvailable
      key={`product-available-${product.id}`}
      numAvailable={product.available}
    />,
    product.quantity,
    <PriceOrderTable
      key={`product-price-${product.id}`}
      price={product.price}
      days={product.days}
    />,
    `USD ${product.total.toFixed(2)}`,
    
  ]);
  return (
    <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/50">
        <OrderTable data={data} />

        <div className="flex flex-col gap-2 ms-auto w-fit lg:me-20">
          <PriceRow label="Subtotal" value="150.00" />
          <PriceRow label="Discount" value="-20.00" />
          <PriceRow label="Tax" value="26.50" />
          <PriceRow label="Total" value="145.50" />
          <PriceRow label=" Deposite" value="30.00" />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
