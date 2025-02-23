"use client";
import { SegmentedControl } from "@mantine/core";
import { useSwitchGuestRent, useSwitchRent } from "../store/rent-slice";
import { parseAsInteger, useQueryState } from "nuqs";
interface RentSwitchProps {
  typeUser: "user" | "guest";
}
const RentSwitch = ({ typeUser = "user" }: RentSwitchProps) => {
  const { isRent, setSwitchRent } = useSwitchRent();
  const { isGuestRent, setSwitchGuestRent } = useSwitchGuestRent();
  const [PageNumber, setPageNumber] = useQueryState(
    "PageNumber",
    parseAsInteger.withDefault(1)
  );
  return typeUser === "user" ? (
    <SegmentedControl
      value={isRent}
      onChange={(e) => {
        setSwitchRent(e === "rent_out" ? "rent_out" : "rent");
        setPageNumber(1)
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "I rent out", value: "rent_out" },
        { label: "I rent", value: "rent" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center text-sm lg:text-base flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[190px] lg:w-[242px] items-center h-10  border !border-green",
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
  ) : (
    <SegmentedControl
      value={isGuestRent}
      onChange={(e) => {
        setSwitchGuestRent(e === "rent_out" ? "rent_out" : "rent");
      }}
      withItemsBorders={false}
      color="#88BA52"
      data={[
        { label: "Rent out", value: "rent_out" },
        { label: "Rent", value: "rent" },
      ]}
      classNames={{
        label:
          " data-[active]:text-white h-full py-0 flex items-center rounded-[2px] justify-center text-sm lg:text-base flex item-center justify-center   text-black",
        root: "!bg-transparent pt-[2px] ps-[2px] w-[190px] lg:w-[242px] items-center h-10  border !border-green",
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
