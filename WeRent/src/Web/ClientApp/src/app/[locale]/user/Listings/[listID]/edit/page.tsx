"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Checkbox, Radio, Select, Textarea, TextInput } from "@mantine/core";
import DownIcon from "@/src/assets/icons/down";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";
import StepLocation from "./_components/stepLocation";
import StepAvailability from "./_components/stepAvailability";
import house1 from "@/src/assets/images/house1.png";
import house2 from "@/src/assets/images/house2.png";

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
const data = {
  category: "category3",
  Describe: {
    title: "item title",
    dec: "dec for item",
  },
  pictures: [house1, house2, house1],
  priceItems: {
    OneDay: "10",
    ThreeDay: "70",
    Week: "110",
  },
  addresses: [
    {
      name: "",
      address:
        "8 Ibn Snan, ADH Dhahereyah WA Izbat as Safih, El Raml 1, Alexandria Governorate 5450045, Egypt",
    },
    {
      name: "",
      address:
        "مسجد علي إبن أبي طالب 26، السيوف قبلي (تشمل عزبة درباÙ، قسم ثان المنتزة،، السيوف قبلي (تشمل عزبة درباÙ، اول المنتزه، الإسكندرية،، As Soyouf Qebli (Include Izbat Derbanah), Third Al Montazah, Alexandria Governorate 5515260, Egypt",
    },
  ],
  Terms: "Flexible",
  value: "800",
  Availability: "pick",
  Variations: [
    {
      name: "",
      attribute1: "Color2",
      attribute2: "dsfdf",
    },
    {
      name: "",
      attribute1: "Color5",
      attribute2: "ahemd",
    },
  ],
  Stock: "500",
  Status: "Not",
};
function Page() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [location, setLocation] = useState<LocationProps[]>([]);
  const [countValueInput, setCountValueInput] = useState(0);
  const [dataList, setDataList] = useState<any>({});
  useEffect(() => {
    setDataList(data);
    setLocation(data.addresses);
    setVariations(data.Variations);
    setSelectedCheckbox(data.Status);
  }, []);
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
    <div className="w-full lg:w-[810px] mb-20 flex flex-col gap-4">
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Choose item category
        </h3>
        <Select
          data={[
            "category",
            "category2",
            "category3",
            "category4",
            "category5",
          ]}
          defaultValue={data.category}
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
      </div>
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Describtion
        </h3>
        <TextInput
          placeholder="Add item title here"
          defaultValue={data.Describe.title}
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
          defaultValue={data.Describe.dec}
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
          className="  lg:mb-6 duration-200 min-h-[190px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </div>
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Item Images
        </h3>
        <p className="text-grayMedium mb-4  text-sm lg:text-base font-Regular">
          You can upload up to 8 images
        </p>
        <DropImg setDataList={setDataList} dataList={dataList} />
      </div>
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>Item Price</h3>
        <p className="text-grayMedium mb-4  text-sm lg:text-base font-Regular">
          Try to add lower price for longer bookings
        </p>
        <div className="flex items-center flex-wrap gap-4">
          <TextInput
            name="name"
            label={"Price for 1 Day"}
            placeholder={"Add Price Here"}
            defaultValue={data.priceItems.OneDay}
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
              label: "text-sm lg:text-[16px] text-grayMedium mb-2",
              input:
                " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  min-w-[170px] w-full duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
          <TextInput
            label={"Price for 3 Days"}
            name="attribute1"
            placeholder={"Add Price Here"}
            defaultValue={data.priceItems.ThreeDay}
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
              label: "text-sm lg:text-[16px] text-grayMedium mb-2",
              input:
                " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  min-w-[170px] w-full duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
          <TextInput
            label={"Price for 1 Week"}
            name="attribute2"
            placeholder={"Add Price Here"}
            defaultValue={data.priceItems.Week}
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
              label: "text-sm lg:text-[16px] text-grayMedium mb-2",
              input:
                " text-black md:max-w-[200px] rounded-2xl text-grayMedium bg-white  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
              wrapper: "h-[64px]",
            }}
            className=" flex-1  min-w-[170px] w-full duration-200 md:max-w-[200px] min-h-[64px] rounded-2xl text-grayMedium"
          />
        </div>
      </div>
      <StepLocation
        addLocation={addLocation}
        location={location}
        handleInputChangeLocation={handleInputChangeLocation}
      />
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Cancellation Terms
        </h3>
        <Radio.Group
          defaultValue={data.Terms}
          onChange={(e) => {
            setDataList({ ...dataList, Terms: e });
          }}
          name="OptionTerms"
        >
          <div className="flex  items-center my-6 justify-between gap-3 flex-wrap">
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
      </div>
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Value of the item
        </h3>
        <TextInput
          defaultValue={data.value}
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
      </div>

      <StepAvailability
        defaultValue={data.Availability}
        dataList={dataList}
        setDataList={setDataList}
      />
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>Stock</h3>
        <TextInput
          placeholder="Add available stock number here"
          defaultValue={data.Stock}
          onChange={(e) => {
            setDataList({ ...dataList, Stock: e.target.value });
          }}
          classNames={{
            input:
              " text-black rounded-2xl text-grayMedium  h-full border-none placeholder:text-grayMedium placeholder:opacity-100 ",
            wrapper: "h-full",
          }}
          className="h-[64px] lg:mb-6 duration-200 min-h-[64px] bg-white rounded-2xl border-2 border-green text-grayMedium"
        />
      </div>

      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Item Status
        </h3>
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
      </div>

      <div className="flex items-center mt-8 gap-7 md:flex-row flex-col">
        <Button className={"w-full lg:w-[208px] h-[64px]"}>Save Edits</Button>
        <Button
          className={
            "w-full lg:w-[208px] h-[64px] text-black bg-grayBack border-none"
          }
        >
          Discard Edits
        </Button>
      </div>
    </div>
  );
}

export default Page;
