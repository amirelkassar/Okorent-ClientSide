import React from "react";
import CardStatus from "./cardStatus";

function OrderStatus({ status }: { status: any }) {
  switch (status.toString()) {
    case "1":
      return <CardStatus circle type="blue" title={"new"} />;
    case "3":
      return <CardStatus circle type="green" title={"Accepted"} />;
    case "4":
      return <CardStatus circle type="blue" title={"Out For Delivery"} />;
    case "6":
      return <CardStatus circle type="green" title={"Received"} />;
    case "7":
      return <CardStatus circle type="gray" title={"Returned"} />;
    case "8":
      return <CardStatus circle type="red" title={"Rejected"} />;
    case "9":
      return <CardStatus circle type="red" title={"Canceled"} />;
    case "10":
      return <CardStatus circle type="green" title={"Compeleted"} />;
    case "11":
      return <CardStatus circle type="gray" title={"Request for returned"} />;
    case "12":
      return <CardStatus circle type="gray" title={"out for return"} />;

    default:
      return <CardStatus circle type="gray" title="--" />;
  }
}

export default OrderStatus;
