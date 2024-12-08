import Card from "@/src/components/card";
import Input from "@/src/components/input";
import React from "react";

function FormPlanInfo() {
  return (
    <Card className="flex flex-col gap-6 flex-1 p-9">
      <Input
        label="Package Name"
        placeholder="Pro"
        inputClassName="bg-white  h-16"
      />
      <Input
        label="Package Description"
        placeholder="The best value for medium-sized and growing rental businesses."
        inputClassName="bg-white  h-16"
      />
      <div className="flex lg:items-center flex-col lg:flex-row gap-4 ">
        <Input
          type="number"
          label="Package Price / Month"
          placeholder="29$"
          inputClassName="bg-white  h-16"
          className="flex-1"
        />
        <Input
          type="number"
          label="Package Price / Year"
          placeholder="29$"
          inputClassName="bg-white  h-16"
          className="flex-1"
        />
      </div>
      <Input
        label="Package Flag"
        placeholder="Most Popular"
        inputClassName="bg-white  h-16"
      />
    </Card>
  );
}

export default FormPlanInfo;
