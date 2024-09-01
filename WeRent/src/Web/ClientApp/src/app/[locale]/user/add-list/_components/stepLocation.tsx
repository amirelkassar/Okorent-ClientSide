"use client";
import React, { ChangeEvent } from "react";
import Step from "./step";
import { Checkbox, TextInput } from "@mantine/core";
import Button from "@/src/components/button";
import { cn } from "@/src/lib/utils";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import LocationIcon from "@/src/assets/icons/location";
import GoogleMapLoc from "@/src/components/GoogleMap";

interface LocationProps {
  name: string;
  address: string;
}
interface StepLocationProps {
  location: LocationProps[];
  addLocation: () => void;
  handleInputChangeLocation: (
    index: number,
    value: string,
    name: string
  ) => void;
  active:boolean
}
function StepLocation({
  location,
  addLocation,
  handleInputChangeLocation,
  active=false
}: StepLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Step
      title="Where is the item storage location "
      active={active}
      stepNum={5}
      dec="Add storage location that we will pickup the item from"
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        {location.map((loc, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox
              checked={true}
              readOnly
              color="#88BA52"
              className={cn("mt-6")}
            />
            <div className="flex items-center gap-4">
              <TextInput
                value={`Location ${index + 1}`}
                name="name"
                label={"Location Name"}
                placeholder={`Location ${index + 1}`}
                readOnly
                classNames={{
                  label: "text-sm md:text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black text-[12px] md:text-[16px] rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
              <TextInput
                value={loc.address}
                label={"Address"}
                name="attribute1"
                placeholder={`Saffron Walden, England`}
                onChange={(event) =>
                  handleInputChangeLocation(
                    index,
                    "address",
                    event.target.value
                  )
                }
                classNames={{
                  label: "text-sm md:text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black text-[12px] md:text-[16px] rounded-2xl text-grayMedium first:font-Bold  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
              <ModalComp title="Add a variation" opened={opened} close={close}>
                <GoogleMapLoc
                  close={close}
                  index={index}
                  handleInputChangeLocation={handleInputChangeLocation}
                />
              </ModalComp>
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
    </Step>
  );
}

export default StepLocation;
