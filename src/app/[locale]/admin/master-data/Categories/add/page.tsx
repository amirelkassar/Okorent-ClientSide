"use client";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import Image from "next/image";
import React, { useState } from "react";
import TitleMaster from "../../_components/title-master";
import Button from "@/src/components/button";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import CameraIcon from "@/src/assets/icons/camera";
import {
  GetSubCategory,
  useCreateCategory,
  useCreateSubCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import { Toast } from "@/src/components/toast";
import SubCategoryRow from "../_components/subCategory-row";
function Page() {
  const [addSubcategory, setAddSubcategory] = useState(false);
  const [SubcategoryTitle, setSubcategoryTitle] = useState("");
  const [file, setFiles] = useState<any>({});
  const [categoryData, setCategoryData] = useState({
    Name: "",
    Description: "",
  });
  const [idCategory, setIdCategory] = useState();
  const {
    mutateAsync: CreateCategory,
    error,
    isError,
    reset,
  } = useCreateCategory();
  const { data: dataSubCategories, isLoading: isLoadingSubCategory } =
    GetSubCategory(idCategory);
  console.log(dataSubCategories);

  const { mutateAsync: CreateSubCategory } = useCreateSubCategory(idCategory);

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };

  const handleSubmitAddSubCategory = async () => {
    await Toast.Promise(
      CreateSubCategory({
        name: SubcategoryTitle,
        description: SubcategoryTitle,
        parentId: idCategory,
      }),
      {
        success: "successfully Create SubCategory",
        onSuccess: async (res) => {
          console.log(res);
          setAddSubcategory(false);
          setSubcategoryTitle("");
        },
      }
    );
  };

  const handleSubmit = async () => {
    const dataList = { ...categoryData, Icon: file };
    reset();
    await Toast.Promise(CreateCategory(dataList), {
      success: "successfully Create Category",
      onSuccess: async (res) => {
        console.log(res);
        setIdCategory(res.data);
      },
    });
  };
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Add Category" />
      </div>
      <div className="flex gap-6 flex-col lgl:flex-row lgl:items-start  ">
        <Card className=" px-2 mdl:px-8 py-5 mdl:py-10 flex-1">
          <div className=" relative  size-[80px] mdl:size-[100px]   p-5 mb-8 bg-blueLight rounded-full shadow-md w-fit mx-auto">
            <div className=" size-12 mdl:size-[60px]  rounded-full">
              {file?.size && (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`preview of ${file.name}`}
                  width={60}
                  height={60}
                  className=" object-contain h-full w-full object-top"
                />
              )}
            </div>

            <div className="flex items-center gap-2  absolute left-1/2 -translate-x-1/2 -bottom-5">
              <Dropzone
                onDrop={handleDrop}
                multiple={false}
                onReject={(files) => console.log("Rejected files", files)}
                maxSize={3 * 1024 ** 2} // 3MB
                accept={[MIME_TYPES.svg]}
                className="size-8 mdl:size-10   border-green/20 bg-grayBack overflow-hidden border-solid border rounded-full"
              >
                <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-3">
                  <CameraIcon />
                </div>
              </Dropzone>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4">
            <Input
              label=" Category Name"
              placeholder="electronics"
              inputClassName=" h-14 mdl:h-16 rounded-xl bg-white"
              onChange={(e) => {
                setCategoryData((prev) => ({ ...prev, Name: e.target.value }));
              }}
            />
            <Input
              label=" Category Description"
              placeholder=" Description"
              inputClassName=" h-14 mdl:h-16 rounded-xl bg-white"
              onChange={(e) => {
                setCategoryData((prev) => ({
                  ...prev,
                  Description: e.target.value,
                }));
              }}
            />
            {!idCategory && (
              <div className="flex items-center gap-5 ms-auto w-fit">
                <LinkGreen
                  href={ROUTES.ADMIN.CATEGORIES}
                  className={
                    " flex-1 h-10 text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
                  }
                >
                  Discard
                </LinkGreen>
                <Button
                  onClick={handleSubmit}
                  className={" flex-1 h-10 ms-auto text-base !px-8"}
                >
                  Save{" "}
                </Button>
              </div>
            )}
          </div>
        </Card>
        <Card
          className={` ${
            idCategory ? "" : " pointer-events-none opacity-50"
          } px-2 mdl:px-8 py-5 mdl:py-10 flex-1`}
        >
          <h4 className="text-base font-SemiBold mb-6">Subcategory</h4>
          <div className="flex flex-col gap-3 mb-section">
            {dataSubCategories?.data?.map((subcategory: any) => (
              <SubCategoryRow
                key={subcategory.id}
                data={subcategory}
                idCategory={idCategory}
              />
            ))}
            {addSubcategory && (
              <div className="flex items-center gap-3">
                <Input
                  type="text"
                  placeholder={`Enter subcategory `}
                  inputClassName={`h-16 bg-white  rounded-xl border-green`}
                  className={`flex-1 `}
                  onChange={(e) => {
                    setSubcategoryTitle(e.target.value);
                  }}
                />
                <Button
                  onClick={handleSubmitAddSubCategory}
                  className={` ${
                    SubcategoryTitle ? "" : "pointer-events-none opacity-50"
                  } h-10  text-base !px-7 w-[100px]`}
                >
                  Save
                </Button>
              </div>
            )}
          </div>
          <Button
            onClick={() => {
              setAddSubcategory(true);
            }}
            className=" flex-1 h-10 text-sm md:text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
          >
            Add subcategory
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Page;
