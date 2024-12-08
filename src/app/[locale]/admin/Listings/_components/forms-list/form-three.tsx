import CardList from "@/src/components/card-list";
import ItemDescriptions from "@/src/components/form-list/item-descriptions";
import Input from "@/src/components/input";
import React from "react";

function FormThree() {
  return (
    <CardList title="Price and Value">
      <div className="flex flex-col lgl:flex-row gap-5">
        <div>
          <ItemDescriptions title=" Try to add lower price for longer bookings" />

          <div className="flex gap-4 flex-wrap ">
            <Input
              label="Price for 1 Week"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1 min-w-[160px]"
            />
            <Input
              label="Price for 1 Month"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1 min-w-[160px]"
            />
            <Input
              label="Price for 1 Month"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1 min-w-[160px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <ItemDescriptions title="Value of the Listing" />
          <div className="flex gap-4 flex-wrap  ">
            <Input
              label="."
              placeholder={"USD"}
              labelClassName="text-sm lg:text-base  hidden lg:block opacity-0 font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl "
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </CardList>
  );
}

export default FormThree;
