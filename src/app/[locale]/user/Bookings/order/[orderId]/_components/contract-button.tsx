"use client";
import ContractIcon from "@/src/assets/icons/Contract";
import ContractContent from "@/src/components/contract-content";
import ContractHeader from "@/src/components/contract-header";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import Image, { StaticImageData } from "next/image";
import React from "react";
interface OrderDetailsProps {
  productImage: StaticImageData | string;
  title: string;
  payment: number;
}
function ContractButton({
  orderDetails,
  renterSignatureImage,
}: {
  orderDetails: OrderDetailsProps;
  renterSignatureImage: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <button
        onClick={open}
        className="px-4 w-fit h-10 py-1 duration-300 hover:shadow-md border border-black rounded-xl flex items-center gap-2"
      >
        <ContractIcon />
        <p className=" text-sm lg:text-base">Review Contract</p>
      </button>
      <ModalComp opened={opened} close={close} title={"Sign & Proceed"}>
        <div className="mx-auto max-w-[95%] w-[1100px] lg:max-w-[1100px] flex flex-col gap-4">
          <ContractHeader productDetails={orderDetails} />
          <ContractContent />
          <div>
            <h3 className="text-base md:text-lg font-SemiBold mb-4">
              Sign Here
            </h3>
            {renterSignatureImage ? (
              <div className=" h-16 md:h-[100px] w-full">
                <Image
                  src={renterSignatureImage}
                  alt={`preview of Contract`}
                  height={100}
                  width={500}
                  className="w-auto h-full object-contain object-center "
                />
              </div>
            ) : (
              <>
                {" "}
                <p>No signature</p>
              </>
            )}
          </div>
        </div>
      </ModalComp>
    </>
  );
}

export default ContractButton;
