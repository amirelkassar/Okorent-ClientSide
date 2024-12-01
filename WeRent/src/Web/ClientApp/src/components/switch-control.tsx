"use client";
import {
  SegmentedControl as MantineSegmentedControl,
  SegmentedControlProps,
} from "@mantine/core";
import React from "react";
import { cn } from "../lib/utils";

interface SwitchControlProps
  extends Omit<SegmentedControlProps, "classNames" | "styles" | "data"> {
  options: { label: string; value: string }[];
  color?: string;
  rootClassName?: string;
  optionClassName?: string;
}

const SwitchControl: React.FC<SwitchControlProps> = ({
  options,
  color = "#88BA52",
  rootClassName = "",
  optionClassName = "",
  ...props
}) => {
  return (
    <MantineSegmentedControl
      {...props}
      data={options}
      color={color || "#88BA52"}
      classNames={{
        label: cn(
          `data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center text-sm text-black`,
          optionClassName
        ),
        root: cn(
          `!bg-transparent pt-[2px] ps-[2px] w-[158px] lg:w-[158px] items-center h-8 border !border-green `,
          rootClassName
        ),
        control: "h-full items-center bg-transparent before:hidden",
      }}
      radius={props.radius || "6px"}
      size={props.size || "xs"}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.gray[0],
          borderColor: theme.colors.green[4],
        },
      })}
    />
  );
};

export default SwitchControl;
