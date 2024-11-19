"use client";
import React, { useState } from "react";
import HeaderDash from "./_components/header";
import ChartsPlatform from "./_components/charts";
import Button from "@/src/components/button";
import { columns } from "./_components/column";
import { UserData } from "@/src/lib/dataUser";
import { DataTable } from "@/src/components/data-table";
import ROUTES from "@/src/routes";
const data = [
  {
    date: "January",
    Rental: 0,
  },
  {
    date: "February",
    Rental: 400,
  },
  {
    date: "March",
    Rental: 350,
  },
  {
    date: "April",
    Rental: 710,
  },
  {
    date: "June",
    Rental: 420,
  },
  {
    date: "July",
    Rental: 400,
  },
  {
    date: "August",
    Rental: 700,
  },
  {
    date: "September",
    Rental: 2000,
  },
  {
    date: "October",
    Rental: 800,
  },
  {
    date: "November",
    Rental: 1000,
  },
  {
    date: "December",
    Rental: 200,
  },
];
const Monthly = [
  { date: " 1", Rental: 0 },
  { date: " 2", Rental: 100 },
  { date: " 3", Rental: 150 },
  { date: " 4", Rental: 200 },
  { date: " 5", Rental: 250 },
  { date: " 6", Rental: 300 },
  { date: " 7", Rental: 350 },
  { date: " 8", Rental: 400 },
  { date: " 9", Rental: 450 },
  { date: " 10", Rental: 500 },
  { date: " 11", Rental: 550 },
  { date: " 12", Rental: 600 },
  { date: " 13", Rental: 650 },
  { date: " 14", Rental: 700 },
  { date: " 15", Rental: 750 },
  { date: " 16", Rental: 800 },
  { date: " 17", Rental: 850 },
  { date: " 18", Rental: 900 },
  { date: " 19", Rental: 950 },
  { date: " 20", Rental: 1000 },
  { date: " 21", Rental: 1050 },
  { date: " 22", Rental: 1100 },
  { date: " 23", Rental: 1150 },
  { date: " 24", Rental: 1200 },
  { date: " 25", Rental: 1250 },
  { date: " 26", Rental: 1300 },
  { date: " 27", Rental: 1350 },
  { date: " 28", Rental: 1400 },
  { date: " 29", Rental: 1450 },
  { date: " 30", Rental: 1500 },
];
const Weekly = [
  { date: " 1", Rental: 0 },
  { date: " 2", Rental: 100 },
  { date: " 3", Rental: 150 },
  { date: " 4", Rental: 200 },
];
function Page() {
  const [currentView, setcurrentView] = useState("Yearly");

  return (
    <div>
      <HeaderDash />
      <div className="mt-20 mb-20 pb-11  border-b border-grayLight">
        <div className="flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
          <div>
            <h2 className="text-[32px] font-Medium leading-7">
              Platform Performance
            </h2>
            <p className="text-grayMedium text-[20px]">
              See overview about the website performace
            </p>
          </div>

          <div className="flex items-center gap-5 order-3">
            <Button
              className={` text-sm px-2 py-1 h-10 mdl:h-12 ${
                currentView === "Weekly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Weekly")}
            >
              Weekly
            </Button>
            <Button
              className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
                currentView === "Monthly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Monthly")}
            >
              Monthly
            </Button>
            <Button
              className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
                currentView === "Yearly"
                  ? ""
                  : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
              }`}
              onClick={() => setcurrentView("Yearly")}
            >
              Yearly
            </Button>
          </div>
        </div>
        <ChartsPlatform
          data={
            currentView === "Weekly"
              ? Weekly
              : currentView === "Monthly"
              ? Monthly
              : data
          }
        />
      </div>

      <DataTable
        title="New subscriptions"
        viewAll={ROUTES.ADMIN.ACCOUNTS}
        data={UserData}
        columns={columns}
      />
    </div>
  );
}

export default Page;
