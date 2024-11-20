import { SegmentedControl } from "@mantine/core";
import React from "react";

interface SwitchViewProfileProps {
  viewProfile: string;
  setViewProfile: (value: string) => void;
}
function SwitchViewProfile({
  viewProfile,
  setViewProfile,
}: SwitchViewProfileProps) {
  return (
    <SegmentedControl
      value={viewProfile}
      onChange={(e) => {
        setViewProfile(e);
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "Profile", value: "Profile" },
        { label: "Activity", value: "Activity" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[20px] justify-center text-sm  flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[158px] lg:w-[158px] items-center h-10  border !border-green",
        control: "h-full items-center bg-transparent",
      }}
      radius="10px"
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

export default SwitchViewProfile;
