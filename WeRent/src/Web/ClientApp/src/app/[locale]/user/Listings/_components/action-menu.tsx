"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import BarcodeIcon from "@/src/assets/icons/barcode";
import RocketIcon from "@/src/assets/icons/Rocket";
import OnlineIcon from "@/src/assets/icons/online";
import ROUTES from "@/src/routes";
import ModalBarcode from "./modal-barcode";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);

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
      action: open,
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
      action: () => {},
    },
  ];
  return (
    <>
      <DataActions data={options} />
      {opened && <ModalBarcode opened={opened} close={close} />}
    </>
  );
}

export default ActionMenu;
