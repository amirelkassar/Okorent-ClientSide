"use client";
import React, { useEffect, useState } from "react";
import { Checkbox, TextInput } from "@mantine/core";
import DropImg from "@/src/components/DropImg";
import Button from "@/src/components/button";
import StepLocation from "./_components/stepLocation";
import StepAvailability from "./_components/stepAvailability";
import { GetMyProductsByID } from "@/src/hooks/queries/user/lisitings";
import SelectInput from "@/src/components/select-input";
import {
  GetCategory,
  GetSubCategory,
  useEditListingMutation,
} from "@/src/hooks/queries/user/add-lisiting";
import InputTextarea from "@/src/components/InputTextarea";
import Input from "@/src/components/input";
import StepFAQ from "./_components/stepFAQ";
import Loading from "@/src/components/loading";
import { Toast } from "@/src/components/toast";

interface LocationProps {
  id: number;
  name: string;
  address: string;
}

interface FAQ {
  question: string;
  answer: string;
}
function Page({ params }: any) {
  const { data: ProductDerails, isLoading } = GetMyProductsByID(params.listID);
  const [dataList, setDataList] = useState<any>(ProductDerails?.data || {});
  const { data: dataCategory } = GetCategory();
  const [faqs, setFaqs] = useState<FAQ[]>([{ question: "", answer: "" }]);

  const { data: dataSubCategory, refetch: RefetchGetSubCategory } =
    GetSubCategory(dataList?.categoryId);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationProps[]>([]);
  useEffect(() => {

    RefetchGetSubCategory();
  }, [dataList?.categoryId]);
  useEffect(() => {
    if (ProductDerails?.data) {
      setDataList(ProductDerails?.data);
      RefetchGetSubCategory();
      setSelectedCheckbox(ProductDerails?.data?.isActive ? "true" : "false");
      setFaqs(ProductDerails?.data.faQs || []);
      setLocation(ProductDerails?.data.stocks);
    }
  }, [isLoading]);

  const handleCheckboxChange = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (selectedCheckbox === value) {
      setState(null);
    } else {
      setState(value);
      setDataList({ ...dataList, isActive: value });
    }
  };
  const handleInputChangeLocation = (ids: any[]) => {
    setLocation(ids);
    setDataList({ ...dataList, stocks: ids });
  };
  const handleRemoveLocation = (index: any) => {
    const updatedLocations = location.filter((loc) => loc !== index);
    setLocation(updatedLocations);
    setDataList({ ...dataList, UserStockIds: updatedLocations });
  };
  const handleChangeFAQ = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
    setDataList({ ...dataList, FAQs: newFaqs });
  };
  console.log(dataList);

  const { mutateAsync: createListing } = useEditListingMutation();
  const handleSubmit = async () => {
    await Toast.Promise(createListing(dataList), {
      success: "successfully Edit Product",
      onSuccess: async (res) => {
        console.log(res);

      },
    });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full lg:w-[810px] mb-20 flex flex-col gap-4">
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Choose item category
        </h3>
        <SelectInput
          data={dataCategory?.data?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          placeholder="Select category"
          onChange={(e) => {
            setDataList({ ...dataList, categoryId: e });
          }}
          value={dataList?.categoryId}
          inputClassName="!rounded-2xl text-grayMedium !border-2  !h-16 "
          className=" bg-white "
        />
        <SelectInput
          label="Select SubCategory"
          data={dataSubCategory?.data?.map((item: any) => {
            return { label: item.name, value: item.id };
          })}
          value={dataList?.subCategoryId}
          placeholder="Select SubCategory"
          onChange={(e) => {
            setDataList({ ...dataList, subCategoryId: e });
          }}
          inputClassName="!rounded-2xl text-grayMedium !border-2  !h-16 "
          className="mt-4"
        />
      </div>
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Describtion
        </h3>
        <Input
          placeholder="Add item title here"
          onChange={(e) => {
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
            setDataList({
              ...dataList,
              description: e.target.value,
            });
          }}
          defaultValue={dataList?.description}
          autosize
          placeholder="Add as much details as you can here about your item "
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
          <Input
            name="name"
            label={"Price for 1 Day"}
            placeholder={"Add Price Here"}
            onChange={(e) => {
              setDataList({
                ...dataList,
                dailyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.dailyPrice}
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
                weeklyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.weeklyPrice}
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
                monthlyPrice: e.target.value,
              });
            }}
            defaultValue={dataList?.monthlyPrice}
            inputClassName="  w-full !rounded-2xl bg-white  border-2   h-16  "
            labelClassName="text-sm lg:text-[16px]  mb-2 text-grayMedium"
            className=" flex-1 min-w-[170px] w-full  md:max-w-[200px] "
          />
        </div>
      </div>
      <StepLocation
        handleRemoveLocation={handleRemoveLocation}
        location={dataList?.stocks || []}
        handleInputChangeLocation={handleInputChangeLocation}
      />

      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>
          Value of the item
        </h3>
        <TextInput
          defaultValue={dataList?.cost}
          onChange={(e) => {
            setDataList({ ...dataList, cost: e.target.value });
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

      <StepAvailability dataList={dataList} setDataList={setDataList} />
      <div className="mt-[7px] pb-8 flex-1">
        <h3 className={"text-base lg:text-[24px] mb-2 lg:mb-3 "}>Stock</h3>
        <TextInput
          placeholder="Add available stock number here"
          defaultValue={dataList?.totalQuantity}
          onChange={(e) => {
            setDataList({ ...dataList, totalQuantity: e.target.value });
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
          Set as Active to make the item available for rent Set as Not Active to
          keep the item unavailable for rent
        </p>
      </div>
      <StepFAQ
        faqs={faqs}
        setFaqs={setFaqs}
        handleChangeFAQ={handleChangeFAQ}
      />
      <div className="flex items-center mt-8 gap-7 md:flex-row flex-col">
        <Button onClick={handleSubmit} className={"w-full lg:w-[208px] h-[64px]"}>Save Edits</Button>
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
