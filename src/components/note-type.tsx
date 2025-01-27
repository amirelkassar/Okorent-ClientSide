import React from "react";
import CardStatus from "./cardStatus";

function NoteType({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "Warning" | "Announcement" | "--";

  switch (status.toString()) {
    case "Warning":
      type = "gray";
      Title = "Warning";
      break;
    case "Announcement":
      type = "green";
      Title = "Announcement";
      break;

    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default NoteType;
