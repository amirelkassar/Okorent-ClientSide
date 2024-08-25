"use client";
import CardVisaIcon from "@/src/assets/icons/cardVisa";
import { Checkbox, Divider } from "@mantine/core";
import React, { useState } from "react";
const cards = [
  {
    bank: "Ziraat Bankası",
    last4Digits: "1234",
    name: "Hızır Kocaman",
    expiration: "12/34",
  },
  {
    bank: "Ziraat Bankası",
    last4Digits: "1234",
    name: "Hızır Kocaman",
    expiration: "12/34",
  },
];
function Cards() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(0);
  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index);
  };
  return (
    <div>
      <h2 className="text-[24px] font-SemiBold mb-7">Choose your card</h2>
      <div className="bg-white border-green/30 border rounded-xl">
        <div className="flex items-center gap-4 px-8 py-6 border-b-2 border-grayLight">
          <CardVisaIcon />
          <h3 className="text-[16px]  ">Registered cards</h3>
        </div>
        <div className="px-8">
          {cards.map((card, index) => (
            <div key={index}>
              <div className="flex  justify-between py-4">
                <div className="flex flex-col justify-between items-center gap-5">
                  <Checkbox
                    classNames={{
                      icon: "w-[56%] top-1/2 !-translate-y-1/2 h-auto",
                    }}
                    color="#88BA52"
                    radius="xl"
                    size="md"
                    checked={selectedCardIndex === index}
                    onChange={() => handleCardSelect(index)}
                  />
                  <CardVisaIcon />
                </div>
                <div className="flex flex-col justify-between items-center gap-5">
                  <h4 className="text-[14px] text-grayMedium font-Regular">
                    Bank
                  </h4>
                  <p
                    className={`${
                      selectedCardIndex !== index && "text-grayMedium"
                    }`}
                  >
                    {card.bank}
                  </p>
                </div>

                <h4 className="text-[14px] text-grayMedium font-Regular">
                  Last 4 digits
                </h4>
                <div className="flex flex-col justify-between items-center gap-5">
                  <h4 className="text-[14px] text-grayMedium font-Regular">
                    Name on card
                  </h4>
                  <p
                    className={`${
                      selectedCardIndex !== index && "text-grayMedium"
                    }`}
                  >
                    {card.name}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-center gap-5">
                  <h4 className="text-[14px] text-grayMedium font-Regular">
                    Expiration date
                  </h4>
                  <p
                    className={`${
                      selectedCardIndex !== index && "text-grayMedium"
                    }`}
                  >
                    {" "}
                    {card.expiration}
                  </p>
                </div>
              </div>
              {index !== cards.length - 1 && <Divider  />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
