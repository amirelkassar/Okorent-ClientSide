import { useDisclosure } from "@mantine/hooks";
import React from "react";
import NewCard from "./newCard";
import Input from "@/src/components/input";
import Visa from "./visa";
import ImgProduct from "@/src/components/img-product";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import Image from "next/image";
import moneySendImg from "@/src/assets/images/moneySend.png";
import successful from "@/src/assets/images/successful.png";
import phoneImg from "@/src/assets/images/phone.png";
import { useCreateOrder } from "@/src/hooks/create-order";
import { Link } from "@/src/navigation";
import ROUTES from "@/src/routes";

function ViewCheckout({ data = {} }: { data: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  console.log(data);
  const { form, status } = useCreateOrder();
  const { onSubmit, opened2, close2 } = form;
  const handleCreateOrder = () => {
    onSubmit(data);
  };
  return (
    <div className="mt-8 flex-col xl:flex-row flex justify-between gap-7 mb-20">
      <div className="xl:max-w-[700px] w-full flex-1 ">
        <h3 className="text-lg lg:text-2xl font-SemiBold mb-5 md:px-2">
          Enter your card
        </h3>
        <NewCard />

        <div className="mt-8">
          <h2 className="text-xl lg:text-[24px] mb-1 font-SemiBold">
            Billing Address
          </h2>
          <div className="bg-white border-green/30 border rounded-xl px-6 py-4 ">
            <Input
              label={"Email address for billing"}
              placeholder={"badr@profound-group.com"}
              inputClassName="bg-white  h-[44px]"
              className=" flex-1"
            />
          </div>
        </div>
      </div>
      <div className="pb-8 pt-7 lg:pt-11 lg:ps-11 px-4 lg:px-5 lg:pe-7 w-full flex-1 mt-2 bg-white border border-green/30 rounded-2xl  xl:max-w-[650px]">
        <h2 className="text-lg lg:text-[24px] font-Bold mb-0">Price details</h2>
        <div className="  mt-[100 px] lg:mt-[120px]">
          <Visa />
        </div>
        <div className="border mb-6 border-green/30 rounded-lg flex items-center gap-3 px-10 py-2">
          <ImgProduct src={phoneImg} productName="Iphone 15 Pro" />
        </div>
        <ul className="flex flex-col gap-5 border border-green/30 rounded-xl py-7 px-6 shadow-md">
          <li className="flex items-center justify-between ">
            <h3 className="text-base font-Regular text-grayMedium ">
              Essential
            </h3>
            <p className="text-base font-Regular text-grayMedium">
              USD {data?.orderItems[0].price}{" "}
            </p>
          </li>
          <li className="flex items-center justify-between ">
            <h3 className="text-base font-Regular text-grayMedium ">
              Platform fee
            </h3>
            <p className="text-base font-Regular text-grayMedium"> 10 %</p>
          </li>
          <li className="flex items-center justify-between pt-4 border-t border-x-grayMedium/40 ">
            <h3 className="text-base  ">Total</h3>
            <p className="text-base ">USD {data?.orderItems[0].price * 0.9}</p>
          </li>
        </ul>
        <Button onClick={open} className={"w-full mt-6"}>
          Proceed to pay
        </Button>
      </div>
      <ModalComp close={close} opened={opened} title="Payment on Hold">
        <div className="w-[670px] max-w-full">
          <div className="w-fit mx-auto mb-6">
            <Image
              src={moneySendImg}
              alt="moneySendImg"
              height={236}
              width={273}
              className="w-[273px] h-[236px] object-contain"
            />
          </div>
          <p className=" text-center mb-6 text-base">
            Your payment will be placed on hold until the product owner accepts
            or rejects your request. If the owner accepts, the amount will be
            transferred to them. If the request is rejected, the payment will be
            released back to you.
          </p>
          <Button
            onClick={() => {
              handleCreateOrder();
              close();
            }}
            className={"h-16 w-full"}
          >
            OK
          </Button>
        </div>
      </ModalComp>
      <ModalComp close={close2} opened={opened2} title="">
        <div className="w-[670px] max-w-full">
          <div className="w-fit mx-auto my-section">
            <Image
              src={successful}
              alt="successful"
              height={193}
              width={186}
              className="w-[186px] h-[193px] object-contain"
            />
          </div>
          <p className=" text-center mb-6 text-base">
            Your request has been successfully submitted.
          </p>
          <Link
            href={ROUTES.USER.BOOKINGS}
            onClick={close2}
            className={
              "!h-16 w-full flex items-center justify-center rounded-xl duration-200 bg-blueLight border-none hover:shadow-md text-black"
            }
          >
            Close
          </Link>
        </div>
      </ModalComp>
    </div>
  );
}

export default ViewCheckout;
