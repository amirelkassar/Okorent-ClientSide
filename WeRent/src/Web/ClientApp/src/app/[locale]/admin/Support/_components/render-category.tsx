import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderCategory({ category }: { category: string }) {
  let type: "blue" | "green" | "gray" | "red";

  switch (category) {
    case "Sales":
      type = "green";
      break;
    case "Technical":
      type = "gray";
      break;
    case "Un Assigned":
      type = "blue";
      break;
    case "Feedback":
      type = "red";
      break;
    default:
      type = "blue";
      break;
  }
  return <CardStatus  title={category} type={type} />;
}

export default RenderCategory;
