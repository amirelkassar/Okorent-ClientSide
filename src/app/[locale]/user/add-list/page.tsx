"use client";
import React, { useState } from "react";
import Step from "./_components/step";
import { Checkbox } from "@mantine/core";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";
import StepLocation from "./_components/stepLocation";
import StepAvailability from "./_components/stepAvailability";
import StepFAQ from "./_components/stepFAQ";
import Preview from "./_components/preview";
import { useSearchParams } from "next/navigation";
import InputTextarea from "@/src/components/InputTextarea";
import { useCreateListingMutation } from "@/src/hooks/queries/user/add-lisiting";
import SelectInput from "@/src/components/select-input";
import Input from "@/src/components/input";
import { Toast } from "@/src/components/toast";
import GetErrorMsg from "@/src/components/getErrorMsg";
import {
  GetCategory,
  GetSubCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import ErrorMsg from "@/src/components/error-msg";

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
  //Hooks
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationProps[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [dataList, setDataList] = useState<any>({});
  const searchparams = useSearchParams();

  //query
  const {
    mutateAsync: createListing,
    error,
    isError,
    reset,
  } = useCreateListingMutation();
  const { data: dataCategory } = GetCategory();

  const { data: dataSubCategory, refetch: RefetchGetSubCategory } =
    GetSubCategory(dataList?.CategoryId);

  //Functions
  const handleInputChangeLocation = (ids: any[]) => {
    reset();
    setLocation(ids);
    setDataList({ ...dataList, UserStockIds: ids });
  };
  const handleRemoveLocation = (index: any) => {
    reset();
    const updatedLocations = location.filter((loc) => loc !== index);
    setLocation(updatedLocations);
    setDataList({ ...dataList, UserStockIds: updatedLocations });
  };

  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    reset();
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, IsActive: value === "true" ? true : false });
    }
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    reset();
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQs: newFaqs });
  };

  const handleSubmit = async () => {
    reset();
    await Toast.Promise(createListing(dataList), {
      success: "successfully Create Product",
      onSuccess: async (res) => {
        console.log(res);
      },
    });
  };

  return (
    <div
      className={`"w-full max-w-full ${
        searchparams.get("preview") === "true" ? "" : "lg:w-[810px]"
      }`}
    >
      {searchparams.get("preview") === "true" ? (
        <Preview />
      ) : (
        <div className="w-full">
          <Step title="Choose item category" active stepNum={1}>
            <SelectInput
              data={dataCategory?.data?.items?.map((item: any) => {
                return { label: item.name, value: item.id };
              })}
              placeholder="Select category"
              onChange={(e) => {
                reset();

                setDataList({
                  ...dataList,
                  CategoryId: e,
                  SubCategoryId: null,
                });
                RefetchGetSubCategory();
              }}
              inputClassName=" !rounded-xl md:!rounded-2xl text-grayMedium !h-12  md:!h-16 bg-white"
              error={GetErrorMsg(error, "CategoryId")}
            />
            <SelectInput
              label="Select SubCategory"
              data={dataSubCategory?.data?.map((item: any) => {
                return { label: item.name, value: item.id };
              })}
              value={dataList?.SubCategoryId}
              placeholder="Select SubCategory"
              onChange={(e) => {
                reset();
                setDataList({ ...dataList, SubCategoryId: e });
              }}
              inputClassName=" !rounded-xl md:!rounded-2xl text-grayMedium !h-12  md:!h-16 "
              className="mt-4"
              error={GetErrorMsg(error, "SubCategoryId")}
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
                reset();
                setDataList({
                  ...dataList,
                  Name: e.target.value,
                });
              }}
              inputClassName="   !rounded-xl md:!rounded-2xl   bg-white !h-12 md:!h-16 border"
              className=" mb-6 "
              error={GetErrorMsg(error, "Name")}
            />
            <InputTextarea
              onChange={(e) => {
                reset();
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
            <ErrorMsg
              error={GetErrorMsg(error, "ProductImageFiles")}
              textClassName="mt-2"
            />
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
                  reset();
                  setDataList({
                    ...dataList,
                    DailyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
                error={GetErrorMsg(error, "DailyPrice")}
              />
              <Input
                label={"Price for 1 Week"}
                name="attribute1"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  reset();
                  setDataList({
                    ...dataList,
                    WeeklyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
                error={GetErrorMsg(error, "WeeklyPrice")}
              />
              <Input
                label={"Price for 1 Month"}
                name="attribute2"
                placeholder={"Add Price Here"}
                onChange={(e) => {
                  reset();
                  setDataList({
                    ...dataList,
                    MonthlyPrice: e.target.value,
                  });
                }}
                inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
                labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
                className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
                error={GetErrorMsg(error, "MonthlyPrice")}
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
                reset();
                setDataList({ ...dataList, Cost: e.target.value });
              }}
              placeholder="Add item value here"
              inputClassName=" !rounded-xl md:!rounded-2xl bg-white !h-12  md:!h-16 border-2 "
              className="mb-6 "
            />
          </Step>
          <StepAvailability
            error={error}
            reset={reset}
            dataList={dataList}
            setDataList={setDataList}
          />
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
                reset();
                setDataList({ ...dataList, TotalQuantity: e.target.value });
              }}
              inputClassName=" !rounded-xl md:!rounded-2xl bg-white !h-12  md:!h-16 border-2 "
              className="mb-6 "
            />
          </Step>
          <Step title="Item Status" active={dataList.TotalQuantity} stepNum={9}>
            <div className="max-w-full">
              <div className="flex flex-col gap-4">
                <Checkbox
                  checked={selectedCheckbox === "true"}
                  onChange={(e) => {
                    reset();
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value={"true"}
                  label="Active"
                />
                <Checkbox
                  checked={selectedCheckbox === "false"}
                  onChange={(e) => {
                    reset();
                    handleCheckboxChange(e.target.value, setSelectedCheckbox);
                  }}
                  color="#88BA52"
                  value={"false"}
                  label="Not Active"
                />
              </div>
              {selectedCheckbox === "true" ? (
                <p className="mt-4 text-xs md:text-[14px] text-grayMedium font-Regular">
                  Set as &apos;Not Active&apos; to keep the item unavailable for
                  rent
                </p>
              ) : (
                <p className="mt-4 text-xs md:text-[14px] text-grayMedium font-Regular">
                  Set as &apos;Active&apos; to make the item available for rent
                </p>
              )}
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

      <div className="flex items-center mt-10 mdl:mt-16 gap-4 mdl:gap-7 md:flex-row flex-col">
        <Button
          onClick={handleSubmit}
          className={"w-full lg:w-[208px] h-12 mdl:h-[64px]"}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default Page;
