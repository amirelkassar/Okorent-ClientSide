// components/CustomCalendar.tsx
"use client";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "@/src/components/button";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import phone from "@/src/assets/images/phone.png";
import avatar from "@/src/assets/images/avatar.png";
import Image, { StaticImageData } from "next/image";
import OrdersIcon from "@/src/assets/icons/orders";

interface EventData {
  id: string;
  title: string;
  start: string; // ISO date string
  end: string; // ISO date string
  status: string;
  image: StaticImageData;
  productName: string;
  payment: string;
  rentalPeriod: string;
  country: string;
  resourceId: string;

}
interface OrderResource {
  id: string;
  title: string;
  productType: string;
  activitieType: string;
  payment: number;
  paymentStatus: string;
  img: StaticImageData;
  quantity: number;
  code: string;
}
const CustomCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const events: EventData[] = [
    {
      id: "1",
      title: "Iphone 15 Pro",
      start: "2024-09-18",
      end: "2024-09-25",
      status: "ongoing",
      image: avatar,
      productName: "Apple Mobile",
      payment: "100$",
      rentalPeriod: "5 Days",
      country: "Netherlands",
      resourceId: "1",
    },
    {
      id: "2",
      title: "ali",
      start: "2024-09-03",
      end: "2024-09-06",
      status: "ongoing",
      image: avatar,
      productName: "Apple Mobile",
      payment: "100$",
      rentalPeriod: "5 Days",
      country: "Netherlands",
      resourceId: "2",
    },
    {
      id: "3",
      title: "ali",
      start: "2024-09-20",
      end: "2024-09-26",
      status: "ongoing",
      image: avatar,
      productName: "Apple Mobile",
      payment: "100$",
      rentalPeriod: "5 Days",
      country: "Netherlands",
      resourceId: "2",
    },
  ];

  const resources: OrderResource[] = [
    {
      id: "1",
      title: "Iphone 15 Pro",
      productType: "Electronics",
      activitieType: "Rented Item",
      payment: 100,
      paymentStatus: "Pending",
      img: phone,
      quantity: 50,
      code: "#17521",
    },
    {
      id: "2",
      title: "Iphone 15 Pro",
      productType: "Electronics",
      activitieType: "Leased Item",
      payment: 250,
      paymentStatus: "Completed",
      img: phone,
      quantity: 50,
      code: "#17521",
    },
    {
      id: "3",
      title: "Iphone 15 Pro",
      productType: "Electronics",
      activitieType: "Rented Item",
      payment: 100,
      paymentStatus: "Pending",
      img: phone,
      quantity: 50,
      code: "#17521",
    },
  ];
  // Handle event click
  const handleEventClick = (info: any) => {
    const clickedEvent = events.find((e) => e.id === info.event.id);
    if (clickedEvent) {
      setSelectedEvent(clickedEvent);
    }
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <FullCalendar
          plugins={[resourceTimelinePlugin, interactionPlugin, dayGridPlugin]}
          initialView="resourceTimelineMonth"
          resources={resources}
          resourcesInitiallyExpanded={false}
          events={events}
          eventClick={handleEventClick}
          eventShortHeight={300}
          slotMinWidth={80}
          eventMinWidth={800}
          resourceAreaWidth={400}
          resourceAreaHeaderClassNames={"bg-green/10 rounded-t-3xl"}
          dayCellClassNames={() => 'w-[100px] h-[50px]'}
          eventContent={(eventInfo) => (
            <div className="flex items-center justify-between max-w-fit  overflow-hidden px-4 py-2  gap-4 bg-white border-green border rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Image
                  alt="event"
                  src={eventInfo.event._def.extendedProps.image}
                  className=" size-8 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-black text-sm font-SemiBold">{eventInfo.event._def.title}</h3>
                  <p className="text-xs font-Regular text-grayMedium !truncate text-nowrap   w-full">
                    {eventInfo.event._instance?.range.start +
                      "to" }
                  </p>
                </div>
              </div>
              <p>{eventInfo.event._def.extendedProps.status}</p>
            </div>
          )}
          resourceAreaHeaderContent={() => (
            <div className="flex items-center gap-2  w-full flex-1 h-[90px]">
              <OrdersIcon />
              <h2>Orders</h2>
            </div>
          )}
          resourceLabelContent={(resource) => (
            <div className="flex items-center justify-between gap-3 flex-wrap py-3">
              <div className="flex items-center gap-3">
                <div className=" size-[50px] min-w-[50px] flex items-center justify-center bg-grayBack rounded-full p-[6px]">
                  <Image
                    alt="order"
                    src={resource.resource._resource.extendedProps.img.src}
                    className="h-full w-auto"
                    width={20}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-base font-SemiBold">
                    {resource.resource._resource.title}
                  </h3>
                  <p className="text-sm font-Regular text-grayMedium">
                    {resource.resource._resource.extendedProps.productType}
                  </p>
                </div>
              </div>
              <p className="text-sm font-Regular text-grayMedium">
                {resource.resource._resource.extendedProps.code}
              </p>
            </div>
          )}
        />
      </div>

      {/* Right-side Event Detail Panel */}
      {selectedEvent && (
        <div className="w-1/3 bg-white p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
          <div className="flex items-center mb-4">
            <Image
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="h-16 w-16 rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-lg">{selectedEvent.productName}</h3>
              <span className="text-green-500">{selectedEvent.status}</span>
            </div>
          </div>
          <p>
            <strong>Payment:</strong> {selectedEvent.payment}
          </p>
          <p>
            <strong>Rental Period:</strong> {selectedEvent.rentalPeriod}
          </p>
          <p>
            <strong>Country:</strong> {selectedEvent.country}
          </p>
          <Button>Message</Button>
          <Button>View Details</Button>
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
