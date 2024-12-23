"use client";
import CarReturn from "@/src/assets/icons/car-return";
import Button from "@/src/components/button";
import OrderStepper from "@/src/components/order-stepper";
import React, { useState } from "react";
import OrderInformation from "./_components/order-information";
import OrderPayment from "./_components/order-payment";
import OrderDetails from "./_components/order-details";
import RentSwitch from "@/src/components/RentSwitch";
import { useSwitchRent } from "@/src/store/rent-slice";
import { GetOrderByID } from "@/src/hooks/queries/user/order";
import Loading from "@/src/components/loading";
import EditIcon from "@/src/assets/icons/edit";

function Page({ params }: any) {
  const { isRent } = useSwitchRent();
  const { data, isLoading } = GetOrderByID(params.orderId);
  const [edit, setEdit] = useState(false);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-section">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className=" text-2xl font-Bold">Order Information</h2>
        <div className=" pointer-events-none opacity-85 flex-1 mx-auto flex items-center justify-center">
          <RentSwitch typeUser="user" />
        </div>
        {!edit && (
          <Button
            onClick={() => {
              setEdit(true);
            }}
            className={"w-fit !px-6 gap-2"}
          >
            <EditIcon fill="white" className="w-4 h-auto" />
            Edit
          </Button>
        )}
        {isRent === "rent" && (
          <div className="flex items-center gap-3">
            <Button className={"w-[340px] max-w-full gap-2"}>
              <CarReturn />
              Request to return
            </Button>
          </div>
        )}
      </div>
      <OrderStepper
        active={data?.data?.orderTrackers.at(-1)?.newOrderStatus}
        data={data.data?.orderTrackers || []}
      />
      <div className="mt-section flex gap-10 lgl:flex-row flex-col ">
        <div className="flex flex-col gap-4">
          <OrderInformation
            edit={edit}
            setEdit={setEdit}
            data={data?.data}
            isRent={isRent}
          />
          <OrderDetails ProductDetails={data?.data?.orderItems || []} />
        </div>
        <OrderPayment
          ProductDetailsPayment={data?.data?.paymentRecord[0] || []}
        />
      </div>
    </div>
  );
}

export default Page;
