"use client";
import { useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetIdsValues, GetUniqueValues } from "@/src/lib/utils";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import RentAgainIcon from "@/src/assets/icons/rentAgain";
import ReorderIcon from "@/src/assets/icons/reorder";
import CancelIcon from "@/src/assets/icons/cancel";

interface SignUpReturn {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTableIRent = (): SignUpReturn => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Scan For Receiving",
        icon: <BarcodeIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log(GetIdsValues(selectedFromTable));
        },
      },
      //1
      {
        title: "Request to return",
        icon: <CarReturn fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //2
      {
        title: "Rent again",
        icon: <RentAgainIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //3
      {
        title: "Reorder",
        icon: <ReorderIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //4
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //5
      {
        title: "Cancel Order",
        icon: <CancelIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
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
        case "1":
          return [functionSelect[5]];
        case "3":
          return [functionSelect[5]];
        case "4":
          return [functionSelect[0], functionSelect[1]];
        case "6":
          return [functionSelect[1]];
        case "7":
          return [functionSelect[2], functionSelect[4]];
        case "8":
          return [functionSelect[3], functionSelect[4]];
        case "9":
          return [functionSelect[3], functionSelect[4]];
        case "10":
          return [functionSelect[2], functionSelect[4]];
        default:
          return [];
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
