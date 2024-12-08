"use client";
import { BarChart } from "@mantine/charts";
import React from "react";
export const data = [
  { month: "Electronics", value: 28000 },
  { month: "Sports", value: 10000 },
  { month: "Tools", value: 40000 },
  { month: "Home", value: 38000 },
  { month: "Vehicles", value: 15000 },

];
interface DataItem {
  month: string;
  value: number;
  color?: string;
}
function InventoryReport() {
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
      <div className=" mb-3">
        <h2 className="text-2xl font-SemiBold text-grayMedium">Inventory Value</h2>
        <h3 className="headTitle !font-Bold">$112,000</h3>
      </div>
      <div>
        <BarChart
          h={180}
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

export default InventoryReport;
