"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import PageIRentId from "./_components/page-iRent-id";
import PageIRentOutId from "./_components/page-iRent-out-id";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import ListIcon from "@/src/assets/icons/list";
function Page({ params }: any) {
  const searchparams = useSearchParams();
  console.log(params.BookingID);
  console.log(searchparams.get("typeUser"));
  console.log(searchparams.get("statusTitle"));

  return (
    <div className="swiperList  pb-3 lg:pb-16  ">
      <div className="flex lg:items-center flex-col-reverse lg:flex-row lg:gap-4 gap-8  justify-between mb-6">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <h2 className="text-2xl lg:text-[32px] font-Bold">
            {searchparams.get("statusTitle")?.toString().split("-").join(" ")}
          </h2>
          <Link
            href={ROUTES.USER.BOOKINGS + "?OrderStatus=" + params.BookingID}
            className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
          >
            <ListIcon />
            <p className="lg:text-[16px] text-sm">List View</p>
          </Link>
        </div>
      </div>
      {searchparams.get("typeUser") === "IRent" ? (
        <PageIRentId status={params.BookingID} />
      ) : (
        <PageIRentOutId status={params.BookingID} />
      )}
    </div>
  );
}

export default Page;
