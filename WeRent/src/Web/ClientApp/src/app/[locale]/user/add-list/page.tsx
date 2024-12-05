"use client";
import React, { useState } from "react";
import Step from "./_components/step";
import { Checkbox, Select, Textarea, TextInput } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";
import StepLocation from "./_components/stepLocation";
import StepAvailability from "./_components/stepAvailability";
import StepFAQ from "./_components/stepFAQ";
import Preview from "./_components/preview";
import LinkGreen from "@/src/components/linkGreen";
import { useSearchParams } from "next/navigation";
import InputTextarea from "@/src/components/InputTextarea";
import {
  GetCategory,
  useCreateListingMutation,
} from "@/src/hooks/queries/user/add-lisiting";

interface LocationProps {
  id: number;
  name: string;
  address: string;
}
interface FAQ {
  question: string;
  answer: string;
}
function Page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationProps[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }]);
  const [dataList, setDataList] = useState<any>({});
  const searchparams = useSearchParams();
  console.log(dataList);

  const handleInputChangeLocation = (
    index: number,
    value: string,
    name: string
  ) => {
    const updatedLocation = location.map((loc, i) =>
      loc.id === index ? { ...loc, [name]: value } : loc
    );
    setLocation(updatedLocation);
    setDataList({ ...dataList, addresses: updatedLocation });
  };
  const handleRemoveLocation = (index: number) => {
    const updatedLocations = location.filter((loc, i) => loc.id !== index);
    setLocation(updatedLocations);
    setDataList({ ...dataList, addresses: updatedLocations });
  };

  const addLocation = () => {
    setLocation([
      ...location,
      { id: Math.floor(Math.random() * 100) + 1, name: "", address: "" },
    ]);
  };
  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, Status: value });
    }
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQ: newFaqs });
  };
  const { data: dataCategory } = GetCategory();
  console.log(dataCategory);
  const { mutateAsync: createListing } = useCreateListingMutation();
  const handleSubmit = async () => {
    await createListing(dataList);
  };
  return (
    <div
      className={`"w-full  ${
        searchparams.get("preview") === "true" ? "" : "lg:w-[810px]"
      }`}
    >
      {searchparams.get("preview") === "true" ? (
        <Preview />
      ) : (
        <div className="w-full">
          <Step title="Choose item category" active stepNum={1}>
            <Select
              data={dataCategory?.data?.map((item: any) => {
                return { label: item.name, value: item.id };
              })}
              leftSectionPointerEvents="none"
              rightSection={<DownIcon />}
              placeholder="Select category"
              searchable
              onChange={(e) => {
                setDataList({ ...dataList, CategoryId: e });
              }}
              classNames={{
                input:
                  " text-black rounded-2xl text-grayMedium  h-full border border-green/30 focus:border-green active:border-green placeholder:text-grayMedium placeholder:opacity-100 ",

                wrapper: "h-full",
                dropdown:
                  "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                option: "hover:bg-green hover:text-white duration-300 ",
              }}
              className="h-[64px]   duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium"
            />
          </Step>
          <Step
            title="Describe your item"
            active={dataList?.CategoryId ? true : false}
            stepNum={2}
          >
            <TextInput
              placeholder="Add item title here"
              onChange={(e) => {
                setDataList({
                  ...dataList,
                  Name: e.target.value,
                 
                });
              }}
              classNames={{
                input:
                  " text-black rounded-2xl text-grayMedium  h-full border border-green/30 focus:border-green active:border-green placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl  text-grayMedium"
            />
            <InputTextarea
              onChange={(e) => {
                setDataList({
                  ...dataList,
                  Describe: {
                    ...dataList.Describe,
                    dec: e.target.value,
                  },
                });
              }}
              autosize
              placeholder="Add as much details as you can here about your item "
            />
          </Step>
          <Step
            title="Upload item pictures here"
            active={dataList.Name && dataList.Describe?.dec}
            stepNum={3}
            dec="You can upload up to 8 images"
          >
            <DropImg setDataList={setDataList} dataList={dataList} />
          </Step>
          <Step
            title="Add item price"
            active={
              dataList.ProductImageFiles
                ? dataList.ProductImageFiles.length > 0
                  ? true
                  : false
                : false
            }
            stepNum={4}
            dec="Try to add lower price for longer bookings"
          >
            <div className="flex items-center flex-wrap gap-4">
              <TextInput
                name="name"
                label={"Price for 3 Days"}
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    DailyPrice: e.target.value,
                  });
                }}
                classNames={{
                  label: "text-sm lg:text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[170px] w-full  duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
              />
              <TextInput
                label={"Price for 1 Week"}
                name="attribute1"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    WeeklyPrice: e.target.value,
                  });
                }}
                classNames={{
                  label: "text-sm lg:text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[170px] w-full  duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
              />
              <TextInput
                label={"Price for 1 Month"}
                name="attribute2"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    MonthlyPrice: e.target.value,
                  });
                }}
                classNames={{
                  label: "text-sm lg:text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[170px] w-full  duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
              />
            </div>
          </Step>
          <StepLocation
            active={
              dataList.DailyPrice &&
              dataList.WeeklyPrice &&
              dataList.MonthlyPrice
            }
            addLocation={addLocation}
            location={location}
            handleInputChangeLocation={handleInputChangeLocation}
            handleRemoveLocation={handleRemoveLocation}
          />

          <Step
            title="Value of the item"
            active={
              dataList.addresses
                ? dataList.addresses.length > 0
                  ? true
                  : false
                : false
            }
            stepNum={6}
          >
            <TextInput
              onChange={(e) => {
                setDataList({ ...dataList, value: e.target.value });
              }}
              placeholder="Add item value here"
              classNames={{
                input:
                  " text-black text-sm lg:text-base rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
            />
          </Step>
          <StepAvailability dataList={dataList} setDataList={setDataList} />

          <Step
            title="Stock"
            active={
              dataList.IsAvailable ||
              (dataList.AvailableFrom && dataList.AvailableTo)
            }
            stepNum={8}
          >
            <TextInput
              placeholder="Add available stock number here"
              onChange={(e) => {
                setDataList({ ...dataList, Stock: e.target.value });
              }}
              classNames={{
                input:
                  " text-black rounded-2xl text-grayMedium  h-full  border border-green/30 focus:border-green active:border-green placeholder:text-grayMedium placeholder:opacity-100 ",
                wrapper: "h-full",
              }}
              className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
            />
          </Step>
          <Step title="Item Status" active={dataList.Stock} stepNum={9}>
            <div>
              <div className="flex flex-col gap-4">
                <Checkbox
                  checked={selectedCheckbox === "Active"}
                  onChange={(e) => {
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value="Active"
                  label="Active"
                />
                <Checkbox
                  checked={selectedCheckbox === "Not"}
                  onChange={(e) => {
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value="Not"
                  label="Not Active"
                />
              </div>

              <p className="mt-4 text-[14px] text-grayMedium font-Regular">
                Set as Active to make the item available for rent Set as Not
                Active to keep the item unavailable for rent
              </p>
            </div>
          </Step>
          <StepFAQ
            faqs={faqs}
            setFaqs={setFaqs}
            active={dataList.Status}
            handleChangeFAQ={handleChangeFAQ}
          />
        </div>
      )}

      <div className="flex items-center mt-16 gap-7 md:flex-row flex-col">
        <Button
          onClick={handleSubmit}
          className={"w-full lg:w-[208px] h-[64px]"}
        >
          Save
        </Button>
        {searchparams.get("preview") === "true" ? (
          <LinkGreen
            href={"?preview=false"}
            className={
              "w-full lg:w-[208px] h-[64px] text-black bg-grayBack border-none"
            }
          >
            Back
          </LinkGreen>
        ) : (
          <LinkGreen
            href={"?preview=true"}
            className={
              "w-full lg:w-[208px] h-[64px] text-black bg-grayBack border-none"
            }
          >
            Preview
          </LinkGreen>
        )}
      </div>
    </div>
  );
}

export default Page;
