import React from "react";
import CardStatus from "./cardStatus";

function OrderStatus({ status,phoneView=false }: { status: any,phoneView?:boolean }) {
  switch (status.toString()) {
    case "1":
      return <CardStatus circle type="blue" title={phoneView?"":"new"} />;
    case "3":
      return <CardStatus circle type="green" title={phoneView?"":"Accepted"} />;
    case "4":
      return <CardStatus circle type="blue" title={phoneView?"":"Out For Delivery"} />;
    case "6":
      return <CardStatus circle type="green" title={phoneView?"":"Received"} />;
    case "7":
      return <CardStatus circle type="gray" title={phoneView?"":"Returned"} />;
    case "8":
      return <CardStatus circle type="red" title={phoneView?"":"Rejected"} />;
    case "9":
      return <CardStatus circle type="red" title={phoneView?"":"Canceled"} />;
    case "10":
      return <CardStatus circle type="green" title={phoneView?"":"Compeleted"} />;
    case "11":
      return <CardStatus circle type="gray" title={phoneView?"":"Request for returned"} />;
    case "12":
      return <CardStatus circle type="gray" title={phoneView?"":"out for return"} />;

    default:
      return <CardStatus circle type="gray" title="--" />;
  }
}

export default OrderStatus;
