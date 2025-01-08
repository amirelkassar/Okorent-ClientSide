"use client";
import {useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import TrueIcon from "@/src/assets/icons/true";
import ExportIcon from "@/src/assets/icons/export";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import NoteTableIcon from "@/src/assets/icons/noteTable";


interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTable = (): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);


  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Verify",
        icon: <TrueIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //1
      {
        title: "Deactivate",
        icon: <DeactivateIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },

      //2
      {
        title: "Export",
        icon: <ExportIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //3
      {
        title: "Send Note",
        icon: <NoteTableIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //4
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto " />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
    ],
    [selectedFromTable]
  );

  const functionSelectView = useMemo(() => {
    const ValueSelected = GetUniqueValues(selectedFromTable, "isVerified");
    console.log(ValueSelected);

    if (ValueSelected?.toString()) {
      switch (ValueSelected.toString()) {
        case "false":
          return [
            functionSelect[0],
            functionSelect[2],
            functionSelect[3],
            functionSelect[4],
          ];
        default:
          return [
            functionSelect[1],
            functionSelect[2],
            functionSelect[3],
            functionSelect[4],
          ];
      }
    } else {
      return [
        functionSelect[1],
        functionSelect[2],
        functionSelect[3],
        functionSelect[4],
      ];
    }
  }, [selectedFromTable, functionSelect]);

  return {
    functionSelectView,
    setSelectedFromTable,
  };
};
