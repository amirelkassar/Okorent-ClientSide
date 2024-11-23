"use client";
import PlusImgIcon from "@/src/assets/icons/plusImg";
import SearchIcon from "@/src/assets/icons/search";
import Button from "@/src/components/button";
import ModalComp from "@/src/components/modal-comp";
import { useDisclosure } from "@mantine/hooks";
import imgPhone from "@/src/assets/images/phone.png";
import React from "react";
import RowProducts from "./row-products";
import Input from "@/src/components/input";
const products = [
  {
    id: 1,
    title: "Iphone 15 Pro",
    category: "Electronics",
    img: imgPhone,
  },
  {
    id: 2,
    title: "Iphone 15 Pro",
    category: "Electronics",
    img: imgPhone,
  },
  {
    id: 3,
    title: "Iphone 15 Pro",
    category: "Electronics",
    img: imgPhone,
  },
  {
    id: 4,
    title: "Iphone 15 Pro",
    category: "Electronics",
    img: imgPhone,
  },
  {
    id: 5,
    title: "Iphone 15 Pro",
    category: "Electronics",
    img: imgPhone,
  },
];
function AddProduct() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex-1">
      <div
        onClick={open}
        className="w-full flex-1 flex cursor-pointer items-center justify-center h-[250px] mdl:h-[324px] max-w-[200px] md:max-w-[270px] min-w-[200px] p-2 lg:p-4 bg-white/80 rounded-3xl  border border-green duration-200 hover:shadow-md"
      >
        <PlusImgIcon className="max-w-full h-auto w-16 mdl:w-24" />
      </div>

      <ModalComp opened={opened} close={close} title="Choose Item">
        <div className="max-w-full w-[750px]">
          <div className=" flex items-center gap-2 px-3 rounded-xl border border-grayMedium/50 mb-8">
            <SearchIcon fill="#6F6B7D" className="w-3 h-auto" />
            <Input
              className="flex-1 bg-transparent"
              inputClassName="bg-transparent border-none"
            />
          </div>

          <div className="flex flex-col gap-8">
            {products.map((product, index) => {
              return <RowProducts key={index} data={product} />;
            })}
          </div>
          
          <div className="flex items-center gap-7 mt-10 w-full">
            <Button
              onClick={close}
              className={" flex-1 h-[54px] text-black bg-grayBack border-none"}
            >
              Cancel
            </Button>
            <Button onClick={close} className={" flex-1 h-[54px]"}>
              Confirm
            </Button>
          </div>
        </div>
      </ModalComp>
    </div>
  );
}

export default AddProduct;
