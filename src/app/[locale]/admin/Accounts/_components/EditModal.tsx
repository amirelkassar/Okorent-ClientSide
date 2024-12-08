import Input from "@/src/components/input";
import InputPhone from "@/src/components/inputPhone";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Accordion } from "@mantine/core";
import React from "react";

function EditModal({ opened, close, id }: any) {
  return (
    <ModalComp opened={opened} close={close} title={"Account Details"}>
      <div className="lg:w-[580px] w-full flex flex-col gap-4">
        <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
          <Input
            sectionType="user"
            inputClassName="bg-white h-12 lg:h-16 rounded-xl"
            label="Name"
            placeholder="Write customer name here"
            className="flex-1"
          />
          <Input
            sectionType="email"
            type="email"
            inputClassName="bg-white h-12 lg:h-16 rounded-xl"
            label="Name"
            placeholder="Write customer email here"
            className="flex-1"
          />
        </div>
        <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
          <SelectInput
            data={["Basic", "Basic2", "Basic3", "Basic4", "Basic5"]}
            label="Plan"
            defaultValue={"Basic"}
            className="flex-1"
          />
          <InputPhone
            boxClassName={"flex-1"}
            inputClassName="bg-white h-12 lg:h-16 !border border-green/30"
            flagBorder={false}
          />
        </div>
        <div>
          <Accordion
            transitionDuration={300}
            className="flex flex-col gap-6"
            onChange={(e) => {
              console.log(e);
            }}
          >
            <Accordion.Item
              value={"edit"}
              className="border-none bg-blueLight/50 rounded-2xl "
            >
              <Accordion.Control className=" hover:bg-blueLight/50 h-12 lg:h-16 text-base lg:text-xl font-Medium duration-200 !border border-solid border-green/30 rounded-2xl shadow-sm">
                Address Info
              </Accordion.Control>
              <Accordion.Panel className=" border-green/30 border border-t-0 pt-6 lg:pt-8   relative -mt-4 border-solid rounded-b-2xl shadow-md ">
                <div className="w-full flex flex-col gap-2">
                  <Input
                    label="Adresses"
                    inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                    className="flex-1"
                  />
                  <div className="flex gap-3 flex-wrap lg:gap-7">
                    <Input
                      label="Zip Code"
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                    <Input
                      label="City"
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                  </div>
                  <div className="flex gap-3 flex-wrap lg:gap-7">
                    <Input
                      label="Region"
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                    <Input
                      label="Country"
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1 min-w-[200px]"
                    />
                  </div>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </ModalComp>
  );
}

export default EditModal;
