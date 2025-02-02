"use client";

import TrueWhiteIcon from "@/src/assets/icons/trueWhite";
import XIcon from "@/src/assets/icons/x";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import InputCreditCard from "@/src/components/product/checkout/inputCreditCard";
import { TextInput } from "@mantine/core";
import React from "react";
interface ModalEditAccountProps {
  opened: boolean;
  close: () => void;
}
function ModalEditAccount({ opened, close }: ModalEditAccountProps) {
  return (
    <ModalComp title="Edit Billing information" opened={opened} close={close}>
      <div className="w-[664px] max-w-full">
        <div className="flex flex-wrap gap-3 md:gap-5 mb-10 ">
          <div className="pb-6 border-b border-green/40 ">
            <div className="flex items-center gap-2">
              <TrueWhiteIcon className="md:w-8 w-5 h-auto" />
              <h3 className="text-base">New card</h3>
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
                <div className="bg-red size-6 mdl:size-8 rounded-full cursor-pointer duration-200 hover:shadow-md flex items-center justify-center">
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
                <TrueWhiteIcon active />
              </div>
            </div>
            <div className="flex md:items-center gap-3 md:gap-6 mt-6 flex-col md:flex-row">
              <div className="w-[240px] min-w-[240px]">
                <h3 className="font-Regular text-base">Expiry date</h3>
                <p className="font-Regular text-[12px] text-grayMedium">
                  Enter the expration date of the card
                </p>
              </div>
              <div className="flex flex-1 items-center pe-9 gap-4 md:gap-9">
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

          <div className=" w-full">
            <h2 className="text-xl mb-5 lg:text-[24px]  font-SemiBold">
              Billing Address
            </h2>

            <Input
              label={"Email address for billing"}
              placeholder={"badr@profound-group.com"}
              inputClassName="bg-white  h-[44px]"
              className=" flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button
            onClick={close}
            className={
              " flex-1 mdl:h-16 h-10 text-black hover:shadow-md bg-grayBack border-none"
            }
          >
            Cancel
          </Button>
          <Button onClick={close} className={" flex-1 mdl:h-16 h-10"}>
            Save
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalEditAccount;
