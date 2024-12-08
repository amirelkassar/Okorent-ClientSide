"use client";
import React, { useState } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Image from "next/image";
import UpLoadIcon from "../assets/icons/upLoad";
import Button from "./button";
import PlusImgIcon from "../assets/icons/plusImg";
import RemoveIcon from "../assets/icons/remove";
interface DropImgProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
}
function DropImg({ dataList, setDataList }: DropImgProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    const newFiles = [...files, ...acceptedFiles];
    setFiles(newFiles);
    setDataList({
      ...dataList,
      ProductImageFiles: [...(dataList.ProductImageFiles || []), ...acceptedFiles],
    });
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    setDataList({
      ...dataList,
      ProductImageFiles: newFiles,
    });
  };

  return (
    <div>
      {files.length > 0 ? (
        <div className="flex gap-4 p-1 flex-wrap relative items-center">
          {files.map((file, index) => (
            <div
              key={index}
              className="h-[146px] w-[146px] relative overflow-hidden rounded-md shadow-md"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={`preview of ${file.name}`}
                width={146}
                height={146}
                className=" object-cover h-full w-full"
              />
              <Button
                className="absolute bottom-3 end-3 bg-white hover:border-red border-grayLight border-2 !p-[4px] size-[30px] rounded-full hover:bg-red-200"
                onClick={() => handleRemoveFile(index)}
              >
                <RemoveIcon />
              </Button>
            </div>
          ))}
          <Dropzone
            onDrop={handleDrop}
            onReject={(files) => console.log("Rejected files", files)}
            maxSize={3 * 1024 ** 2} // 3MB
            accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.pdf]}
            multiple={true}
            className="h-[146px] w-[146px]   border-green overflow-hidden border-solid border rounded-md"
          >
            <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-3">
              <PlusImgIcon />
            </div>
          </Dropzone>
        </div>
      ) : (
        <Dropzone
          onDrop={handleDrop}
          onReject={(files) => console.log("Rejected files", files)}
          maxSize={3 * 1024 ** 2} // 3MB
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.pdf]}
          multiple={true}
          className="h-[146px] lg:h-[340px]  border-green overflow-hidden border-solid border-2 rounded-2xl"
        >
          <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-3">
            <UpLoadIcon className={"w-9 h-auto"} />
            <h4 className="max-w-[200px] text-center mx-auto text-grayMedium leading-5 font-Regular">
              Drag and drop image here Or click to upload
            </h4>
          </div>
        </Dropzone>
      )}
    </div>
  );
}

export default DropImg;
