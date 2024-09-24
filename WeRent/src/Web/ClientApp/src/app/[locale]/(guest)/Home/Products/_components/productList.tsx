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
  data: dataProps[];
}
function ProductList({data }: ProductListProps) {
  return (
    <div className="mb-11">
    
      {data.length > 0 && (
        <div className="flex gap-3 justify-center lg:justify-start  flex-wrap">
          {data?.map((item, i) => {
            return <CardRentals data={item} key={i} Fav={true} />;
          })}
        </div>
      )}
   
    </div>
  );
}

export default ProductList;
