"use client";
import Filter2Icon from "@/src/assets/icons/filter2";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
interface DataFilter {
  name: string;
  amount: string;
  data: {
    dateFrom: Date | null;
    dateTo: Date | null;
  };
}
function FilterBilling() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [dataFilter, setDataFilter] = useState<DataFilter>({
    name: "",
    amount: "",
    data: {
      dateFrom: null,
      dateTo: null,
    },
  });
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(),
    new Date(),
  ]);
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  const handelClearFilter = () => {
    setDataFilter({
      name: "",
      amount: "",
      data: {
        dateFrom: null,
        dateTo: null,
      },
    });
  };
  const handleApplyFilters = () => {
    close();
  };

  // Handle input change to update dataFilter
  const handleInputChange = (field: string, value: string | null) => {
    setDataFilter((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle date change to update dataFilter
  const handleDateChange = (val: [Date | null, Date | null]) => {
    setValue(val);
    setDataFilter((prev) => ({
      ...prev,
      data: {
        dateFrom: val[0],
        dateTo: val[1],
      },
    }));
  };

  const countFilters = () => {
    let count = 0;
    if (dataFilter.name) count++;
    if (dataFilter.amount) count++;
    if (dataFilter.data.dateFrom && dataFilter.data.dateTo) count++;
    return count;
  };
  console.log(countFilters());

  return (
    <div className="order-3 lg:order-1 ms-auto lg:ms-0 ">
      <div
        onClick={open}
        className={` ${
          countFilters() > 0 ? "bg-green border-green" : ""
        } flex items-center  cursor-pointer duration-200 hover:shadow-md gap-1 justify-center px-3 py-1 h-9 border rounded-xl border-black`}
      >
        <p
          className={`${
            countFilters() > 0 ? "text-white" : ""
          } font-Regular text-base`}
        >
          Filters
        </p>
        {countFilters() > 0 && (
          <p className="font-Regular text-xs bg-black text-white rounded-full place-content-center px-[2px] aspect-square">
            +{countFilters()}
          </p>
        )}
        {countFilters() > 0 ? <Filter2Icon fill="white" /> : <Filter2Icon />}
      </div>
      {opened && (
        <ModalComp title="Filters By" opened={opened} close={close}>
          <div className="w-[564px] max-w-full">
            <form action="" className="flex flex-col w-full gap-4">
              <TextInput
                type={"text"}
                label="Name"
                placeholder="Mark James"
                value={dataFilter.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                classNames={{
                  input:
                    "bg-grayLight border-grayLight    h-11 rounded-[8px] placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                  label: "text-[16px] mb-2 font-Medium ms-1",
                
                }}
              />
              <div className="  ">
                <TextInput
                  type={"button"}
                  label={"Date"}
                  placeholder={"Write amount to search by"}
                  classNames={{
                    input:
                      "bg-white border-green pe-14   h-11 rounded-[8px] placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                    label: "text-[16px] mb-2 font-Medium ms-1",
                    wrapper:
                      "relative before:absolute before:content-[''] before:bg-[url('../../assets/icons/Calendar.svg')]  before:bg-[length:22px_22px]   before:bg-center before:bg-no-repeat before:top-1/2 before:-translate-y-1/2 before:end-0 before:text-grayMedium before:text-sm before:ps-2 before:border-s before:border-grayMedium before:w-12 before:h-8 before:place-content-center",
                  }}
                  onClick={() => {
                    close();
                    open2();
                  }}
                  value={formatDate(value[0]) + " -- " + formatDate(value[1])}
                />
              </div>
              <div className="  ">
                <TextInput
                  type={"number"}
                  label={"Amount"}
                  placeholder={"Write amount to search by"}
                  classNames={{
                    input:
                      "bg-grayLight border-grayLight pe-14   h-11 rounded-[8px] placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                    label: "text-[16px] mb-2 font-Medium ms-1",
                    wrapper:
                      "relative before:absolute before:content-['USD'] before:top-1/2 before:-translate-y-1/2 before:end-0 before:text-grayMedium before:text-sm before:ps-2 before:border-s before:border-grayMedium before:w-12 before:h-8 before:place-content-center",
                  }}
                  value={dataFilter.amount}
                  onChange={(e) => handleInputChange("amount", e.target.value)}
                />
              </div>
            </form>
            <p
              onClick={handelClearFilter}
              className="cursor-pointer font-Regular text-sm text-center px-4 py-2 mt-5 mb-2 text-blue"
            >
              Clear Filters
            </p>
            <Button
              onClick={handleApplyFilters}
              className={"w-full mx-auto max-w-[278px] mb-4 h-[54px]"}
            >
              Apply Filters
            </Button>
          </div>
        </ModalComp>
      )}
      <ModalComp opened={opened2} close={close2} title={"Select rental period"}>
        <div className="mx-auto max-w-[95%] w-[420px] lg:max-w-[280px]">
          <DatePicker
            classNames={{
              day: "data-[in-range]:bg-green data-[last-in-range]:rounded-e-[14px]  data-[first-in-range]:rounded-s-[14px] p-0 rounded-3 data-[in-range]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
            weekendDays={[]}
            type="range"
            value={value}
            onChange={handleDateChange}
            minDate={new Date()}
          />
          <div className="flex gap-6 flex-wrap bg-grayBack  rounded-xl py-2 px-3">
            <div className="flex-1 min-w-[100px]">
              <h3 className="text-[12px] text-grayMedium/50 text-center">
                Pickup
              </h3>
              <p className="text-[12px] text-grayMedium text-center">
                {formatDate(value[0]) || "__"}
              </p>
            </div>
            <div className="flex-1 min-w-[100px]">
              <h3 className="text-[12px] text-grayMedium/50 text-center">
                Return
              </h3>
              <p className="text-[12px] text-grayMedium text-center">
                {formatDate(value[1]) || "__"}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setValue([null, null]);
              setDataFilter((prev) => ({
                ...prev,
                data: {
                  dateFrom: null,
                  dateTo: null,
                },
              }));
            }}
            className="text-blue mx-auto text-center flex items-center justify-center py-3 font-Regular w-fit  text-[12px]"
          >
            Remove Dates
          </button>
          <Button
            className={"w-full"}
            onClick={() => {
              close2();
              open();
            }}
          >
            Save
          </Button>
        </div>
      </ModalComp>
    </div>
  );
}

export default FilterBilling;
