"use client";
import {  useMemo, useState } from "react";
import OnlineIcon from "@/src/assets/icons/online";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetIdsValues, GetUniqueValues } from "@/src/lib/utils";

interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTable = (): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const functionSelect = useMemo(
    () => [
      {
        title: "Make online",
        icon: <OnlineIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: () => {
          console.log(GetIdsValues(selectedFromTable));
        },
      },
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto" />,
        onclick: () => {
          console.log(GetIdsValues(selectedFromTable));
        },
      },
    ],
    [selectedFromTable]
  );

  const functionSelectView = useMemo(() => {
    const ValueSelected = GetUniqueValues(selectedFromTable, "isActive");
    console.log(ValueSelected);

    if (ValueSelected) {
      switch (ValueSelected.toString()) {
        case "true":
          return [functionSelect[0], functionSelect[1]];
        default:
          return [functionSelect[1]];
      }
    } else {
      return [functionSelect[1]];
    }
  }, [selectedFromTable, functionSelect]);

  return {
    functionSelectView,
    setSelectedFromTable,
  };
};
