"use client";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import InputTextarea from "@/src/components/InputTextarea";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Toast } from "@/src/components/toast";
import { useEditMyProfile } from "@/src/hooks/queries/user/my-profile";
import { Language, WorkingDays } from "@/src/lib/dataUser";
import { convertTo12Hour, convertTo24Hour } from "@/src/lib/utils";
import { MultiSelect, ScrollArea } from "@mantine/core";
import React, { useCallback, useState } from "react";

function ModalEditProfile({
  opened,
  close,
  initialData,
}: {
  opened: boolean;
  close: () => void;
  initialData: any;
}) {
  const { mutateAsync: EditMyProfile } = useEditMyProfile();
  console.log(initialData);
  const [formState, setFormState] = useState({
    id: initialData?.id || "",
    Name: initialData?.name || "",
    Email: initialData?.userName || "",
    Country: initialData?.country || "",
    City: initialData?.city || "",
    PostalCode: initialData?.postalCode || "",
    streetName: initialData?.streetName || "",
    PhoneNumber: initialData?.phoneNumber || "",
    Language: "en",
    description: initialData?.description || "",
    UserLanguages:
      initialData?.languages?.map((item: any) =>
        item?.userLanguages?.toString()
      ) || [],
    address: initialData?.address || "",
    workingFrom: initialData?.workingFrom || "",
    workingTo: initialData?.workingTo || "",
    activeFrom: initialData?.activeFrom?.toString() || "",
    activeTo: initialData?.activeTo?.toString() || "",
    region: initialData?.region || "",
    zipCode: initialData?.zipCode || "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmitEditProfile = useCallback(async () => {
    console.log("Form Data:", formState);

    Toast.Promise(EditMyProfile(formState), {
      success: "successfully Edit Profile",
      onSuccess(res) {
        close();
      },
    });
  }, [EditMyProfile, formState, close]);

  return (
    <ModalComp opened={opened} close={close} title="Edit profile">
      <div className="w-[500px] max-w-full">
        <ScrollArea
          h={600}
          color="red"
          classNames={{
            scrollbar: "bg-grayMedium/15 rounded-2xl",
            thumb: "bg-green",
          }}
        >
          <form className="flex flex-col gap-4 max-w-[calc(100%-20px)] w-full pb-2  ">
            <Input
              label="Name"
              placeholder="Name"
              defaultValue={formState.Name}
              onChange={(e) => handleInputChange("Name", e.target.value)}
            />
            <Input
              label="Email"
              placeholder="Email"
              defaultValue={formState.Email}
              onChange={(e) => handleInputChange("Email", e.target.value)}
            />
            <Input
              label="Phone Number"
              placeholder="Phone Number"
              defaultValue={formState.PhoneNumber}
              onChange={(e) =>
                handleInputChange("PhoneNumber ", e.target.value)
              }
            />

            <MultiSelect
              label="Languages"
              data={Language}
              defaultValue={formState.UserLanguages}
              onChange={(value) => handleInputChange("UserLanguages", value)}
              placeholder="Select Languages"
              searchable
              nothingFoundMessage="No results"
              classNames={{
                input: "bg-grayLight border-none h-11 rounded-[8px] ",
                label: "text-[16px] mb-2 font-Medium ms-1",
                inputField: " h-full placeholder:text-xs ",
                pillsList: "h-full ",
                pill: "bg-green text-white rounded-lg text-xs font-Regular",
                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300  flex items-center ",
              }}
              clearable
            />
            <div className="flex flex-col gap-4">
              <p className="text-sm lg:text-base font-Medium mb-1">
                Address information
              </p>
              <Input
                label="Address"
                placeholder="Address"
                defaultValue={formState.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
              <Input
                label="Street Name"
                placeholder="Street Name"
                defaultValue={formState.streetName}
                onChange={(e) =>
                  handleInputChange("streetName", e.target.value)
                }
              />
            </div>
            <div className="flex gap-4 mdl:gap-7 flex-wrap flex-col mdl:flex-row">
              <Input
                label="Country"
                defaultValue={formState.Country}
                placeholder="Country"
                className="flex-1"
                onChange={(e) => handleInputChange("Country", e.target.value)}
              />
              <Input
                label="City"
                defaultValue={formState.City}
                placeholder="City"
                className="flex-1"
                onChange={(e) => handleInputChange("City", e.target.value)}
              />
            </div>
            <div className="flex gap-4 mdl:gap-7 flex-wrap flex-col mdl:flex-row">
              <Input
                label="Region"
                defaultValue={formState.region}
                placeholder="Region"
                className="flex-1"
                onChange={(e) => handleInputChange("region", e.target.value)}
              />
              <Input
                label="Zip Code"
                defaultValue={formState.zipCode}
                placeholder="Zip Code"
                className="flex-1"
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
            </div>
            <Input
              label="Postal Code"
              placeholder="Postal Code"
              defaultValue={formState.PostalCode || ""}
              onChange={(e) => handleInputChange("PostalCode", e.target.value)}
            />
            <InputTextarea
              label="About"
              placeholder="About"
              inputClassName="min-h-[100px] bg-grayLight focus:bg-white"
              autosize
              className="h-auto !min-h-10 !mb-0"
              defaultValue={formState.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            <div>
              <p className="text-sm lg:text-base font-Medium mb-1">
                Working Days
              </p>
              <div className="flex gap-4 flex-wrap flex-col mdl:flex-row ">
                <SelectInput
                  data={WorkingDays}
                  label="From"
                  placeholder="Select Working Days"
                  onChange={(value) => handleInputChange("activeFrom", value)}
                  inputClassName="bg-grayLight border-none !h-11 !min-h-11 rounded-[8px]  placeholder:!text-xs"
                  className="h-auto flex-1"
                  defaultValue={formState.activeFrom}
                />
                <SelectInput
                  data={WorkingDays}
                  label="To"
                  placeholder="Select Working Days"
                  onChange={(value) => handleInputChange("activeTo", value)}
                  inputClassName="bg-grayLight border-none !h-11 !min-h-11 rounded-[8px]  placeholder:!text-xs"
                  className="h-auto flex-1"
                  defaultValue={formState.activeTo}
                />
              </div>
            </div>

            <div>
              <p className="text-sm lg:text-base font-Medium mb-1">
                Opining hours
              </p>
              <div className="flex mdl:items-center gap-4 w-full flex-col mdl:flex-row">
                <Input
                  type="time"
                  label="From"
                  value={convertTo24Hour(formState.workingFrom)}
                  onChange={(value) => {
                    handleInputChange(
                      "workingFrom",
                      convertTo24Hour(value.target.value)
                    );
                  }}
                  inputClassName="bg-grayLight border-none w-full h-11 rounded-xl "
                  className="w-full"
                />

                <Input
                  type="time"
                  label="To"
                  onChange={(value) =>
                    handleInputChange(
                      "workingTo",
                      convertTo24Hour(value.target.value)
                    )
                  }
                  value={convertTo24Hour(formState.workingTo)}
                  inputClassName="bg-grayLight border-none w-full h-11 rounded-xl "
                  className="w-full"
                />
              </div>
            </div>
          </form>
        </ScrollArea>

        <div className="flex items-center mt-5 justify-between w-full gap-6 ">
          <Button
            className={"bg-grayBack flex-1 border-none text-black"}
            onClick={close}
          >
            Discard Edits
          </Button>
          <Button className={"flex-1"} onClick={onSubmitEditProfile}>
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalEditProfile;
