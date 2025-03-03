import DeleteIcon from "@/src/assets/icons/delete";
import ErrorIcon from "@/src/assets/icons/error";
import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Select, Tooltip } from "@mantine/core";
import React, { useState } from "react";
interface Tax {
  id: number;
  description: string;
  rate: string;
}
function ModalCustomerTax({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const [taxes, setTaxes] = useState<Tax[]>([
    { id: 1, description: "", rate: "" },
  ]);

  const addTax = () => {
    setTaxes([...taxes, { id: Date.now(), description: "", rate: "" }]);
  };

  const removeTax = (id: number) => {
    setTaxes(taxes.filter((tax) => tax.id !== id));
  };

  const updateTax = (id: number, field: keyof Tax, value: string) => {
    setTaxes(
      taxes.map((tax) => (tax.id === id ? { ...tax, [field]: value } : tax))
    );
  };
  return (
    <ModalComp
      title="New Customer tax profile"
      opened={opened}
      close={() => {
        close();
      }}
    >
      <div className="w-[540px] max-w-full">
        <div className="flex gap-4 flex-col md:flex-row">
          <Input
            label="Tax Profile Name"
            placeholder="Ex. Neatherland Tax Profile"
            inputClassName="h-12 bg-white rounded-xl border-green "
            className="flex-1"
          />
          <div className="flex flex-col space-y-2 md:max-w-[200px] flex-1">
            {/* Label with Tooltip */}
            <div className="flex items-center space-x-2">
              <p className="text-base">Method</p>
              <Tooltip
                color="#FFFFFF"
                multiline
                w={100}
                transitionProps={{ duration: 200 }}
                offset={{ mainAxis: 4, crossAxis: -55 }}
                position="right-start"
                label="How would you like this tax to be treated? Should it be added to the product’s tax profile or replace the existing tax?"
                className=" "
                classNames={{
                  tooltip:
                    "border-green text-[8px] text-grayMedium  bg-white border rounded-lg px-2 py-[2px]",
                }}
              >
                <button>
                  <ErrorIcon className="w-4 h-auto" fill="#6F6B7D" />
                </button>
              </Tooltip>
            </div>

            {/* Select Dropdown */}
            <SelectInput
              className="border-green-500"
              data={["Replace", "Add"]}
              defaultValue="Replace"
              inputClassName="!h-12 !min-h-12 bg-white rounded-xl border-green "
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-5">
          {taxes.map((tax) => (
            <div key={tax.id} className="flex gap-4 flex-col md:flex-row">
              <Input
                label="Tax Describtion"
                placeholder="Describe the tax name that will be shown in the invoice"
                inputClassName="h-12 bg-white rounded-xl border-green "
                className="flex-1"
                value={tax.description}
                onChange={(e) =>
                  updateTax(tax.id, "description", e.target.value)
                }
              />
              <div className=" max-w-[230px] flex-1 md:w-[230px] flex items-end gap-4">
                <Input
                  label="Tax Rate"
                  type="number"
                  placeholder="%"
                  inputClassName="h-12 bg-white rounded-xl border-green "
                  value={tax.rate}
                  onChange={(e) => updateTax(tax.id, "rate", e.target.value)}
                />
                <button onClick={() => removeTax(tax.id)} className="mb-3">
                  <DeleteIcon className="w-5 h-auto" />
                </button>
              </div>
            </div>
          ))}

          <Button onClick={addTax} className={"!px-5 h-12 w-fit"}>
            Add new tax line
          </Button>
        </div>
        <div className="flex items-center gap-7 w-full mt-10">
          <Button
            onClick={close}
            className={"flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>

          <Button onClick={close} className={"flex-1 h-[54px]"}>
            Save
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalCustomerTax;
