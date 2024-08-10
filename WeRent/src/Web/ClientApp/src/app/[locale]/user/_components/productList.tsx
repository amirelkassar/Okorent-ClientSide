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
  title: string;
  link?: string;
  data: dataProps[];
}
function ProductList({ title, link, data }: ProductListProps) {
  return (
    <div className="mb-11">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h2 className="text-[24px]">{title}</h2>
        <Button className={"gap-2 h-10"}>
          <p>View More</p>
          <ArrowWhiteIcon />
        </Button>
      </div>
      {data.length > 0 && (
        <div className="flex gap-8 flex-wrap">
          {data?.map((item, i) => {
            return <CardRentals data={item} key={i} Fav={true} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
