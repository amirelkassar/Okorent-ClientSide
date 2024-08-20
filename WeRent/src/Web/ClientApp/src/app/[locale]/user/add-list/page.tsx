"use client";
import React, { ChangeEvent, useState } from "react";
import Step from "./_components/step";
import { Checkbox, Radio, Select, Textarea, TextInput } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";

import StepLocation from "./_components/stepLocation";
import StepVariations from "./_components/StepVariations";
import StepAvailability from "./_components/stepAvailability";
const OptionTerms = [
  {
    value: "Flexible",
    label: "Flexible",
    title:
      "Flexible - In case of cancellation 2 days before the rental period, 100% of the rental amount is refunded. If canceled one day before the rental period, 50% of the rental amount is refunded.",
  },
  {
    value: "Medium",
    label: "Medium",
    title: "",
  },
  {
    value: "Strict",
    label: "Strict",
    title: "",
  },
];

interface Variation {
  name: string;
  attribute1: string;
  attribute2: string;
}
interface LocationProps {
  name: string;
  address: string;
}
function Page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [location, setLocation] = useState<LocationProps[]>([]);
  const [countValueInput, setCountValueInput] = useState(0);
  const [dataList, setDataList] = useState<any>({});
  console.log(dataList);
  const handleInputChangeLocation = (
    index: number,
    value: string,
    name: string
  ) => {
    const updatedVariations = location.map((loc, i) =>
      i === index ? { ...loc, [name]: value } : loc
    );
    setLocation(updatedVariations);
    setDataList({ ...dataList, addresses: updatedVariations });
  };
  const addLocation = () => {
    setLocation([...location, { name: "", address: "" }]);
  };
  const addVariation = () => {
    setVariations([
      ...variations,
      { name: "", attribute1: "", attribute2: "" },
    ]);
  };
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const updatedVariations = variations.map((variation, i) =>
      i === index ? { ...variation, [name]: value } : variation
    );
    setVariations(updatedVariations);
    setDataList({ ...dataList, Variations: updatedVariations });
  };
  const handleInputChangeSelect = (index: number, value: any, name: string) => {
    const updatedVariations = variations.map((variation, i) =>
      i === index ? { ...variation, [name]: value } : variation
    );
    setVariations(updatedVariations);
    setDataList({ ...dataList, Variations: updatedVariations });
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

  return (
    <div className="w-[810px]">
      <Step title="Choose item category" active stepNum={1}>
        <Select
          data={[
            "category",
            "category2",
            "category3",
            "category4",
            "category5",
          ]}
          leftSectionPointerEvents="none"
          rightSection={<DownIcon />}
          placeholder="Select category"
          searchable
          onChange={(e) => {
            setDataList({ ...dataList, category: e });
          }}
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",

            wrapper: "h-full",
            dropdown:
              "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
            option: "hover:bg-green hover:text-white duration-300 ",
          }}
          className="h-[64px]   duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </Step>
      <Step
        title="Describe your item"
        active={dataList?.category ? true : false}
        stepNum={2}
      >
        <TextInput
          placeholder="Add item title here"
          onChange={(e) => {
            setDataList({
              ...dataList,
              Describe: {
                ...dataList.Describe,
                title: e.target.value,
              },
            });
          }}
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
            wrapper: "h-full",
          }}
          className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
        <Textarea
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
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
            wrapper: "h-full",
          }}
          className="  mb-6 duration-200 min-h-[190px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </Step>
      <Step
        title="Upload item pictures here"
        active={dataList.Describe?.title && dataList.Describe?.dec}
        stepNum={3}
        dec="You can upload up to 8 images"
      >
        <DropImg setDataList={setDataList} dataList={dataList} />
      </Step>
      <Step
        title="Add item price"
        active={
          dataList.pictures
            ? dataList.pictures.length > 0
              ? true
              : false
            : false
        }
        stepNum={4}
        dec="Try to add lower price for longer bookings"
      >
        <div className="flex items-center gap-4">
          <TextInput
            name="name"
            label={"Price for 1 Day"}
            placeholder={"Add Price Here"}
            onChange={(e) => {
              setDataList({
                ...dataList,
                priceItems: {
                  ...dataList.priceItems,
                  OneDay: e.target.value,
                },
              });
            }}
            classNames={{
              label: "text-[16px] text-grayMedium mb-2",
              input:
                " text-black max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  duration-200 max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
          <TextInput
            label={"Price for 3 Days"}
            name="attribute1"
            placeholder={"Add Price Here"}
            onChange={(e) => {
              setDataList({
                ...dataList,
                priceItems: {
                  ...dataList.priceItems,
                  ThreeDay: e.target.value,
                },
              });
            }}
            classNames={{
              label: "text-[16px] text-grayMedium mb-2",
              input:
                " text-black max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  duration-200 max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
          <TextInput
            label={"Price for 1 Week"}
            name="attribute2"
            placeholder={"Add Price Here"}
            onChange={(e) => {
              setDataList({
                ...dataList,
                priceItems: {
                  ...dataList.priceItems,
                  Week: e.target.value,
                },
              });
            }}
            classNames={{
              label: "text-[16px] text-grayMedium mb-2",
              input:
                " text-black max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  duration-200 max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
        </div>
      </Step>
      <StepLocation
        active={
          dataList.priceItems?.OneDay &&
          dataList.priceItems?.ThreeDay &&
          dataList.priceItems?.Week
        }
        addLocation={addLocation}
        location={location}
        handleInputChangeLocation={handleInputChangeLocation}
      />

      <Step
        title="Cancellation Terms"
        active={
          dataList.addresses
            ? dataList.addresses.length > 0
              ? true
              : false
            : false
        }
        stepNum={6}
      >
        <Radio.Group
          onChange={(e) => {
            setDataList({ ...dataList, Terms: e });
          }}
          name="OptionTerms"
        >
          <div className="flex  items-center justify-between gap-3 flex-wrap">
            {OptionTerms.map((option, inedx) => {
              return (
                <Radio
                  color="#88BA52"
                  key={inedx}
                  value={option.value}
                  label={option.label}
                  classNames={{
                    icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                  }}
                />
              );
            })}
          </div>
        </Radio.Group>
        <div>
          <p className="mt-4 text-[14px] text-grayMedium">
            {OptionTerms[0].title}
          </p>
        </div>
      </Step>
      <Step title="Value of the item" active={dataList.Terms} stepNum={7}>
        <TextInput
          onChange={(e) => {
            setDataList({ ...dataList, value: e.target.value });
          }}
          placeholder="Add item value here"
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
            wrapper: "h-full",
          }}
          className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </Step>
      <StepAvailability dataList={dataList} setDataList={setDataList} />
      <StepVariations
        handleInputChange={handleInputChange}
        variations={variations}
        setVariations={setVariations}
        addVariation={addVariation}
        handleInputChangeSelect={handleInputChangeSelect}
        active={dataList.Availability}
      />
      <Step title="Stock" active={dataList.Variations?.length > 0} stepNum={10}>
        <TextInput
          placeholder="Add available stock number here"
          onChange={(e) => {
            setDataList({ ...dataList, Stock: e.target.value });
          }}
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
            wrapper: "h-full",
          }}
          className="h-[64px] mb-6 duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </Step>
      <Step title="Item Status" last active={dataList.Stock} stepNum={11}>
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
          Set as Active to make the item available for rent Set as Not Active to
          keep the item unavailable for rent
        </p>
      </Step>
      <div className="flex items-center gap-7">
        <Button className={"w-[208px] h-[64px]"}>Save</Button>
        <Button
          className={"w-[208px] h-[64px] text-black bg-grayBack border-none"}
        >
          Save and Promote
        </Button>
      </div>
    </div>
  );
}

export default Page;
