import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (status) {
    case "Suspend":
      type = "blue";
      break;
    case "Activate":
      type = "green";
      break;
    default:
      type = "blue";
      break;
  }
  return <CardStatus circle title={status} type={type} />;
}

export default RenderStatus;
