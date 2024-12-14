"use client";
import React from "react";
import OneCardView from "../_components/oneCardView";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import RentSwitch from "@/src/components/RentSwitch";
import ListIcon from "@/src/assets/icons/list";
import { useSearchParams } from "next/navigation";
import { DataTable } from "@/src/components/data-table";
import { columns } from "../_components/columns";
import { RentalsData } from "@/src/lib/dataUser";
import CardIcon from "@/src/assets/icons/card";

function Page({ params }: any) {
  console.log(params);
  const searchParams = useSearchParams();

  return (
    <div className="swiperList  pb-3 lg:pb-16  ">
      <div className="flex lg:items-center flex-col-reverse lg:flex-row lg:gap-4 gap-8  justify-between mb-6">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <h2 className="text-2xl lg:text-[32px] font-Bold">
            {params.BookingID.toString().split("-").join(" ")}
          </h2>
          {searchParams.get("list") === "true" ? (
            <Link
              href={ROUTES.USER.BOOKINGSID(
                params.BookingID.toString().split(" ").join("-")
              )}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <CardIcon />
              <p>Card View</p>
            </Link>
          ) : (
            <Link
              href={`${ROUTES.USER.BOOKINGSID(
                params.BookingID.toString().split(" ").join("-")
              )}?list=true`}
              className="px-3 duration-300 hover:shadow-md w-fit py-2 rounded-xl border border-black flex items-center justify-center gap-2"
            >
              <ListIcon />
              <p className="lg:text-[16px] text-sm">List View</p>
            </Link>
          )}
        </div>
        <div className="mx-auto">
          <RentSwitch typeUser="user" />
        </div>
      </div>
      {searchParams.get("list") === "true" ? (
        <DataTable title="" data={RentalsData} columns={columns} />
      ) : (
        <div className="w-full flex-wrap gap-6 my-4 relative flex items-center">
          <OneCardView />
          <OneCardView />
          <OneCardView />
          <OneCardView />
          <OneCardView />
        </div>
      )}
    </div>
  );
}

export default Page;
