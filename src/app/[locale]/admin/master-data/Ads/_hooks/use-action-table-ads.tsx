"use client";
import { useMemo } from "react";
import { GetUniqueValues } from "@/src/lib/utils";
import PauseIcon from "@/src/assets/icons/pause";
import ResumeIcon from "@/src/assets/icons/Resume";
import UseChangeStatus from "./use-change-status";
import { useSelectRowTable } from "@/src/components/select-row-table-context";

interface ActionTableProps {
  functionSelectView: any[];
}
export const useActionTableAds = (): ActionTableProps => {
  const { selectRowTable } = useSelectRowTable();

  const { onSubmitResumeManyAds, onSubmitSuspendManyAds } =
    UseChangeStatus("2");

  console.log(selectRowTable);

  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Suspend",
        icon: <PauseIcon className="max-h-4 w-auto" />,
        onclick: () => {
          onSubmitSuspendManyAds({
            advertisementIds: selectRowTable?.map((item: any) => item.id),
          });
        },
      },
      {
        title: "Resume",
        icon: <ResumeIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: () => {
          onSubmitResumeManyAds({
            advertisementIds: selectRowTable?.map((item: any) => item.id),
          });
        },
      },
    ],
    [selectRowTable]
  );

  const functionSelectView = useMemo(() => {
    const ValueSelected = GetUniqueValues(
      selectRowTable,
      "advertisementStatus"
    );

    switch (ValueSelected?.toString()) {
      case "1":
        return [functionSelect[0]];
      case "2":
        return [functionSelect[1]];
      default:
        return [];
    }
  }, [selectRowTable, functionSelect]);

  return {
    functionSelectView,
  };
};
