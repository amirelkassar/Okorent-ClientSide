import ArrowWhiteIcon from "@/src/assets/icons/arrowWhite";
import Button from "@/src/components/button";
import CardRentals from "@/src/components/cardRentals";
import { StaticImageData } from "next/image";
import React from "react";
interface dataProps {
  id: number;
  price: number;
  title: string;
  state: string;
  location: string;
  locationDetails: string;
  img: StaticImageData;
  details: string;
}
interface ProductListProps {
  title?:string,
  link?: string;
  data: dataProps[];
}
function ProductList({ link,title, data }: ProductListProps) {
  return (
    <div className="mb-11">
      <h2 className="text-center mb-5 lg:mb-10 headTitle">{title}</h2>

      {data.length > 0 && (
        <div className="flex gap-3 lg:gap-8 justify-center flex-wrap">
          {data?.map((item, i) => {
            return <CardRentals data={item} key={i} Fav={true} />;
          })}
        </div>
      )}
      <Button className={"gap-2 mx-auto mt-11 h-10"}>View more items</Button>
    </div>
  );
}

export default ProductList;
