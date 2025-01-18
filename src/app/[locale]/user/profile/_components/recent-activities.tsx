import { DataTable } from "@/src/components/data-table";
import LinkViewAll from "@/src/components/linkViewAll";
import React from "react";
import { columns } from "./column";
import phone from "@/src/assets/images/phone.png";
import CardViewPhoneActivities from "./CardViewPhoneActivities";
import { TableHeader } from "@/src/components/table/table-header";
import ROUTES from "@/src/routes";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { GetRecentActivitiesOrders } from "@/src/hooks/queries/user/my-profile";

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

function RecentActivities() {
  const { data, isLoading } = GetRecentActivitiesOrders();
  console.log(data);

  return (
    <div className="mb-16 lg:border-b border-grayLight">
      <div>
        <TableHeader>
          <TableHeader.First title="Recent Activities" />
          <TableHeader.Last className="ms-auto">
            <LinkViewAll link={ROUTES.USER.BOOKINGS} />
          </TableHeader.Last>
        </TableHeader>
        {isLoading ? (
          <div className="flex justify-center items-center mb-section">
            <SkeletonLoading className="w-full !h-28 max-w-full min-w-full" />
          </div>
        ) : (
          <DataTable
            title=""
            data={data?.data || []}
            columns={columns}
            Component={CardViewPhoneActivities}
            functionSelect={[]}
          />
        )}
      </div>
    </div>
  );
}

export default RecentActivities;
