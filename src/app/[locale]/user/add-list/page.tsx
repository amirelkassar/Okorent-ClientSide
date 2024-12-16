"use client";
import React, { useEffect, useState } from "react";
import Step from "./_components/step";
import { Checkbox } from "@mantine/core";
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
  GetSubCategory,
  useCreateListingMutation,
} from "@/src/hooks/queries/user/add-lisiting";
import SelectInput from "@/src/components/select-input";
import Input from "@/src/components/input";

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

  const handleInputChangeLocation = (ids: any[]) => {
    setLocation(ids);
    setDataList({ ...dataList, UserStockIds: ids });
  };
  const handleRemoveLocation = (index: any) => {
    const updatedLocations = location.filter((loc) => loc !== index);
    setLocation(updatedLocations);
    setDataList({ ...dataList, UserStockIds: updatedLocations });
  };

  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, IsActive: value === "true" ? true : false });
    }
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQs: newFaqs });
  };
  const { data: dataCategory } = GetCategory();
  const { data: dataSubCategory, refetch: RefetchGetSubCategory } =
    GetSubCategory(dataList?.CategoryId);
  const { mutateAsync: createListing } = useCreateListingMutation();
  const handleSubmit = async () => {
    await createListing(dataList);
  };
  useEffect(() => {
    RefetchGetSubCategory();
  }, [dataList?.CategoryId]);
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
            <SelectInput
              data={dataCategory?.data?.map((item: any) => {
                return { label: item.name, value: item.id };
              })}
              placeholder="Select category"
              onChange={(e) => {
                setDataList({ ...dataList, CategoryId: e });
              }}
              inputClassName="!rounded-2xl text-grayMedium  !h-16 "
              className=" bg-white "
            />
            <SelectInput
              label="Select SubCategory"
              data={dataSubCategory?.data?.map((item: any) => {
                return { label: item.name, value: item.id };
              })}
              placeholder="Select SubCategory"
              onChange={(e) => {
                setDataList({ ...dataList, SubCategoryId: e });
              }}
              inputClassName="!rounded-2xl text-grayMedium  !h-16 "
              className="mt-4"
            />
          </Step>
          <Step
            title="Describe your item"
            active={dataList?.CategoryId ? true : false}
            stepNum={2}
          >
            <Input
              placeholder="Add item title here"
              onChange={(e) => {
                setDataList({
                  ...dataList,
                  Name: e.target.value,
                });
              }}
              inputClassName="  !rounded-2xl   bg-white !h-16 border"
              className=" mb-6 "
            />
            <InputTextarea
              onChange={(e) => {
                setDataList({
                  ...dataList,
                  Description: e.target.value,
                });
              }}
              autosize
              placeholder="Add as much details as you can here about your item "
            />
          </Step>
          <Step
            title="Upload item pictures here"
            active={dataList.Name && dataList.Description}
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
              <Input
                name="name"
                label={"Price for 1 Day"}
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    DailyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full !rounded-2xl bg-white  border-2   h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
              />
              <Input
                label={"Price for 1 Week"}
                name="attribute1"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    WeeklyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full !rounded-2xl bg-white  border-2   h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
              />
              <Input
                label={"Price for 1 Month"}
                name="attribute2"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  setDataList({
                    ...dataList,
                    MonthlyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full !rounded-2xl bg-white  border-2   h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
              />
            </div>
          </Step>
          <StepLocation
            active={
              dataList.DailyPrice &&
              dataList.WeeklyPrice &&
              dataList.MonthlyPrice
            }
            handleRemoveLocation={handleRemoveLocation}
            location={location}
            handleInputChangeLocation={handleInputChangeLocation}
          />
          <Step
            title="Value of the item"
            active={
              dataList.UserStockIds
                ? dataList.UserStockIds.length > 0
                  ? true
                  : false
                : false
            }
            stepNum={6}
          >
            <Input
              onChange={(e) => {
                setDataList({ ...dataList, Cost: e.target.value });
              }}
              placeholder="Add item value here"
              inputClassName="!rounded-2xl bg-white  !h-16 border-2 "
              className="mb-6 "
            />
          </Step>
          <StepAvailability dataList={dataList} setDataList={setDataList} />
          <Step
            title="Stock"
            active={
              dataList.AlwaysAvailable ||
              (dataList.AvailableFrom && dataList.AvailableTo)
            }
            stepNum={8}
          >
            <Input
              placeholder="Add available stock number here"
              onChange={(e) => {
                setDataList({ ...dataList, TotalQuantity: e.target.value });
              }}
              inputClassName="!rounded-2xl bg-white  !h-16 border-2 "
              className="mb-6 "
            />
          </Step>
          <Step title="Item Status" active={dataList.TotalQuantity} stepNum={9}>
            <div>
              <div className="flex flex-col gap-4">
                <Checkbox
                  checked={selectedCheckbox === "true"}
                  onChange={(e) => {
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value={"true"}
                  label="Active"
                />
                <Checkbox
                  checked={selectedCheckbox === "false"}
                  onChange={(e) => {
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value={"false"}
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
            active={dataList.IsActive === true || dataList.IsActive === false}
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
