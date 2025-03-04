"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React, { useCallback } from "react";
import OnlineIcon from "@/src/assets/icons/online";
import ROUTES from "@/src/routes";
import { Toast } from "@/src/components/toast";
import DeactivateIcon from "@/src/assets/icons/Deactivate";
import { useDeleteStockMutation } from "@/src/hooks/queries/user/lisitings/stock";
import ModalComp from "@/src/components/modal-comp";
import GoogleMapLoc from "@/src/components/GoogleMap";
import { useDisclosure } from "@mantine/hooks";

function ActionMenu({ id, status }: { id: any; status: any }) {
  const [opened, { open, close }] = useDisclosure(false);

  const { mutateAsync: DeleteStock } = useDeleteStockMutation(id);
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteStock(id), {
      success: "Deleted Stock Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteStock, id]);

  const options = [
    //0
    {
      label: "Edit",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.USER.LISTINGSDETAILS(id) + "/edit",
      type: "btn",
      action: () => {
        open();
      },
    },
    //1
    {
      label: "Activate",
      icon: <OnlineIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //2
    {
      label: "Deactivate",
      icon: <DeactivateIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: () => {},
    },
    //3
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDelete();
      },
    },
  ];
  const optionView = () => {
    switch (status.toString()) {
      case "true":
        return [options[0], options[2], options[3]];
      case "false":
        return [options[0], options[1], options[3]];
      default:
        return [options[0], options[1], options[3]];
    }
  };
  return (
    <>
      <DataActions data={optionView() || []} />
      <ModalComp title="Add  location" opened={opened} close={close}>
        <GoogleMapLoc close={close} index={id} />
      </ModalComp>
    </>
  );
}

export default ActionMenu;
