import Button from "@/src/components/button";
import Input from "@/src/components/input";
import InputPhone from "@/src/components/inputPhone";
import ModalComp from "@/src/components/modal-comp";
import SelectInput from "@/src/components/select-input";
import { Accordion, Radio } from "@mantine/core";
import React from "react";
const OptionQuotation = [
  {
    value: "permOR02245082anently",
    label: "No Deposit ",
  },
  {
    value: "OR02245083",
    label: "Default item security deposit ",
  },
  {
    value: "OR02245084",
    label: "Extra Security Deposit",
  },
];
function ModalAddCustomer({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <div>
      <ModalComp
        title="Add user"
        opened={opened}
        close={() => {
          close();
        }}
      >
        <div className="lg:w-[680px] w-full flex flex-col gap-4">
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
              label="Email"
              placeholder="Write customer email here"
              className="flex-1"
            />
          </div>
          <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
            <SelectInput
              data={["Type", "Type2", "Type3", "Type4", "Type5"]}
              label="Customer Type"
              className="flex-1"
            />
            <InputPhone
              boxClassName={"flex-1"}
              inputClassName="bg-white h-12 lg:h-16 !border border-green/30"
              flagBorder={false}
            />
          </div>
          <div>
            <Accordion transitionDuration={300} className="flex flex-col gap-6">
              <Accordion.Item
                value={"edit"}
                className="border-none bg-blueLight/50 rounded-2xl "
              >
                <Accordion.Control className="hover:bg-blueLight/50 h-12 lg:h-16 text-base lg:text-xl font-Medium duration-200 !border border-solid border-green/30 rounded-2xl shadow-sm">
                  Address Info
                </Accordion.Control>
                <Accordion.Panel className="border-green/30 border border-t-0 pt-6 lg:pt-8 relative -mt-4 border-solid rounded-b-2xl shadow-md">
                  <div className="w-full flex flex-col gap-2">
                    <Input
                      label="Address"
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
                    <Input
                      label="Postal code"
                      inputClassName="bg-white h-12 lg:h-16 rounded-xl"
                      className="flex-1"
                    />
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="flex gap-3 flex-wrap lg:gap-7 w-full">
            <SelectInput
              data={["Tax", "Tax2", "Tax3", "Tax4", "Tax5"]}
              label="Tax Info"
              className="flex-1"
            />
            <Input
              label="Discount Percentage"
              type="number"
              leftSection={<span className="text-base">%</span>}
              inputClassName="bg-white h-12 lg:h-16 rounded-xl"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div>
            <Radio.Group name="Quotation" label="Security Deposit">
              <div className="flex mb-6 gap-3 flex-col mdl:flex-row justify-between ">
                {OptionQuotation.map((option, index) => {
                  return (
                    <Radio
                      color="#88BA52"
                      key={index}
                      value={option.value}
                      label={option.label}
                      className="py-2"
                      classNames={{
                        icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                      }}
                    />
                  );
                })}
              </div>
            </Radio.Group>
            <Input
              type="number"
              leftSection={<span className="text-base">%</span>}
              inputClassName="bg-white h-12 lg:h-16 rounded-xl"
              className="flex-1 min-w-[200px]"
            />
          </div>
          <div className="flex items-center gap-7 w-full">
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
    </div>
  );
}

export default ModalAddCustomer;
