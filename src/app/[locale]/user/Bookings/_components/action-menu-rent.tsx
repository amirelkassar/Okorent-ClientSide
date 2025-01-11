"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import CarReturn from "@/src/assets/icons/car-return";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import ReviewIcon from "@/src/assets/icons/review";
import RentAgainIcon from "@/src/assets/icons/rentAgain";
import ReorderIcon from "@/src/assets/icons/reorder";
import ScanQrModal from "./modal-rent/scan-qr-modale";
import CancelIcon from "@/src/assets/icons/cancel";
import ROUTES from "@/src/routes";
import { useChangeStatusRent } from "../_hooks/use-change-status-rent";
import RequestReturnModal from "./modal-rent/request-return-modal";
import ReviewModal from "./modal-rent/review-modal";

function ActionMenuRent({
  id,
  status = 0,
  dataForReview,
  dataForReviewUser
}: {
  id: any;
  status: any;
  dataForReview: any;
  dataForReviewUser:any
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const [opened3, { open: open3, close: close3 }] = useDisclosure(false);

  const {
    onSubmitCancel,
    onSubmitDelete,
    onSubmitRefund,
    onSubmitChangeStatus,
  } = useChangeStatusRent(id);
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
      action: () => {
        open3();
      },
    },
    //3
    {
      label: "Scan For Receiving",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        // open();
        onSubmitChangeStatus();
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
      action: () => {
        onSubmitDelete();
      },
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
      {opened2 && (
        <RequestReturnModal
          onSubmitRefund={onSubmitRefund}
          opened={opened2}
          close={close2}
        />
      )}
      {opened3 && (
        <ReviewModal
          opened={opened3}
          close={close3}
          dataForReview={dataForReview}
          dataForReviewUser={dataForReviewUser}
        />
      )}
    </>
  );
}

export default ActionMenuRent;
