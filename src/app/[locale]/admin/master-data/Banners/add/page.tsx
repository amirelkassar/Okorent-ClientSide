"use client";
import Card from "@/src/components/card";
import Input from "@/src/components/input";
import Image from "next/image";
import React, { useState } from "react";
import TitleMaster from "../../_components/title-master";
import LinkGreen from "@/src/components/linkGreen";
import Button from "@/src/components/button";
import ROUTES from "@/src/routes";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import dropImg from "@/src/assets/images/dropImg.png";
import RemoveIcon from "@/src/assets/icons/remove";
function Page() {
  const [file, setFiles] = useState<any>({});

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles[0]);
  };
  console.log(file);
  return (
    <div>
      <div className="flex items-center justify-between gap-4 flex-wrap mb-section">
        <TitleMaster title="Add Banner" />
        <div className="flex items-center gap-5 w-fit">
          <LinkGreen
            href={ROUTES.ADMIN.BANNERS}
            className={
              " flex-1 h-10 text-base hover:shadow-md !px-8 text-black bg-blueLight border-none"
            }
          >
            Discard
          </LinkGreen>
          <Button className={" flex-1 h-10 text-base !px-8"}>Save </Button>
        </div>
      </div>
      <div className="flex gap-7 flex-col lgl:flex-row  ">
        <Card className="p-9 flex flex-col gap-10 flex-1">
          <Input
            label="Banner Title"
            placeholder="Special offer on electronic devices"
            inputClassName="h-16 bg-white rounded-xl"
          />
          <Input
            label="Banner Title"
            placeholder="Special offer on electronic devices"
            inputClassName="h-16 bg-white rounded-xl"
          />
        </Card>
        <Card className="p-9 flex flex-col gap-10 flex-1">
          <h4>Banner Image </h4>
          {file?.size ? (
            <div className="flex items-center justify-between max-w-full flex-wrap gap-2 mb-5">
              <Image
                src={URL.createObjectURL(file)}
                alt={`preview of ${file.name}`}
                width={400}
                height={120}
                className=" object-contain w-auto h-[120px] flex-1"
              />
              <Button
                className="  bg-white min-w-[30px] hover:border-red border-grayLight border-2 !p-[4px] size-[30px] rounded-full hover:bg-red-200"
                onClick={() => setFiles(null)}
              >
                <RemoveIcon />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2  ">
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
                className=" size-[310px] p-10 place-content-center rounded-2xl   border-green/50 bg-white overflow-hidden border-solid border"
              >
                <div className="h-full place-content-center   w-full flex justify-center items-center flex-col gap-3">
                  <Image
                    src={dropImg}
                    alt="dropImg"
                    width={160}
                    height={116}
                    className="w-[160px] h-[116px] mx-auto"
                  />
                  <p className="text-base font-Regular text-grayMedium text-center">
                    Click to browse images Or Drag and Drop your image here
                  </p>
                </div>
              </Dropzone>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Page;
