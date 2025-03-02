"use client"
import { useSwitchBilling } from "@/src/store/rent-slice";
import { SegmentedControl } from "@mantine/core";
import React from "react";

function SwitchBilling() {
  const { switchBilling, setSwitchBilling } = useSwitchBilling();

  return (
    <SegmentedControl
      value={switchBilling}
      onChange={(e) => {
        setSwitchBilling(e==='plan'?'plan':e==='renting'?'renting':'rentOuts');
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "Plan", value: "plan" },
        { label: "Rentings", value: "renting" },
        { label: "Rentouts", value: "rentOuts" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center text-sm lg:text-base flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[290px] lg:w-[360px] items-center h-10  border !border-green",
        control: "h-full items-center bg-transparent",
      }}
      radius="12px"
      size="md"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.gray[0],
          borderColor: theme.colors.green[4],
        },
      })}
    />
  );
}

export default SwitchBilling;
