import Image from "next/image";
import React from "react";
import avatar from "@/src/assets/images/avatar.png";
import { OneUserData } from "@/src/lib/dataUser";
import Button from "@/src/components/button";
import StarIcon from "@/src/assets/icons/star";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
function CardDetails() {
  return (
    <div className="pt-[50px] pb-10 ps-9 pe-14 rounded-3xl border border-green shadow-sidebar bg-white flex  gap-6 max-w-[684px]">
      <div className="flex flex-col gap-2 justify-center mt-4">
        <Image
          alt="user"
          src={avatar}
          className=" size-[104px] rounded-[50%] object-cover object-top"
          priority
        />
        <p className="text-green text-[16px] text-center">Available</p>
      </div>
      <div>
        <div className="flex  gap-5 justify-between mb-2">
          <h3 className="headTitle">{OneUserData.name}</h3>
          <div className="flex items-center justify-center">
            <VerifyBlackIcon />
          </div>
        </div>
        <h4 className="text-grayMedium text-[20px] -mt-3 mb-6">
          Member Since {OneUserData.since}
        </h4>
        <div className="flex items-center mb-9">
          <div className="flex items-center gap-1 pe-4">
            <p className="font-Bold text-[24px]">{OneUserData.rating}</p>
            <StarIcon className="w-[22px] h-auto" />
          </div>
          <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
            <p className="font-Bold text-[24px]">{OneUserData.rentedItems}</p>
            <p className="text-[16px] mb-1 text-grayMedium">Rented Items</p>
          </div>
          <div className="flex items-end gap-1 pe-4 ps-2 border-s border-green">
            <p className="font-Bold text-[24px]">{OneUserData.leasedItems}</p>
            <p className="text-[16px] mb-1 text-grayMedium"> Leased Items</p>
          </div>
        </div>
        <Button className={"w-full"}>
          Message {OneUserData.name.split(" ")[0]}
        </Button>
      </div>
    </div>
  );
}

export default CardDetails;
