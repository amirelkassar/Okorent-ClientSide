"use client";
import { SegmentedControl } from "@mantine/core";
import { useState } from "react";

const RentSwitch = () => {
  const [value, setValue] = useState("rent");

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "I rent out", value: "rent_out" },
        { label: "I rent", value: "rent" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center    text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[242px] items-center h-10  border !border-green",
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
};

export default RentSwitch;
