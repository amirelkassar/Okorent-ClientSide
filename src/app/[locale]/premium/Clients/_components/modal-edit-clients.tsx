import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import React from "react";
const dataNotes = [
  { value: "1", label: "Default Product Deposit" },
  { value: "2", label: "No Security Deposit" },
  { value: "3", label: "Added to the product deposit" },
];

function ModalEditClients({ opened, close }: { opened: any; close: any }) {
  return (
    <ModalComp opened={opened} close={close} title={"Edit customers"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <SelectInput
            data={dataNotes}
            label="Security Deposit"
            placeholder="% Write Percentage here "
            inputClassName="!h-16 !border-green"
            className="h-auto flex-1"
          />
          <Input
            label={"Discount"}
            placeholder="%    Write discount you want to apply"
            onChange={(e) => {
              console.log(e);
            }}
            inputClassName="h-16 bg-white border-green rounded-xl"
            className="flex-1"
          />
        </div>
        <SelectInput
          data={dataNotes}
          label="Tax Profile"
          placeholder="None"
          inputClassName="!h-16 !border-green"
          className="h-auto flex-1"
        />
        <div className="flex items-center gap-7 w-full mt-8">
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Confirm
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalEditClients;
