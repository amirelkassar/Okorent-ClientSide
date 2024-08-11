import Button from "@/src/components/button";
import React from "react";
import CardPhone from "./cardPhone";

const PhonesData = [
  {
    productName: "Iphone 15 Pro",
    endingDate: "12-08-2024",
    timeLeft: "One Day Left",
  },
  {
    productName: "Iphone 15 Pro",
    endingDate: "15-08-2024",
    timeLeft: "One Week Left",
  },
  {
    productName: "Iphone 15 Pro",
    endingDate: "20-08-2024",
    timeLeft: "2 Weeks Left",
  },
];
function OngoingRentals() {
  return (
    <div className="bg-white rounded-3xl border w-[430px] border-green shadow-sidebar py-7 px-4">
      <h3 className="headTitle mb-8">Ongoing Rentals</h3>
      <div>
        <div className="flex flex-col gap-8">
          {PhonesData.map((phone,i) => {
            return <CardPhone key={i} data={phone} />;
          })}
        </div>
        <Button className={"w-full h-10 mt-7"}>View all rentals</Button>
      </div>
    </div>
  );
}

export default OngoingRentals;
