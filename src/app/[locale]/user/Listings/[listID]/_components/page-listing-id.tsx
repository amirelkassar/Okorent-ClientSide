import Button from "@/src/components/button";
import CardDetailsList from "@/src/components/cardDetailsList";
import FAQ from "@/src/components/faq";
import Image from "next/image";
import React from "react";
import HeaderActions from "./header-actions";

function PageListingId({ initialData, id }: { initialData: any; id: any }) {
  return (
    <div className="flex flex-col gap-3 mb-20">
      <HeaderActions id={id} />
      <CardDetailsList title="Item Category" decs={initialData.categoryName} />
      <CardDetailsList
        title="Item Subcategory"
        decs={initialData.subCategoryName}
      />
      <CardDetailsList title="Title" decs={initialData?.name} />
      <CardDetailsList title="Describtion" decs={initialData?.description} />
      <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">Item Images</h3>
        {initialData?.images.length > 0 && (
          <div className="h-fit  gap-2 flex-wrap  p-1 relative flex  overflow-hidden  rounded-2xl">
            {initialData?.images.map((file: any, index: number) => (
              <Image
                key={index}
                src={file.path}
                alt={`img item ${initialData?.name}`}
                width={200}
                height={150}
                className=" object-contain rounded-sm h-[100px] lg:h-[132px] w-auto"
              />
            ))}
          </div>
        )}
      </div>
      <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">Item Price</h3>

        <p className="text-base border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular">
          Per Day:{" "}
          <span className="font-Medium">{initialData?.dailyPrice}</span>
        </p>
        <p className="text-base border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular">
          Per 3 Days:{" "}
          <span className="font-Medium"> {initialData?.weeklyPrice} </span>
        </p>
        <p className="text-base border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular">
          Per Week:{" "}
          <span className="font-Medium"> {initialData?.monthlyPrice} </span>
        </p>
      </div>
      <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">Storage Location</h3>
        {initialData?.stocks?.map((address: any, i: number) => {
          return (
            <p
              key={i}
              className="text-base border-b max-w-[750px]  border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular"
            >
              Location {i + 1}:{" "}
              <span className="font-Medium"> {address.address}</span>
            </p>
          );
        })}
      </div>

      <CardDetailsList
        title="Item Value"
        decs={`${initialData?.dailyPrice}$`}
      />
      <CardDetailsList
        title="Availability"
        decs={
          initialData?.availableFrom
            ? ` form ${initialData?.availableFrom} - to ${initialData?.availableTo} `
            : "Always available"
        }
      />
      {initialData?.variations?.length > 0 ? (
        <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
          <h3 className="text-base lg:text-[24px] mb-1">Variations</h3>
          {initialData?.variations.map((variation: any, i: number) => {
            return (
              <div
                key={i}
                className="text-base flex gap-10 items-center border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular"
              >
                <h4> Phone Case ${i}: </h4>
                <span className="font-Medium">
                  {" "}
                  Color - {variation.attribute1}
                </span>
                <span className="font-Medium">
                  Size - {variation.attribute2}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}

      <CardDetailsList
        title="Available Stock"
        decs={initialData?.totalQuantity}
      />
      <CardDetailsList
        title="Item Status"
        decs={initialData?.isActive ? "Active" : "Not Active"}
      />
      <FAQ dataFAQ={initialData?.faQs} />
    </div>
  );
}

export default PageListingId;
