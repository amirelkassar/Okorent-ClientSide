import React from "react";
import CustomCalendar from "./_components/CustomCalendar";




interface User {
  name: string;
  joinDate: string;
  status: string;
  rentedItems: number;
  leasedItems: number;
}

interface Order {
  id: number;
  productName: string;
  status: string;
}
function page() {
  const user: User = {
    name: "Ahmed Mohamed",
    joinDate: "March, 2024",
    status: "Available",
    rentedItems: 320,
    leasedItems: 320,
  };

  const orders: Order[] = [
    { id: 17521, productName: "Iphone 15 Pro", status: "ongoing" },
    { id: 17522, productName: "Iphone 15 Pro", status: "new" },
    // Add more orders as needed
  ];
  return (
    <div className="container mx-auto">
      <CustomCalendar />
    </div>
  );
}

export default page;
