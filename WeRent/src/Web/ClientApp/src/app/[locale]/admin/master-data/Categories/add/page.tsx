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
import RemoveIcon from "@/src/assets/icons/remove";
import electronics from "@/public/icons/electronics.svg";
import CameraIcon from "@/src/assets/icons/camera";
function Page() {
  const [file, setFiles] = useState<any>({});

  const [subcategories, setSubcategories] = useState([
    { id: 1, name: "DVD" },
    { id: 2, name: "Home Audio" },
    { id: 3, name: "Satellite" },
    { id: 4, name: "Computers" },
    { id: 5, name: "Laptops" },
    { id: 6, name: "Spare Parts" },
  ]);

  // Handle input change for a specific subcategory
  const handleInputChange = (index: number, newValue: string) => {
    const updatedSubcategories = [...subcategories];
    updatedSubcategories[index] = {
      ...updatedSubcategories[index],
      name: newValue, // Update the name property
    };
    setSubcategories(updatedSubcategories);
  };

  // Add a new blank subcategory with a unique id
  const handleAddSubcategory = () => {
    const newSubcategory = {
      id: Date.now(), // Unique ID (you can also use a counter or UUID library)
      name: "",
    };
    setSubcategories([...subcategories, newSubcategory]);
  };
  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };
  console.log(file);

  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Add Category" />
        <div className="flex items-center gap-5 w-fit">
          <LinkGreen
            href={ROUTES.ADMIN.CATEGORIES}
            className={
              " flex-1 h-10 text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
            }
          >
            Discard
          </LinkGreen>
          <Button className={" flex-1 h-10 text-base !px-8"}>Save </Button>
        </div>
      </div>
      <div className="flex gap-6 flex-col lgl:flex-row items-start  ">
        <Card className="px-8 py-10 flex-1">
          <Image src={""} alt="" />

          <div className=" relative size-[100px]  p-5 mb-8 bg-blueLight rounded-full shadow-md w-fit mx-auto">
            <Image
              src={file?.size ? URL.createObjectURL(file) : electronics}
              alt={`preview of ${file.name}`}
              width={60}
              height={60}
              className=" object-cover h-full w-full object-top"
            />
            <div className="flex items-center gap-2  absolute left-1/2 -translate-x-1/2 -bottom-5">
              <Dropzone
                onDrop={handleDrop}
                multiple={false}
                onReject={(files) => console.log("Rejected files", files)}
                maxSize={3 * 1024 ** 2} // 3MB
                accept={[
                  MIME_TYPES.jpeg,
                  MIME_TYPES.png,
                  MIME_TYPES.pdf,
                  MIME_TYPES.svg,
                ]}
                className=" size-10   border-green/20 bg-grayBack overflow-hidden border-solid border rounded-full"
              >
                <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-3">
                  <CameraIcon />
                </div>
              </Dropzone>
            </div>
          </div>

          <Input
            label=" Category Name"
            placeholder="electronics"
            inputClassName=" h-16 rounded-xl bg-white"
          />
        </Card>
        <Card className="px-8 py-10 flex-1">
          <h4 className="text-base font-SemiBold mb-6">Subcategory</h4>
          <div className="flex flex-col gap-3 mb-section">
            {subcategories.map((subcategory, index) => (
              <Input
                key={index}
                type="text"
                value={subcategory.name}
                onChange={(e) => handleInputChange(index, e.target.value)} // Pass the index to identify the field
                placeholder={`Enter subcategory ${index + 1}`} // Dynamic placeholder
                inputClassName="h-16 bg-white rounded-xl border-green"
              />
            ))}
          </div>
          <Button
            onClick={handleAddSubcategory}
            className=" flex-1 h-10 text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
          >
            Add subcategory
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Page;
