import React from "react";
import Card from "./card";
import Image, { StaticImageData } from "next/image";
import placeTableProduct from "@/src/assets/images/placTableProduct.png";

interface OrderDetailsProps {
  productImage: StaticImageData | string;
  title: string;
  payment: number;
}
function ContractHeader({
  productDetails,
}: {
  productDetails: OrderDetailsProps;
}) {
  return (
    <Card className="py-2 px-2 md:px-4">
      <h2 className="text-base mdl:text-lg font-SemiBold mb-4">Item</h2>
      <div className="flex items-center gap-4 ">
        <Image
          src={productDetails.productImage || placeTableProduct}
          alt={productDetails.title || "Product Name"}
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
}

export default ContractHeader;
