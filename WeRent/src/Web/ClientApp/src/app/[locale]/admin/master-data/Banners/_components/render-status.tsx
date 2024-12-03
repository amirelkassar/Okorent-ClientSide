import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (status) {
    case " Hide":
      type = "blue";
      break;
    case "Visible":
      type = "green";
      break;
    default:
      type = "blue";
      break;
  }
  return <CardStatus circle title={status} type={type} />;
}

export default RenderStatus;
