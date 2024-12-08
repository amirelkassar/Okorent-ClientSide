import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderStatus({ status }: { status: boolean|string }) {
  return status ? (
    <CardStatus type="blue" circle animation title={"Online"} />
  ) : (
    <CardStatus type="green" circle title={"Offline"} />
  );
}

export default RenderStatus;
