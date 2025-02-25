import DeleteIcon from "@/src/assets/icons/delete";
import EditIcon from "@/src/assets/icons/edit";
import DataActions from "@/src/components/DataActions";
import React from "react";

function ActionMenuPaymentsReceived() {
  const options = [
    {
      label: "Edit",
      icon: <EditIcon fill="#6F6B7D" className="w-3 h-auto" />,
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
    </>
  );
}

export default ActionMenuPaymentsReceived;
