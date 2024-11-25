"use client";
import React, { ChangeEvent } from "react";
import { Checkbox, Select, TextInput } from "@mantine/core";
import Button from "@/src/components/button";
import PlusIcon from "@/src/assets/icons/plus";
import { cn } from "@/src/lib/utils";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import DownIcon from "@/src/assets/icons/down";
interface Variation {
  name: string;
  attribute1: string;
  attribute2: string;
}
interface ItemVariationsProps {
  variations: Variation[];
  setVariations: React.Dispatch<React.SetStateAction<Variation[]>>;
  addVariation: () => void;
  handleInputChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleInputChangeSelect: (index: number, value: any, name: string) => void;
}
function ItemVariations({
  variations,
  addVariation,
  handleInputChange,
  handleInputChangeSelect,
}: ItemVariationsProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <div className="flex flex-col gap-6">
        {variations.map((variation, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox
              checked={true}
              readOnly
              color="#88BA52"
              className={cn(index === 0 && "mt-6")}
            />
            <div className="flex items-center flex-wrap gap-4">
              <TextInput
                value={`Phone Cass ${index + 1}`}
                name="name"
                label={index === 0 && "Variation Name"}
                placeholder={`Phone Cass ${index + 1}`}
                readOnly
                classNames={{
                  label: "text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[150px]  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
              <TextInput
                value={"Color -" + " " + variation.attribute1}
                label={index === 0 && "Attribute 1"}
                name="attribute1"
                placeholder={`Phone Cass ${index + 1}`}
                onChange={(event) => handleInputChange(index, event)}
                classNames={{
                  label: "text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black rounded-2xl text-grayMedium first:font-Bold  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[150px]  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
              <TextInput
                value={"Size -" + " " + variation.attribute2}
                label={index === 0 && "Attribute 2"}
                name="attribute2"
                placeholder={`Phone Cass ${index + 1}`}
                onChange={(event) => handleInputChange(index, event)}
                classNames={{
                  label: "text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1 min-w-[150px]  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
            </div>
          </div>
        ))}
      </div>
      <ModalComp title="Add a variation" opened={opened} close={close}>
        <div className="flex flex-col gap-6 w-[660px] max-w-full">
          {variations.map((variation, index) => (
            <div key={index} className="flex items-center gap-4">
              <Select
                data={["Color", "Color2", "Color3", "Color4", "Color5"]}
                leftSectionPointerEvents="none"
                rightSection={<DownIcon />}
                placeholder="Color"
                name="attribute1"
                onChange={(event) =>
                  handleInputChangeSelect(index, event, "attribute1")
                }
                label={index === 0 && "Attribute 1"}
                classNames={{
                  label: "text-[16px] text-black mb-2",
                  input:
                    " text-black rounded-2xl text-grayMedium  h-[64px]  border-2 border-green  placeholder:text-grayMedium placeholder:opacity-100 ",

                  wrapper: "h-[64px]",
                  dropdown:
                    "bg-white text-black rounded-2xl border border-green/50 text-grayDark py-2",
                  option: "hover:bg-green hover:text-white duration-300 ",
                }}
                className=" flex-1   duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />

              <TextInput
                value={variation.attribute2}
                label={index === 0 && " Attribute Details"}
                name="attribute2"
                placeholder={`Ex: If color Type Red`}
                onChange={(event) => handleInputChange(index, event)}
                classNames={{
                  label: "text-[16px] text-grayMedium mb-2",
                  input:
                    " text-black rounded-2xl text-grayMedium  border-2 border-green  h-[64px]  placeholder:text-grayMedium placeholder:opacity-100 ",
                  wrapper: "h-[64px]",
                }}
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
            </div>
          ))}
        </div>
        {variations.length < 3 && (
          <Button
            onClick={addVariation}
            className={
              "mt-8 bg-grayBack gap-3 px-7 h-[64px] border-none text-black"
            }
          >
            <PlusIcon fill="#0F2A43" />
            <p>Add Variations</p>
          </Button>
        )}
        <div className="w-full flex items-center gap-5 mt-28">
          <Button onClick={close} className={" h-[64px] flex-1"}>
            Save and close
          </Button>
          {variations.length < 3 && (
            <Button
              onClick={addVariation}
              className={" h-[64px] flex-1 bg-grayBack border-none text-black"}
            >
              Save and add another
            </Button>
          )}
        </div>
      </ModalComp>
      {variations.length < 3 && (
        <div className="variations-header">
          <Button
            onClick={() => {
              addVariation();
              open();
            }}
            className={
              "mt-8 bg-grayBack gap-2 lg:gap-3 lg:!px-7 h-12 lg:h-[64px] border-none text-black"
            }
          >
            <PlusIcon fill="#0F2A43" className={'w-4 h-auto'} />
            <p className="text-sm lg:text-lg">Add Variations</p>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ItemVariations;
