"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import React, { useCallback } from "react";
import { useDisclosure } from "@mantine/hooks";
import BagIcon from "@/src/assets/icons/bag";
import NoteModal from "@/src/components/NoteModal";
import AssignIcon from "@/src/assets/icons/assign";
import AssignModal from "./forms-list/assign-comp/assign-modal";
import { useDeleteProductInAdmin } from "@/src/hooks/queries/admin/lisiting";
import { Toast } from "@/src/components/toast";

function ActionMenu({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const { mutateAsync: DeleteProduct } = useDeleteProductInAdmin();
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteProduct(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteProduct, id]);
  const options = [
    {
      label: "Assign Listing ",
      icon: <AssignIcon className="w-3 h-auto" />,
      type: "btn",
      action: open2,
    },
    {
      label: "Edit Details",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.LISTINGSDETAILSEdit(id),
      type: "link",
    },
    {
      label: "View Listing",
      icon: <BagIcon className="w-3 h-auto" />,
      link: ROUTES.ADMIN.LISTINGSDETAILS(id),
      type: "link",
    },
    {
      label: "Send Note",
      icon: <NoteTableIcon fill="#6F6B7D" className="w-3 h-auto" />,
      type: "btn",
      action: open,
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => {
        onSubmitDelete();
      },
      color: "red",
    },
  ];
  return (
    <>
      <DataActions data={options} />
      {opened && <NoteModal id={id} opened={opened} close={close} />}
      {opened2 && <AssignModal id={id} opened={opened2} close={close2} />}
    </>
  );
}

export default ActionMenu;
