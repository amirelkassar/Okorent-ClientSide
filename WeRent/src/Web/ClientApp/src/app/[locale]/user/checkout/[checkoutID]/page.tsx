"use client";
import React, { useRef, useState } from "react";
import HeaderCheckout from "./_components/headerCheckout";
import { Checkbox, Select, TextInput } from "@mantine/core";
import Cards from "./_components/cards";
import DownIcon from "@/src/assets/icons/down";

import NewCard from "./_components/newCard";
import Button from "@/src/components/button";
import GiftIcon from "@/src/assets/icons/gift";
import Visa from "./_components/visa";

function Page() {
  const [newCard, setNewCard] = useState(false);
  const [selectPlan, setSelectPlan] = useState(1);

  return (
    <div className="mt-8 flex justify-between gap-7 mb-20">
      <div className="max-w-[700px] w-full">
        <HeaderCheckout />
        <Cards />
       
        <div className="my-4 px-8">
          <Checkbox
            color="#88BA52"
            classNames={{
              input: "bg-transparent",
            }}
            checked={newCard}
            label={"Add new card"}
            onChange={(event) => setNewCard(event.currentTarget.checked)}
          />
        </div>
        {newCard ? (
          <NewCard />
        ) : (
          <>
            <div className="mt-8">
              <h2 className="text-[24px] mb-4 font-SemiBold">
                VAT information
              </h2>
              <div className="bg-white border-green/30 border rounded-xl px-6 py-4 flex items-center gap-8">
                <Select
                  data={["Neatherland", "3 DaNeatherlandy", "Neatherland4"]}
                  leftSectionPointerEvents="none"
                  rightSection={<DownIcon />}
                  placeholder="Select rental duration"
                  label={"Country"}
                  classNames={{
                    label: "text-black text-base mb-2",
                    input:
                      " text-black rounded-lg  focus:border-green text-grayMedium bg-white flex-1   rounded-lg border border-green/30 h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",

                    wrapper: "h-[44px] flex-1",
                    dropdown:
                      "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                    option: "hover:bg-green hover:text-white duration-300 ",
                  }}
                  className=" flex-1   duration-200 min-h-[64px]  text-grayMedium"
                />
                <TextInput
                  label={"VAT Number"}
                  placeholder={"25462321"}
                  classNames={{
                    label: "text-[16px] text-black  mb-2",
                    input:
                      " text-black w-full focus:border-green  rounded-lg text-grayMedium bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                    wrapper: "h-[44px]",
                  }}
                  className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl text-grayMedium"
                />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-[24px] mb-1 font-SemiBold">
                Billing Address
              </h2>
              <div className="bg-white border-green/30 border rounded-xl px-6 py-4 ">
                <TextInput
                  label={"Email address for billing"}
                  placeholder={"badr@profound-group.com"}
                  classNames={{
                    label: "text-[16px] text-black mb-2",
                    input:
                      " text-black w-full focus:border-green  rounded-lg text-grayMedium bg-white  border border-green/30  h-[44px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                    wrapper: "h-[44px]",
                  }}
                  className=" flex-1  duration-200 w-full min-h-[44px] rounded-2xl text-grayMedium"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="pb-8 pt-20 ps-11 pe-7 mt-2 bg-white border border-green/30 rounded-2xl w-full max-w-[650px]">
        <h2 className="text-[24px] font-Bold mb-7">
          Selected plan : Essential
        </h2>
        <div className="flex items-center gap-10">
          <div
            onClick={() => {
              setSelectPlan(1);
            }}
            className={`relative flex items-center gap-5 flex-1 bg-white border border-green/30 ${
              selectPlan === 1 && "!border-green"
            } px-4 py-3 shadow-sm duration-300 cursor-pointer hover:shadow-md rounded-xl`}
          >
            <div className="bg-[#DFEBF4] rounded-full flex items-center justify-center p-[14px]">
              <GiftIcon />
            </div>
            <div className="py-2">
              <h3 className="font-SemiBold">Pay monthly</h3>
              <h4 className="text-blue text-[24px] ">$35 / Month</h4>
              {selectPlan === 1 ? (
                <p className="font-SemiBold">Selected</p>
              ) : (
                <p className="font-SemiBold text-grayMedium">Select</p>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              setSelectPlan(2);
            }}
            className={`relative flex items-center gap-5 flex-1 bg-white border border-green/30 ${
              selectPlan === 2 && "!border-green"
            } px-4 py-3 shadow-sm duration-300 cursor-pointer hover:shadow-md rounded-xl`}
          >
            <p className="text-white bg-green px-4 rounded-lg py-1 text-[14px] text-nowrap absolute h-7 -top-4 left-1/2 -translate-x-1/2 uppercase">
              2 mONTH fREE
            </p>
            <div className="bg-[#DFEBF4] rounded-full flex items-center justify-center p-[14px]">
              <GiftIcon />
            </div>
            <div className="py-2">
              <h3 className="font-SemiBold">Pay monthly</h3>
              <h4 className="text-blue text-[24px] ">$35 / Month</h4>
              {selectPlan === 2 ? (
                <p className="font-SemiBold">Selected</p>
              ) : (
                <p className="font-SemiBold text-grayMedium">Select</p>
              )}
            </div>
          </div>
        </div>
        <div className=" border border-green/30 rounded-xl shadow-md mt-[140px]">
          <Visa />
          <ul className="px-2 flex flex-col gap-3 pb-3">
            <li className="flex items-center justify-between ps-6 gap-2 pb-5 border-b border-[#B6BFC64D] last-of-type:border-none">
              <h3 className="text-[20px]">Essential</h3>
              <p className="text-[20px] pe-4">35$</p>
            </li>
            <li className="flex items-center justify-between ps-6 gap-2 pb-5 border-b border-[#B6BFC64D] last-of-type:border-none">
              <h3 className="text-[20px]">Billed Now</h3>
              <p className="text-[20px] pe-4">35$</p>
            </li>
          </ul>
        </div>
        <Button className={"w-full mt-6"}>Proceed to pay</Button>
      </div>
    </div>
  );
}

export default Page;
