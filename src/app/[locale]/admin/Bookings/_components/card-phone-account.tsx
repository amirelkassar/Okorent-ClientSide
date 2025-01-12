"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import ActionMenu from "./action-menu";
import OrderStatus from "@/src/components/order-status";
import avatar from "@/src/assets/images/avatar.png";

interface BookingsAdminData {
  id: number;
  renterName: string;
  lessorName: string;
  productName: string;
  from: string;
  to: string;
  quantity: number;
  status: string;
  amount: string;
  lessorImage: StaticImageData;
  renterImage: StaticImageData;
  productImage: StaticImageData;
}
interface CardDataProps {
  dataCard: BookingsAdminData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <div className=" absolute top-4 end-3">
          <ActionMenu id={dataCard?.id} />
        </div>
        <Link
          href={ROUTES.ADMIN.BOOKINGSDETAILS(dataCard.id)}
          className="flex items-center w-full gap-3 "
        >
          <div className="flex flex-col justify-center flex-1 items-center ">
            <Image
              src={dataCard.lessorImage||avatar}
              alt={dataCard.lessorName||'User'}
              width={50}
              height={50}
              className=" size-[50px] w-[50px] h-[50px]   rounded-full object-top  object-cover "
            />

            <h2 className="text-[16px] font-SemiBold text-center">
              {dataCard.lessorName}
            </h2>
            <p className="text-sm text-grayMedium ">Lessor</p>
          </div>
          <span className="h-16 w-[1px] block bg-green"></span>
          <div className="flex flex-col justify-center flex-1 items-center ">
            <Image
              src={dataCard.renterImage||avatar}
              alt={dataCard.renterName||'User'}
              width={50}
              height={50}
              className=" size-[50px] w-[50px] h-[50px]   rounded-full object-top  object-cover "
            />

            <h2 className="text-[16px] font-SemiBold text-center">
              {dataCard.renterName}
            </h2>
            <p className="text-sm text-grayMedium ">Renter</p>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="size-11 rounded-[50%] p-1 bg-grayBack flex justify-center items-center">
          <Image
            src={dataCard.productImage}
            alt={dataCard.productName||'Product'}
            width={50}
            height={50}
            className=" w-full h-full rounded-full object-top  object-cover "
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.productName} />
          <RowCardPhone title="Payment" info={`${dataCard.amount}$`} />
          <RowCardPhone title="Quantity" info={dataCard.quantity} />
          <RowCardPhone title="Start date" info={dataCard.from} />
          <RowCardPhone title="End date" info={dataCard.to} />
          <RowCardPhone
            title="Status"
            cell={() => <OrderStatus status={dataCard.status} />}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
