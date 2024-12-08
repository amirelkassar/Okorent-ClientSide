"use client";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import React, { useState } from "react";
import AccrountRentals from "./_components/accrountRentals";
import HeaderEditAcc from "./_components/HeaderEditAcc";
import Image from "next/image";
import ViewProfile from "@/src/components/viewProfile";
import ActivityView from "./_components/Activity-view";

function Page({ params }: any) {
  const [viewProfile, setViewProfile] = useState<string>("Profile");

  return (
    <div>
      <HeaderEditAcc
        id={params.accountId}
        viewProfile={viewProfile}
        setViewProfile={setViewProfile}
      />
      {viewProfile === "Profile" ? (
        <>
          <div className="w-full rounded-3xl overflow-hidden h-[180px] lg:h-[356px]">
            <Image
              src={EmpoweringImg}
              alt="Empowering"
              className="w-full h-full"
              width={1471.48}
              height={356.18}
            />
          </div>
          <ViewProfile editAdmin={true} />
          <AccrountRentals />
        </>
      ) : (
        <ActivityView />
      )}
    </div>
  );
}

export default Page;
