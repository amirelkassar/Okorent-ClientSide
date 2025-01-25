import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "In Progress" | "Solved" | "User Replied" | "Admin Replied" | "--";
  switch (status?.toString()) {
    case "1":
      type = "green";
      Title = "In Progress";
      break;
    case "4":
      type = "gray";
      Title = "Solved";
      break;
    case "3":
      type = "green";
      Title = "User Replied";
      break;
    case "2":
      type = "blue";
      Title = "Admin Replied";
      break;
    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default RenderStatus;
