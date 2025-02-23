import ViewProfile from "@/src/components/viewProfile";
import Image from "next/image";
import React from "react";
import EmpoweringImg from "@/src/assets/images/Empowering.png";
import { QueryWrapper } from "@/src/components/query-wrapper";
import LoadingProductsRow from "@/src/components/product/loading-products-row";
import ProductList from "@/src/components/product/productList";
import { GetUserProductsOrderInAdminByID } from "@/src/hooks/queries/admin/lisiting";

function AccountDetailsView({
  accountId = "",
  query,
}: {
  accountId?: string;
  query: any;
}) {
  const { data: ProductsData, isLoading } =
    GetUserProductsOrderInAdminByID(accountId);
  console.log(ProductsData);

  return (
    <div>
      <QueryWrapper query={query}>
        {({ data }: { data: any }) => {
          console.log(data);
          return (
            <>
              <div className="w-full rounded-3xl overflow-hidden h-[180px] lg:h-[356px]">
                <Image
                  src={EmpoweringImg}
                  alt="Empowering"
                  className="w-full h-full"
                  width={1471.48}
                  height={356.18}
                />
              </div>
              <ViewProfile editAdmin={true} data={data} />
              <div className="mt-section">
                {isLoading ? (
                  <LoadingProductsRow number={5} />
                ) : (
                  <ProductList
                    title={`${data.name.split(" ")[0]} Rentals`}
                    data={ProductsData?.data || []}
                    more={false}
                  />
                )}
              </div>
              {/* <AccrountRentals /> */}
            </>
          );
        }}
      </QueryWrapper>
    </div>
  );
}

export default AccountDetailsView;
