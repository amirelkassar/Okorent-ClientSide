import React from "react";
import Input from "../input";
import ItemDescriptions from "./item-descriptions";
import InputDate from "../date-input";

function ItemPercentage() {
  return (
    <div>
      <ItemDescriptions
        title="Discount"
        description="   Write below the percentage of discount you want to apply to this item"
        titleStyle="mb-1"
      />

      <Input
        placeholder="%"
        type="number"
        labelClassName="!text-xl font-Regular"
        inputClassName="bg-white h-16 rounded-xl"
        className="flex-1"
      />
      <InputDate
        placeholder="Select period discount will be applied on"
        withIcon
      />
      <div>
        <ItemDescriptions
          title="Security Deposit"
          description="Write below the percentage of security deposit you want to apply to
          this item"
          titleStyle="mb-1"
        />
        <Input
          placeholder="%"
          type="number"
          labelClassName="!text-xl font-Regular"
          inputClassName="bg-white h-16 rounded-xl"
          className="flex-1"
        />
      </div>
    </div>
  );
}

export default ItemPercentage;
