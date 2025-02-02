"use client";
import { useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import RefundIcon from "@/src/assets/icons/Refund";
import { STYLE_ICON } from "@/src/lib/dataUser";

interface ActionTableBookingInAdminProps {
  functionSelectView: any[];
  setSelectedFromTable: any;
  selectedFromTable: any;
}
export const useActionTableBookingInAdmin = ({open, open2, open3}:{open: any, open2: any, open3: any}): ActionTableBookingInAdminProps => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);

  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Refund Payment",
        icon: <RefundIcon fill="#006AFF" className={STYLE_ICON} />,
        onclick: () => {
          open();
        },
      },
      //1
      {
        title: "Send Note",
        icon: <NoteTableIcon className={STYLE_ICON} />,
        onclick: () => {
          open2();
        },
      },
      //2
      {
        title: "Delete",
        icon: <DeleteIcon className={STYLE_ICON} />,
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
      return [functionSelect[2]];
    }
  }, [selectedFromTable, functionSelect]);
  console.log(functionSelectView);

  return {
    functionSelectView,
    setSelectedFromTable,
    selectedFromTable
  };
};
