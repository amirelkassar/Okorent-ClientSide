"use client";
import LocationIcon from "@/src/assets/icons/location";
import GoogleMapLoc from "@/src/components/GoogleMap";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

function SelectLocation() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="flex items-center justify-center " onClick={open}>
        <div className=" h-10 min-h-fit px-3 rounded-xl flex items-center border cursor-pointer border-transparent gap-1 lg:gap-3 bg-blue/10 duration-300 hover:border-blue hover:shadow-sidebar">
          <LocationIcon fill="#006AFF" />
          <h3 className="text-blue text-sm lg:text-[16px]">Select Location</h3>
        </div>
      </div>
      {opened && (
        <ModalComp opened={opened} close={close} title={"Select rental period"}>
          <div className="lg:w-[640px] w-full">
            <GoogleMapLoc close={close} />
          </div>
        </ModalComp>
      )}
    </>
  );
}

export default SelectLocation;
