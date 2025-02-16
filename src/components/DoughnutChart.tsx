"use client";
import React from "react";
import { DonutChart } from "@mantine/charts";
import { useMediaQuery } from "@mantine/hooks";
import { GetAccountInventoryByID } from "../hooks/queries/admin/account/dashboard";

interface ChartData {
  name: string;
  value: number;
  color: string;
}
const dataDoughnut: ChartData[] = [
  { name: "Electronics ", value: 35, color: "#88BA52" },
  { name: "Sports", value: 15, color: "#A1D26C" },
  { name: "Tools", value: 20, color: "#C4E99D" },
  { name: "Home", value: 25, color: "#ECFFD8" },
  { name: "Vehicles", value: 25, color: "#D8E5CA" },
];
const colors = [
  "#88BA52",
  "#A1D26C",
  "#C4E99D",
  "#ECFFD8",
  "#D8E5CA",
  "#FFD700",
  "#FF6347",
  "#40E0D0",
];
const DoughnutChart = ({ accountId }: { accountId: string }) => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  const { data } = GetAccountInventoryByID(accountId);
  const transformedData = data?.data?.map((item:any, index:number) => ({
    name: item.categoryName,
    value: item.percentage,
    color: colors[index],
  }));
  return (
    <div className=" border-green/50 w-full md:w-fit  border bg-white rounded-2xl px-4 md:px-8 py-6 md:py-8 shadow-md">
      <h3 className="text-lg lg:text-2xl text-grayMedium mb-6 md:mb-9">
        Inventory Allocation
      </h3>
      <div className="flex items-center gap-3 justify-between">
        {/* Doughnut Chart */}
        <DonutChart
          tooltipDataSource="segment"
          thickness={20}
          strokeWidth={0}
          data={transformedData||[]}
          size={isMobile ? 140 : 164}
        />
        {/* Legend */}
        <div className="flex flex-col gap-2">
          {transformedData?.map((item:any) => (
            <div key={item.name} className="flex items-center gap-2">
              <span
                className=" size-3 min-w-3  rounded-sm"
                style={{
                  background: item.color,
                }}
              ></span>
              <h4 className=" text-xs font-SemiBold min-w-[60px]">
                {item.name}
              </h4>
              <p className="text-blue px-1 w-fit rounded-md bg-blue/15 font-Regular text-[8px]">
                {item.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
