"use client";
import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import ROUTES from "@/src/routes";
import { useDeleteMaintenance } from "@/src/hooks/queries/maintenance";

function ActionMenu({ id }: { id: string }) {
  const deleteMutation = useDeleteMaintenance();

  const options = [
    {
      label: "Edit",
      icon: <EditIcon className="w-3 h-auto" />,
      link: ROUTES.PREMIUM.MAINTENANCEDETAILS(id) + "/edit",
      type: "link",
    },
    {
      label: "Delete",
      icon: <DeleteIcon className="w-3 h-auto" />,
      type: "btn",
      action: () => deleteMutation.mutate(id),
    },
  ];

  return <DataActions data={options} />;
}

export default ActionMenu;