"use client";
import Button from "@/src/components/button";
import CardRentals from "@/src/components/cardRentals";
import { StaticImageData } from "next/image";
import { parseAsInteger, useQueryState } from "nuqs";
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
  title?: string;
  link?: string;
  data: dataProps[];
  more?: boolean;
}
function ProductList({ link, title, data, more = true }: ProductListProps) {
  const [PageNumber, setPageNumber] = useQueryState(
    "PageSize",
    parseAsInteger.withDefault(10)
  );
  if (data.length === 0) return null;
  return (
    <div className="mb-11">
      {title && (
        <h2 className="text-center mb-5 lg:mb-10 headTitle">{title}</h2>
      )}

      {data.length > 0 && (
        <div className="flex gap-3 lg:gap-4 justify-center xl:justify-start  flex-wrap ">
          {data?.map((item, i) => {
            return <CardRentals data={item} key={i} Fav={true} />;
          })}
        </div>
      )}
      {more && (
        <Button
          className={"gap-2 mx-auto mt-11 h-10"}
          onClick={() => {
            setPageNumber(+PageNumber + 10);
          }}
        >
          View more items
        </Button>
      )}
    </div>
  );
}

export default ProductList;
