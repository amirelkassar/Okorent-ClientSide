import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";

import React from "react";

import { Rentals } from "@/src/lib/dataUser";
import CardRentals from "@/src/components/cardRentals";
interface AccrountRentalsProps {
  edit:boolean
}
function AccrountRentals({edit}:AccrountRentalsProps) {
  return (
    <div className="bg-grayBack pt-20 pb-14 relative before:content-[''] before:w-[calc(100%+130px)] before:bg-grayBack before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
      <div className="flex items-center justify-between gap-4 mb-5 relative z-[1]">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="headTitle">Ahmed Mohamed Rentals</h2>
          <button className="flex items-center gap-3 bottom-0 bg-transparent">
            <p className="text-grayMedium text-[20px] font-Medium">Edit</p>
            <EditIcon className="w-5" />
          </button>
        </div>
        <Button className={"h-10 gap-3"}>
          <p className="text-white text-[16px] font-Medium">
          View all rentals
          </p>
          <ArrowWhiteIcon />
        </Button>
      </div>
      <div className="flex gap-8 flex-wrap relative z-[1]">
        {
          Rentals.map((item)=>{
            return (<CardRentals edit={edit} data={item} key={item.id}/>)
          })
        }
      </div>
    </div>
  );
}

export default AccrountRentals;
