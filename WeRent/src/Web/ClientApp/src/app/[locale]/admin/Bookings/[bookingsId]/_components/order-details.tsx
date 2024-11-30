import PriceRow from "@/src/components/price-row";
import React from "react";

function OrderDetails() {
  return (
    <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-y-5 gap-x-8 py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      
      <div className="flex flex-col gap-2 ms-auto w-fit lg:me-20">
        <PriceRow label="Subtotal" value="150.00"  />
        <PriceRow label="Discount" value="-20.00"  />
        <PriceRow label="Tax" value="26.50"  />
        <PriceRow label="Total" value="145.50"  />
        <PriceRow label=" Deposite" value="30.00"  />
      </div>
    </div>
  );
}

export default OrderDetails;
