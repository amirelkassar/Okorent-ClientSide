import CardStatus from "@/src/components/cardStatus";
import React from "react";

function RenderPackage({ packageVal }: { packageVal: string }) {
  return packageVal === "Essential Package" ? (
    <CardStatus circle title={packageVal} type="green" />
  ) : packageVal === "Premium Package" ? (
    <CardStatus circle title={packageVal} type="gray" />
  ) : (
    <CardStatus circle title={packageVal} type="blue" />
  );
}

export default RenderPackage;
