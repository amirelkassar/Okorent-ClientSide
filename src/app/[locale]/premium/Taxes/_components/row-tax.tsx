import Button from "@/src/components/button";
import React from "react";
interface RowTaxProps {
  title: string;
}
function RowTax({ title = "" }: RowTaxProps) {
  return (
    <div className="flex md:items-center justify-between gap-4 rounded-xl bg-blue/5 px-3 py-4 flex-col md:flex-row">
      <h4 className="text-base font-SemiBold">{title}</h4>
      <Button
        className={
          "bg-blue/5 text-blue border-none h-10 !px-5 hover:shadow-md "
        }
      >
        Make Default
      </Button>
    </div>
  );
}

export default RowTax;
