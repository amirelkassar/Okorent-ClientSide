"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import DataActions from "@/src/components/DataActions";
import React, { useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import { useDeleteMutation } from "@/src/hooks/queries/user/lisitings";
import { Toast } from "@/src/components/toast";
import CarReturn from "@/src/assets/icons/car-return";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import RejectOrderIcon from "@/src/assets/icons/RejectOrder";
import CancelIcon from "@/src/assets/icons/cancel";
import ClockIcon from "@/src/assets/icons/clock";
import CarIcon from "@/src/assets/icons/car";
import AcceptedIcon from "@/src/assets/icons/accepted";

function ActionMenuRentOut({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: DeleteProduct } = useDeleteMutation();
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteProduct(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => { },
    });
  }, [DeleteProduct]);
  const options = [,
    {
      label: "Accept",
      icon: <AcceptedIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "View QR code",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "Mark as returned",
      icon: <CarReturn fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "Mark as Out for delivery",
      icon: <CarIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "Version History",
      icon: <ClockIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "Message",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => { },
    },
    {
      label: "Cancel",
      icon: <CancelIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDelete();
      },
    },
    {
      label: "Reject",
      icon: <RejectOrderIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDelete();
      },
    },
  ];
  return (
    <>
      <DataActions data={options} />

    </>
  );
}

export default ActionMenuRentOut;
