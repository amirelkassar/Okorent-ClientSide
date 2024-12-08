import DateIcon from "@/src/assets/icons/date";
import CardInfoOrder from "@/src/components/card-info-order";
import React from "react";

function OrderInformation() {
  return (
    <div className="flex mdl:min-w-[560px] flex-1 flex-wrap gap-y-5 gap-x-8 py-6 mdl:py-9 px-3 mdl:px-4 bg-white rounded-xl border border-green/30">
      <CardInfoOrder
        label="Rental Type"
        iconRender={() => (
          <div className="bg-blueLight rounded-full size-10 p-1 flex items-center justify-center">
            JC
          </div>
        )}
      >
        <div>
          <h4>James Cameron</h4>
          <p className="text-xs text-grayMedium font-Regular">
            james@okorent.com
          </p>
        </div>
      </CardInfoOrder>
      <CardInfoOrder label="Rental Type" info="Delivery" />
      <CardInfoOrder
        label="Rental Date"
        info="18 Aug to 25 Aug"
        iconRender={() => <DateIcon className="w-5 h-auto" fill="#0F2A43" />}
      />
      <CardInfoOrder
        label="Delivery Adressee"
        info="731 N. Overlook Ave. Poughkeepsie"
      />
    </div>
  );
}

export default OrderInformation;
