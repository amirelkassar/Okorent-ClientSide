"use client";
import { useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import RefundIcon from "@/src/assets/icons/Refund";

interface ActionTableBookingInAdminProps {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTableBookingInAdmin = ({open, open2, open3}:{open: any, open2: any, open3: any}): ActionTableBookingInAdminProps => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);

  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Refund Payment",
        icon: <RefundIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: () => {
          open();
        },
      },
      {
        title: "Send Note",
        icon: <NoteTableIcon className="max-h-4 w-auto" />,
        onclick: () => {
          open2();
        },
      },
      {
        title: "Cancel",
        icon: <DeleteIcon className="max-h-4 w-auto" />,
        onclick: () => {
          open3();
        },
      },
    ],
    [selectedFromTable]
  );

  const functionSelectView = useMemo(() => {
    const ValueSelected = GetUniqueValues(selectedFromTable, "status");
    console.log(ValueSelected);

    if (ValueSelected) {
      switch (ValueSelected.toString()) {
        default:
          return functionSelect;
      }
    } else {
      return [];
    }
  }, [selectedFromTable, functionSelect]);
  console.log(functionSelectView);

  return {
    functionSelectView,
    setSelectedFromTable,
  };
};
