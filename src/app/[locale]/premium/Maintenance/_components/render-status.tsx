import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "Not Repaired" | "Repaired" | "Offline" | "--";

  switch (status.toString()) {
    case "Not Repaired":
      type = "red";
      Title = "Not Repaired";
      break;
    case "Repaired":
      type = "blue";
      Title = "Repaired";
      break;
    case "Offline":
      type = "red";
      Title = "Offline";
      break;
    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default RenderStatus;
