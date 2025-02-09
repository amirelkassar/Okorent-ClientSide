import CardStatus from "@/src/components/cardStatus";
import React from "react";
type RequestStatus = "In Progress" | "New" | "Completed";

function RenderStatus({ status }: { status: RequestStatus }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: RequestStatus | "--";
  switch (status?.toString()) {
    case "In Progress":
      type = "green";
      Title = "In Progress";
      break;
    case 'Completed':
      type = "gray";
      Title = "Completed";
      break;
    case 'New':
      type = "blue";
      Title = "New";
      break;

    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default RenderStatus;
