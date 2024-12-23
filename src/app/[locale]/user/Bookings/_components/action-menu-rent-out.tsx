"use client";
import DataActions from "@/src/components/DataActions";
import React, { memo, useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import RejectOrderIcon from "@/src/assets/icons/RejectOrder";
import CancelIcon from "@/src/assets/icons/cancel";
import ClockIcon from "@/src/assets/icons/clock";
import CarIcon from "@/src/assets/icons/car";
import AcceptedIcon from "@/src/assets/icons/accepted";
import { ChangeStautsByID } from "@/src/hooks/queries/user/booking";
import ViewQrModal from "./modal-rentOut/view-qr-modale";
import TrueIcon from "@/src/assets/icons/true";
import CloseIcon from "@/src/assets/icons/close";
import DeleteIcon from "@/src/assets/icons/delete";
import VersionHistoryModal from "./modal-rentOut/version-history-modal";
import ROUTES from "@/src/routes";
import { Toast } from "@/src/components/toast";

function ActionMenuRentOut({ id, status = 1 }: { id: any; status: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const { mutateAsync: ChaneStatusProduct } = ChangeStautsByID(id);
  const onSubmitChaneStatus = useCallback(async () => {
    Toast.Promise(ChaneStatusProduct(id), {
      loading: "Processing...",
      success: "Operation completed!",
      error: "Failed to complete operation",
    });
    
  }, [ChaneStatusProduct]);
  const options = [
    //0
    {
      label: "Accept",
      icon: <AcceptedIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitChaneStatus();
      },
    },
    //1
    {
      label: "View QR code",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        open();
      },
    },
    //2
    {
      label: "Scan For Completed",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        open();
      },
    },
    //3
    {
      label: "Mark as returned",
      icon: <CarReturn fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //4
    {
      label: "Out for delivery",
      icon: <CarIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitChaneStatus();
      },
    },
    //5
    {
      label: "Version History",
      icon: <ClockIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        open2();
      },
    },
    //6
    {
      label: "Message",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      link:ROUTES.USER.INBOX + "?chat=" + id,
      type: "link",
    },
    //7
    {
      label: "Approve Request",
      icon: <TrueIcon fill="#88BA52" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //8
    {
      label: "Reject Request",
      icon: <CloseIcon fill="#FF1D45" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //9
    {
      label: "Cancel",
      icon: <CancelIcon fill="#FF1D45" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //10
    {
      label: "Reject",
      icon: <RejectOrderIcon fill="#FF1D45" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //11
    {
      label: "Delete",
      icon: <DeleteIcon fill="#FF1D45" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
  ];
  const optionView = () => {
    switch (status.toString()) {
      case "1":
        return [options[0], options[5], options[6], options[10]];
      case "3":
        return [options[1], options[4], options[5], options[6], options[9]];
      case "4":
        return [options[5], options[6], options[9]];
      case "6":
        return [options[5], options[6]];
      case "7":
        return [options[5], options[6], options[11]];
      case "8":
        return [options[5], options[6], options[11]];
      case "9":
        return [options[5], options[6], options[11]];
      case "10":
        return [options[5], options[6], options[11]];
      case "11":
        return [options[7], options[8], options[5], options[6]];
      case "12":
        return [options[2], options[5], options[6]];
      default:
        return [];
    }
  };

  return (
    <>
      <DataActions data={optionView() || []} />
      {opened && <ViewQrModal opened={opened} close={close} />}
      {opened2 && <VersionHistoryModal opened={opened2} close={close2} id={id} />}
    </>
  );
}

export default memo(ActionMenuRentOut);
