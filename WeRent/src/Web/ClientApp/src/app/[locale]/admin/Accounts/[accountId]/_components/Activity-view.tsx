import AccountsIcon from "@/src/assets/icons/Accounts";
import EarningsIcon from "@/src/assets/icons/Earnings";
import RenewalsIcon from "@/src/assets/icons/Renewals";
import SubscribersIcon from "@/src/assets/icons/Subscribers";
import CardStatistical from "@/src/components/cardStatistical";
import avatar from "@/src/assets/images/1.png";
import PhoneImg from "@/src/assets/images/phone.png";
import React from "react";
import { DataTable } from "@/src/components/data-table";
import { columns } from "./column";
import InventoryReport from "./Inventory-report";
import CardPhoneAccount from "./card-phone-account";
import DoughnutChart from "@/src/components/DoughnutChart";
import ChartRentalsPerformance from "./chart-rentals-performance";

const number = [
  {
    id: 1,
    title: "Canclation Rate",
    number: "21%",
    percentage: 65,
    icon: <AccountsIcon />,
  },
  {
    id: 2,
    title: "Transactions",
    number: "30",
    percentage: 65,
    icon: <SubscribersIcon />,
  },
  {
    id: 3,
    title: "Listed Items",
    number: "100",
    percentage: 65,
    icon: <RenewalsIcon />,
  },
  {
    id: 4,
    title: "Monthly Earnings",
    number: "$1652",
    percentage: 65,
    icon: <EarningsIcon />,
  },
];
const transactions = [
  {
    id: 1,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg, // Replace with the actual phone image URL
    Renter: "Ahmed Mohamed",
    img: avatar, // Replace with the actual user profile image URL
    Payment: "$100",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
  {
    id: 2,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg,
    Renter: "Ahmed Mohamed",
    img: avatar,
    Payment: "$250",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
  {
    id: 3,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg,
    Renter: "Ahmed Mohamed",
    img: avatar,
    Payment: "$100",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
  {
    id: 4,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg,
    Renter: "Ahmed Mohamed",
    img: avatar,
    Payment: "$100",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
  {
    id: 5,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg,
    Renter: "Ahmed Mohamed",
    img: avatar,
    Payment: "$100",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
  {
    id: 6,
    Product: "iPhone 15 Pro",
    ProductImage: PhoneImg,
    Renter: "Ahmed Mohamed",
    img: avatar,
    Payment: "$100",
    Date: "15-10-2024",
    InvoiceReference: "#521542",
  },
];

function ActivityView() {
  return (
    <div>
      <div className="flex  justify-between gap-3 lg:gap-4 flex-wrap">
        {number.map((item) => {
          return (
            <CardStatistical
              key={item.id}
              title={item.title}
              number={item.number}
              percentage={item.percentage}
              icon={item.icon}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap  justify-center  my-10 gap-8">
       <ChartRentalsPerformance/>
        <DoughnutChart />
        <div className="max-w-[700px] w-full">
          <InventoryReport />
        </div>
      </div>
      <div className="mt-14">
        <DataTable
          title="Recent Transactions"
          data={transactions}
          columns={columns}
          Component={CardPhoneAccount}
        />
      </div>
    </div>
  );
}

export default ActivityView;
