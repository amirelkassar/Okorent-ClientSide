import { Radio } from "@mantine/core";
import React from "react";
import ModalComp from "../modal-comp";
import GoogleMapAddress from "../GoogleMapAddress";
import { useDisclosure } from "@mantine/hooks";
import LocationIcon from "@/src/assets/icons/location";
const OptionAddresses = [
  {
    value: "store",
    label: "In store",
  },
  {
    value: "delivery",
    label: "Delivery",
  },
  {
    value: "pickup",
    label: "pickup location",
  },
];
interface ChooseAddressTypeProps {
  setValueAddressType: (value: string) => void;
  valueAddressType: string;
  setLocation?: any;
  location?: any;
  stocks: any[];
}
function ChooseAddressType({
  setValueAddressType,
  valueAddressType,
  setLocation,
  location,
  stocks = [],
}: ChooseAddressTypeProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Radio.Group
        name="OptionAddresses"
        label="Choose Address type"
        defaultValue={"permanently"}
        classNames={{
          label: "text-xl",
        }}
        onChange={(e) => {
          setValueAddressType(e);

          if (e === "delivery" || e === "pickup") {
            open();
          }
        }}
      >
        <div className="flex my-6  flex-col gap-6">
          {OptionAddresses.map((option, inedx) => {
            return (
              <Radio
                color="#88BA52"
                key={inedx}
                value={option.value}
                label={option.label}
                className="flex-1"
                classNames={{
                  icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                }}
              />
            );
          })}
        </div>
      </Radio.Group>
      {valueAddressType === "delivery" || valueAddressType === "pickup" ? (
        location ? (
          <button
            onClick={open}
            className="px-4 py-3 w-fit rounded-xl border border-green/30 flex items-center gap-2"
          >
            <LocationIcon />
            <p className="text-sm font-Regular text-grayMedium max-w-[500px] truncate">
              {location?.address || "Add a location"}
            </p>
          </button>
        ) : null
      ) : valueAddressType === "store" ? (
        <>
          <Radio.Group
            name="OptionAddressStore"
            label="Choose Address Store"
            className="ms-3 md:ms-8 "
            classNames={{
              label: "text-base",
            }}
            onChange={(e) => {
              setLocation(e.toString());
            }}
          >
            <div className="flex mt-3  flex-col gap-6">
              {stocks.map((option, inedx) => {
                return (
                  <Radio
                    color="#88BA52"
                    key={inedx}
                    value={option.id}
                    label={option.name}
                    className="flex-1"
                    classNames={{
                      icon: "w-3 h-3 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",
                    }}
                  />
                );
              })}
            </div>
          </Radio.Group>
        </>
      ) : null}

      <ModalComp title="Add a variation" opened={opened} close={close}>
        <GoogleMapAddress close={close} setLocation={setLocation} />
      </ModalComp>
    </div>
  );
}

export default ChooseAddressType;
