"use client";
import React, { useState } from "react";
import { MultiSelect } from "@mantine/core";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import LocationIcon from "@/src/assets/icons/location";
import GoogleMapLoc from "@/src/components/GoogleMap";
import ButtonDelete from "@/src/components/button-delete";
import { GetMyStock } from "@/src/hooks/queries/user/lisitings/stock";

interface StepLocationProps {
  location: any[];
  handleInputChangeLocation: (ids: any[]) => void;
  handleRemoveLocation: (index: number) => void;
}
function StepLocation({
  location,
  handleInputChangeLocation,
  handleRemoveLocation,
}: StepLocationProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [indexSelect, setIndexSelect] = useState<any>(0);
  const { data } = GetMyStock();


  const handelValueWhenAddNewLocation = (newLocation: any) => {
    handleInputChangeLocation([...location, newLocation]);
  };
  return (
    <div className="mt-1 mdl:mt-2 mdl:pb-8 flex-1">
      <h3 className={"text-sm lg:text-[24px] mb-1 "}>Storage Location</h3>
      <p className="text-grayMedium mb-4 text-sm lg:text-base font-Regular">
        Add storage location that we will pickup the item from
      </p>
      <div>
        {data?.data?.length > 0 ? (
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
                pillsList: "h-full min-w-full  ",
                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300 px-2 py-2 mdl:py-3 mdl:rounded-xl    flex items-center text-sm mdl:text-base ",
                pill: "bg-green text-white h-auto py-1 mdl:py-2 flex items-center rounded-lg gap-2 text-sm mdl:text-base",
                label: "text-grayMedium",
              }}
              clearable
              className="block max-w-full" // Visible on mobile, hidden on larger screens
            />

            {data?.data
              ?.filter((item: any) => location.includes(item.id))
              .map((loc: any, index: number) => (
                <div
                  key={index}
                  className="flex items-center  max-w-full  flex-1 gap-2 mdl:gap-4 justify-between"
                >
                  <div className="flex mdl:items-center max-w-[calc(100%-40px)] mdl:max-w-[calc(100%-80px)] flex-col mdl:flex-row flex-1 gap-2 mdl:gap-4">
                    <div
                      onClick={() => {
                        setIndexSelect(loc.id);
                        open();
                      }}
                      className=" cursor-pointer flex-1 max-w-full min-w-[156px]"
                    >
                      <h3 className="text-sm md:text-[16px] text-grayMedium mb-1 md:mb-2">
                        Location Name
                      </h3>
                      <p className=" flex items-center px-2 mdl:py-3 flex-1 text-nowrap truncate w-full   text-[12px] md:text-[16px] rounded-xl mdl:rounded-2xl text-grayMedium first:font-Bold  border-2 border-green h-12  mdl:h-[64px]  placeholder:text-grayMedium placeholder:opacity-100">
                        {loc.name}
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        setIndexSelect(loc.id);
                        open();
                      }}
                      className=" cursor-pointer flex-1 max-w-full min-w-[156px]"
                    >
                      <h3 className="text-sm md:text-[16px] text-grayMedium mb-1 md:mb-2">
                        Address
                      </h3>
                      <p className=" flex items-center px-2 mdl:py-3 flex-1 text-nowrap truncate w-full text-[12px] md:text-[16px] rounded-xl mdl:rounded-2xl text-grayMedium first:font-Bold  border-2 border-green h-12  mdl:h-[64px]  placeholder:text-grayMedium placeholder:opacity-100">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  <ButtonDelete
                    onClick={() => handleRemoveLocation(loc.id)}
                    className={
                      "!size-7 mt-6 md:!size-11 min-w-7 md:min-w-11 bg-grayBack"
                    }
                  />
                </div>
              ))}
          </div>
        ) : null}

        <Button
          onClick={() => {
            setIndexSelect(null);
            open();
          }}
          className={
            "mt-8 bg-grayBack gap-3 px-7 h-12 text-xs md:text-base md:h-[64px] border-none text-black"
          }
        >
          <LocationIcon fill="#0F2A43" />
          <p>Add location</p>
        </Button>

        <ModalComp title="Add a variation" opened={opened} close={close}>
          <GoogleMapLoc
            close={close}
            index={indexSelect}
            handelValueWhenAddNewLocation={handelValueWhenAddNewLocation}
          />
        </ModalComp>
      </div>
    </div>
  );
}

export default StepLocation;
