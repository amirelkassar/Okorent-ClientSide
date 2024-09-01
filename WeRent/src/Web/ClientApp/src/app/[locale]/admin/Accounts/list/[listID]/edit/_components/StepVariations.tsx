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
interface StepVariationsProps {
  variations: Variation[];

  addVariation: () => void;
  handleInputChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  handleInputChangeSelect: (index: number, value: any, name: string) => void;

}
function StepVariations({
  variations,
  addVariation,
  handleInputChange,
  handleInputChangeSelect,

}: StepVariationsProps) {
  const [opened, { open, close }] = useDisclosure(false);
  return (

      <div className="mt-[7px] pb-12 flex-1">
        <h3 className={"text-[24px] mb-3 "}>Variations</h3>
        <p className="text-grayMedium mb-4 text-base font-Regular">You can add many variations for the same product or you can skip
        Ex. Size and color</p>
        <div className="flex flex-col gap-6">
        {variations.map((variation, index) => (
          <div key={index} className="flex items-center gap-3">
            <Checkbox
              checked={true}
              readOnly
              color="#88BA52"
              className={cn(index === 0 && "mt-6")}
            />
            <div className="flex items-center gap-4">
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
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
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
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
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
                className=" flex-1  duration-200 min-h-[64px] bg-white rounded-2xl text-grayMedium"
              />
            </div>
          </div>
        ))}
      </div>
      <ModalComp title="Add a variation" opened={opened} close={close}>
        <div className="flex flex-col gap-6 w-[660px] max-w-full">
          {variations.map((variation, index) => (
            <div key={index} className="flex items-center  flex-col md:flex-row gap-4">
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
              "mt-8 bg-grayBack gap-3 px-7 h-[50px] lg:h-[64px] border-none text-black"
            }
          >
            <PlusIcon fill="#0F2A43" />
            <p className="text-[14px] text-base">Add Variations</p>
          </Button>
        )}
        <div className="w-full flex items-center gap-5 mt-11 lg:mt-28">
            <Button onClick={close} className={" h-[54px] lg:h-[64px] flex-1"}>
            Save and close
          </Button>
          {variations.length < 3 && (
             <Button
              onClick={addVariation}
              className={" h-[54px] lg:h-[64px] flex-1 bg-grayBack border-none text-black"}
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
              "mt-8 bg-grayBack gap-3 px-7 h-[50px] lg:h-[64px] border-none text-black"
            }
          >
            <PlusIcon fill="#0F2A43" />
            <p className="text-[14px] text-base">Add Variations</p>
          </Button>
        </div>
      )}
      </div>

     

  );
}

export default StepVariations;
