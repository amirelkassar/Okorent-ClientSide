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
import ButtonDelete from "@/src/components/button-delete";
import { GetMyStock } from "@/src/hooks/queries/user/lisitings/stock";

interface LocationProps {
  id: number;
  name: string;
  address: string;
}

interface StepLocationProps {
  location: LocationProps[];
  handleInputChangeLocation: (ids: any[]) => void;
  active: boolean;
  handleRemoveLocation: (index: number) => void;
}
function StepLocation({
  location,
  handleInputChangeLocation,
  active = false,
  handleRemoveLocation,
}: StepLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [indexSelect, setIndexSelect] = useState<any>(0);
  const { data } = GetMyStock();
  console.log(data);

  return (
    <Step
      title="Where is the item storage location "
      active={active}
      stepNum={5}
      dec="Add storage location that we will pickup the item from"
    >
      <div>
        {data?.data.length > 0 ? (
          <div className="flex flex-col gap-5 lg:gap-6 max-w-full">
            <MultiSelect
              data={data?.data.map((loc: any) => ({
                value: loc.id, // Use the `id` as the value
                label: loc.name, // Use the `address` as the label
              }))}
              value={location.map((loc) => `${loc}`)}
              onChange={(selectedValues) => {
                handleInputChangeLocation(selectedValues);
              }}
              placeholder="Choose Location"
              searchable
              size="lg"
              classNames={{
                input:
                  " bg-white text-black flex items-center rounded-xl text-grayMedium min-h-12 w-full min-w-full  md:min-h-[64px] border border-green",

                inputField:
                  "placeholder:text-xs md:placeholder:text-base max-w-full min-w-full  h-full placeholder:text-grayMedium placeholder:opacity-100   ",
                pillsList: "h-full",
                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300   flex items-center ",
                pill: "bg-green text-white h-auto py-2 flex items-center rounded-lg gap-2 text-base",
                label: "text-grayMedium",
              }}
              clearable
              className="block max-w-full" // Visible on mobile, hidden on larger screens
            />

            {data?.data
              ?.filter((item: any) => location.includes(item.id))
              .map((loc: any, index: number) => (
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
                      readOnly
                      classNames={{
                        label: "text-sm md:text-[16px] text-grayMedium mb-2",
                        input:
                          " text-black text-[12px] md:text-[16px] rounded-xl md:rounded-2xl text-grayMedium  border-2 border-green h-12  md:h-[64px] placeholder:text-xs md:placeholder:text-base  placeholder:text-grayMedium placeholder:opacity-100 ",
                        wrapper: "h-[64px]",
                      }}
                      className=" flex-1 md:min-w-[144px]  duration-200 md:min-h-[64px] bg-white rounded-2xl text-grayMedium"
                    />
                    <div
                      onClick={() => {
                        setIndexSelect(loc.id);
                        open();
                      }}
                      className=" cursor-pointer flex-1 max-w-full min-w-[156px]"
                    >
                      <h3 className="text-sm md:text-[16px] text-grayMedium mb-2">
                        Address
                      </h3>
                      <p className=" flex items-center px-2 py-3 flex-1 text-nowrap truncate  max-w-[260px] text-[12px] md:text-[16px] rounded-2xl text-grayMedium first:font-Bold  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100">
                        {loc.address}
                      </p>
                    </div>

                    <ButtonDelete
                      onClick={() => handleRemoveLocation(loc.id)}
                      className={"!size-7 mt-6 lg:!size-11 bg-grayBack"}
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : null}

        <div className="variations-header">
          <Button
            onClick={() => {
              setIndexSelect(null);
              open();
            }}
            className={
              "mt-8 bg-grayBack gap-3 px-7 h-12 text-xs md:text-base md:h-[64px] border-none text-black"
            }
          >
            <LocationIcon fill="#0F2A43" className=" w-3 md:w-5 h-auto" />
            <p>Add location</p>
          </Button>
        </div>

        <ModalComp title="Add a variation" opened={opened} close={close}>
          <GoogleMapLoc close={close} index={indexSelect} />
        </ModalComp>
      </div>
    </Step>
  );
}

export default StepLocation;
