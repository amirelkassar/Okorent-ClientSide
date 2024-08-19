"use client";
import EditIcon from "@/src/assets/icons/edit";
import React from "react";
import AccountReviews from "./_components/accountReviews";
import AccountDetails from "./_components/accountDetails";
import phone from "@/src/assets/images/phone.png";
import { columns } from "./_components/column";
import AccrountRentals from "./_components/accrountRentals";
import { DataTable } from "@/src/components/data-table";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useSearchParams } from "next/navigation";
import HeaderEditAcc from "./_components/HeaderEditAcc";
import AccountEdit from "./_components/accountEdit";
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
    quantity: 50,
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
    quantity: 50,
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
    quantity: 50,
  },
];
function Page({ params }: any) {
  const searchParams = useSearchParams();
  console.log(searchParams.get("edit"));

  return (
    <div>
      {searchParams.get("edit") ? (
        <>
          <HeaderEditAcc id={params.accountId}/>
          <AccountEdit />
        </>
      ) : (
        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="headTitle">Account Details</h2>
            <Link
              href={
                ROUTES.ADMIN.ACCOUNTSDETAILS(params.accountId) + "?edit=true"
              }
              className="flex items-center gap-3 bottom-0 bg-transparent"
            >
              <p className="text-grayMedium text-[20px] font-Medium">
                Edit profile Details
              </p>
              <EditIcon className="w-5" />
            </Link>
          </div>
          <AccountDetails />
        </div>
      )}

      <AccountReviews edit={searchParams.get("edit") ? true : false} />
      <div className="py-16">
        <DataTable
          title="Recent Activities"
          data={dataActivities}
          viewAll="View all activities"
          columns={columns}
          viewAllTitle="View all activities"
        />
      </div>
      <AccrountRentals edit={searchParams.get("edit") ? true : false} />
    </div>
  );
}

export default Page;
