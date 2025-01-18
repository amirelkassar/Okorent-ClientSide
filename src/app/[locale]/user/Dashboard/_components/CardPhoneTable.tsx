"use client";
import React from "react";
import Image from "next/image";
import phoneImg from "@/src/assets/images/phone.png";
import avatar from "@/src/assets/images/1.png";
import MenuActions from "./MenuActions";
import PaymentStatus from "@/src/components/payment-status";

function CardPhoneTable({ dataCard }: any) {
  return (
    <div className="border border-green rounded-2xl py-5 px-6 shadow-md bg-white/50">
      <div className="border-b border-grayBack pb-6 mb-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-base font-medium">Product</h3>
          <MenuActions />
        </div>
        <div className="flex gap-5">
          <div className="size-[56px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={phoneImg}
              alt={"phone"}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-base font-SemiBold ">{dataCard.phone}</h4>
            <h5 className="text-base text-grayMedium  ">3 August 2024</h5>
            <p className="text-base font-SemiBold">100$</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-base font-Medium">Renter</h3>
        </div>
        <div className="flex gap-5">
          <div className="size-[56px] rounded-[50%]  flex justify-center items-center">
            <Image
              src={avatar}
              alt={"phone"}
              width={50}
              height={50}
              className="w-auto h-full  object-contain "
            />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-SemiBold mb-2">Ahmed Mohamed</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-between gap-3">
                <h5 className="text-base font-SemiBold">Payment Status</h5>
                <div className="text-base text-grayMedium">
                  <PaymentStatus status={"1"} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPhoneTable;
