import CardStatus from "@/src/components/cardStatus";
import React from "react";

function StatusCategory({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title:
    | "Complaint"
    | "Sales"
    | "Something else"
    | "Technical issue"
    | "--";

  switch (status.toString()) {
    case "1":
      type = "blue";
      Title = "Complaint";
      break;
    case "3":
      type = "green";
      Title = "Sales";
      break;
    case "4":
      type = "gray";
      Title = "Something else";
      break;
    case "2":
      type = "red";
      Title = "Technical issue";
      break;
    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus title={Title} type={type} />;
}

export default StatusCategory;
