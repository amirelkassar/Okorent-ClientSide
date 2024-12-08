import MasterCardIcon from "@/src/assets/icons/MasterCard";
import TrueWhiteIcon from "@/src/assets/icons/trueWhite";
import VisaIcon from "@/src/assets/icons/visa";
import React from "react";
import InputCreditCard from "./inputCreditCard";
import XIcon from "@/src/assets/icons/x";
import { TextInput } from "@mantine/core";

function NewCard() {
  return (
    <div className="bg-white border border-green/30 py-6 lg:py-8 px-6 lg:px-7 mt-6 rounded-2xl shadow-md">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <TrueWhiteIcon className="w-8 h-auto" />
          <h3 className="text-base">New card</h3>
        </div>
        <div className="flex items-center gap-2">
          <MasterCardIcon />
          <VisaIcon />
        </div>
      </div>
      <div className="flex md:items-center gap-3 md:gap-6 mt-6 flex-col md:flex-row">
        <div className="w-[240px] min-w-[240px]">
          <h3 className="font-Regular text-base">Card number</h3>
          <p className="font-Regular text-[12px] text-grayMedium">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <div className="flex items-center gap-2 w-full">
          <InputCreditCard />
          <div className="bg-red size-8 rounded-full cursor-pointer duration-200 hover:shadow-md flex items-center justify-center">
            <XIcon />
          </div>
        </div>
      </div>
      <div className="flex md:items-center gap-3 md:gap-6 mt-6 flex-col md:flex-row">
        <div className="w-[240px] min-w-[240px]">
          <h3 className="font-Regular text-base">Card owner</h3>
          <p className="font-Regular text-[12px] text-grayMedium">
            Enter the name on the card
          </p>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <TextInput
            classNames={{
              label: "text-[16px] text-black mb-2",
              input:
                " text-black w-full focus:border-green  rounded-lg text-grayMedium bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[44px]",
            }}
            className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl text-grayMedium"
          />
          <TrueWhiteIcon  active/>
        </div>
      </div>
      <div className="flex md:items-center gap-3 md:gap-6 mt-6 flex-col md:flex-row">
        <div className="w-[240px] min-w-[240px]">
          <h3 className="font-Regular text-base">Expiry date</h3>
          <p className="font-Regular text-[12px] text-grayMedium">
            Enter the expration date of the card
          </p>
        </div>
        <div className="flex flex-1 items-center gap-4 md:gap-9">
          <div className="flex items-center gap-2">
            <TextInput
              type="number"
              classNames={{
                label: "text-[16px] text-black mb-2",
                input:
                  " text-black w-full focus:border-green w-[56px] text-center  rounded-lg  bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-[44px]",
              }}
              className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl "
            />
            <span>/</span>
            <TextInput
              type="number"
              defaultValue={23}
              classNames={{
                label: "text-[16px] text-black mb-2",
                input:
                  " text-black w-full focus:border-green  w-[56px] text-center rounded-lg  bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-[44px]",
              }}
              className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl "
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="">
              <h3 className="font-Regular text-base">CVV</h3>
              <p className="font-Regular text-[12px] text-grayMedium">
                Security code
              </p>
            </div>
            <TextInput
              defaultValue={"012"}
              classNames={{
                label: "text-[16px] text-black mb-2",
                input:
                  " text-black w-full focus:border-green min-w-[64px] w-[64px] text-center  rounded-lg  bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-[44px]",
              }}
              className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCard;
