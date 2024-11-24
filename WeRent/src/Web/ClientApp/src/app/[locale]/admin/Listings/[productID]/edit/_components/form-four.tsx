"use client";
import CardList from "@/src/components/card-list";
import ItemLocation from "@/src/components/form-list/item-location";
import Input from "@/src/components/input";
import React, { useState } from "react";
interface LocationProps {
  id: number;
  name: string;
  address: string;
}
function FormFour() {
  const [location, setLocation] = useState<LocationProps[]>([]);

  const addLocation = () => {
    setLocation([
      ...location,
      { id: Math.floor(Math.random() * 100) + 1, name: "", address: "" },
    ]);
  };
  const handleInputChangeLocation = (
    index: number,
    value: string,
    name: string
  ) => {
    const updatedLocation = location.map((loc, i) =>
      loc.id === index ? { ...loc, [name]: value } : loc
    );
    setLocation(updatedLocation);
    //setDataList({ ...dataList, addresses: updatedLocation });
  };
  const handleRemoveLocation = (index: number) => {
    const updatedLocations = location.filter((loc, i) => loc.id !== index);
    setLocation(updatedLocations);
    // setDataList({ ...dataList, addresses: updatedLocations });
  };
  return (
    <CardList title="Storage and stock">
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="flex-1 ">
          <h3 className="text-base lg:text-xl font-Regular mb-4  ">
            Where is the listing storage location
          </h3>
          <ItemLocation
            addLocation={addLocation}
            location={location}
            handleInputChangeLocation={handleInputChangeLocation}
            handleRemoveLocation={handleRemoveLocation}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base lg:text-xl font-Regular mb-4  ">
            Available Stock
          </h3>
          <Input
            placeholder="Ex: 10 "
            labelClassName="!text-xl font-Regular"
            inputClassName="bg-white h-16 rounded-xl"
            className="flex-1"
          />
        </div>
      </div>
    </CardList>
  );
}

export default FormFour;
