"use client";
import React from "react";
import ModalComp from "./modal-comp";
import Image, { StaticImageData } from "next/image";
import Card from "./card";
import placeTableProduct from "@/src/assets/images/placTableProduct.png";
import { ScrollArea } from "@mantine/core";
import { TermsContent } from "../lib/dataUser";
import ModalSign from "./modal-sign";
interface OrderDetailsProps {
  productImage: StaticImageData;
  title: string;
  payment: number;
}
function ModalContract({
  opened,
  close,
  children,
  setRenterSignature,
  RenterSignature,
  orderDetails,
}: {
  opened: boolean;
  close: any;
  children?: React.ReactNode;
  setRenterSignature: React.Dispatch<React.SetStateAction<File | null>>;
  RenterSignature: File | null;
  orderDetails: OrderDetailsProps;
}) {
  return (
    <ModalComp opened={opened} close={close} title={"Sign & Proceed"}>
      <div className="mx-auto max-w-[95%] w-[1100px] lg:max-w-[1100px] flex flex-col gap-4">
        <HeaderContract productDetails={orderDetails} />
        <ContractContent />
        <div>
          <h3 className="text-base md:text-lg font-SemiBold mb-4">Sign Here</h3>
          {RenterSignature ? (
            <div className=" h-16 md:h-[100px] w-full">
              <Image
                src={URL.createObjectURL(RenterSignature)}
                alt={`preview of ${RenterSignature.name}`}
                height={100}
                width={500}
                className="w-auto h-full object-contain object-center "
              />
            </div>
          ) : (
            <ModalSign setFile={setRenterSignature}>
              <div className="w-full border-2 border-black/50 h-[70px] md:h-[100px] bg-[#EEEEEE] border-dashed rounded-2xl p-3 mdl:p-8">
                <p className="text-grayMedium text-xs mdl:text-base">
                  Draw your signature here
                </p>
              </div>
            </ModalSign>
          )}
        </div>
        {children}
      </div>
    </ModalComp>
  );
}

export default ModalContract;

const HeaderContract = ({
  productDetails,
}: {
  productDetails: OrderDetailsProps;
}) => {
  return (
    <Card className="py-2 px-2 md:px-4">
      <h2 className="text-base mdl:text-lg font-SemiBold mb-4">Item</h2>
      <div className="flex items-center gap-4 ">
        <Image
          src={productDetails.productImage || placeTableProduct}
          alt={productDetails.title|| "Product Name"}
          width={100}
          height={100}
          className="w-[50px] h-[50px] object-cover rounded-full object-top"
        />
        <div className="flex gap-7 flex-wrap">
          <div>
            <h3 className="text-xs md:text-sm font-Regular text-grayMedium">
              Product Name
            </h3>
            <p className="text-xs md:text-base ">
              {productDetails.title || "Product Name"}
            </p>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-Regular text-grayMedium">
              Payment
            </h3>
            <p className="text-xs md:text-base ">
              {productDetails.payment || 0}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ContractContent = () => {
  return (
    <Card className="w-full max-w-full  py-2 px-2 md:px-5">
      <h3 className="pb-2 font-Bold text-base md:text-lg">Your Agreement</h3>
      <ScrollArea
        h={400}
        color="#88BA52"
        type="auto"
        classNames={{
          scrollbar: "bg-grayMedium/15 rounded-2xl",
          thumb: "bg-green",
        }}
        className=" pe-3 md:pe-5"
      >
        <div className="text-grayMedium text-base">
          <p className="text-xs mdl:text-base text-gray-600">
            Last Revised: December 16, 2013
          </p>

          <pre className="whitespace-pre-wrap text-xs mdl:text-base text-gray-600">
            {TermsContent}
          </pre>
        </div>
      </ScrollArea>
    </Card>
  );
};
