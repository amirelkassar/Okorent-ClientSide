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
const CustomCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const calendarRef = useRef<FullCalendar | null>(null);
  const [currentView, setCurrentView] = useState<string>(
    "resourceTimelineMonth"
  );
  const events: EventSourceInput = useMemo(
    () => [
      {
        id: "1",
        title: "Iphone 15 Pro",
        start: "2024-09-18",
        end: "2024-09-25",
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
        start: "2024-09-03",
        end: "2024-09-09",
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
        start: "2024-09-20",
        end: "2024-09-26",
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
        start: "2024-09-01",
        end: "2024-09-07",
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
        start: "2024-09-03",
        end: "2024-09-10",
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
        start: "2024-09-04",
        end: "2024-09-10",
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
        title: "Iphone 16 Pro Max",
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
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView(view);
      setCurrentView(view);
    }
  };
  const sortedResources = useMemo(() => {
    return [...resources].sort((a, b) => a.title.localeCompare(b.title)); // Sorting by title alphabetically
  }, [resources]);
  return (
    <div className="w-full mb-36">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
        <RentSwitch />
        <div className="flex items-center gap-5 ">
          <Button
            className={`px-4 py-2 ${
              currentView === "resourceTimelineMonth"
                ? ""
                : "bg-grayBack text-blue border-grayBack hover:border-grayBack hover:shadow-md"
            }`}
            onClick={() => handleViewChange("resourceTimelineMonth")}
          >
            Montly
          </Button>
          <Button
            className={`px-4 py-2 ${
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
              resourceTimelinePlugin: {
                type: "resourceTimeline",
                duration: { days: 30 },
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
            slotMinWidth={74}
            resourceAreaWidth={400}
            eventDurationEditable={false}
            eventLongPressDelay={500}
            resourcesInitiallyExpanded={false}
            resourceAreaHeaderClassNames="bg-green/10 !border-none rounded-t-3xl"
            eventContent={(eventInfo) => <CardCalender eventInfo={eventInfo} />}
            eventResourceEditable={true}
            resourceAreaHeaderContent={() => (
              <div className="flex items-center gap-2 w-full ps-7 flex-1 h-[70px]">
                <div className=" size-10 rounded-full flex items-center justify-center p-1 bg-[#E5F1FB]">
                  <OrdersIcon />
                </div>
                <h2 className="text-3xl font-SemiBold">Orders</h2>
              </div>
            )}
            resourceLabelContent={(resource) => OrderCard(resource)}
            slotLabelClassNames={" text-sm font-Regular max-h-8 bg-[#DFEBF4]"}
            slotLabelFormat={{
              day: "numeric",
              weekday: "short",
            }}
            headerToolbar={{
              left: "", // Previous and next month/week buttons
              center: "prev,title,next", // Current month or week title
              right: "", // Buttons to toggle between views
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
