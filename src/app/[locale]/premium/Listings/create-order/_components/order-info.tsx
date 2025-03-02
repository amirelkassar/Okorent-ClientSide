"use client";
import AddUserIcon from "@/src/assets/icons/addUser";
import DateIcon from "@/src/assets/icons/date";
import SearchIcon from "@/src/assets/icons/search";
import Card from "@/src/components/card";
import CardInfoOrder from "@/src/components/card-info-order";
import Input from "@/src/components/input";
import SelectInput from "@/src/components/select-input";
import { Radio } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import ModalAddCustomer from "./modal/modal-add-customer";
const dataNotes = [
  { value: "1", label: "Announcement" },
  { value: "2", label: "Complaint" },
];
const OptionAddresses = [
  {
    value: "store",
    label: "In store",
  },
  {
    value: "delivery",
    label: "Delivery",
  },
];
function OrderInfo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card className="px-3 py-4 md:px-4">
      <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
        <div className="bg-white   rounded-xl  h-16 border-green/50 border overflow-hidden  min-w-[calc(50%-16px)] flex-1 flex">
          <Input
            leftSection={<SearchIcon fill="#0F2A43" className="w-4 h-auto" />}
            placeholder="Search Customers"
            className="h-full w-[calc(100%-60px)]"
            inputClassName=" bg-white   rounded-none w-full h-16  border-none"
          />
          <button
            onClick={open}
            className="w-[60px] h-16 border-s border-green/50 flex items-center duration-300 justify-center hover:bg-blueLight/60"
          >
            <AddUserIcon className="w-6 h-auto" fill="#0F2A43" />
          </button>
        </div>
        <CardInfoOrder label="">
          <div className="flex-1">
            <Radio.Group
              name="OptionAddresses"
              classNames={{
                label: "text-xl",
              }}
              onChange={(e) => {
                console.log(e);
              }}
            >
              <div className="flex my-6 w-full  gap-2">
                {OptionAddresses.map((option, inedx) => {
                  return (
                    <Radio
                      color="#88BA52"
                      key={inedx}
                      value={option.value}
                      label={option.label}
                      className="flex-1"
                      classNames={{
                        icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                      }}
                    />
                  );
                })}
              </div>
            </Radio.Group>
          </div>
        </CardInfoOrder>
        <DatePickerInput
          type="range"
          leftSection={<DateIcon fill="#344050" className="w-5 h-auto" />}
          placeholder="Choose Rental Period"
          onChange={(e) => {
            console.log(e);
          }}
          popoverProps={{
            position: "top",
            classNames: {
              dropdown:
                "border-2 border-green  rounded-xl shadow-lg shadow-green/40",
            },
          }}
          className="h-auto min-w-[calc(50%-16px)] flex-1"
          valueFormat="DD-MM-YYYY"
          classNames={{
            input:
              " text-black  text-grayMedium bg-white   rounded-xl border border-green/50 h-16  placeholder:text-grayMedium placeholder:opacity-100 ",
            day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
            monthCell: "px-0",
            levelsGroup: "justify-center mb-3",
            weekday: "text-black",
            calendarHeader: "text-grayMedium",
          }}
          minDate={new Date()}
        />
        <SelectInput
          data={dataNotes}
          placeholder="Choose Delivery Address"
          onChange={(e) => {
            console.log(e);
          }}
          inputClassName="!h-16 "
          className="h-auto min-w-[calc(50%-16px)] flex-1"
        />
        <Input
          placeholder="%    Write discount you want to apply"
          className="h-auto min-w-[calc(50%-16px)] flex-1"
          inputClassName=" bg-white   rounded-xl  h-16 border-green/50"
        />
        <SelectInput
          data={dataNotes}
          placeholder="Choose order type"
          onChange={(e) => {
            console.log(e);
          }}
          inputClassName="!h-16 "
          className="h-auto min-w-[calc(50%-16px)] flex-1"
        />
      </div>
      <ModalAddCustomer opened={opened} close={close} />
    </Card>
  );
}

export default OrderInfo;
