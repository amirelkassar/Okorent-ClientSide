import ModalComp from "@/src/components/modal-comp";
import { MultiSelect, Radio } from "@mantine/core";
import React, { useState } from "react";
import SearchProduct from "./search-product";
import Button from "@/src/components/button";
const OptionAssignTax = [
  {
    value: "Category",
    label: "Category",
  },
  {
    value: "Single",
    label: "Single Item",
    title: "",
  },
];
const OptionCategory = [
  {
    value: "category1",
    label: "category1",
  },
  {
    value: "category2",
    label: "category2",
  },
  {
    value: "category3",
    label: "category3",
  },
];
function ModalAssignTax({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const [checked, setChecked] = useState<"Category" | "Single">("Category");
  return (
    <ModalComp
      title="Assign Tax to products"
      opened={opened}
      close={() => {
        close();
      }}
    >
      <div className="w-[540px] max-w-full">
        <h3 className="text-base mb-4">Assign By</h3>
        <Radio.Group
          name="OptionAvailability"
          defaultValue={checked}
          onChange={(e) => {
            setChecked(e === "Category" ? "Category" : "Single");
          }}
        >
          <div className="flex mb-6 items-center  gap-10 ">
            {OptionAssignTax.map((option, index) => {
              return (
                <Radio
                  color="#88BA52"
                  key={index}
                  value={option.value}
                  label={option.label}
                  classNames={{
                    icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                    label: " text-xs lg:text-sm",
                  }}
                />
              );
            })}
          </div>
        </Radio.Group>
        <div>
          {checked === "Category" ? (
            <MultiSelect
              data={OptionCategory}
              placeholder="Choose Category"
              searchable
              nothingFoundMessage="No results"
              classNames={{
                input:
                  " bg-white text-black flex items-center text-xs  rounded-xl text-grayMedium  min-h-16 border border-green",
                label: "text-[16px] mb-2 font-Medium ms-1",
                inputField: " h-full placeholder:text-xs ",
                pillsList: "h-full ",
                pill: "bg-grayMedium/20 h-7 text-black rounded-lg text-xs font-Regular flex items-center",

                dropdown:
                  "bg-white text-black rounded-lg border border-green/50 text-grayDark py-2",
                option:
                  "hover:bg-green hover:text-white duration-300  flex items-center ",
              }}
              clearable
            />
          ) : (
            <div>
              <SearchProduct />
            </div>
          )}
        </div>
        <div className="flex items-center gap-7 w-full mt-10">
          <Button
            onClick={close}
            className={"flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
          {checked === "Category" ? (
            <Button onClick={close} className={"flex-1 h-[54px]"}>
              Assign
            </Button>
          ) : (
            <Button onClick={close} className={"flex-1 h-[54px]"}>
              Save and close
            </Button>
          )}
        </div>
      </div>
    </ModalComp>
  );
}

export default ModalAssignTax;
