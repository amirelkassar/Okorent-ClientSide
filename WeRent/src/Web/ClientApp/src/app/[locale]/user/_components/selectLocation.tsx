"use client";
import LocationIcon from "@/src/assets/icons/location";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import GoogleMapLoc from "./GoogleMap";

function SelectLocation() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="flex items-center justify-center mb-16" onClick={open}>
        <div className=" h-10 min-h-fit px-3 rounded-xl flex items-center border cursor-pointer border-transparent gap-3 duration-300 hover:border-blue hover:shadow-sidebar">
          <LocationIcon fill="#006AFF" />
          <h3 className="text-blue text-[16px]">Select Location</h3>
        </div>
      </div>
      {opened && (
        <ModalComp opened={opened} close={close} title={"Select rental period"}>
          <GoogleMapLoc close={close} />
        </ModalComp>
      )}
    </>
  );
}

export default SelectLocation;
