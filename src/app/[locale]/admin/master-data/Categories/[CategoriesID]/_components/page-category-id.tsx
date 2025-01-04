"use client";
import React, { useState } from "react";
import SubCategoryRow from "../../_components/subCategory-row";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import Button from "@/src/components/button";
import CameraIcon from "@/src/assets/icons/camera";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Image from "next/image";
import {
  GetSubCategory,
  useCreateSubCategory,
  useEditCategory,
} from "@/src/hooks/queries/admin/master-data/category";
import { Toast } from "@/src/components/toast";
import EditIcon from "@/src/assets/icons/edit";
import { ConvertImageUrlToFile } from "@/src/lib/utils";

function PageCategoryId({ data }: { data: any }) {
  console.log(data);

  //hooks
  const [editCategory, setEditCategory] = useState(false);
  const [addSubcategory, setAddSubcategory] = useState(false);
  const [SubcategoryTitle, setSubcategoryTitle] = useState("");
  const [file, setFiles] = useState<any>({});
  const [categoryData, setCategoryData] = useState({
    Name: data.name,
    Description: data.description,
  });
  //query
  const { data: dataSubCategories, isLoading: isLoadingSubCategory } =
    GetSubCategory(data.id);

  const { mutateAsync: CreateSubCategory } = useCreateSubCategory(data.id);
  const { mutateAsync: EditCategory } = useEditCategory(data.id);
  //handlers
  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };

  const handleSubmitAddSubCategory = async () => {
    await Toast.Promise(
      CreateSubCategory({
        name: SubcategoryTitle,
        description: SubcategoryTitle,
        parentId: data.id,
      }),
      {
        success: "successfully Create SubCategory",
        onSuccess: async (res) => {
          setSubcategoryTitle("");
          setAddSubcategory(false);
        },
      }
    );
  };
  console.log(categoryData);

  const handleSubmitEditCategory = async () => {
    const imgFile = await ConvertImageUrlToFile(data.iconPath);
    const dataList = {
      ...categoryData,
      Icon: file.size ? file : imgFile,
      id: data.id,
    };

    await Toast.Promise(EditCategory(dataList), {
      success: "successfully Create Category",
      onSuccess: async (res) => {
        console.log(res);
      },
    });
  };
  return (
    <div className="flex gap-6 flex-col lgl:flex-row lgl:items-start  ">
      <Card className=" px-2 mdl:px-8 py-5 mdl:py-10 flex-1">
        <div className={`${editCategory ? "" : " pointer-events-none"}`}>
          <div className=" relative size-[80px] mdl:size-[100px]  p-5 mb-8 bg-blueLight rounded-full shadow-md w-fit mx-auto">
            <div className=" size-12 mdl:size-[60px]  rounded-full">
              {file.size ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={`preview of ${file.name}`}
                  width={60}
                  height={60}
                  className=" object-contain h-full w-full object-top"
                />
              ) : data?.iconPath ? (
                <Image
                  src={data?.iconPath}
                  alt={`preview `}
                  width={60}
                  height={60}
                  className=" object-contain h-full w-full object-top"
                />
              ) : null}
            </div>
            <div className="flex items-center gap-2  absolute left-1/2 -translate-x-1/2 -bottom-5">
              <Dropzone
                onDrop={handleDrop}
                multiple={false}
                onReject={(files) => console.log("Rejected files", files)}
                maxSize={3 * 1024 ** 2} // 3MB
                accept={[MIME_TYPES.svg]}
                className=" size-8 mdl:size-10   border-green/20 bg-grayBack overflow-hidden border-solid border rounded-full"
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
              defaultValue={data?.name}
              onChange={(e) => {
                setCategoryData((prev) => ({
                  ...prev,
                  Name: e.target.value,
                }));
              }}
            />
            <Input
              label=" Category Description"
              placeholder=" Description"
              inputClassName=" h-14 mdl:h-16 rounded-xl bg-white"
              defaultValue={data?.description}
              onChange={(e) => {
                setCategoryData((prev) => ({
                  ...prev,
                  Description: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-4 ms-auto w-fit">
          {editCategory ? (
            <>
              <Button
                onClick={() => setEditCategory(false)}
                className={
                  " flex-1 h-10 text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
                }
              >
                Discard
              </Button>
              <Button
                onClick={handleSubmitEditCategory}
                className={" flex-1 h-10 ms-auto text-base !px-8"}
              >
                Save{" "}
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setEditCategory(true)}
              className={
                " flex-1 h-10 ms-auto hover:shadow-md text-blue gap-2 bg-blueLight border-none text-sm !px-8"
              }
            >
              <EditIcon fill="#006AFF" className="w-3 h-auto" />
              Edit
            </Button>
          )}
        </div>
      </Card>
      <Card className={`  px-2 mdl:px-8 py-5 mdl:py-10 flex-1`}>
        <h4 className="text-base font-SemiBold mb-6">Subcategory</h4>
        <div className="flex flex-col gap-3 mb-section">
          {dataSubCategories?.data?.map((subcategory: any) => (
            <SubCategoryRow
              key={subcategory.id}
              data={subcategory}
              idCategory={data.id}
            />
          ))}
          {addSubcategory && (
            <div className="flex items-center gap-3">
              <Input
                type="text"
                placeholder="Enter subcategory"
                inputClassName="h-16 bg-white rounded-xl border-green"
                onChange={(e) => setSubcategoryTitle(e.target.value)}
              />
              <Button
                onClick={handleSubmitAddSubCategory}
                className={`${
                  SubcategoryTitle ? "" : "pointer-events-none opacity-50"
                } h-10 text-base !px-7 w-[100px]`}
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
  );
}

export default PageCategoryId;
