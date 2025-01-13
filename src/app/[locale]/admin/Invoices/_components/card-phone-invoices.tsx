"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import ActionMenu from "./action-menu";
import avatar from "@/src/assets/images/avatar.png";

interface InvoicesAdminData {
  id: any;
  invoiceNo: string;
  lessorName: string;
  lessorImage: StaticImageData;
  renterName: string;
  renterImage: StaticImageData;
  productName: string;
  productImage: StaticImageData;
  startDate: string;
  endingDate: string;
  payment: string;
}
interface CardDataProps {
  dataCard: InvoicesAdminData;
}

function CardPhoneInvoices({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2 pe-4">
        <RowCardPhone title="Invoice No" info={`${dataCard.invoiceNo}`} />
      </div>
      <div className="border-b border-grayLight/50 pb-2 pt-3">
        <div className=" absolute top-4 end-3">
          <ActionMenu id={dataCard?.id} />
        </div>
        <Link
          href={ROUTES.ADMIN.BOOKINGSDETAILS(dataCard.id)}
          className="flex items-center w-full gap-3 "
        >
          <div className="flex flex-col justify-center flex-1 items-center ">
            <Image
              src={dataCard.lessorImage || avatar}
              alt={dataCard.lessorName || "User"}
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
              src={dataCard.renterImage || avatar}
              alt={dataCard.renterName || "User"}
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
            alt={dataCard.productName || "Product"}
            width={50}
            height={50}
            className=" w-full h-full rounded-full object-top  object-cover "
          />
        </div>
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard.productName} />
          <RowCardPhone title="Payment" info={`${dataCard.payment}`} />
          <RowCardPhone title="Start date" info={dataCard.startDate} />
          <RowCardPhone title="End date" info={dataCard.endingDate} />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneInvoices;
