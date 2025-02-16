import CardStatus from "@/src/components/cardStatus";
import React from "react";
type RequestStatus = "In Progress" | "New" | "Completed";

function RenderStatus({ status }: { status: 1 | 2 | 3 }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: RequestStatus | "--";
  switch (status?.toString()) {
    case "1":
      type = "blue";
      Title = "New";
      break;
    case "2":
      type = "green";
      Title = "In Progress";
      break;
    case "3":
      type = "gray";
      Title = "Completed";
      break;

    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default RenderStatus;
