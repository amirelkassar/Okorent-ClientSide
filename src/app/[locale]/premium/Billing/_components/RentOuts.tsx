"use client";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import Button from "@/src/components/button";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
const invoices = [
  {
    id: "OR02245082",
    customerName: "James Cameron",
    memberSince: "Aug 2023",
    avatar: avatar,
    item: "Camera Sony Z3",
    quantity: 5,
    dateFrom: "11-9-2024",
    dateTo: "20-9-2024",
    issuedBy: "Tomas Edison",
    issuedTo: "James Cameron",
    orderNumber: "2122542",
    datePaid: "Thu, Sep 19, 2024 09:16 AM",
    price: 50,
    serviceFee: 3,
    totalIncome: 47,
    date: "Thu, Sep 19, 2024 09:16 AM",
  },
  {
    id: "OR02245083",
    customerName: "John Doe",
    memberSince: "Sep 2022",
    avatar: avatar,
    item: "Camera Sony Z3",
    quantity: 3,
    dateFrom: "15-9-2024",
    dateTo: "25-9-2024",
    issuedBy: "Tomas Edison",
    issuedTo: "John Doe",
    orderNumber: "2122543",
    datePaid: "Thu, Sep 21, 2024 10:00 AM",
    price: 75,
    serviceFee: 5,
    totalIncome: 70,
    date: "Thu, Sep 21, 2024 10:00 AM",
  },
  {
    id: "OR02245084",
    customerName: "James Cameron",
    memberSince: "Aug 2023",
    avatar: avatar,
    item: "Camera Sony Z3",
    quantity: 5,
    dateFrom: "11-9-2024",
    dateTo: "20-9-2024",
    issuedBy: "Tomas Edison",
    issuedTo: "James Cameron",
    orderNumber: "2122542",
    datePaid: "Thu, Sep 19, 2024 09:16 AM",
    price: 50,
    serviceFee: 3,
    totalIncome: 47,
    date: "Thu, Sep 19, 2024 09:16 AM",
  },
  {
    id: "OR02245085",
    customerName: "James Cameron",
    memberSince: "Aug 2023",
    avatar: avatar,
    item: "Camera Sony Z3",
    quantity: 5,
    dateFrom: "11-9-2024",
    dateTo: "20-9-2024",
    issuedBy: "Tomas Edison",
    issuedTo: "James Cameron",
    orderNumber: "2122542",
    datePaid: "Thu, Sep 19, 2024 09:16 AM",
    price: 50,
    serviceFee: 3,
    totalIncome: 47,
    date: "Thu, Sep 19, 2024 09:16 AM",
  },
  {
    id: "OR02245086",
    customerName: "James Cameron",
    memberSince: "Aug 2023",
    avatar: avatar,
    item: "Camera Sony Z3",
    quantity: 5,
    dateFrom: "11-9-2024",
    dateTo: "20-9-2024",
    issuedBy: "Tomas Edison",
    issuedTo: "James Cameron",
    orderNumber: "2122542",
    datePaid: "Thu, Sep 19, 2024 09:16 AM",
    price: 50,
    serviceFee: 3,
    totalIncome: 47,
    date: "Thu, Sep 19, 2024 09:16 AM",
  },
];

function RentOuts() {

  return (
    <div className="w-full">
      <Accordion
        transitionDuration={300}
        className="flex flex-col gap-6"
        onChange={(e) => {
          console.log(e);
        }}
      >
        {invoices.map((invoice, index) => (
          <Accordion.Item
            key={index}
            value={`invoice-${invoice.id}`}
            className="border-0 bg-white/70 z-10 relative rounded-t-2xl"
          >
            <Accordion.Control className="bg-white !border border-solid border-green/30 rounded-2xl hover:bg-white shadow-sm">
              <div className="w-full flex   gap-5 md:ps-4 py-2 ">
                <div className=" size-11 md:size-[56px] min-w-11 md:min-w-[56px] rounded-full relative">
                  <Image
                    src={invoice.avatar}
                    className="rounded-full h-full w-full object-cover"
                    alt="avatar"
                  />
                  <VerifyBlackIcon className="absolute bottom-2 -right-1 size-[16px]" />
                </div>

                <div className="flex-1 flex-col mdl:flex-row flex mdl:divide-x mdl:divide-green gap-2 lgl:gap-5   ">
                  <div className="place-content-center">
                    <p className="text-base lg:text-xl">
                      {invoice.customerName}
                    </p>
                    <p className="text-xs lg:text-sm font-Regular text-grayMedium">
                      Member Since {invoice.memberSince}
                    </p>
                  </div>
                  {/* تفاصيل الفاتورة */}
                  <p className="text-base lg:text-xl block mdl:px-3 lg:px-6 place-content-center">
                    {invoice.item}
                  </p>
                  <p className="text-base lg:text-xl block mdl:px-3 lg:px-6 place-content-center">
                    ${invoice.price.toFixed(2)}
                  </p>
                  <p className="text-base lg:text-xl block mdl:px-3 lg:px-6 place-content-center">
                    {invoice.date}
                  </p>
                </div>
              </div>
            </Accordion.Control>

            {/* التفاصيل الكاملة للفاتورة */}
            <Accordion.Panel className="bg-white/70 border-green/30 border border-t-0 pt-8 lg:pt-12 z-[-1] relative -mt-4 border-solid rounded-b-2xl shadow-md px-1 md:px-3 lg:px-8">
              <div className="flex items-center justify-between gap-4 mb-4 lg:mb-8">
                <p className="text-base lg:text-xl">Invoice {invoice.id}</p>
                <Button className="h-10 px-3 mdl:!px-8">Print</Button>
              </div>
              {/* عرض التفاصيل بدون استخدام جدول */}
              <div className="flex justify-between lgl:justify-start gap-x-7 gap-y-5 lg:gap-x-14 flex-wrap lgl:flex-nowrap flex-col mdl:flex-row">
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Item</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.item}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Quantity</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.quantity}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Date From</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.dateFrom}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Date To</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.dateTo}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Issued By</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.issuedBy}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Issued To</p>
                  <p className="text-xs lg:text-sm text-grayMedium">
                    {invoice.issuedTo}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-3">
                  <p className="text-sm lg:text-sm">Details</p>
                  <div>
                    <p className="text-xs lg:text-sm text-grayMedium">
                      Order#{invoice.orderNumber}
                    </p>
                    <p className="text-xs lg:text-sm text-grayMedium">
                      {invoice.datePaid}
                    </p>
                  </div>
                </div>
              </div>

              {/* التفاصيل المالية */}
              <div className="mt-4">
                <div className="flex justify-between border-t border-t-[#B6BFC6] py-2 lg:py-3">
                  <p className="text-sm lg:text-base">Price</p>
                  <p className="text-sm lg:text-base">
                    ${invoice.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between border-t border-t-[#B6BFC6] py-2 lg:py-3">
                  <p className="text-sm lg:text-base">Service Fee</p>
                  <p className="text-sm lg:text-base">
                    -${invoice.serviceFee.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between border-t border-t-[#B6BFC6] py-2 lg:py-3 ">
                  <p className="text-sm lg:text-base">Total Income</p>
                  <p className="text-sm lg:text-base">
                    ${invoice.totalIncome.toFixed(2)}
                  </p>
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default RentOuts;
