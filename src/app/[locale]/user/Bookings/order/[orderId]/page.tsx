"use client";
import CarReturn from "@/src/assets/icons/car-return";
import Button from "@/src/components/button";
import OrderStepper from "@/src/components/order-stepper";
import React, { useEffect, useState } from "react";
import OrderInformation from "./_components/order-information";
import OrderPayment from "./_components/order-payment";
import OrderDetails from "./_components/order-details";
import RentSwitch from "@/src/components/RentSwitch";
import { useSwitchRent } from "@/src/store/rent-slice";
import { GetOrderByID } from "@/src/hooks/queries/user/order";
import Loading from "@/src/components/loading";
import EditIcon from "@/src/assets/icons/edit";

function Page({ params }: any) {
  const { isRent, setSwitchRent } = useSwitchRent();
  const { data, isLoading } = GetOrderByID(params.orderId);
  const [edit, setEdit] = useState(false);
  console.log(data);
  const statusOrder = data?.data?.orderTrackers?.at(-1)?.newOrderStatus || 0;
  useEffect(() => {
    if (data?.data?.renterType) {
      setSwitchRent(data.data.renterType === "IRent" ? "rent" : "rent_out");
    }
  }, [setSwitchRent, data?.data?.renterType,isLoading]);


  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-section">
      <div className="flex md:items-center justify-between gap-3 flex-col md:flex-row flex-wrap">
        <h2 className=" text-xl lg:text-2xl font-Bold">Order Information</h2>
        <div className=" pointer-events-none opacity-85 flex-1 mx-auto flex items-center justify-center">
          <RentSwitch typeUser="user" />
        </div>
        {!edit && (statusOrder === 1 || statusOrder === 3) && (
          <Button
            onClick={() => {
              setEdit(true);
            }}
            className={"w-fit !px-6 gap-2 !h-10"}
          >
            <EditIcon fill="white" className="w-4 h-auto" />
            Edit
          </Button>
        )}
        {isRent === "rent" && (statusOrder === 4 || statusOrder === 6) && (
          <div className="flex items-center gap-3">
            <Button className={"w-[340px] max-w-full !h-10 gap-2"}>
              <CarReturn />
              Request to return
            </Button>
          </div>
        )}
      </div>
      <OrderStepper
        active={data?.data?.orderTrackers.at(-1)?.newOrderStatus}
        data={data?.data?.orderTrackers || []}
      />
      <div className="mt-section flex gap-10 lgl:flex-row flex-col ">
        <div className="flex flex-col gap-4  max-w-[930px]">
          <OrderInformation
            edit={edit}
            setEdit={setEdit}
            data={data?.data}
            isRent={isRent}
          />
          <OrderDetails ProductDetails={data?.data?.getOrderItemDtos || []} />
        </div>
        <OrderPayment
          ProductDetailsPayment={data?.data?.paymentRecord[0] || []}
        />
      </div>
    </div>
  );
}

export default Page;
