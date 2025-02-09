// components/CustomCalendar.tsx
"use client";
import React, { useState } from "react";
import Button from "@/src/components/button";
import RentSwitch from "@/src/components/RentSwitch";
import { Select } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import { getMonthsForCurrentYear } from "@/src/lib/utils";
import { useSwitchRent } from "@/src/store/rent-slice";
import CalenderRent from "./calender-rent";
import CalenderRentOut from "./calender-rentOut";

const CustomCalendar = () => {
  const { isRent } = useSwitchRent();
  const months = getMonthsForCurrentYear();
  const [currentView, setCurrentView] = useState<string>(
    "resourceTimelineMonth"
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    new Date().toISOString().split("T")[0]
  );

  const handleViewChange = (view: string) => {
    setCurrentView(view); // Store the current view (month or week)
  };

  return (
    <div className="w-full mb-36">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
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
              " text-black rounded-xl  w-[190px] text-sm lg:text-base font-semibold h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",

            wrapper: "h-full",
            dropdown:
              "bg-white text-black rounded-xl border border-green/50  py-2 text-sm lg:text-base",
            option:
              "hover:bg-green hover:text-white duration-300 text-sm lg:text-base ",
          }}
          className="h-10 order-2 mdl:order-1   duration-200 min-h-10  bg-white rounded-xl border border-green text-grayMedium"
        />

        <div className="flex items-center justify-center order-1 mdl:order-2 w-full mdl:w-fit mb-8 mdl:mb-0">
          <RentSwitch typeUser="user" />
        </div>
        <div className="flex items-center gap-5 order-3">
          <Button
            className={` text-sm px-2 py-1 h-10 mdl:h-12 ${
              currentView === "resourceTimelineMonth"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => handleViewChange("resourceTimelineMonth")}
          >
            Daily
          </Button>
          <Button
            className={` text-sm px-4 py-1 h-10 mdl:h-12 ${
              currentView === "resourceTimelineWeek"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => handleViewChange("resourceTimelineWeek")}
          >
            Weekly
          </Button>
        </div>
      </div>
      {isRent === "rent" ? (
        <CalenderRent currentView={currentView} />
      ) : (
        <CalenderRentOut currentView={currentView} />
      )}

      {/* Right-side Event Detail Panel */}
      {/* {selectedEvent && (
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
          <div className="flex items-center mb-4">gffg</div>

          <Button>Message</Button>
          <Button>View Details</Button>
        </div>
      )} */}
    </div>
  );
};

export default CustomCalendar;
