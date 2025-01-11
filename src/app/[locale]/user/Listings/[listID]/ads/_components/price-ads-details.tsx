"use client";
import CardVisaIcon from "@/src/assets/icons/cardVisa";
import DownIcon from "@/src/assets/icons/down";
import MasterCardIcon from "@/src/assets/icons/MasterCard";
import VisaIcon from "@/src/assets/icons/visa";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import { Collapse, Radio } from "@mantine/core";
import React, { useState } from "react";
const data = [
  {
    name: "xxxx-9089",
  },
  {
    name: "xxxx-9089",
  },
];
function PriceAdsDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("existing");

  const cards = data.map((item) => (
    <Radio.Card withBorder={false} value={item.name} key={item.name}>
      <div className="px-4 flex items-center justify-between py-3 w-full border rounded-xl">
        <div className="flex items-center gap-2">
          <MasterCardIcon className="w-7 h-auto" />
          <p className="text-grayMedium font-Regular text-sm mdl-text-base">
            {item.name}
          </p>
        </div>
        <Radio.Indicator color="#88BA52" />
      </div>
    </Radio.Card>
  ));

  return (
    <div className="flex-1 flex flex-col gap-3 max-w-full">
      <Card className="  rounded-2xl  pt-8 px-1 flex-1 pb-5">
        <div className="px-5 mb-3">
          <div className="mb-6">
            <h3 className="text-sm md:text-base font-SemiBold mb-2">
              Payment Summary
            </h3>
            <h4 className="text-xs md:text-sm font-Regular text-grayMedium mb-2">
              Your ad will run for 7 Days
            </h4>
          </div>
          <ul className="flex flex-col gap-2 w-full">
            <li className="flex items-center justify-between gap-3 flex-wrap">
              <h5 className="text-sm mdl:text-base text-grayMedium font-Regular">
                Total Budget
              </h5>
              <p className="text-sm mdl:text-base text-grayMedium font-Regular">
                $220
              </p>
            </li>
            <li className="flex items-center justify-between gap-3 flex-wrap">
              <h5 className="text-sm mdl:text-base text-grayMedium font-Regular">
                Service fee
              </h5>
              <p className="text-sm mdl:text-base text-grayMedium font-Regular">
                $50.82
              </p>
            </li>
          </ul>
        </div>
        <div className="pt-4 border-t flex items-center justify-between gap-3 px-5 border-[#B6BFC64D]/30">
          <h4 className="font-Bold text-sm mdl:text-base">Total Payment</h4>
          <p className="font-Bold text-sm mdl:text-base">$230</p>
        </div>
      </Card>
      <Card className="py-4 px-4 rounded-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full justify-between items-center "
        >
          <div className="flex items-center gap-3">
            <div className=" rounded-full bg-blueLight/50 size-[50px] p-1">
              <div className="bg-blueLight rounded-full w-full h-full p-1 flex items-center justify-center">
                <CardVisaIcon className="w-6 h-auto" />
              </div>
            </div>
            <h3 className="font-SemiBold text-sm mdl:text-base">
              Payment Method
            </h3>
          </div>
          <DownIcon />
        </button>

        <Collapse in={isOpen}>
          <div className="flex flex-col gap-5 w-full pt-7 pb-3">
            <Radio.Group value={selectedCard} onChange={setSelectedCard}>
              <div className=" flex flex-col w-full gap-4">{cards}</div>
            </Radio.Group>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <VisaIcon className="w-8 h-auto" />
                <MasterCardIcon className="w-7 h-auto" />
              </div>
              <Button className="!px-8 w-fit border-none bg-blueLight text-black hover:shadow-md h-10">
                Add
              </Button>
            </div>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}

export default PriceAdsDetails;
