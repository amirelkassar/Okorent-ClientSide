import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (status) {
    case "In Progress":
      type = "green";
      break;
    case "Solved":
      type = "gray";
      break;
    case "New":
      type = "blue";
      break;
    default:
      type = "blue";
      break;
  }
  return <CardStatus circle title={status} type={type} />;
}

export default RenderStatus;
