"use client";
import BarcodeIcon from "@/src/assets/icons/barcode";
import DateIcon from "@/src/assets/icons/date";
import FileIcon from "@/src/assets/icons/file";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import SearchIcon from "@/src/assets/icons/search";
import AccordionRow from "@/src/components/accordion-row";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import InputTextarea from "@/src/components/InputTextarea";
import SelectInput from "@/src/components/select-input";
import { Accordion, Group, Radio } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { Dropzone } from "@mantine/dropzone";
import Image from "next/image";
import dropImg from "@/src/assets/images/dropImg.png";
import React from "react";
const dataLocation = [
  { value: "1", label: "Location" },
  { value: "2", label: "Location2" },
];
function page() {
  return (
    <div className="mb-section">
      <div className="flex mb-3 items-center justify-between gap-4 w-full">
        <h2 className=" text-base mdl:text-2xl font-SemiBold">
          Maintenance Information
        </h2>
        <div className="flex items-center gap-3">
          <Button
            className={
              "!px-7 !text-xs h-9 hover:duration-300 text-black bg-grayBack border-none"
            }
          >
            Save as draft
          </Button>
          <Button className={"!px-7 !text-xs h-9 hover:duration-300"}>
            Save this order
          </Button>
        </div>
      </div>
      <div className="flex gap-8 flex-col lgl:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <Card className="p-4">
            <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
              <div className="bg-white   rounded-xl  h-16 border-green/50 border overflow-hidden  min-w-[calc(50%-16px)] flex-1 flex">
                <Input
                  leftSection={
                    <SearchIcon fill="#0F2A43" className="w-4 h-auto" />
                  }
                  placeholder="Search Customers"
                  className="h-full w-[calc(100%-60px)]"
                  inputClassName=" bg-white   rounded-none w-full h-16  border-none"
                />
                <button className="w-[60px] h-16 border-s border-green/50 flex items-center duration-300 justify-center hover:bg-blueLight/60">
                  <BarcodeIcon className="w-6 h-auto" fill="#0F2A43" />
                </button>
              </div>
              <Input
                placeholder="Quantity"
                className="h-full flex-1"
                inputClassName=" bg-white   rounded-xl w-full h-16  "
              />
              <SelectInput
                data={dataLocation}
                placeholder="Store Location"
                onChange={(e) => {
                  console.log(e);
                }}
                inputClassName="!h-16 "
                className="h-auto mdl:w-[calc(50%-16px)] min-w-[calc(50%-16px)]  w-full"
              />
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="mb-3 font-SemiBold text-base">Maintenance Period</h3>
            <div className="mb-6 pb-7 border-b border-grayLight">
              <Radio.Group defaultValue="Only once">
                <Group className="flex gap-2">
                  {["Only once", "Every Month", "Bi Annually"].map((item) => (
                    <Radio
                      key={item}
                      labelPosition="left"
                      value={item}
                      label={item}
                      color="#88BA52"
                      classNames={{
                        root: "border border-green rounded-xl px-4 py-2 flex items-center cursor-pointer transition-all focus-within:ring-2 focus-within:ring-green-400",

                        label: "text-sm cursor-pointer",
                      }}
                    />
                  ))}
                </Group>
              </Radio.Group>
            </div>
            <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
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
            </div>
          </Card>
          <Card className="p-4">
            <h3 className="mb-3 font-SemiBold text-base">Details</h3>
            <div className="flex gap-y-5 gap-x-8 flex-wrap flex-col md:flex-row">
              <Input
                label="Reported By"
                placeholder="Write at least three characters of the name"
                sectionType="user"
                className="h-auto min-w-[calc(50%-16px)] flex-1"
                inputClassName=" bg-white   rounded-xl  h-16 border-green/50"
              />
              <Input
                label="Assigned To"
                placeholder="Write at least three characters of the name"
                sectionType="user"
                className="h-auto min-w-[calc(50%-16px)] flex-1"
                inputClassName=" bg-white   rounded-xl  h-16 border-green/50"
              />
              <Input
                label="Maintenance Cost"
                defaultValue="355.00"
                leftSection={<span className="text-lg">USD</span>}
                inputClassName=" bg-white   rounded-xl  h-16 border-green/50 ps-11"
                className="h-auto min-w-[calc(50%-16px)] "
              />
            </div>
          </Card>
        </div>
        <Card className=" w-full lgl:w-[520px] p-4">
          <Accordion variant="separated" className="flex flex-col gap-6">
            <AccordionRow
              title="Remarks"
              icon={() => (
                <NoteTableIcon fill="#0F2A43" className="w-full h-auto" />
              )}
            >
              <div>
                <InputTextarea
                  placeholder="Answer"
                  autosize
                  className="  mb-4 duration-200  bg-white rounded-2xl  text-grayMedium"
                />
              </div>
            </AccordionRow>
            <AccordionRow
              title="Files"
              icon={() => <FileIcon fill="#0F2A43" className="w-full h-auto" />}
            >
              <div>
                <div className="flex items-center justify-center gap-2  ">
                  <Dropzone
                    onDrop={(acceptedFiles) => console.log(acceptedFiles)}
                    multiple={false}
                    onReject={(files) => console.log("Rejected files", files)}
                    maxSize={3 * 1024 ** 2} // 3MB
                    className=" w-full p-10 place-content-center rounded-2xl   border-green/50 bg-white overflow-hidden border-solid border"
                  >
                    <div className="h-full place-content-center   w-full flex justify-center items-center flex-col gap-3">
                      <Image
                        src={dropImg}
                        alt="dropImg"
                        width={160}
                        height={116}
                        className="w-[160px] h-[116px] mx-auto"
                      />
                      <p className="text-base font-Regular text-grayMedium text-center">
                        Click to browse images Or Drag and Drop your image here
                      </p>
                    </div>
                  </Dropzone>
                </div>
              </div>
            </AccordionRow>
          </Accordion>
        </Card>
      </div>
    </div>
  );
}

export default page;
