"use client";
import CardRentals from "@/src/components/cardRentals";
import FAQ from "@/src/components/faq";
import MapComponent from "@/src/components/map";
import CardProduct from "@/src/components/product/cardProduct";
import Description from "@/src/components/product/description";
import LoadingProductsRow from "@/src/components/product/loading-products-row";
import { QueryWrapper } from "@/src/components/query-wrapper";
import Reviews from "@/src/components/reviews";
import { GetReviewByID } from "@/src/hooks/queries/user/booking/reviews";
import { GetProductsAll, GetProductsByID } from "@/src/hooks/queries/user/home";
import { useSearchParams } from "next/navigation";
import React from "react";

function Page({ params }: any) {
  const searchparams = useSearchParams();
  const query = GetProductsByID(params.productID);
  const { data: dataCustomers, isLoading: isLoadingProducts } =
    GetProductsAll();
  const { data:DataReviews, isLoading } = GetReviewByID(params.productID);

  return (
    <QueryWrapper query={query}>
      {({ data }: { data: any }) => {
        console.log(data);
        return (
          <div>
            <CardProduct data={data || []} />
            {searchparams.get("checkout") === "true" ? (
              <></>
            ) : (
              <>
                {" "}
                <div className="bg-[#D9D9D933] px-3 lg:px-10 lg:rounded-[50px] rounded-[30px] pt-8 lg:pt-11 pb-9 lg:pb-7 mb-section">
                  <h2 className="text-xl mb-5 px-2 lg:text-2xl">
                    How to receive this item
                  </h2>

                  <MapComponent
                    stocks={data?.stocks?.length > 0 ? data.stocks : []}
                  />

                  <p className="text-sm lg:text-base text-grayMedium font-Regular mt-5">
                    This item is available for in-store pickup. Request it from
                    the lessor and select your preferred pickup location. Once
                    the lessor approves, you can make your payment and proceed
                    to pick up your order.
                  </p>
                </div>
                <Reviews
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
              </>
            )}
          </div>
        );
      }}
    </QueryWrapper>
  );
}

export default Page;
