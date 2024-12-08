// components/CustomCalendar.tsx
"use client";
import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import phone from "@/src/assets/images/phone.png";
import avatar from "@/src/assets/images/avatar.png";
import { StaticImageData } from "next/image";
import OrdersIcon from "@/src/assets/icons/orders";
import Button from "@/src/components/button";
import CardCalender from "./cardCalender";
import OrderCard from "./orderCard";
import { EventSourceInput } from "@fullcalendar/core";
import RentSwitch from "@/src/components/RentSwitch";
import { Select } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import { useMediaQuery } from "@mantine/hooks";

interface EventData {
  id: string;
  title: string;
  start: string;
  end: string;
  display: string;
  groupId: string;
  interactive: boolean;
  extendedProps: {
    status: string;
    image: StaticImageData;
    productName: string;
    payment: string;
    rentalPeriod: string;
    country: string;
    sourceId: string;
  };
}
interface OrderResource {
  id: string;
  title: string;
  productType: string;
  img: StaticImageData;
  code: string;
}
const months = [
  "January 2024",
  "February 2024",
  "March 2024",
  "April 2024",
  "May 2024",
  "June 2024",
  "July 2024",
  "August 2024",
  "September 2024",
  "October 2024",
  "November 2024",
  "December 2024",
];
const CustomCalendar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null);
  const [currentView, setCurrentView] = useState<string>(
    "resourceTimelineMonth"
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    "September 2024"
  );

  const events: EventSourceInput = useMemo(
    () => [
      {
        id: "1",
        title: "Iphone 15 Pro",
        start: "2024-09-18",
        end: "2024-10-08",
        groupId: "1",
        interactive: false,
        display: "background",
        color: "transparent",
        resourceId: "1",
        sourceId: "1",
        extendedProps: {
          status: "ongoing",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
      {
        id: "2",
        title: "alialialialialialialialiali",
        start: "2024-10-03",
        end: "2024-10-10",
        groupId: "2",
        resourceId: "2",
        interactive: false,
        display: "background",
        color: "transparent",
        sourceId: "3",
        extendedProps: {
          status: "Declined",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
      {
        id: "3",
        title: "ali",
        start: "2024-10-20",
        end: "2024-10-26",
        resourceId: "3",
        groupId: "3",
        interactive: false,
        display: "background",
        color: "transparent",
        sourceId: "3",
        extendedProps: {
          status: "New",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
      {
        id: "4",
        title: "ahmed ali",
        start: "2024-10-01",
        end: "2024-10-07",
        resourceId: "4",
        groupId: "4",
        interactive: false,
        display: "background",
        color: "transparent",
        sourceId: "4",
        extendedProps: {
          status: "New",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
      {
        id: "5",
        title: "ahmed ali",
        start: "2024-10-03",
        end: "2024-10-10",
        resourceId: "5",
        groupId: "5",
        interactive: false,
        display: "background",
        color: "transparent",
        sourceId: "5",
        extendedProps: {
          status: "New",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
      {
        id: "6",
        title: "ahmed ali",
        start: "2024-10-04",
        end: "2024-10-10",
        resourceId: "6",
        groupId: "6",
        interactive: false,
        display: "background",
        color: "transparent",
        sourceId: "6",
        extendedProps: {
          status: "New",
          image: avatar,
          productName: "Apple Mobile",
          payment: "100$",
          rentalPeriod: "5 Days",
          country: "Netherlands",
        },
      },
    ],
    []
  );
  const resources: OrderResource[] = useMemo(
    () => [
      {
        id: "1",
        title: "Iphone 15 Pro",
        productType: "Electronics",
        img: phone,
        code: "#17521",
        status: "ongoing",
      },
      {
        id: "2",
        title: "Iphone 15 Pro",
        productType: "Electronics",
        img: phone,
        code: "#17521",
      },
      {
        id: "6",
        title: "aV",
        productType: "Tv",
        img: phone,
        code: "#17421",
      },
      {
        id: "3",
        title: "Iphone 15 Pro",
        productType: "Electronics",
        img: phone,
        code: "#17521",
      },
      {
        id: "4",
        title: "Iphone 16 Pro Max 54 54 ",
        productType: "Phone",
        img: phone,
        code: "#17421",
      },
      {
        id: "5",
        title: "TV",
        productType: "Tv",
        img: phone,
        code: "#17421",
      },
    ],
    []
  );
  const handleEventClick = useCallback((info: any) => {}, [events]);
  const handleViewChange = (view: string) => {
    setCurrentView(view); // Store the current view (month or week)
  };
  const sortedResources = useMemo(() => {
    return [...resources].sort((a, b) => a.title.localeCompare(b.title)); // Sorting by title alphabetically
  }, [resources]);
  const getWeekLabels = (date: Date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let weekNumber = 1;
    const labels = [];
    while (startOfMonth.getMonth() === date.getMonth()) {
      labels.push(`Week ${weekNumber}`);
      weekNumber++;
      startOfMonth.setDate(startOfMonth.getDate() + 7);
    }
    return labels;
  };
  const getWeekNumber = (date: Date) => {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const numberOfDays = Math.floor(
      (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
  };
  const getWeekNumberInMonth = (date: Date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstWeekDay = firstDayOfMonth.getDay();
    const daysInCurrentWeek = firstWeekDay === 0 ? 0 : 7 - firstWeekDay;
    const currentDay = date.getDate();
    const weekNumber = Math.ceil((currentDay + daysInCurrentWeek) / 7);
    return weekNumber;
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
            option: "hover:bg-green hover:text-white duration-300 text-sm lg:text-base ",
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

      <div className="w-full">
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <FullCalendar
            views={{
              resourceTimelineMonth: {
                type: "resourceTimeline",
                duration: { months: 1 },
              },
              resourceTimelineWeek: {
                type: "resourceTimeline",
                duration: { weeks: 1 },
              },
            }}
            eventOverlap={false}
            plugins={[resourceTimelinePlugin]}
            initialView="resourceTimelineMonth"
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            ref={calendarRef}
            dragRevertDuration={500}
            editable={false}
            resources={sortedResources}
            events={events}
            eventClick={handleEventClick}
            eventShortHeight={100}
            contentHeight={870}
            stickyFooterScrollbar={false}
            height={"870px"}
            scrollTimeReset={false}
            slotMinWidth={isMobile ? 40 : 74}
            resourceAreaWidth={isMobile ? 120 : 400}
            eventDurationEditable={false}
            eventLongPressDelay={500}
            resourcesInitiallyExpanded={false}
            resourceAreaHeaderClassNames="bg-green/10 !border-none rounded-t-3xl"
            eventContent={(eventInfo) => <CardCalender eventInfo={eventInfo} />}
            eventResourceEditable={true}
            resourceAreaHeaderContent={() => (
              <div className="flex items-center gap-2 w-full ps-2 lgl:ps-7 flex-1 h-[54px] lgl:h-[70px]">
                <div className=" size-8 lgl:size-10 rounded-full flex items-center justify-center p-1 bg-[#E5F1FB]">
                  <OrdersIcon />
                </div>
                <h2 className="text-sm lgl:text-3xl font-SemiBold">Orders</h2>
              </div>
            )}
            resourceLabelContent={(resource) => OrderCard(resource)}
            slotLabelClassNames={" text-sm font-Regular max-h-8 bg-[#DFEBF4]"}
            slotLabelContent={(args) => {
              if (currentView === "resourceTimelineMonth") {
                return `${args.date.getDate()} ${args.date.toLocaleString(
                  "default",
                  { weekday: isMobile ? "narrow" : "short" }
                )}`;
              } else if (currentView === "resourceTimelineWeek") {
                const weekNumber = getWeekNumberInMonth(args.date);
                return `Week ${weekNumber}`;
              }
            }}
            slotDuration={{
              days: currentView === "resourceTimelineMonth" ? 1 : 7,
            }}
            slotLabelFormat={{
              weekday: "short",
              day:
                currentView === "resourceTimelineMonth" ? "numeric" : "numeric",
              week:
                currentView === "resourceTimelineWeek" ? "numeric" : undefined,
            }}
            headerToolbar={{
              left: "",
              center: "prev,title,next",
              right: "",
            }}
          />
        </Suspense>
      </div>
      {/* Right-side Event Detail Panel */}
      {selectedEvent && (
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
          <div className="flex items-center mb-4">gffg</div>

          <Button>Message</Button>
          <Button>View Details</Button>
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
