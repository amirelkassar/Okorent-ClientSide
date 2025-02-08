// components/CustomCalendar.tsx
"use client";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import FullCalendar from "@fullcalendar/react";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import avatar from "@/src/assets/images/avatar.png";
import { StaticImageData } from "next/image";
import OrdersIcon from "@/src/assets/icons/orders";
import Button from "@/src/components/button";
import CardCalender from "./cardCalender";
import OrderCard from "./orderCard";
import RentSwitch from "@/src/components/RentSwitch";
import { Select } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import { useMediaQuery } from "@mantine/hooks";
import { getMonthsForCurrentYear } from "@/src/lib/utils";
import { useQueryState } from "nuqs";
import { useSearchParams } from "next/navigation";
import { useSwitchRent } from "@/src/store/rent-slice";
import {
  GetMyOrderAll,
  GetMyOrderOutAll,
} from "@/src/hooks/queries/user/booking";
import Loading from "@/src/components/loading";

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

const CustomCalendar = () => {
  const { isRent } = useSwitchRent();
  const searchParams = useSearchParams();
  const [DateCalenderParams, setDateCalenderParams] = useQueryState(
    "DateForCalender",
    {
      defaultValue:
        searchParams?.get("DateForCalender")?.toString() ||
        new Date().toString(),
    }
  );

  const { data: OrdersIRent, isLoading } = GetMyOrderAll(
    `DateForCalender=${DateCalenderParams}`
  );
  const { data: OrdersIRentOut, isLoading: isLoadingOut } = GetMyOrderOutAll(
    `DateForCalender=${
      searchParams?.get("DateForCalender") || new Date().toString()
    }`
  );
  console.log(OrdersIRent);
  console.log(OrdersIRentOut);

  const months = getMonthsForCurrentYear();
  const isMobile = useMediaQuery("(max-width: 992px)");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const calendarRef = useRef<FullCalendar | null>(null);
  const [currentView, setCurrentView] = useState<string>(
    "resourceTimelineMonth"
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    new Date().toISOString().split("T")[0]
  );
  const [EventData, setEventData] = useState<EventData[]>([]);
  const [ResourceDate, setResourceDate] = useState<OrderResource[]>([]);

  useEffect(() => {
    if (isRent === "rent") {
      if (OrdersIRent?.data) {
        setEventData(
          OrdersIRent?.data?.items?.map((item: any) => ({
            id: item.id,
            title: item?.renterName || item.lessorName,
            start: item.from?.split("T")[0], // استخدم تاريخ الإنشاء كوقت بدء
            end: item.to?.split("T")[0], // استخدم وقت انتهاء الإيجار
            groupId: item.id,
            resourceId: item.id,
            interactive: false,
            display: "background",
            color: "transparent",
            sourceId: item.id,
            extendedProps: {
              status: "Ongoing", // يمكن تغييره حسب حالة الدفع
              image: item.userImage || avatar,
              productName: item.productName,
              payment: `$${item.amount}`,
              rentalPeriod: "Custom", // تحتاج إلى حساب عدد الأيام إذا كان مطلوبًا
              country: "Not Specified",
            },
          }))
        );
        setResourceDate(
          OrdersIRent?.data?.items?.map((item: any) => ({
            id: item.id,
            title: item?.productName,
            productType: item.productName,
            img: item.heroImage || avatar,
            code: item.id?.slice(0, 5),
          }))
        );
      }
    }
    if (isRent === "rent_out") {
      if (OrdersIRentOut?.data) {
        setEventData(
          OrdersIRentOut?.data?.items?.map((item: any) => ({
            id: item.id,
            title: item?.renterName || item.lessorName,
            start: item.from?.split("T")[0], // استخدم تاريخ الإنشاء كوقت بدء
            end: item.to?.split("T")[0], // استخدم وقت انتهاء الإيجار
            groupId: item.id,
            resourceId: item.id,
            interactive: false,
            display: "background",
            color: "transparent",
            sourceId: item.id,
            extendedProps: {
              status: "Ongoing", // يمكن تغييره حسب حالة الدفع
              image: item.userImage || avatar,
              productName: item.productName,
              payment: `$${item.amount}`,
              rentalPeriod: "Custom", // تحتاج إلى حساب عدد الأيام إذا كان مطلوبًا
              country: "Not Specified",
            },
          }))
        );
        setResourceDate(
          OrdersIRentOut?.data?.items?.map((item: any) => ({
            id: item.id,
            title: item?.productName,
            productType: item.productName,
            img: item.heroImage || avatar,
            code: item.id?.slice(0, 5),
          }))
        );
      }
    }
  }, [isLoading, isRent, OrdersIRent, OrdersIRentOut]);

 
  const handleViewChange = (view: string) => {
    setCurrentView(view); // Store the current view (month or week)
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
            datesSet={(arg) => {
              setEventData([]);
              setResourceDate([]);
              setDateCalenderParams(arg.startStr.split("T")[0]);
            }}
            eventOverlap={false}
            plugins={[resourceTimelinePlugin]}
            initialView="resourceTimelineMonth"
            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
            ref={calendarRef}
            dragRevertDuration={500}
            editable={false}
            resources={ResourceDate}
            events={EventData}
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
            eventContent={(eventInfo) => {
              if (!isLoading) {
                return <CardCalender eventInfo={eventInfo} />;
              }
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
