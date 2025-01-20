"use client";
import Button from "@/src/components/button";
import CardRentals from "@/src/components/cardRentals";
import FAQ from "@/src/components/faq";
import MapComponent from "@/src/components/map";
import CardProduct from "@/src/components/product/cardProduct";
import Description from "@/src/components/product/description";
import Reviews from "@/src/components/reviews";
import React, { useState } from "react";
import HeaderProduct from "./_components/headerProduct";
import AddProduct from "./_components/add-product";
import { QueryWrapper } from "@/src/components/query-wrapper";
import { GetProductsAll } from "@/src/hooks/queries/user/home";
import LoadingProductsRow from "@/src/components/product/loading-products-row";
import { GetProductsInAdminByID } from "@/src/hooks/queries/admin/lisiting";
import { GetReviewByIDInAdmin } from "@/src/hooks/queries/admin/lisiting/Reviews";

function Page({ params }: any) {
  const [IsEdit, setIsEdit] = useState(false);
  const query = GetProductsInAdminByID(params?.productID);
  const { data: dataCustomers, isLoading: isLoadingProducts } =
    GetProductsAll();
  const { data: DataReviews, isLoading } = GetReviewByIDInAdmin(params.productID);

  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);
        return (
          <div>
            <HeaderProduct id={params.productID} />
            <CardProduct admin data={data || []} />
            <div className="bg-[#D9D9D933] px-3 lg:px-10 lg:rounded-[50px] rounded-[30px] pt-8 lg:pt-11 pb-9 lg:pb-7 mb-section">
              <h2 className="text-xl mb-5 px-2 lg:text-2xl">
                How to receive this item
              </h2>
              <MapComponent
                stocks={data?.stocks?.length > 0 ? data.stocks : []}
              />
              <p className="text-sm lg:text-base text-grayMedium font-Regular mt-5">
                This item is available for in-store pickup. Request it from the
                lessor and select your preferred pickup location. Once the
                lessor approves, you can make your payment and proceed to pick
                up your order.
              </p>
            </div>
            <Reviews
              editAdmin
              usersReviews={data?.usersReviews}
              isLoading={isLoading}
              dataReviews={DataReviews?.data || []}
            />

            <div className="flex flex-col gap-5 mb-section">
              <Description
                title="Guarantee"
                description="Oko Rent damages up to £25,000 per item"
              />
              <Description
                title="Cancelation Policy"
                description="In case of cancellation 2 days before the rental period, 100% of the rental amount is refunded. If canceled one day before the rental period, 50% of the rental amount is refunded. If you cancel the same day the rental period starts, no refund is made."
              />
            </div>
            {data?.faQs?.length > 0 && <FAQ dataFAQ={data?.faQs || []} />}
            <div className="bg-grayBack max-w-full   pt-5 pb-8 lg:pb-10 relative before:content-[''] before:w-[calc(100%+32px)] lg:before:w-screen   before:bg-grayBack before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
              <h2 className=" relative text-xl lg:text-[24px] mb-8">
                Customers who rent this item also rent
              </h2>
              <div className=" relative z-10">
                <>
                  {isLoadingProducts ? (
                    <div className="flex ">
                      <LoadingProductsRow />
                    </div>
                  ) : (
                    <div className="flex gap-4 max-w-full  lg:gap-8 overflow-x-auto  hideScroll md:flex-wrap relative z-[10]">
                      {dataCustomers?.data?.items.map(
                        (item: any, index: number) => {
                          return <CardRentals data={item} key={index} />;
                        }
                      )}
                    </div>
                  )}
                </>
              </div>
            </div>
            {/* <div className="bg-grayBack max-w-full  pt-5 pb-8 lg:pb-10 relative before:content-[''] before:w-[calc(100%+32px)] lg:before:w-[calc(100%+130px)] before:bg-grayBack before:absolute before:bottom-0 before:-translate-x-1/2   before:h-full before:left-[50%]">
              <div className="relative flex items-center justify-between gap-3 flex-wrap mb-8">
                <h2 className=" text-xl lg:text-[24px] ">
                  Customers who rent this item also rent
                </h2>
                {IsEdit ? (
                  <div className="flex items-center gap-2 ">
                    <Button
                      className={
                        "h-9 text-blue bg-blue/15 border-none hover:shadow-md !px-5 !text-sm"
                      }
                      onClick={() => setIsEdit(false)}
                    >
                      Discard Edits
                    </Button>
                    <Button
                      className={"h-9 !px-5 !text-sm"}
                      onClick={() => setIsEdit(false)}
                    >
                      Save Edits
                    </Button>
                  </div>
                ) : (
                  <Button
                    className={"h-9 !px-5 !text-sm"}
                    onClick={() => setIsEdit(true)}
                  >
                    Edit
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-4 lg:gap-8  relative z-[10]">
                <div className="flex gap-4 max-w-full  lg:gap-8 overflow-x-auto  hideScroll md:flex-wrap ">
                  {Rentals.slice(0, IsEdit ? 4 : 5).map((item) => {
                    return (
                      <CardRentals data={item} key={item.id} edit={IsEdit} />
                    );
                  })}
                </div>
                {IsEdit && <AddProduct />}
              </div>
            </div> */}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default Page;
