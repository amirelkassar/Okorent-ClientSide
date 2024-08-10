import { AreaChart } from "@mantine/charts";
import React from "react";
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
function ChartsPlatform() {
  return (
    <AreaChart
      classNames={{
        tooltip:
          "bg-[#B6BFC6] text-[#1D3A54] flex items-center justify-center rounded-[12px] px-2 h-8 w-auto min-w-[80px] text-[14px]",
        tooltipBody:
          "min-w-auto w-full justify-center items-center p-0 bg-transparent",
        tooltipItemData: "text-[14px]  ",
        tooltipItem: "flex items-center justify-center  w-full gap-1 m-0 p-0",
        tooltipItemName: "text-[14px] text-center  order-1",
        tooltipItemColor: "hidden",
        tooltipLabel: "hidden",
      }}
      h={300}
      data={data}
      dataKey="date"
      series={[{ name: "Rental", color: "#88BA52" }]}
      curveType="bump"
      tickLine="none"
      gridAxis="none"
      withGradient
      fillOpacity={0.1}
      withYAxis={false}
      withDots={false}
    />
  );
}

export default ChartsPlatform;
