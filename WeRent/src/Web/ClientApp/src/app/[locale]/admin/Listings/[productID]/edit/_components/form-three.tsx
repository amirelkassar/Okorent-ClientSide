import CardList from "@/src/components/card-list";
import Input from "@/src/components/input";
import React from "react";

function FormThree() {
  return (
    <CardList title="Price and Value">
      <div className="flex flex-col lgl:flex-row gap-5">
        <div>
          <p className="text-base lg:text-xl font-Regular mb-4">
            Try to add lower price for longer bookings
          </p>
          <div className="flex gap-4 flex-wrap ">
            <Input
              label="Price for 3 Days"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1"
            />
            <Input
              label="Price for 1 Week"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1"
            />
            <Input
              label="Price for 1 Month"
              placeholder={"Add Price Here"}
              labelClassName="text-sm lg:text-base font-Regular text-grayMedium "
              inputClassName="bg-white h-16 rounded-xl md:max-w-[200px]"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-base lg:text-xl font-Regular mb-4">
            Value of the Listing
          </p>
          <div className="flex gap-4 flex-wrap ">
            <Input
              label="."
              placeholder={"USD"}
              labelClassName="text-sm lg:text-base  opacity-0 font-Regular text-grayMedium "
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
