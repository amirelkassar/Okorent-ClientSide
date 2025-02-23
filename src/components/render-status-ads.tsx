import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatusAds({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title:
    | "Ongoing"
    | "Suspend"
    | "Stopped"
    | "Canceled"
    | "Completed"
    | "Deleted"
    | "--";

  switch (status.toString()) {
    case "1":
      type = "green";
      Title = "Ongoing";
      break;
    case "2":
      type = "blue";
      Title = "Suspend";
      break;
    case "3":
      type = "gray";
      Title = "Stopped";
      break;
    case "4":
      type = "red";
      Title = "Canceled";
      break;
    case "5":
      type = "gray";
      Title = "Completed";
      break;
    case "6":
      type = "red";
      Title = "Deleted";
      break;
    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default RenderStatusAds;
