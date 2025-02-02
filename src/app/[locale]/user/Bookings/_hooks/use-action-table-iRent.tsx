"use client";
import { useMemo, useState } from "react";
import DeleteIcon from "@/src/assets/icons/delete";
import { GetUniqueValues } from "@/src/lib/utils";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import ReorderIcon from "@/src/assets/icons/reorder";
import CancelIcon from "@/src/assets/icons/cancel";
import { useChangeStatusRent } from "./use-change-status-rent";
import { STYLE_ICON } from "@/src/lib/dataUser";

interface ActionTableIRentProps {
  functionSelectView: any[];
  setSelectedFromTable: any;
}
export const useActionTableIRent = (): ActionTableIRentProps => {
  const [selectedFromTable, setSelectedFromTable] = useState([]);
  const {
    onSubmitChangeStatusIds,
    onSubmitRefundMany,
    onSubmitCancelMany,
    onSubmitReOrderManyByID,
  } = useChangeStatusRent("ids");
  const functionSelect = useMemo(
    () => [
      //0
      {
        title: "Mark as Receiving",
        icon: <BarcodeIcon fill="#006AFF" className={STYLE_ICON} />,
        onclick: (ids: any) => {
          onSubmitChangeStatusIds({
            orderIds: ids?.map((item: any) => item.id),
          });
        },
      },
      //1
      {
        title: "Request to return",
        icon: <CarReturn fill="#006AFF" className={STYLE_ICON} />,
        onclick: (ids: any) => {
          onSubmitRefundMany({
            orders: ids?.map((item: any) => ({
              orderId: item.id,
              renterMessage: "msg",
            })),
          });
        },
      },
      //2
      {
        title: "Reorder",
        icon: <ReorderIcon fill="#006AFF" className={STYLE_ICON} />,
        onclick: (ids: any) => {
          onSubmitReOrderManyByID({
            orderIds: ids?.map((item: any) => item.id),
          });
        },
      },
      //3
      {
        title: "Delete",
        icon: <DeleteIcon className={STYLE_ICON} />,
        onclick: (ids: any) => {
          console.log([...ids]);
        },
      },
      //4
      {
        title: "Cancel Order",
        icon: <CancelIcon className={STYLE_ICON} />,
        onclick: (ids: any) => {
          console.log([...ids]);
          onSubmitCancelMany({
            orders: ids?.map((item: any) => ({
              orderId: item.id,
              renterMessage: "msg",
            })),
          });
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
          return [functionSelect[4]];
        case "3":
          return [functionSelect[4]];
        case "4":
          return [functionSelect[0], functionSelect[1]];
        case "6":
          return [functionSelect[1]];
        case "7":
          return [functionSelect[3]];
        case "8":
          return [functionSelect[2], functionSelect[3]];
        case "9":
          return [functionSelect[2], functionSelect[3]];
        case "10":
          return [functionSelect[3]];
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
