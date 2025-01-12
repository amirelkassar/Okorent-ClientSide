"use client";
import React from "react";
import Complete from "./_components/Complete";
import Upgrade from "./_components/Upgrade";
import LinkViewAll from "@/src/components/linkViewAll";
import Review from "@/src/components/Review";
import imgUser from "@/src/assets/images/avatar.png";
import phone from "@/src/assets/images/phone.png";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./_components/column";
import CardViewPhoneActivities from "./_components/CardViewPhoneActivities";
import EditIcon from "@/src/assets/icons/edit";
import OneCardView from "./_components/oneCardView";
import ProfileDetails from "./_components/ProfileDetails";
import { GetMyProfile } from "@/src/hooks/queries/user/home/user-info";
import { QueryWrapper } from "@/src/components/query-wrapper";

const ReviewData = [
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
  {
    name: "Sara Johnathan",
    image: imgUser,
    stateUser: "Verified User",
    title:
      "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting",
    rate: 5,
  },
];
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
      <div className="mb-16">
        <div className="flex items-center gap-5 justify-between mb-5 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl">Your Reviews</h2>
          <LinkViewAll link="#" />
        </div>
        <div className="flex gap-5 lg:gap-8 md:flex-wrap overflow-x-auto hideScroll">
          {ReviewData.map((item, i) => {
            return <Review key={i} data={{}} idUser={""} />;
          })}
        </div>
      </div>
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
      <div>
        <div className="flex items-center gap-5 justify-between mb-5 lg:mb-8">
          <div className="flex items-center gap-1">
            <h2 className="text-2xl lg:text-3xl">Your Rrentals</h2>
            <div className="flex items-center gap-1">
              <EditIcon />
              <p className="text-grayMedium text-xl hidden md:block">
                Manage Rentals
              </p>
            </div>
          </div>
          <LinkViewAll link="#" />
        </div>
        <div className="flex flex-wrap gap-5 md:gap-8">
          <OneCardView />
          <OneCardView />
          <OneCardView />
          <OneCardView />
          <OneCardView />
          <OneCardView />
        </div>
      </div>
    </div>
  );
}

export default page;
