import BarcodeIcon from "@/src/assets/icons/barcode";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import RocketIcon from "@/src/assets/icons/Rocket";
import Events from "@/src/components/Events";
import LinkGreen from "@/src/components/linkGreen";
import { Toast } from "@/src/components/toast";
import { useDeleteMutation } from "@/src/hooks/queries/user/lisitings";
import ROUTES from "@/src/routes";
import { useDisclosure } from "@mantine/hooks";
import React, { useCallback } from "react";
import ModalBarcode from "../../_components/modal-barcode";

function HeaderActions({ id }: { id: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: DeleteProduct } = useDeleteMutation();

  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteProduct(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteProduct, id]);
  const functionSelect = [
    {
      title: "Promote Listing",
      icon: <RocketIcon fill="#006AFF" className="w-3 h-auto" />,
      onclick: () => {},
      link: ROUTES.USER.LISTINGSDETAILSADS(id),
    },
    {
      title: "View Barcode",
      icon: <BarcodeIcon fill="#006AFF" className="w-3 h-auto" />,
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
    <div className="flex items-center gap-3 justify-end ">
      {functionSelect.map((item, index) => {
        return <Events key={index} item={item} ids={[1]} />;
      })}
      <LinkGreen
        href={ROUTES.USER.LISTINGSEDIT(id)}
        className={"   px-10  gap-2 h-10   text-medium"}
      >
        <EditIcon fill="white" className="w-[16px]" />
        <p className="text-white">Edit</p>
      </LinkGreen>
      <ModalBarcode id={id} opened={opened} close={close} />
    </div>
  );
}

export default HeaderActions;
