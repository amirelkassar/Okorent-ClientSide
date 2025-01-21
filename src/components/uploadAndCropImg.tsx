import { FileButton, Slider } from "@mantine/core";
import React, { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import Image, { StaticImageData } from "next/image";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Button from "@/src/components/button";
import DiscardIcon from "@/src/assets/icons/Discard";
import { blobUrlToFile, getCroppedImg } from "@/src/lib/utils";
import VerifyBlackIcon from "@/src/assets/icons/verifyBlack";
import CameraIcon from "@/src/assets/icons/camera";
import { useEditImageMyProfile } from "@/src/hooks/queries/user/my-profile";
import { Toast } from "@/src/components/toast";
interface Props {
  image: StaticImageData | string;
}
function UploadAndCropImg({ image }: Props) {
  //Hooks
  const [formData, setFormData] = useState<any>({});
  const [opened, { open, close }] = useDisclosure(false);
  const [openedChanges, { open: openChanges, close: closeChanges }] =
    useDisclosure(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  //Query
  const { mutateAsync: EditImage } = useEditImageMyProfile();
  //Functions
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
      onSubmitEditImageProfile(file);
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
  const onSubmitEditImageProfile = useCallback(
    async (image: any) => {
      Toast.Promise(EditImage({ ProfileImageFile: image }), {
        success: "successfully Edit Profile",
        onSuccess(res) {
          close();
        },
        onError(err) {
          close();
        },
      });
    },
    [EditImage, close]
  );
  return (
    <div>
      <div className=" size-[100px] md:size-[156px] relative rounded-full mx-auto mb-5 border-2 border-white shadow-md ">
        <div className=" absolute top-1/2 -end-4 md:-end-6 w-7 md:w-10 h-auto -translate-y-1/2 ">
          <VerifyBlackIcon className="w-full h-auto" />
        </div>
        <Image
          src={image}
          alt={"profileData.name"}
          width={236}
          height={195}
          className="w-full h-full rounded-full object-cover "
        />

        <div className=" absolute bg-[#D9D9D9] md:min-w-8  md:min-h-8  left-1/2 -bottom-3 md:-bottom-5 cursor-pointer duration-200 hover:shadow-md size-5 md:size-8 rounded-full p-1 flex items-center justify-center h-auto -translate-x-1/2 ">
          <FileButton onChange={handleFileChange} accept="image/png,image/jpeg">
            {(props) => (
              <div {...props}>
                <CameraIcon />
              </div>
            )}
          </FileButton>
        </div>
      </div>

      <ModalComp
        opened={opened}
        close={() => {
          close();
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
