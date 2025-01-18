"use client";
import LocationIcon from "@/src/assets/icons/location";
import MapOl from "@/src/components/mapOl";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

function SelectLocation() {
  const [opened, { open, close }] = useDisclosure(false);
  const [location, setLocation] = useState("");

  return (
    <>
      <div className="flex items-center md:justify-center gap-2 " onClick={open}>
        <div className=" min-h-10  px-3 rounded-xl flex-1 flex items-center border cursor-pointer border-transparent gap-1 lg:gap-3 bg-blue/10 duration-300 hover:border-blue hover:shadow-sidebar">
          <LocationIcon fill="#006AFF" />
          <h3 className="text-blue text-xs lg:text-[16px] h-fit ">
            {location || "Select Location"}
          </h3>
        </div>
        {location && (
          <p
            onClick={open}
            className="text-green cursor-pointer text-xs md:text-base font-Regular"
          >
            (Change)
          </p>
        )}
      </div>
      {opened && (
        <ModalComp opened={opened} close={close} title={"Where do you want to rent?"}>
          <div className="lg:w-[640px] w-full">
            <MapOl/>
          </div>
        </ModalComp>
      )}
    </>
  );
}

export default SelectLocation;
