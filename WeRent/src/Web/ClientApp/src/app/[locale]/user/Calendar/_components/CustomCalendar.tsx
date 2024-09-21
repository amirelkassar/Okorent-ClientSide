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
import CardCalender from "./cardCalender";
import OrderCard from "./orderCard";

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
      title: "alialialialialialialialiali",
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
          
          resourceAreaWidth={400}
          resourceAreaHeaderClassNames={"bg-green/10 rounded-t-3xl"}
          
          eventContent={(eventInfo) => (
           <CardCalender eventInfo={eventInfo}/>
          )}
          resourceAreaHeaderContent={() => (
            <div className="flex items-center gap-2  w-full ps-10 flex-1 h-[90px]">
              <OrdersIcon />
              <h2 className="text-3xl font-SemiBold">Orders</h2>
            </div>
          )}
          resourceLabelContent={(resource) => (
            <OrderCard resource={resource}/>
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
