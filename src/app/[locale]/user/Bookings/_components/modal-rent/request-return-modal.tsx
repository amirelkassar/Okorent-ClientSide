import Button from "@/src/components/button";
import Input from "@/src/components/input";
import ModalComp from "@/src/components/modal-comp";
import { Radio } from "@mantine/core";
import React from "react";
const OptionReturn = [
  {
    value: "The product does not match the description.",
    label: "The product does not match the description.",
  },
  {
    value: "The product is defective or damaged.",
    label: "The product is defective or damaged.",
  },
  {
    value: "Product received late.",
    label: "Product received late.",
  },
  {
    value: "I no longer need the product.",
    label: "I no longer need the product.",
  },
  {
    value: "I had trouble using the product.",
    label: "I had trouble using the product.",
  },
];
function RequestReturnModal({
  opened,
  close,
}: {
  opened: boolean;
  close: any;
}) {
  return (
    <ModalComp
      title="Request to return"
      opened={opened}
      close={close}
    >
      <div className="w-[564px] max-w-full">
        <div className="mb-8">
          <p className="text-xs mdl:text-base font-Regular mb-8">
            Please specify the reason for requesting a product return
          </p>
          <Radio.Group name="OptionReturn">
            <div className="flex flex-col gap-3 mb-8">
              {OptionReturn.map((item, index) => {
                return (
                  <Radio
                    value={item.value}
                    label={item.label}
                    key={index}
                    color="#88BA52"
                    classNames={{
                      icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                    }}
                    className="pb-2 border-b "
                  />
                );
              })}
            </div>
          </Radio.Group>
          <Input placeholder="Provide additional details" inputClassName="bg-white h-16 rounded-xl" />
        </div>
        <div className="flex items-center gap-7 w-full">
          <Button onClick={close} className={" flex-1 h-[54px]"}>
            Send
          </Button>
          <Button
            onClick={close}
            className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalComp>
  );
}

export default RequestReturnModal;
