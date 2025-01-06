"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import NoteTableIcon from "@/src/assets/icons/noteTable";
import Events from "@/src/components/Events";
import LinkGreen from "@/src/components/linkGreen";
import NoteModal from "@/src/components/NoteModal";
import { Toast } from "@/src/components/toast";
import { useDeleteProductInAdmin } from "@/src/hooks/queries/admin/lisiting";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback } from "react";

function HeaderProduct({ id }: any) {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: DeleteProduct } = useDeleteProductInAdmin();
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteProduct(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {
        router.push(ROUTES.ADMIN.LISTINGS);
      },
    });
  }, [DeleteProduct, id]);
  const functionSelect = [
    {
      title: "Send Note",
      icon: <NoteTableIcon />,
      onclick: open,
    },
    {
      title: "Delete",
      icon: <DeleteIcon />,
      onclick: () => {
        onSubmitDelete();
      },
    },
  ];
  return (
    <div className="flex items-center gap-3 mb-8">
      <LinkGreen
        href={ROUTES.ADMIN.LISTINGSDETAILSEdit(id)}
        className={"h-10 px-5 gap-1"}
      >
        <EditIcon fill="white" className="w-3 h-auto" />
        <p className="text-sm">Edit</p>
      </LinkGreen>
      {functionSelect.map((item, index) => {
        return <Events key={index} item={item} ids={[1]} />;
      })}
      {opened && <NoteModal opened={opened} close={close} />}
    </div>
  );
}

export default HeaderProduct;
