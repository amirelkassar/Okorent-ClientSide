"use client";
import React from "react";
import ModalComp from "./modal-comp";
import Image, { StaticImageData } from "next/image";
import ModalSign from "./modal-sign";
import ContractContent from "./contract-content";
import ContractHeader from "./contract-header";
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
        <ContractHeader productDetails={orderDetails} />
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
