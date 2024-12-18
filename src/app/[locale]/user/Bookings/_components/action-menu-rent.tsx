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
import ReviewIcon from "@/src/assets/icons/review";
import RentAgainIcon from "@/src/assets/icons/rentAgain";
import ReorderIcon from "@/src/assets/icons/reorder";

function ActionMenuRent({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: DeleteProduct } = useDeleteMutation();
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteProduct(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteProduct]);
  const options = [
    {
      label: "Reorder",
      icon: <ReorderIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Rent again",
      icon: <RentAgainIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Review",
      icon: <ReviewIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Scan For Receiving",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Request to return",
      icon: <CarReturn fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Message",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
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

export default ActionMenuRent;
