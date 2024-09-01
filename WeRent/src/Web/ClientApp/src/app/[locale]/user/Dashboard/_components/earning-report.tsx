"use client";
import { BarChart } from "@mantine/charts";
import { strict } from "assert";
import React from "react";
export const data = [
  { month: "Jan", value: 28000 },
  { month: "Feb", value: 10000 },
  { month: "Mar", value: 45000 },
  { month: "Apr", value: 38000 },
  { month: "May", value: 15000 },
  { month: "Jun", value: 30000 },
  { month: "Jul", value: 35000 },
  { month: "Aug", value: 34000 },
  { month: "Sep", value: 28000 },
  { month: "Oct", value: 29000 },
  { month: "Nov", value: 29000 },
  { month: "Dec", value: 8000 },
];
interface DataItem {
  month: string;
  value: number;
  color?: string;
}
function EarningReport() {
  const maxValue = Math.max(...data.map((item) => item.value));

  const chartData: DataItem[] = data.map((item) => ({
    ...item,
    color:
      item.value === maxValue ? ("#88BA52" as string) : ("#DCECCA" as string),
  }));
  const formatValue = (value: number) => {
    if (value >= 1000) {
      return `${Math.round(value / 1000)}k`;
    }
    return value.toString();
  };
  return (
    <div className="bg-white border border-green rounded-3xl py-6 lg:py-8 px-4 lg:px-9 flex-1 shadow-sidebar">
      <div className="flex items-center justify-between gap-2 lg:gap-4 mb-9 lg:mb-20">
        <h3 className="headTitle">Earning Report</h3>
        <div className="flex gap-2 lg:gap-3 flex-wrap">
          <button className="bg-grayBack duration-300 text-[12px] lg:text-base hover:shadow-sidebar px-[10px] w-fit rounded-xl text-blue flex items-center justify-center h-6 lg:h-10">
            Quarterly
          </button>
          <button className="bg-grayBack duration-300 text-[12px] lg:text-base hover:shadow-sidebar px-[10px] w-fit rounded-xl text-blue flex items-center justify-center h-6 lg:h-10">
            Yearly
          </button>
          <button className="bg-grayBack duration-300 text-[12px] lg:text-base hover:shadow-sidebar px-[10px] w-fit rounded-xl text-blue flex items-center justify-center h-6 lg:h-10">
            5 Years
          </button>
        </div>
      </div>
      <div>
        <BarChart
          h={300}
          data={chartData}
          dataKey="month"
          
          withTooltip={false}
          barProps={{ barSize: 28, radius: [6, 6, 0, 0] }}
          valueFormatter={formatValue}
          withBarValueLabel
          series={[
            {
              name: "value",
              color: chartData[0]?.color || "#88BA52",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default EarningReport;
