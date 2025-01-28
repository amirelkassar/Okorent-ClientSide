import { AreaChart } from "@mantine/charts";
import React from "react";

function ChartsPlatform({ data }: { data: { date: string; Rental: number }[] }) {
  return (
    <AreaChart
      tooltipAnimationDuration={200}
      classNames={{
        tooltip:
          "bg-green text-white  flex items-center justify-center rounded-[12px] p-0  h-8 w-auto min-w-[80px] text-[14px]",
        tooltipBody:
          "min-w-auto w-full justify-center text-white items-center p-0 bg-transparent",
        tooltipItemData: "text-[14px] font-Regular  text-white  order-3 p-0",
        tooltipItem:
          "    text-white justify-center  w-full flex flex-row-reverse gap-1  m-0 p-0",
        tooltipItemName: "text-[14px] font-Regular text-white text-center  p-0",
        tooltipItemColor: "hidden",
        tooltipLabel:
          " text-[14px] font-Regular relative after:absolute after:top-1/2 after:end-0 after:content-['-'] after:px-1 after:-translate-y-1/2 max-w-fit w-24 truncate text-white text-center ps-1 pe-4",
        axisLabel: "bg-red text-red min-w-5 min-h-5",
      }}
      h={130}
      data={data}
      dataKey="month"
      series={[{ name: "rentals", color: "#88BA52", label: "rentals" }]}
      curveType="bump"
      tickLine="none"
      gridAxis="none"
      withGradient
      fillOpacity={0.2}
      withYAxis={false}
      withXAxis={false}
      withDots={false}
      dotProps={{
        className: "bg-red ",
      }}
    />
  );
}

export default ChartsPlatform;
