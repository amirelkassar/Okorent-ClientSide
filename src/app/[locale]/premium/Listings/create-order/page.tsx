"use client";
import SearchIcon from "@/src/assets/icons/search";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import React, { useState } from "react";
import OrderInfo from "./_components/order-info";
import ImgProduct from "@/src/components/img-product";
import placTableProductImg from "@/src/assets/images/placTableProduct.png";
import PriceOrderTable from "@/src/components/price-order-table";
import { calculateDurationRange } from "@/src/lib/utils";
import OrderTable from "@/src/components/order-table";
import OrderCardPhone from "@/src/components/order-card-phone";
import PriceRow from "@/src/components/price-row";
import CloseIcon from "@/src/assets/icons/close";
import Counter from "@/src/components/counter";
import Button from "@/src/components/button";
import { Accordion, Checkbox, Popover } from "@mantine/core";
import PaymentMethods from "./_components/order-method/payment-methods";
import Quotations from "./_components/order-method/quotations";
import Invoice from "./_components/order-method/Invoice";
import PaymentsReceived from "./_components/order-method/payments-received";
import Notes from "./_components/order-method/Notes";
import StateOrder from "./_components/state-order";

const ProductDetails = [
  {
    id: 1,
    productId: 1,
    productName: "Iphone 15 Pro",
    quantity: 1,
    price: 1000,
    from: "2023-08-01",
    to: "2023-08-31",
  },
  {
    id: 2,
    productId: 2,
    productName: "Iphone 15 Pro",
    quantity: 1,
    price: 1000,
    from: "2023-08-01",
    to: "2023-08-31",
  },
];

function Page() {
  const [quantity, setQuantity] = useState(1);

  const data = ProductDetails.map((product: any) => [
    <ImgProduct
      key={`product-img-${product.productId}`}
      src={product?.heroImage || placTableProductImg}
      productName={product.productName}
    />,
    <Counter
      key={`product-quantity-${product.id}`}
      quantity={quantity}
      setQuantity={setQuantity}
    />,
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
    <button key={`product-close-${product.id}`} className="">
      <CloseIcon className="w-5 h-auto" />
    </button>,
  ]);
  return (
    <div className="mb-section">
      <div className="flex mb-3 items-center justify-between gap-4">
        <h2 className=" text-base mdl:text-2xl font-SemiBold">
          Order Information
        </h2>
        <StateOrder />
      </div>
      <div className="flex gap-8 flex-col lgl:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <OrderInfo />
          <Card className="py-4 px-2 md:px-4">
            <div className="flex mdl:min-w-[400px] flex-1 flex-wrap gap-y-5 gap-x-8 py-3 mdl:py-4 px-3 mdl:px-4 bg-white rounded-xl border border-green/50">
              <Input
                leftSection={
                  <SearchIcon fill="#6F6B7D" className="w-4 h-auto" />
                }
                placeholder="Search to add products"
                className="h-auto w-full"
                inputClassName=" bg-white   rounded-xl w-full h-10  border-green/50"
              />
              <div className="w-full hidden mdl:block">
                <OrderTable data={data} />
              </div>
              <div className="flex flex-col gap-4 w-full mdl:hidden  ">
                {ProductDetails.map((product: any, index: number) => (
                  <OrderCardPhone
                    key={index}
                    data={product}
                    cellDelete={() => (
                      <button key={`product-close-${product.id}`} className="">
                        <CloseIcon className="w-5 h-auto" />
                      </button>
                    )}
                    cellCounter={() => (
                      <Counter quantity={quantity} setQuantity={setQuantity} />
                    )}
                  />
                ))}
              </div>
              <Button className={"h-9 px-5 !text-xs !rounded-lg"}>
                Add custom fee
              </Button>
              <div className="flex flex-col gap-2 md:ms-auto w-fit lg:me-20">
                <PriceRow label="Subtotal" value={"150.00"} />
                <PriceRow label="Discount" value={"20.00"} />
                <PriceRow label="Tax" value={"26.50"} />
                <PriceRow label="Total" value={"145.50"} />
                <PriceRow label="Deposit" value={"30.00"} />
              </div>
            </div>
          </Card>
        </div>
        <Card className=" w-full lgl:w-[520px] p-4">
          <Accordion variant="separated" className="flex flex-col gap-6">
            <PaymentMethods />
            <Quotations />
            <Invoice />
            <PaymentsReceived />
            <Notes />
          </Accordion>
          <div className="my-7 ps-2">
            <Checkbox
              color="#88BA52"
              value={"true"}
              label="Email the customer 1 Day before the return date"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Page;
