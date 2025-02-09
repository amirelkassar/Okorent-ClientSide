"use client";
import React, { useState } from "react";
import ModalComp from "./modal-comp";
import Image, { StaticImageData } from "next/image";
import Card from "./card";
import placeTableProduct from "@/src/assets/images/placTableProduct.png";
import { ScrollArea } from "@mantine/core";
import { TermsAndConditions } from "../lib/dataUser";
import ModalSign from "./modal-sign";
function ModalContract({
  opened,
  close,
  children,
}: {
  opened: boolean;
  close: any;
  children?: React.ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  console.log(file);

  return (
    <ModalComp opened={opened} close={close} title={"Select rental period"}>
      <div className="mx-auto max-w-[95%] w-[1100px] lg:max-w-[1100px] flex flex-col gap-4">
        <HeaderContract
          productDetails={{
            title: "Bike",
            payment: 10,
            productImage: placeTableProduct,
          }}
        />
        <ContractContent />
        <div>
          <h3 className="text-base md:text-lg font-SemiBold mb-4">Sign Here</h3>
          {file ? (
            <div className=" h-16 md:h-[100px] w-full">
              <Image
                src={URL.createObjectURL(file)}
                alt={`preview of ${file.name}`}
                height={100}
                width={500}
                className="w-auto h-full object-contain object-center "
              />
            </div>
          ) : (
            <ModalSign setFile={setFile}>
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
  productDetails: {
    title: string;
    payment: number;
    productImage: StaticImageData;
  };
}) => {
  return (
    <Card className="py-2 px-2 md:px-4">
      <h2 className="text-base mdl:text-lg font-SemiBold mb-4">Item</h2>
      <div className="flex items-center gap-4 ">
        <Image
          src={productDetails.productImage}
          alt={productDetails.title}
          width={100}
          height={100}
          className="w-[50px] h-[50px] object-cover rounded-full object-top"
        />
        <div className="flex gap-7 flex-wrap">
          <div>
            <h3 className="text-xs md:text-sm font-Regular text-grayMedium">
              Product Name
            </h3>
            <p className="text-xs md:text-base ">{productDetails.title}</p>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-Regular text-grayMedium">
              Payment
            </h3>
            <p className="text-xs md:text-base ">{productDetails.payment}</p>
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

          <p className="text-xs mdl:text-base text-grayMedium">
            Welcome to www.lorem-ipsum.info. This site is provided as a service
            to our visitors and may be used for informational purposes only.
            Because the Terms and Conditions contain legal obligations, please
            read them carefully.
          </p>
          {TermsAndConditions?.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="text-xs mdl:text-base text-grayMedium">
                  {index + 1}. {item.Title}
                </h2>
                <p className="text-xs mdl:text-base text-grayMedium capitalize">
                  {item.Content}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};
