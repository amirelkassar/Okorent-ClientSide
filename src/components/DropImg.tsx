"use client";
import React, { useCallback, useState, memo } from "react";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import Image from "next/image";
import UpLoadIcon from "../assets/icons/upLoad";
import Button from "./button";
import PlusImgIcon from "../assets/icons/plusImg";
import RemoveIcon from "../assets/icons/remove";

interface ExistingImage {
  id: string;
  path: string;
}

interface DropImgProps {
  setDataList: React.Dispatch<any>;
  dataList: any;
  existingImages?: ExistingImage[];
  edit?: boolean;
}

const DropImg = memo(function DropImg({
  dataList,
  setDataList,
  existingImages = [],
  edit = false,
}: DropImgProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<ExistingImage[]>(existingImages);

  // Handle Drop of Files
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles((prevFiles) => {
        const newFiles = [...prevFiles, ...acceptedFiles];
        setDataList((prevDataList: any) => ({
          ...prevDataList,
          ...(edit
            ? { images: [...newFiles, ...images] }
            : { ProductImageFiles: [...newFiles, ...images] }),
        }));
        return newFiles;
      });
    },
    [images, setDataList]
  );

  // Remove Uploaded File
  const handleRemoveFile = useCallback(
    (index: number) => {
      setFiles((prevFiles) => {
        const newFiles = prevFiles.filter((_, i) => i !== index);

        setDataList((prevDataList: any) => ({
          ...prevDataList,
          ...(edit
            ? { images: [...newFiles, ...images] }
            : { ProductImageFiles: [...newFiles, ...images] }),
        }));

        return newFiles;
      });
    },
    [images, setDataList]
  );

  // Remove Existing Image
  const handleRemoveExistingImage = useCallback(
    (id: string) => {
      setImages((prevImages) => {
        const newImages = prevImages.filter((img) => img.id !== id);
        setDataList((prevDataList: any) => ({
          ...prevDataList,
          ...(edit
            ? { images: [...files, ...newImages] }
            : { ProductImageFiles: [...files, ...newImages] }),
        }));
        return newImages;
      });
    },
    [files, setDataList]
  );

  // Render Image Preview
  const renderImagePreview = useCallback(
    (src: string, onRemove: () => void,index: number) => (
      <div
        key={index}
        className="md:h-[146px] h-[100px] w-[100px] md:w-[146px] relative overflow-hidden rounded-md shadow-md"
      >
        <Image
          src={src}
          alt="preview"
          width={146}
          height={146}
          className="object-cover h-full w-full"
        />
        <Button
          className="absolute bottom-3 end-3 bg-white hover:border-red border-grayLight border-2 !p-[4px] size-6 md:size-[30px] rounded-full hover:bg-red-200"
          onClick={onRemove}
        >
          <RemoveIcon />
        </Button>
      </div>
    ),
    []
  );

  return (
    <div>
      {images.length > 0 || files.length > 0 ? (
        <div className="flex gap-4 p-1 flex-wrap relative items-center">
          {images.map((image,index) =>
            renderImagePreview(image.path, () =>
              handleRemoveExistingImage(image.id),index
            )
          )}
          {files.map((file, index) =>
            renderImagePreview(URL.createObjectURL(file), () =>
              handleRemoveFile(index),index*5
            )
          )}
          <Dropzone
            onDrop={handleDrop}
            onReject={(files) => console.log("Rejected files", files)}
            maxSize={3 * 1024 ** 2} // 3MB
            accept={[MIME_TYPES.jpeg, MIME_TYPES.png, MIME_TYPES.pdf]}
            multiple
            className=" h-[100px] md:h-[146px] w-[100px] md:w-[146px] border-green overflow-hidden border-solid border rounded-md"
          >
            <div className="h-full absolute p-8 w-full inset-0 flex justify-center items-center flex-col gap-3">
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
          multiple
          className=" h-[100px] md:h-[146px] lg:h-[340px] border-green overflow-hidden border-solid border-2 rounded-2xl"
        >
          <div className="h-full absolute w-full inset-0 flex justify-center items-center flex-col gap-2 mdl:gap-3">
            <UpLoadIcon className={" w-5 mdl:w-9 h-auto"} />
            <h4 className="max-w-[200px] text-center mx-auto text-xs mdl:text-base text-grayMedium leading-5 font-Regular">
              Drag and drop image here Or click to upload
            </h4>
          </div>
        </Dropzone>
      )}
    </div>
  );
});

export default DropImg;
