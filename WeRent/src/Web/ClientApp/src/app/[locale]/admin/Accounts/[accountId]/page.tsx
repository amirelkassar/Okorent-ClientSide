"use client";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import React from "react";
import AccrountRentals from "./_components/accrountRentals";
import HeaderEditAcc from "./_components/HeaderEditAcc";
import Image from "next/image";
import ViewProfile from "@/src/components/viewProfile";

function Page({ params }: any) {
  return (
    <div>
      <HeaderEditAcc id={params.accountId} />
      <div className="w-full rounded-3xl overflow-hidden h-[180px] lg:h-[356px]">
        <Image
          src={EmpoweringImg}
          alt="Empowering"
          className="w-full h-full"
          width={1471.48}
          height={356.18}
        />
      </div>
      <ViewProfile />

      <AccrountRentals />
    </div>
  );
}

export default Page;
