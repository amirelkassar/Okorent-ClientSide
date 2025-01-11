"use client";
import React, { useState } from "react";
import { Checkbox } from "@mantine/core";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";
import SelectInput from "@/src/components/select-input";
import InputTextarea from "@/src/components/InputTextarea";
import Input from "@/src/components/input";
import { Toast } from "@/src/components/toast";
import { GetIdsValues } from "@/src/lib/utils";
import StepAvailability from "./stepAvailability";
import StepFAQ from "./stepFAQ";
import GetErrorMsg from "@/src/components/getErrorMsg";
import {
  GetCategory,
  GetSubCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import StepLocation from "./stepLocation";
import { useEditListingInAdmin } from "@/src/hooks/queries/admin/lisiting";
interface LocationProps {
  id: number;
  name: string;
  address: string;
}

interface FAQ {
  question: string;
  answer: string;
}
function UpdateListing({ initialValues }: { initialValues: any }) {
  //state
  const [dataList, setDataList] = useState<any>({
    ...initialValues,
    stocks: GetIdsValues(initialValues.stocks),
  });
  const { data: dataCategory } = GetCategory();
  const [faqs, setFaqs] = useState<FAQ[]>(initialValues.faQs || []);
  const [location, setLocation] = useState<LocationProps[] | any>(
    GetIdsValues(initialValues.stocks)
  );
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(
    initialValues.isActive ? "true" : "false"
  );

  //query
  const {
    mutateAsync: EditListing,
    error,
    reset,
  } = useEditListingInAdmin(dataList?.id);
  const { data: dataSubCategory, refetch: RefetchGetSubCategory } =
    GetSubCategory(dataList?.categoryId);

  console.log(dataSubCategory);

  //functions
  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    reset();
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, isActive: value });
    }
  };
  const handleInputChangeLocation = (ids: any[]) => {
    reset();
    setLocation(ids);
    setDataList({ ...dataList, stocks: ids });
  };
  const handleRemoveLocation = (index: any) => {
    reset();
    const updatedLocations = location.filter((loc: any) => loc !== index);
    setLocation(updatedLocations);
    setDataList({ ...dataList, stocks: updatedLocations });
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    reset();
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQs: newFaqs });
  };

  const handleSubmit = async () => {
    const formData = {
      ...dataList,
      usersReviews: null,
    };
    reset();
    await Toast.Promise(EditListing(formData), {
      success: "successfully Edit Product",
      onSuccess: async (res) => {
        console.log(res);
      },
    });
  };

  return (
    <div className="w-full lg:w-[810px] mb-section flex flex-col gap-4">
      <div className=" mt-1 mdl:mt-2 mdl:pb-6 flex-1">
        <SelectInput
          label=" Choose item category"
          data={dataCategory?.data?.items?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          placeholder="Select category"
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, categoryId: e, subCategoryId: null });
            RefetchGetSubCategory();
          }}
          value={dataList?.categoryId}
          error={GetErrorMsg(error, "CategoryId")}
          inputClassName=" !rounded-xl md:!rounded-2xl text-grayMedium !h-12  md:!h-16 "
        />
        <SelectInput
          label="Select SubCategory"
          data={dataSubCategory?.data?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          value={dataList?.subCategoryId}
          placeholder="Select SubCategory"
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, subCategoryId: e });
          }}
          inputClassName=" !rounded-xl md:!rounded-2xl text-grayMedium !h-12  md:!h-16 "
          className="mt-4"
        />
      </div>
      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>Describtion</h3>
        <Input
          placeholder="Add item title here"
          onChange={(e) => {
            reset();
            setDataList({
              ...dataList,
              name: e.target.value,
            });
          }}
          defaultValue={dataList?.name}
          inputClassName="  !rounded-2xl   bg-white !h-16 border"
          className=" mb-6 "
        />
        <InputTextarea
          onChange={(e) => {
            reset();
            setDataList({
              ...dataList,
              description: e.target.value,
            });
          }}
          defaultValue={dataList?.description}
          autosize
          placeholder="Add as much details as you can here about your item "
          className=" !mb-0 mdl:!mb-6"
        />
      </div>
      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>Item Images</h3>
        <p className="text-grayMedium mb-4  text-sm lg:text-base font-Regular">
          You can upload up to 8 images
        </p>
        <DropImg
          setDataList={setDataList}
          dataList={dataList}
          existingImages={dataList?.images}
          edit
        />
      </div>
      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>Item Price</h3>
        <p className="text-grayMedium mb-4  text-sm lg:text-base font-Regular">
          Try to add lower price for longer bookings
        </p>
        <div className="flex items-center flex-wrap gap-4">
          <Input
            name="name"
            label={"Price for 1 Day"}
            placeholder={"Add Price Here"}
            onChange={(e) => {
              reset();
              setDataList({
                ...dataList,
                dailyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.dailyPrice}
            inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
            labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
            className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
          />
          <Input
            label={"Price for 1 Week"}
            name="attribute1"
            placeholder={"Add Price Here"}
            onChange={(e) => {
              reset();
              setDataList({
                ...dataList,
                weeklyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.weeklyPrice}
            inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
            labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
            className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
          />
          <Input
            label={"Price for 1 Month"}
            name="attribute2"
            placeholder={"Add Price Here"}
            onChange={(e) => {
              reset();
              setDataList({
                ...dataList,
                monthlyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.monthlyPrice}
            inputClassName="  w-full  !rounded-xl md:!rounded-2xl bg-white  border-2  h-12 md:h-16  "
            labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
            className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
          />
        </div>
      </div>
      <StepLocation
        handleRemoveLocation={handleRemoveLocation}
        location={location}
        handleInputChangeLocation={handleInputChangeLocation}
        idUSer={initialValues?.createdBy || ""}
      />

      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>
          Value of the item
        </h3>
        <Input
          defaultValue={dataList?.cost}
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, cost: e.target.value });
          }}
          placeholder="Add item value here"
          inputClassName=" !rounded-xl md:!rounded-2xl bg-white !h-12  md:!h-16 border-2 "
          className="mdl:mb-6 "
        />
      </div>

      <StepAvailability dataList={dataList} setDataList={setDataList} />
      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>Stock</h3>
        <Input
          placeholder="Add available stock number here"
          defaultValue={dataList?.totalQuantity}
          onChange={(e) => {
            reset();
            setDataList({ ...dataList, totalQuantity: e.target.value });
          }}
          inputClassName=" !rounded-xl md:!rounded-2xl bg-white !h-12  md:!h-16 border-2 "
          className="mdl:mb-6 "
        />
      </div>

      <div className=" mt-1 mdl:mt-2 mdl:pb-8 flex-1">
        <h3 className={"text-sm lg:text-[24px] mb-2 lg:mb-3 "}>Item Status</h3>
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

        <p className="mt-4 text-[14px] text-grayMedium font-Regular">
          Set as Active to make the item available for rent Set as Not Active to
          keep the item unavailable for rent
        </p>
      </div>
      <StepFAQ
        faqs={faqs}
        setFaqs={setFaqs}
        handleChangeFAQ={handleChangeFAQ}
      />
      <div className="flex items-center mt-8 gap-4 mdl:gap-7 md:flex-row flex-col">
        <Button
          onClick={handleSubmit}
          className={"w-full lg:w-[208px] h-12 mdl:h-[64px]"}
        >
          Save Edits
        </Button>
        <Button
          className={
            "w-full lg:w-[208px]  h-12 mdl:h-[64px] text-black bg-grayBack border-none"
          }
        >
          Discard Edits
        </Button>
      </div>
    </div>
  );
}

export default UpdateListing;
