"use client";
import { useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetIdsValues, GetUniqueValues } from "@/src/lib/utils";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import CancelIcon from "@/src/assets/icons/cancel";
import AcceptedIcon from "@/src/assets/icons/accepted";
import CarIcon from "@/src/assets/icons/car";
import RejectOrderIcon from "@/src/assets/icons/RejectOrder";
import TrueIcon from "@/src/assets/icons/true";
import CloseIcon from "@/src/assets/icons/close";

interface ActionTableIRentOutProps {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTableIRentOut = (): ActionTableIRentOutProps => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Accept",
        icon: <AcceptedIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log(GetIdsValues(selectedFromTable));
        },
      },
      //1
      {
        title: "View QR code",
        icon: <BarcodeIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //2
      {
        title: "Mark as returned",
        icon: <CarReturn fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //3
      {
        title: "Mark as Out for delivery",
        icon: <CarIcon fill="#006AFF" className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //4
      {
        title: "Cancel Order",
        icon: <CancelIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //5
      {
        title: "Reject",
        icon: <RejectOrderIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //6
      {
        title: "Delete",
        icon: <DeleteIcon className="max-h-4 w-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //7
      {
        title: "Approve Request",
        icon: <TrueIcon fill="#88BA52" className="w-3 h-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //8
      {
        title: "Reject Request",
        icon: <CloseIcon fill="#FF1D45" className="w-3 h-auto" />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //9
      {
        title: "Scan For Completed",
        icon: <BarcodeIcon fill="#006AFF" className="max-h-4 w-auto" />,
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
          return [functionSelect[0], functionSelect[5]];
        case "3":
          return [functionSelect[3], functionSelect[4]];
        case "4":
          return [functionSelect[0], functionSelect[1]];
        case "7":
          return [functionSelect[6]];
        case "8":
          return [functionSelect[6]];
        case "9":
          return [functionSelect[6]];
        case "10":
          return [functionSelect[6]];
        case "11":
          return [functionSelect[7], functionSelect[8]];
        case "12":
          return [functionSelect[9]];
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
