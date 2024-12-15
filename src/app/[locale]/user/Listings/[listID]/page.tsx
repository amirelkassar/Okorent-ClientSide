"use client";
import EditIcon from "@/src/assets/icons/edit";
import Button from "@/src/components/button";
import CardDetailsList from "@/src/components/cardDetailsList";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";
import house1 from "@/src/assets/images/house1.png";
import house2 from "@/src/assets/images/house2.png";
import LinkGreen from "@/src/components/linkGreen";
import { GetProductsByID } from "@/src/hooks/queries/user/home";
import FAQ from "@/src/components/faq";

const data = {
  category: "category3",
  Describe: {
    title: "item title",
    dec: "dec for item",
  },
  pictures: [house1, house2, house1],
  priceItems: {
    OneDay: "10",
    ThreeDay: "70",
    Week: "110",
  },
  addresses: [
    {
      name: "",
      address:
        "8 Ibn Snan, ADH Dhahereyah WA Izbat as Safih, El Raml 1, Alexandria Governorate 5450045, Egypt",
    },
    {
      name: "",
      address:
        "مسجد علي إبن أبي طالب 26، السيوف قبلي (تشمل عزبة درباÙ، قسم ثان المنتزة،، السيوف قبلي (تشمل عزبة درباÙ، اول المنتزه، الإسكندرية،، As Soyouf Qebli (Include Izbat Derbanah), Third Al Montazah, Alexandria Governorate 5515260, Egypt",
    },
  ],
  Terms: "Flexible",
  value: "800",
  Availability: "pick",
  Variations: [
    {
      name: "",
      attribute1: "Color2",
      attribute2: "dsfdf",
    },
    {
      name: "",
      attribute1: "Color5",
      attribute2: "ahemd",
    },
  ],
  Stock: "500",
  Status: "Not",
};
function page({ params }: any) {
  const { data: ProductDerails } = GetProductsByID(params.listID);
  console.log(ProductDerails);

  return (
    <div className="flex flex-col lgl:mt-[-30px] gap-3 mb-20">
      <LinkGreen
        href={ROUTES.USER.LISTINGSEDIT(params.listID)}
        className={
          " ms-auto relative lgl:bottom-[-40px] px-10  gap-2 h-10   text-medium"
        }
      >
        <EditIcon fill="white" className="w-[16px]" />
        <p className="text-white">Edit</p>
      </LinkGreen>
      <CardDetailsList title="Item Category" decs={ProductDerails?.data.categoryName} />
      <CardDetailsList title="Item Subcategory" decs={ProductDerails?.data.subCategoryName} />
      <CardDetailsList title="Title" decs={ProductDerails?.data?.name} />
      <CardDetailsList
        title="Describtion"
        decs={ProductDerails?.data?.description}
      />
      <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">Item Images</h3>
        {ProductDerails?.data?.images.length > 0 && (
          <div className="h-fit  gap-2 flex-wrap  p-1 relative flex  overflow-hidden  rounded-2xl">
            {ProductDerails?.data?.pictures.map((file: any, index: number) => (
              <Image
                key={index}
                src={file}
                alt={`img item ${data.Describe.title}`}
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
          <span className="font-Medium">
            {ProductDerails?.data?.dailyPrice}
          </span>
        </p>
        <p className="text-base border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular">
          Per 3 Days:{" "}
          <span className="font-Medium">
            {" "}
            {ProductDerails?.data?.weeklyPrice}{" "}
          </span>
        </p>
        <p className="text-base border-b border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular">
          Per Week:{" "}
          <span className="font-Medium">
            {" "}
            {ProductDerails?.data?.monthlyPrice}{" "}
          </span>
        </p>
      </div>
      <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
        <h3 className="text-base lg:text-[24px] mb-1">Storage Location</h3>
        {data.addresses.map((address: any, i: number) => {
          return (
            <p
              key={i}
              className="text-base border-b max-w-[550px] truncate  border-grayMedium/40 py-2 last-of-type:border-none text-grayMedium font-Regular"
            >
              Location {i + 1}:{" "}
              <span className="font-Medium"> {address.address}</span>
            </p>
          );
        })}
      </div>

      <CardDetailsList
        title="Item Value"
        decs={`${ProductDerails?.data?.dailyPrice}$`}
      />
      <CardDetailsList title="Availability" decs={` form ${ProductDerails?.data?.availableFrom} - to ${ProductDerails?.data?.availableTo} `} />
      {ProductDerails?.data?.variations?.length > 0 ? (
        <div className="pb-4 border-b border-grayMedium/40 last-of-type:border-none">
          <h3 className="text-base lg:text-[24px] mb-1">Variations</h3>
          {ProductDerails?.data?.variations.map((variation: any, i: number) => {
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

      <CardDetailsList title="Available Stock" decs={ProductDerails?.data?.totalQuantity} />
      <CardDetailsList title="Item Status" decs={ProductDerails?.data?.isActive? "Active" : "Not Active"} />
      <FAQ dataFAQ={ProductDerails?.data?.faqs} />
      <Button className={"w-fit px-11 h-[64px] mt-8"}>Promote Listing</Button>
    </div>
  );
}

export default page;
