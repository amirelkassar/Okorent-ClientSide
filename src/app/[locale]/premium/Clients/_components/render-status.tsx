import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "Loyal" | "New" | "--";

  switch (status.toString()) {
    case "Loyal":
      type = "green";
      Title = "Loyal";
      break;
    case "New":
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
