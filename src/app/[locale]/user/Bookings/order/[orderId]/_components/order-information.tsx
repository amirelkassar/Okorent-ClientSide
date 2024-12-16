import DateIcon from "@/src/assets/icons/date";
import CardInfoOrder from "@/src/components/card-info-order";
import { getDate } from "@/src/lib/utils";
import React from "react";

function OrderInformation({ data }: { data: any }) {
  return (
    <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-y-5 gap-x-8 py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <CardInfoOrder
        label="Lessor Name"
        iconRender={() => (
          <div className="bg-blueLight rounded-full size-10 p-1 flex items-center justify-center">
            {data?.lessorName?.slice(0, 2)}
          </div>
        )}
      >
        <div>
          <h4>{data?.lessorName || "--"}</h4>
          <p className="text-xs text-grayMedium font-Regular">
            {data?.lessorEmail || "--"}
          </p>
        </div>
      </CardInfoOrder>
      <CardInfoOrder
        label="Rental Type"
        info={
          data?.deliveryType === 1
            ? "Stock"
            : data?.deliveryType === 2
            ? "Delivery"
            : data?.deliveryType === 3
            ? "Pickup"
            : "--"
        }
      />
      <CardInfoOrder
        label="Rental Date"
        info={`${getDate(data?.from).fullMonthNameWithDayName} to ${
          getDate(data?.to).fullMonthNameWithDayName
        }`}
        iconRender={() => <DateIcon className="w-5 h-auto" fill="#0F2A43" />}
      />
      <CardInfoOrder
        label="Delivery Addressee"
        info={
          typeof data?.address === "string"
            ? (data?.address || "--")
            : data?.address?.state
        }
      />
    </div>
  );
}

export default OrderInformation;
