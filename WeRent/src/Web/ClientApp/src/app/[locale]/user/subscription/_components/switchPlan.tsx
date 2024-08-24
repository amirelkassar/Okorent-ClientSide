"use client";
import { SegmentedControl } from "@mantine/core";
import React from "react";

function SwitchPlan() {
  return (
    <div className="mx-auto flex items-center justify-center mt-7 mb-16">
      <SegmentedControl
        withItemsBorders={false}
        color="#88BA52"
        data={[
          { label: "Monthly", value: "Monthly" },
          { label: "Yearly", value: "Yearly" },
        ]}
        classNames={{
          label:
            " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center    text-black",
          root: "!bg-transparent pt-[2px] ps-[2px] w-[242px] mx-auto items-center  h-10 justify-center  border !border-green",
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
    </div>
  );
}

export default SwitchPlan;
