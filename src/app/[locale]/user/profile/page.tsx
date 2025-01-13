"use client";
import React from "react";
import Complete from "./_components/Complete";
import Upgrade from "./_components/Upgrade";
import LinkViewAll from "@/src/components/linkViewAll";
import phone from "@/src/assets/images/phone.png";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import CardViewPhoneActivities from "./_components/CardViewPhoneActivities";
import ProfileDetails from "./_components/ProfileDetails";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetMyProfile } from "@/src/hooks/queries/user/my-profile";
import ReviewAboutMe from "./_components/review-about-me";
import MyProducts from "./_components/my-products";

const dataActivities = [
  {
    id: 1,
    product: "Iphone 15 Pro",
    productType: "Electronics",
    userType: "Rent",
    user: "Mohamed Ahmed",
    payment: 100,
    paymentStatus: "Pending",
    img: phone,
    quantity: 50,
  },
  {
    id: 2,
    product: "Iphone 15 Pro",
    productType: "Electronics",
    userType: "RentOut",
    user: "Amir Elkassar",
    payment: 250,
    paymentStatus: "Completed",
    img: phone,
    quantity: 50,
  },
  {
    id: 3,
    product: "Iphone 15 Pro",
    productType: "Electronics",
    userType: "Rent",
    user: "Karim Fathy",
    payment: 100,
    paymentStatus: "Canceled",
    img: phone,
    quantity: 50,
  },
];

function page() {
  const query = GetMyProfile();
  return (
    <div className="pb-24">
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          console.log(data);
          return (
            <>
              <Complete />
              <div className="flex flex-wrap lgl:flex-row flex-col  gap-8 mb-20">
                <ProfileDetails initialData={data} />
                <Upgrade />
              </div>
            </>
          );
        }}
      </QueryWrapper>

      {/* Your Review  */}
      <ReviewAboutMe />

      <div className="mb-16 lg:border-b border-grayLight">
        <div className="flex items-center gap-5 justify-between">
          <h2 className="text-2xl lg:text-3xl">Recent Activities</h2>
          <LinkViewAll link="#" />
        </div>
        <DataTable
          Component={CardViewPhoneActivities}
          title=""
          data={dataActivities}
          columns={columns}
        />
      </div>
      <MyProducts />
    </div>
  );
}

export default page;
