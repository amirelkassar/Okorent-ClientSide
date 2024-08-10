import EditIcon from "@/src/assets/icons/edit";
import React from "react";
import Button from "@/src/components/button";
import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";

import AccountReviews from "./_components/accountReviews";
import AccountDetails from "./_components/accountDetails";
import phone from "@/src/assets/images/phone.png";
import { columns } from "./_components/column";
import AccrountRentals from "./_components/accrountRentals";
import { DataTable } from "@/src/components/data-table";
const dataActivities = [
  {
    id: 1,
    product: "Iphone 15 Pro",
    productType: "Electronics",
    activitieType: "Rented Item",
    user: "Mohamed Ahmed",
    payment: 100,
    paymentStatus: "Pending",
    img: phone,
  },
  {
    id: 2,
    product: "Iphone 15 Pro",
    productType: "Electronics",
    activitieType: "Leased Item",
    user: "Amir Elkassar",
    payment: 250,
    paymentStatus: "Completed",
    img: phone,
  },
  {
    id: 3,
    product: "Iphone 15 Pro",
    productType: "Electronics",

    activitieType: "Rented Item",
    user: "Karim Fathy",
    payment: 100,
    paymentStatus: "Pending",
    img: phone,
  },
];
function page() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="headTitle">Account Details</h2>
          <button className="flex items-center gap-3 bottom-0 bg-transparent">
            <p className="text-grayMedium text-[20px] font-Medium">
              Edit profile
            </p>
            <EditIcon className="w-5" />
          </button>
        </div>
        <AccountDetails />
      </div>
      <AccountReviews />
      <div className="py-16">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="headTitle">Recent Activities</h2>
            <button className="flex items-center gap-3 bottom-0 bg-transparent">
              <p className="text-grayMedium text-[20px] font-Medium">Edit</p>
              <EditIcon className="w-5" />
            </button>
          </div>
          <Button className={"h-10 gap-3"}>
            <p className="text-white text-[16px] font-Medium">
              View all activities
            </p>
            <ArrowWhiteIcon />
          </Button>
        </div>
        <DataTable data={dataActivities} columns={columns} />
      </div>
      <AccrountRentals/>
    </div>
  );
}

export default page;
