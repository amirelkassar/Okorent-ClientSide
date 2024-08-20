"use client";
import React, { useState } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Image from "next/image";
import UpLoadIcon from "../assets/icons/upLoad";
import Button from "./button";
import CloseChatIcon from "../assets/icons/closeChat";
interface DropImgProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
}
function DropImg({dataList,setDataList}:DropImgProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
     setDataList({...dataList, pictures:acceptedFiles.map((file) =>file)})
  };

  return (
    <div>
      {files.length > 0 ? (
        <div className="h-fit min-h-[340] gap-2 flex-wrap  p-1 relative flex items-center justify-center border-green overflow-hidden border-solid border-2 rounded-2xl">
          <Button
            className={
              "absolute end-3 border-2 h-8 w-8 rounded-full hover:bg-rose-100 duration-200 p-1 bg-grayBack top-2"
            }
            onClick={() => {
              setFiles([]);
              setDataList({...dataList,pictures:[]})
            }}
          >
            <CloseChatIcon />
          </Button>
          {files.map((file, index) => (
            <Image
              key={index}
              src={URL.createObjectURL(file)}
              alt={`preview of ${file.name}`}
              width={200}
              height={190}
              className=" object-contain rounded-sm h-full w-auto"
            />
          ))}
        </div>
      ) : (
        <Dropzone
          onDrop={handleDrop}
          onReject={(files) => console.log("Rejected files", files)}
          maxSize={3 * 1024 ** 2} // 3MB
          accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.pdf]}
          multiple={true}
          className="h-[340px]  border-green overflow-hidden border-solid border-2 rounded-2xl"
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
