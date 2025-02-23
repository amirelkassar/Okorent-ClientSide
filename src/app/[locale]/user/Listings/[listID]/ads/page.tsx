"use client";
import Button from "@/src/components/button";
import Card from "@/src/components/card";
import { Link } from "@/src/navigation";
import React, { useCallback, useState } from "react";
import PriceAdsDetails from "./_components/price-ads-details";
import DurationAds from "./_components/Duration-ads";
import CardRentals from "@/src/components/cardRentals";
import { GetMyProductsByID } from "@/src/hooks/queries/user/lisitings";
import SkeletonLoading from "@/src/components/skeleton-loading";
import { GetUserPricing, useCreateAds } from "@/src/hooks/queries/user/ads";
import { Toast } from "@/src/components/toast";

function Page({ params }: any) {
  const [Duration, setDuration] = useState<any | null>(null);

  //query
  const { data, isLoading } = GetMyProductsByID(params.listID);
  const { data: pricingData, isLoading: isLoadingPricing } = GetUserPricing();
  const { mutateAsync: CreateAds } = useCreateAds();

  const onSubmitCreateAds = useCallback(async () => {
    Toast.Promise(
      CreateAds({
        productId: params.listID,
        advertisementPricingId: Duration?.id || "",
      }),
      {
        success: "Create Ads Done",
        onSuccess(res) {},
        onError(err) {},
      }
    );
  }, [CreateAds, Duration, params.listID]);
  return (
    <div className="mb-section">
      <h2 className="text-xl mdl:text-2xl font-SemiBold mb-5">Ad Preview</h2>
      <div className="flex lgl:flex-row flex-col lgl:items-start justify-between gap-5 flex-wrap mdl:gap-7 mb-14">
        {isLoading ? (
          <SkeletonLoading className=" min-h-[210px] md:!min-h-[300px] w-full md:!min-w-[270px]" />
        ) : (
          <CardRentals
            data={{
              ...data?.data,
              address: data?.data?.stocks[0]?.address || "location",
            }}
          />
        )}

        <DurationAds
          data={pricingData?.data?.items || []}
          isLoading={isLoadingPricing}
          Duration={Duration}
          setDuration={setDuration}
        />
        <PriceAdsDetails pricingSelected={Duration} />
      </div>
      <div>
        <Card className="py-7 px-5 md:px-9 rounded-3xl flex items-center gap-4 flex-col mdl:flex-row justify-between">
          <h3 className="text-sm mdl:text-base font-Regular text-center mdl:text-start">
            By clicking Publish, you agree to Okorent
            <Link href={"#"} className="text-blue px-1 font-Medium">
              Terms & Conditions
            </Link>
          </h3>
          <Button
            onClick={onSubmitCreateAds}
            className={`px-10 h-12 w-[400px] max-w-full ${
              Duration?.id ? "" : "opacity-50 pointer-events-none"
            }`}
          >
            Publish this ad
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Page;
