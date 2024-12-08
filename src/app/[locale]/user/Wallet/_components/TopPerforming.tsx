"use client";
import DownIcon from "@/src/assets/icons/down";
import { Select } from "@mantine/core";
import React, { useState } from "react";
import imgCar from "@/src/assets/images/car.png";
import Image from "next/image";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const apiData = [
  { name: "Mercedes Benz C197", price: 80, image: imgCar },
  { name: "Iphone 15 Pro", price: 40, image: imgCar },
  { name: "Item 3", price: 10, image: imgCar },
  { name: "Item 4", price: 13, image: imgCar },
  { name: "Item 5", price: 20, image: imgCar },
  { name: "Item 6", price: 25, image: imgCar },
  { name: "Item 7", price: 30, image: imgCar },
  { name: "Item 8", price: 50, image: imgCar },
  { name: "Item 9", price: 60, image: imgCar },
];
function TopPerforming() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Get the maximum price to normalize the bars
  const maxPrice = Math.max(...apiData.map((item) => item.price));
  const [selectedDate, setSelectedDate] = useState<string | null>("September");
  return (
    <div className="border bg-white/50 rounded-3xl pt-8 px-6 pb-4">
      <div className="flex gap-6 justify-between ">
        <div>
          <h4 className="font-Regular  text-base lg:text-[24px] mb-3">
            Top Performing Product
          </h4>
          <div className="flex items-center gap-1 md:gap-4 flex-wrap">
            <p className=" text-xl lg:text-[32px] font-Bold leading-9 px-2 lg:px-0  ">
              $80
            </p>
            <span className="bg-[#ECF4FA] w-fit px-3 min-h-6 flex items-center justify-center text-blue text-xs md:text-[14px] rounded-lg">
              Mercedes Benz C197
            </span>
          </div>
        </div>
        <Select
          value={selectedDate}
          onChange={setSelectedDate}
          data={months}
          leftSectionPointerEvents="none"
          rightSection={<DownIcon />}
          placeholder="Select category"
          searchable
          classNames={{
            input:
              " text-black rounded-xl font-semibold h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",

            wrapper: "h-full",
            dropdown:
              "bg-white text-black rounded-xl border border-green/50  py-2",
            option: "hover:bg-green hover:text-white duration-300 ",
          }}
          className="h-10 w-[124px]  duration-200 min-h-10  bg-white rounded-xl border border-black text-grayMedium"
        />
      </div>
      <div className="bar-chart-container  w-full max-w-xl mx-auto mt-3  md:mt-5 ">
        <div className="flex items-end justify-between gap-3 lg:gap-6 h-[120px]">
          {apiData
            .sort((a, b) => a.price - b.price)
            .map((item) => (
              <div
                key={item.name}
                className="bar flex flex-col flex-1 items-center min-w-4 "
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="h-[90px] flex items-end w-full relative">
                  <div
                    className={`TopBarChart h-0 relative ${
                      item.price === maxPrice
                        ? "bg-gradient-to-t from-green to-green/60"
                        : "bg-[#E6EEF5]"
                    }   transition-all duration-300 w-full hover:shadow-md cursor-pointer rounded-lg`}
                    style={{
                      height: `${(item.price / maxPrice) * 100}%`,
                    }}
                  >
                    <p className=" hidden after:content-[''] after:bg-transparent after:border-x-transparent after:border-t-green after:border-4 after:border-b-transparent after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:h-2  after:w-2 after:bg-green left-1/2 -translate-x-1/2 z-20 text-white text-[8px] absolute bottom-[calc(100%+10px)] nameLine px-1 py-2 text-nowrap max-w-[80px] w-fit bg-green rounded-lg ">
                      {item.name}
                    </p>
                    {item.price === maxPrice && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={25.73}
                        height={25.32}
                        className=" absolute bottom-[90%] shadow-md object-cover left-1/2 -translate-x-1/2 aspect-square w-full h-auto border border-white p-[1px] rounded-full"
                      />
                    )}
                  </div>
                </div>
                <p className="text-sm lg:text-base text-grayMedium mt-2">${item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TopPerforming;
