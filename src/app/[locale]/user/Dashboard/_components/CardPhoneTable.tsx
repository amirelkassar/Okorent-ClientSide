"use client";
import React from "react";
import Image from "next/image";
import placCardProduct from "@/src/assets/images/placCardProduct.png";
import avatar from "@/src/assets/images/1.png";
import MenuActions from "./MenuActions";
import PaymentStatus from "@/src/components/payment-status";
import { getDate } from "@/src/lib/utils";
export type RequestsTableData = {
  id: number;
  renterName: string;
  productName: string;
  memberSince: string;
  statusUser: string;
  status: string;
  quantity: number;
  rating: number;
  rentedItems: number;
  leasedItems: number;
  product: string;
  amount: string;
  paymentStatus: string;
  rentalPeriod: number;
  startDate: string;
  to: string;
  country: string;
  action: string;
  userImage: string;
  heroImage: string;
};
interface CardPhoneTableProps {
  dataCard: RequestsTableData;
}
function CardPhoneTable({ dataCard }: CardPhoneTableProps) {
  return (
    <div className="border flex-1 border-green rounded-2xl py-5 px-6 shadow-md bg-white/50">
      <div className="border-b border-grayBack pb-6 mb-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="text-base font-medium">Product</h3>
          <MenuActions />
        </div>
        <div className="flex gap-5">
          <div className="size-[56px] rounded-[50%] p-[6px] bg-grayBack flex justify-center items-center">
            <Image
              src={dataCard.heroImage || placCardProduct}
              alt={dataCard.productName || "phone"}
              width={50}
              height={50}
              className="w-auto h-full rounded-full   object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h4 className="text-base font-SemiBold ">{dataCard.productName}</h4>
            <h5 className="text-base text-grayMedium  ">
              {" "}
              {getDate(dataCard.to).fullYearWithMonthName}
            </h5>
            <p className="text-base font-SemiBold">{dataCard.amount || 0}$</p>
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
              src={dataCard.userImage || avatar}
              alt={dataCard.renterName || "User"}
              width={50}
              height={50}
              className="w-auto h-full rounded-full   object-cover "
            />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-SemiBold mb-2">
              {dataCard.renterName}
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-between gap-3">
                <h5 className="text-base font-SemiBold">Payment Status</h5>
                <div className="text-base text-grayMedium">
                  <PaymentStatus status={dataCard.paymentStatus} />
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
