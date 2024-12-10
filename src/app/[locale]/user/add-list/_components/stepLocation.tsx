"use client";
import React, { useState } from "react";
import Step from "./step";
import {  MultiSelect } from "@mantine/core";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import LocationIcon from "@/src/assets/icons/location";
import GoogleMapLoc from "@/src/components/GoogleMap";import { GetMyStock } from "@/src/hooks/queries/user/lisitings/stock";

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
}
function StepLocation({
  location,
  addLocation,
  handleInputChangeLocation,
  active = false,
}: StepLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [indexSelect, setIndexSelect] = useState<number>(0);

  console.log(location[location.length - 1]?.id);
  const { data } = GetMyStock();
  console.log(data);
  const formattedLocations = oldLocations.map((loc) => ({
    value: loc.id, // Use the `id` as the value
    label: loc.address, // Use the `address` as the label
  }));
  return (
    <Step
      title="Where is the item storage location "
      active={active}
      stepNum={5}
      dec="Add storage location that we will pickup the item from"
    >
      <div>
        <div className="flex flex-col gap-5 lg:gap-6">
          <MultiSelect
            data={data?.data.map((loc:any) => ({
              value: loc.id, // Use the `id` as the value
              label: loc.address, // Use the `address` as the label
            }))}
            //value={SelectLocation}
            onChange={(value) => {
              console.log(value);
              // handleInputChangeLocation(
              //   oldLocations?.find((location) => location.name === value[0])
              //     ?.id || 2,
              //   value[0],
              //   "name"
              // );
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
