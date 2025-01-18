import CardStatus from "@/src/components/cardStatus";
import React from "react";

function StatusCategory({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (status) {
    case "Complaint":
      type = 'gray';
      break;
    case "Sales":
      type = 'green';
      break;
    case "New":
      type = "blue";
      break;
    default:
      type = "blue";
      break;
  }
  return <CardStatus title={status} type={type} />;
}

export default StatusCategory;
