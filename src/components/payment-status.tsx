import React from "react";
import CardStatus from "./cardStatus";

function PaymentStatus({ status = "" }: { status: any }) {
  let type: "blue" | "green" | "gray" | "red";
  let Title: "Pending" | "Completed" | "Refunded" | "Partial Payment" | "--";

  switch (status.toString()) {
    case "5":
      type = "green";
      Title = "Pending";
      break;
    case "6":
      type = "blue";
      Title = "Completed";
      break;
    case "7":
      type = "red";
      Title = "Refunded";
      break;
    case "8":
      type = "gray";
      Title = "Partial Payment";
      break;
    default:
      type = "blue";
      Title = "--";
      break;
  }
  return <CardStatus circle title={Title} type={type} />;
}

export default PaymentStatus;
