"use client";
import DownIcon from "@/src/assets/icons/down";
import VisaTitleBlack from "@/src/assets/icons/visaTitleBlack";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { Link } from "@/src/navigation";
import { Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import ModalEditAccount from "./modal-edit-account";

function WithdrawlInfo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(new Date());

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    }).format(date);
  };
  return (
    <div className=" bg-white/50 rounded-3xl border-green border shadow-md pt-10 pb-6  px-8  ">
      <div className="flex flex-col lg:flex-row  justify-between flex-wrap xl:flex-nowrap gap-5 mb-6 lg:mb-9">
        <div className="flex-1">
          <h3 className="text-2xl font-Regular mb-10">Withdrawl Option</h3>
          <div className="flex gap-10 flex-col lg:flex-row justify-between">
            <div>
              <h4 className="text-base font-Regular mb-2">Withdrawl Option</h4>
              <div className="flex gap-4 lgl:gap-9">
                <div className="flex  gap-2">
                  <VisaTitleBlack className="mt-1" />
                  <div>
                    <p className="text-grayMedium text-base font-Regular">
                      VISA ending in 0555
                    </p>
                    <p className="text-grayMedium text-base font-Regular">
                      Expires 04/29
                    </p>
                  </div>
                </div>
                <button
                  onClick={open3}
                  className="text-blue font-Regular text-base"
                >
                  Change{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Button className={"h-9 !px-8 rounded-lg w-fit"}>Edit</Button>
      </div>
      <span className="w-full block h-[1px] bg-[#B6BFC6] mb-6"></span>
      <div className="flex justify-between gap-4 flex-col lg:flex-row">
        <div>
          <h4 className="text-base font-Regular">Last Withdrawl</h4>
          <p className="text-base font-Regular text-grayMedium mb-2">
            210$ On Aug 20, 2024 to Visa ending in 0555
          </p>
          <Link href={"#"} className="text-blue font-Regular text-base">
            View Withdrawl History
          </Link>
        </div>
        <Button
          onClick={open}
          className={
            "bg-white w-fit text-nowrap text-green border h-9 !rounded-lg !px-4"
          }
        >
          Schedule Withdrawal
        </Button>
      </div>
      {opened && (
        <ModalComp
          title="Schedule your withdrawls automatically"
          opened={opened}
          close={close}
        >
          <div className="w-[564px] max-w-full">
            <form action="" className="flex flex-col w-full gap-4">
              <Select
                data={["1-Week", "2-Week", "3-Week", "4-Week"]}
                leftSectionPointerEvents="none"
                rightSection={<DownIcon />}
                placeholder="Ex. Every 1 Week"
                label={"Frequent of withdrawl"}
                defaultValue={"08:00"}
                classNames={{
                  label: "text-base mb-2 font-Medium ms-1",
                  input:
                    "bg-white border-green/30 text-base focus:border-green active:border-green   h-16 rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",

                  wrapper: "h-[64px]",
                  dropdown:
                    "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                  option: "hover:bg-green hover:text-white duration-300 ",
                }}
                className="w-full mb-2"
              />

              <TextInput
                type={"button"}
                label={"Schedule starting date"}
                placeholder={"Choose specific starting date"}
                classNames={{
                  input:
                    "bg-white border-green ps-12 cursor-pointer  h-16  rounded-xl placeholder:text-grayMedium duration-300 focus:border-green focus:bg-white ",
                  label: "text-[16px] mb-2 font-Medium ms-1",
                  wrapper:
                    "relative before:absolute before:content-[''] before:bg-[url('../../assets/icons/Calendar.svg')]  before:bg-[length:22px_22px]   before:bg-center before:bg-no-repeat before:top-1/2 before:-translate-y-1/2 before:start-0     before:w-12 before:h-8 before:place-content-center",
                }}
                className=" cursor-pointer"
                value={formatDate(value) || "Choose specific starting date"}
                onClick={() => {
                  close();
                  open2();
                }}
              />

              <Select
                data={["5000", "2504", "1000", "400"]}
                leftSectionPointerEvents="none"
                rightSection={<DownIcon />}
                placeholder="Visa Ending with 5550"
                label={"Withdrawl option"}
                defaultValue={"08:00"}
                classNames={{
                  label: "text-base mb-2 font-Medium ms-1",
                  input:
                    "bg-white border-green/30 text-base focus:border-green active:border-green   h-16 rounded-xl placeholder:text-grayMedium placeholder:text-base duration-300 focus:border-green focus:bg-white ",

                  wrapper: "h-[64px]",
                  dropdown:
                    "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                  option: "hover:bg-green hover:text-white duration-300 ",
                }}
                className="w-full mb-2"
              />
            </form>

            <Button
              onClick={close}
              className={"w-full mx-auto mt-11  mb-4 h-[64px]"}
            >
              Save and close
            </Button>
          </div>
        </ModalComp>
      )}
      <ModalComp
        opened={opened2}
        close={close2}
        title={"Scheudle Starting Date"}
      >
        <div className="mx-auto max-w-[95%] w-[420px] lg:max-w-[280px]">
          <DatePicker
            classNames={{
              day: "data-[selected]:bg-green data-[selected]:rounded-full   p-0 rounded-3 data-[selected]:text-white",
              monthCell: "px-0",
              levelsGroup: "justify-center mb-3",
              weekday: "text-black",
              calendarHeader: "text-grayMedium",
            }}
            weekendDays={[]}
            value={value}
            onChange={setValue}
            minDate={new Date()}
          />

          <Button
            className={"w-full mt-6"}
            onClick={() => {
              close2();
              open();
            }}
          >
            Save
          </Button>
        </div>
      </ModalComp>
      <ModalEditAccount opened={opened3} close={close3} />
    </div>
  );
}

export default WithdrawlInfo;
