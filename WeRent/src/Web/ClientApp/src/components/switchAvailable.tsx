import { SegmentedControl } from "@mantine/core";
import React from "react";
import { useSwitchAvailable } from "../store/rent-slice";

function SwitchAvailable() {
  const { switchAvailable, setSwitchAvailable } = useSwitchAvailable();

  return (
    <SegmentedControl
      value={switchAvailable}
      onChange={(e) => {
        setSwitchAvailable(e === "Available" ? "Available" : "Vacation");
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "Available", value: "Available" },
        { label: "Vacation", value: "Vacation" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center text-sm  flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[158px] lg:w-[158px] items-center h-8  border !border-green",
        control: "h-full items-center bg-transparent",
      }}
      radius="6px"
      size="xs"
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.gray[0],
          borderColor: theme.colors.green[4],
        },
      })}
    />
  );
}

export default SwitchAvailable;
