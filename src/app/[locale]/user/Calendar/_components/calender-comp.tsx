"use client";
import FullCalendar from "@fullcalendar/react";
import React, { Suspense, useCallback, useRef } from "react";
import CardCalender from "./cardCalender";
import OrdersIcon from "@/src/assets/icons/orders";
import OrderCard from "./orderCard";
import { useMediaQuery } from "@mantine/hooks";
import { EventData, OrderResource } from "@/src/types";
import { useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

function CalenderComp({
  EventData,
  ResourceDate,
  currentView,
}: {
  EventData: EventData[];
  ResourceDate: OrderResource[];
  currentView: string;
}) {
  const searchParams = useSearchParams();
  const calendarRef = useRef<FullCalendar | null>(null);
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [DateCalenderParams, setDateCalenderParams] = useQueryState(
    "DateForCalender",
    {
      defaultValue: new Date().toString(),
    }
  );
  const getWeekNumberInMonth = useCallback((date: Date) => {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstWeekDay = firstDayOfMonth.getDay();
    const daysInCurrentWeek = firstWeekDay === 0 ? 0 : 7 - firstWeekDay;
    const currentDay = date.getDate();
    const weekNumber = Math.ceil((currentDay + daysInCurrentWeek) / 7);
    return weekNumber;
  }, []);

  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading Calendar...</div>}>
        <FullCalendar
          views={{
            resourceTimelineMonth: {
              type: "resourceTimelineMonth",
              duration: { months: 1 },
            },
            resourceTimelineWeek: {
              type: "resourceTimeline",
              duration: { weeks: 1 },
            },
          }}
          datesSet={(arg) => {
            setDateCalenderParams(arg.startStr.split("T")[0]);
          }}
          plugins={[resourceTimelinePlugin]}
          initialView="resourceTimelineMonth"
          initialDate={
            searchParams?.get("DateForCalender") &&
            !isNaN(Date.parse(searchParams.get("DateForCalender")!))
              ? searchParams.get("DateForCalender")!
              : new Date().toISOString().split("T")[0]
          }
          ref={calendarRef}
          dragRevertDuration={10}
          editable={false}
          eventOverlap={false}
          resources={ResourceDate}
          events={EventData}
          eventShortHeight={100}
          contentHeight={870}
          height={"870px"}
          slotMinWidth={isMobile ? 40 : 74}
          resourceAreaWidth={isMobile ? 120 : 400}
          eventDurationEditable={false}
          eventLongPressDelay={500}
          resourceAreaHeaderClassNames="bg-green/10 !border-none rounded-t-3xl"
          eventContent={(eventInfo) => {
            console.log(eventInfo.event);
            if (ResourceDate.length === 0) return;
            else return <CardCalender eventInfo={eventInfo} />;
          }}
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
            day: "numeric",
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
  );
}

export default CalenderComp;
