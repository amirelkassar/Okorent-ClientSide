import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (status) {
    case "Trial":
      type = "green";
      break;
    case "Active":
      type = "blue";
      break;
    case "Expired":
      type = "red";
      break;
    case "Cancled":
      type = "gray";
      break;
    case "Past Due":
      type = "gray";
      break;
    default:
      type = "gray";
      break;
  }
  return <CardStatus circle title={status} type={type} />;
}

export default RenderStatus;
