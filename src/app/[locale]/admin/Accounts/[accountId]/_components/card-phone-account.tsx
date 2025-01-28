"use client";
import CardPhone from "@/src/components/card-phone";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RowCardPhone from "@/src/components/row-card-phone";
import { getDate } from "@/src/lib/utils";
import avatar from "@/src/assets/images/avatar.png";

export type MedicalTeamTableData = {
  id: number;
  productName: string;
  productImage: StaticImageData;
  renterName: string;
  renterImage: StaticImageData;
  lessorName: string;
  lessorImage: StaticImageData;
  paymentTotal: string;
  created: string;
  invoiceId: string;
};
interface CardDataProps {
  dataCard: MedicalTeamTableData;
}

function CardPhoneAccount({ dataCard }: CardDataProps) {
  return (
    <CardPhone>
      <div className="border-b border-grayLight/50 pb-2">
        <Link
          href={ROUTES.ADMIN.ACCOUNTSDETAILS(dataCard?.id)}
          className="flex items-center w-fit gap-2"
        >
          <div className="size-11 rounded-[50%] p-1 bg-grayBack flex justify-center items-center">
            <Image
              src={dataCard?.productImage || null}
              alt={dataCard?.productName}
              width={50}
              height={50}
              className="w-auto h-full  object-cover rounded-full "
            />
          </div>

          <div>
            <h2 className="text-[16px] font-SemiBold">
              {dataCard?.productName}
            </h2>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 mt-5">
        <Image
          src={dataCard?.renterImage || avatar}
          alt={dataCard?.renterName}
          width={50}
          height={50}
          className=" size-8 w-10 h-10  object-cover rounded-full "
        />
        <div className="flex flex-col gap-3 w-full ">
          <RowCardPhone title={dataCard?.renterName} />

          <RowCardPhone title="Payment" info={dataCard?.paymentTotal} />
          <RowCardPhone
            title="Date"
            info={getDate(dataCard?.created).fullYear}
          />
          <RowCardPhone
            title="Status"
            cell={() => (
              <p className="px-2 w-fit max-w-[100px] rounded-xl py-2  text-sm font-SemiBold truncate bg-blue/15 ">
                {dataCard?.invoiceId}
              </p>
            )}
          />
        </div>
      </div>
    </CardPhone>
  );
}

export default CardPhoneAccount;
