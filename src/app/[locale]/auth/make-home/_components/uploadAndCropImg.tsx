import { FileButton, Slider } from "@mantine/core";
import React, { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import UpLoadIcon from "@/src/assets/icons/upLoad";
import Image from "next/image";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Button from "@/src/components/button";
import DiscardIcon from "@/src/assets/icons/Discard";
import ButtonDelete from "@/src/components/button-delete";
import { blobUrlToFile } from "@/src/lib/utils";
interface Props {
  formData: any;
  setFormData: (e: any) => void;
}
function UploadAndCropImg({ formData, setFormData }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedChanges, { open: openChanges, close: closeChanges }] =
    useDisclosure(false);

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );
  const handleProfileImageChange = async (blobUrl: string) => {
    try {
      const file = await blobUrlToFile(
        blobUrl,
        formData.Name || "user" + ".png"
      ).then((file) => file);

      setFormData((prevData: any) => ({
        ...prevData,
        ProfileImageFile: file,
      }));
    } catch (error) {
      console.error("Failed to convert Blob URL to File:", error);
    }
  };
  const handleFileChange = async (event: any) => {
    handleReset();
    if (event?.size) {
      const imageDataUrl = await readFile(event);
      setImageSrc(imageDataUrl as string);
      open();
    }
  };
  const onCrop = useCallback(async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      handleProfileImageChange(croppedImage);
      close();
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);
  const handleReset = () => {
    setImageSrc(null);
    setFormData({ ...formData, ProfileImageFile: null });
    setZoom(1);
    setCrop({ x: 0, y: 0 });
  };

  return (
    <div>
      {!imageSrc && (
        <div className="mt-2 mb-9">
          <h2 className="font-Medium text-medium">
            Upload your profile picture
          </h2>
          <FileButton onChange={handleFileChange} accept="image/png,image/jpeg">
            {(props) => (
              <div
                {...props}
                className="bg-[#c0c8cf] h-10 w-[154px] rounded-[8px] flex items-center mt-2 justify-center px-3"
              >
                <UpLoadIcon />
              </div>
            )}
          </FileButton>
        </div>
      )}

      {formData?.ProfileImageFile && (
        <div className="mt-4  h-[125px] w-fit relative mb-8">
          <ButtonDelete
            onClick={() => handleReset()}
            className={"bg-grayLight !size-9  absolute top-0 -end-11 !p-2"}
          />
          <Image
            src={URL.createObjectURL(formData?.ProfileImageFile)}
            alt="Cropped"
            width={294}
            height={294}
            className="rounded-lg h-full w-auto"
          />
        </div>
      )}

      <ModalComp
        opened={opened}
        close={() => {
          close();
          handleReset();
        }}
        title="Upload your profile picture"
      >
        <div className="flex justify-center items-center flex-col px-10 lg:min-w-[490px] ">
          {!formData?.ProfileImageFile && (
            <>
              {imageSrc && (
                <>
                  {/* Cropper */}
                  <div className="relative w-64 h-64 bg-white border border-green rounded-xl overflow-hidden">
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      cropShape="round"
                      showGrid={false}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                      onZoomChange={setZoom}
                    />
                  </div>

                  {/* Zoom Slider */}
                  <div className="flex items-center justify-start mt-4">
                    <span className="mr-2">-</span>
                    <Slider
                      value={zoom}
                      onChange={setZoom}
                      color="#88BA52"
                      min={1}
                      max={3}
                      step={0.1}
                      size="md"
                      radius="md"
                      className="mx-4"
                      style={{ width: 200 }}
                    />
                    <span className="ml-2">+</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex w-full flex-col-reverse lg:flex-row mt-8 lg:items-center lg:justify-center gap-5 lg:gap-10">
                    <Button
                      onClick={() => {
                        openChanges();
                      }}
                      className="bg-transparent w-full h-[50px] border text-green"
                    >
                      Cancel
                    </Button>
                    <Button onClick={onCrop} className=" w-full h-[50px] ">
                      Save
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </ModalComp>

      <ModalComp
        title=""
        opened={openedChanges}
        close={() => {
          closeChanges();
        }}
      >
        <div className="mt-8">
          <div className="w-[200px] h-[200px] mb-8 block mx-auto">
            <DiscardIcon />
          </div>

          <h3 className="text-xl text-center mb-1 font-SemiBold">
            Discard Changes
          </h3>
          <p className="text-grayMedium text-base text-center mx-auto max-w-[300px] mb-11">
            Are you sure you want to discard your changes?
          </p>
          <div className="flex items-center gap-2 lg:gap-5 ">
            <Button
              onClick={closeChanges}
              className={
                "  flex-1 font-Medium text-green bg-white border-2 hover:bg-green duration-300 hover:text-white"
              }
            >
              No
            </Button>
            <Button
              className={" font-Medium flex-1"}
              onClick={() => {
                closeChanges();
                close();
                handleReset();
              }}
            >
              Yes
            </Button>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default UploadAndCropImg;
function readFile(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
