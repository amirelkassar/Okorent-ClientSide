"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React, { useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import RocketIcon from "@/src/assets/icons/Rocket";
import OnlineIcon from "@/src/assets/icons/online";
import ROUTES from "@/src/routes";
import { useDeleteMutation } from "@/src/hooks/queries/user/lisitings";
import { Toast } from "@/src/components/toast";

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
      label: "Edit",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.USER.LISTINGSDETAILS(id) + "/edit",
      type: "link",
    },
    {
      label: "View Barcode",
      icon: <BarcodeIcon className="w-3 h-auto" />,
      type: "btn",
      action: ()=>{},
    },
    {
      label: "Promote Listing",
      icon: <RocketIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    {
      label: "Make online",
      icon: <OnlineIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
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
