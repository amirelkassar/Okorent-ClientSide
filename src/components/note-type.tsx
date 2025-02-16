import React from "react";
import CardStatus from "./cardStatus";

function NoteType({ status }: { status: string }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "Complaint" | "Announcement" | "--";

  switch (status.toString()) {
    case "2":
      type = "gray";
      Title = "Complaint";
      break;
    case "1":
      type = "green";
      Title = "Announcement";
      break;

    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus  title={Title} type={type} />;
}

export default NoteType;
