import CardList from "@/src/components/card-list";
import Input from "@/src/components/input";
import InputTextarea from "@/src/components/InputTextarea";
import SelectInput from "@/src/components/select-input";
import React from "react";

function FormOne() {
  return (
    <CardList title="Listing Details">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mb-6">
        <SelectInput
          data={[
            "Electronics",
            "Electronics2",
            "Electronics3",
            "Electronics4",
            "Electronics5",
          ]}
          label="Listing Category"
          inputClassName="!h-16"
          labelClassName="!text-xl font-Regular"
          placeholder="Select category"
          className="flex-1"
        />

        <Input
          label="Listing Description"
          placeholder="Add bundle title here "
          labelClassName="!text-xl font-Regular"
          inputClassName="bg-white h-16 rounded-xl"
          className="flex-1"
        />
      </div>
      <InputTextarea
        placeholder="Add as much details as you can here about your bundle "
        inputClassName="h-[120px] min-h-[120px]"
        className=" min-h-[120px]"
      />
    </CardList>
  );
}

export default FormOne;
