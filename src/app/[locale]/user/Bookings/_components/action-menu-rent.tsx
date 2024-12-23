"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React, { useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import ReviewIcon from "@/src/assets/icons/review";
import RentAgainIcon from "@/src/assets/icons/rentAgain";
import ReorderIcon from "@/src/assets/icons/reorder";
import ScanQrModal from "./modal-rent/scan-qr-modale";
import RequestReturnModale from "./modal-rent/request-return-modale";
import CancelIcon from "@/src/assets/icons/cancel";
import ROUTES from "@/src/routes";
import { useCancelOrderMutation } from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";

function ActionMenuRent({ id, status = 0 }: { id: any; status: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const { mutateAsync: CancelOrder } = useCancelOrderMutation();
  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderId: id,
        renterMessage: "string",
      }),
      {
        success: "Canceled Order",
        onSuccess: async (res) => {},
      }
    );
  }, [CancelOrder]);
  const options = [
    //0
    {
      label: "Reorder",
      icon: <ReorderIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //1
    {
      label: "Rent again",
      icon: <RentAgainIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //2
    {
      label: "Review",
      icon: <ReviewIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //3
    {
      label: "Scan For Receiving",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        open();
      },
    },
    //4
    {
      label: "Request to return",
      icon: <CarReturn fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        open2();
      },
    },
    //5
    {
      label: "Message",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      link: ROUTES.USER.INBOX + "?chat=" + id,
      type: "link",
    },
    //6
    {
      label: "Cancel",
      icon: <CancelIcon fill="#FF1D45" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitCancel();
      },
    },
    //7
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
        return [options[5], options[6]];
      case "3":
        return [options[5], options[6]];
      case "4":
        return [options[3], options[4], options[5]];
      case "6":
        return [options[4], options[5]];
      case "7":
        return [options[2], options[1], options[5], options[7]];
      case "8":
        return [options[0], options[5], options[7]];
      case "9":
        return [options[0], options[5], options[7]];
      case "10":
        return [options[2], options[1], options[5], options[7]];
      case "11":
        return [options[5]];
      case "12":
        return [options[5]];
      default:
        return [];
    }
  };

  return (
    <>
      <DataActions data={optionView() || []} />
      {opened && <ScanQrModal opened={opened} close={close} />}
      {opened2 && <RequestReturnModale opened={opened2} close={close2} />}
    </>
  );
}

export default ActionMenuRent;
