import CardStatus from '@/src/components/cardStatus';
import React from 'react'

function RenderStatus({ status }: { status: string }) {
    let type: "blue" | "green" | "gray" | "red";
  
    switch (status) {
      case "Reserved":
        type = "green";
        break;
      case "Ongoing":
        type = "green";
        break;
      case "Rejected":
        type = "red";
        break;
      case "Canceled":
        type = "red";
        break;
      default:
        type = "blue";
        break;
    }
    return <CardStatus circle title={status} type={type} />;
  }

export default RenderStatus