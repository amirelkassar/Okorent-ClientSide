"use client";
import React, { useState } from "react";
import Step from "./step";
import { Checkbox, MultiSelect, TextInput } from "@mantine/core";
import Button from "@/src/components/button";
import { cn } from "@/src/lib/utils";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import LocationIcon from "@/src/assets/icons/location";
import GoogleMapLoc from "@/src/components/GoogleMap";
import DeleteIcon from "@/src/assets/icons/delete";

interface LocationProps {
  id: number;
  name: string;
  address: string;
}
const oldLocations: LocationProps[] = [
  {
    id: Math.floor(Math.random() * 100) + 1,
    name: "test1",
    address: "test address",
  },

  {
    id: Math.floor(Math.random() * 100) + 1,
    name: "test2",
    address: "test address",
  },
];
interface StepLocationProps {
  location: LocationProps[];
  addLocation: () => void;
  handleInputChangeLocation: (
    index: number,
    value: string,
    name: string
  ) => void;
  active: boolean;
  handleRemoveLocation: (index: number) => void;
}
function StepLocation({
  location,
  addLocation,
  handleInputChangeLocation,
  active = false,
  handleRemoveLocation,
}: StepLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [SelectLocation, setSelectLocation] = useState<string[]>([]);
  const [indexSelect, setIndexSelect] = useState<number>(0);

  console.log(location[location.length - 1]?.id);

  return (
    <Step
      title="Where is the item storage location "
      active={true}
      stepNum={5}
      dec="Add storage location that we will pickup the item from"
    >
      <div>
        <div className="flex flex-col gap-5 lg:gap-6">
          <MultiSelect
            data={oldLocations.map((loc) => loc.name)}
            value={SelectLocation}
            onChange={(value) => {
              handleInputChangeLocation(
                oldLocations?.find((location) => location.name === value[0])
                  ?.id || 2,
                value[0],
                "name"
              );
            }}
            placeholder="Choose Location"
            searchable
            size="lg"
            classNames={{
              input:
                " bg-white text-black flex items-center rounded-xl text-grayMedium  min-h-[64px] border border-green",

              inputField:
                "placeholder:text-base  h-full placeholder:text-grayMedium placeholder:opacity-100   ",
              pillsList: "h-full",
              dropdown:
                "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
              option:
                "hover:bg-green hover:text-white duration-300   flex items-center ",
              pill: "bg-green text-white h-auto py-2 flex items-center rounded-lg gap-2 text-base",
              label: "text-grayMedium",
            }}
            clearable
            className="block " // Visible on mobile, hidden on larger screens
          />
          {oldLocations
            .filter((loc) => SelectLocation.includes(loc.name))
            .map((loc, index) => (
              <div key={index} className="flex items-center gap-3">
                <Checkbox
                  checked={true}
                  readOnly
                  color="#88BA52"
                  className={cn("mt-6")}
                />
                <div className="flex items-center flex-wrap lg:flex-nowrap flex-1 gap-4">
                  <TextInput
                    value={loc.name}
                    name="name"
                    label={"Location Name"}
                    placeholder={`Location ${index + 1}`}
                    onChange={(e) =>
                      handleInputChangeLocation(loc.id, e.target.value, "name")
                    }
                    classNames={{
                      label: "text-sm md:text-[16px] text-grayMedium mb-2",
                      input:
                        " text-black text-[12px] md:text-[16px] rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                      wrapper: "h-[64px]",
                    }}
                    className=" flex-1 min-w-[144px]  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
                  />
                  <div
                    onClick={() => {
                      setIndexSelect(loc.id);
                      open();
                    }}
                    className=" cursor-pointer flex-1 min-w-[156px]"
                  >
                    <h3 className="text-sm md:text-[16px] text-grayMedium mb-2">
                      Address
                    </h3>
                    <p className=" flex items-center px-2 py-3 flex-1 text-nowrap truncate  max-w-[260px] text-[12px] md:text-[16px] rounded-2xl text-grayMedium first:font-Bold  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100">
                      {loc.address}
                    </p>
                  </div>
                  <div
                    onClick={() => handleRemoveLocation(loc.id)}
                    className="bg-grayBack mt-6 flex items-center cursor-pointer duration-300 hover:shadow-md justify-center size-7 lg:size-11 p-2 rounded-full"
                  >
                    <DeleteIcon className=" h-auto w-3 lg:w-5" />
                  </div>
                </div>
              </div>
            ))}
          {location.map((loc, index) => (
            <div key={index} className="flex items-center gap-3">
              <Checkbox
                checked={true}
                readOnly
                color="#88BA52"
                className={cn("mt-6")}
              />
              <div className="flex items-center flex-wrap lg:flex-nowrap flex-1 gap-4">
                <TextInput
                  value={loc.name}
                  name="name"
                  label={"Location Name"}
                  placeholder={`Location ${index + 1}`}
                  onChange={(e) =>
                    handleInputChangeLocation(loc.id, e.target.value, "name")
                  }
                  classNames={{
                    label: "text-sm md:text-[16px] text-grayMedium mb-2",
                    input:
                      " text-black text-[12px] md:text-[16px] rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                    wrapper: "h-[64px]",
                  }}
                  className=" flex-1 min-w-[144px]  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
                />
                <div
                  onClick={() => {
                    setIndexSelect(loc.id);
                    open();
                  }}
                  className=" cursor-pointer flex-1 min-w-[156px]"
                >
                  <h3 className="text-sm md:text-[16px] text-grayMedium mb-2">
                    Address
                  </h3>
                  <p className=" flex items-center px-2 py-3 flex-1 text-nowrap truncate  max-w-[260px] text-[12px] md:text-[16px] rounded-2xl text-grayMedium first:font-Bold  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100">
                    {loc.address}
                  </p>
                </div>
                <div
                  onClick={() => handleRemoveLocation(loc.id)}
                  className="bg-grayBack mt-6 flex items-center cursor-pointer duration-300 hover:shadow-md justify-center size-7 lg:size-11 p-2 rounded-full"
                >
                  <DeleteIcon className=" h-auto w-3 lg:w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {location.length < 3 && (
          <div className="variations-header">
            <Button
              onClick={() => {
                addLocation();
                open();
              }}
              className={
                "mt-8 bg-grayBack gap-3 px-7 h-[64px] border-none text-black"
              }
            >
              <LocationIcon fill="#0F2A43" />
              <p>Add location</p>
            </Button>
          </div>
        )}
        {opened && indexSelect ? (
          <ModalComp title="Add a variation" opened={opened} close={close}>
            <GoogleMapLoc
              close={close}
              index={indexSelect}
              handleInputChangeLocation={handleInputChangeLocation}
            />
          </ModalComp>
        ) : (
          <ModalComp title="Add a variation" opened={opened} close={close}>
            <GoogleMapLoc
              close={close}
              index={location[location.length - 1]?.id}
              handleInputChangeLocation={handleInputChangeLocation}
            />
          </ModalComp>
        )}
      </div>
    </Step>
  );
}

export default StepLocation;
