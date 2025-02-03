import PlusIcon from "@/src/assets/icons/plus";
import Button from "@/src/components/button";
import Image from "next/image";
import React from "react";

function RowProducts({ data }: any) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <div className=" size-[50px] rounded-full p-1 bg-blueLight flex items-center justify-center">
          <Image
            src={data.img}
            alt="products"
            width={50}
            height={50}
            className="h-full w-auto object-contain place-content-center"
          />
        </div>
        <div>
          <h3 className="text-xs mdl:text-sm font-SemiBold ">
            Iphone 15 Pro
          </h3>
          <h4 className="text-grayMedium font-Regular text-xs mdl:text-sm">
            Electronics
          </h4>
        </div>
      </div>
      <Button className={'h-9 px-5 gap-2'}>
        <PlusIcon className={'w-3 h-auto'} />
        <p className="text-xs">Add Product</p>
      </Button>
    </div>
  );
}

export default RowProducts;
