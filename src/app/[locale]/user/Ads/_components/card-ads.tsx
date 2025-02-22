import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import Image from "next/image";
import React from "react";
import placCardProduct from "@/src/assets/images/placCardProduct.png";
import { getDate } from "@/src/lib/utils";
import RenderStatusAds from "./render-status-ads";
import BottomCardAds from "./bottom-card-ads";
import UseChangeStatus from "../_hooks/use-change-status";
interface CardAdsProps {
  advertisementStatus: number | string;
  endDate: string;
  id: string;
  payment: number;
  pricingId: string;
  productId: string;
  productImage: string;
  productName: string;
  startDate: string;
  userId: string;
  userImage: null;
  userName: null;
}

function CardAds({ product }: { product: CardAdsProps }) {
  const { onSubmitCancel, onSubmitPause, onSubmitResume, onSubmitDelete } =
    UseChangeStatus(product?.id || "");
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-3 lg:px-5 py-3 lg:py-4 max-w-[400px] mb-3 w-full mdl:min-w-[320px] shadow-sidebar relative">
      <div className=" rounded-xl bg-blueLight w-full h-[122px] lg:h-40">
        <Image
          alt="home"
          priority
          src={product?.productImage || placCardProduct}
          width={370}
          height={166}
          className="w-full rounded-xl h-full object-cover object-center "
        />
      </div>

      <div className="flex items-center gap-3 justify-between mt-2 lg:mt-5 pb-3 border-b border-green">
        <div>
          <h3 className="text-xs text-grayMedium lg:text-sm font-Regular">
            Product Name
          </h3>
          <p className=" text-xs  lg:text-sm ">{product?.productName}</p>
        </div>
        <RenderStatusAds
          status={product?.advertisementStatus?.toString() || "0"}
        />
      </div>

      <div className="flex items-end justify-between gap-1 lg:gap-3 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Boost From
          </h3>
          <p className="text-sm lg:text-base font-SemiBold">
            {getDate(product?.startDate).fullYearWithMonthName}
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular text-sm lg:text-base">
            Boost To
          </h3>
          <p className="text-sm lg:text-base text-center font-SemiBold">
            {getDate(product?.endDate).fullYearWithMonthName}
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Payment
          </h3>
          <p className="text-sm lg:text-base text-center font-SemiBold">
            {product?.payment || 0}$
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-3 mt-8">
        <LinkGreen
          href={ROUTES.USER.PRODUCTDETAILS(50)}
          className={"!h-9 py-1 flex-1"}
        >
          View Details
        </LinkGreen>
        <div className="flex items-center gap-4">
          {product?.advertisementStatus === 1 && (
            <>
              <BottomCardAds.StopAds
                onClick={() => onSubmitPause({ advertisementId: product?.id })}
              />
              <BottomCardAds.CancelAds
                onClick={() => {
                  onSubmitCancel({ advertisementId: product?.id });
                }}
              />
              <BottomCardAds.DeleteAds
                onClick={() => onSubmitDelete({ advertisementId: product?.id })}
              />
            </>
          )}
          {product?.advertisementStatus === 2 && (
            <>
              <BottomCardAds.CancelAds
                onClick={() => {
                  onSubmitCancel({ advertisementId: product?.id });
                }}
              />
              <BottomCardAds.DeleteAds
                onClick={() => onSubmitDelete({ advertisementId: product?.id })}
              />
            </>
          )}
          {product?.advertisementStatus === 3 && (
            <>
              <BottomCardAds.ResumeAds
                onClick={() => onSubmitResume({ advertisementId: product?.id })}
              />
              <BottomCardAds.CancelAds
                onClick={() => {
                  onSubmitCancel({ advertisementId: product?.id });
                }}
              />
              <BottomCardAds.DeleteAds
                onClick={() => onSubmitDelete({ advertisementId: product?.id })}
              />
            </>
          )}
          {product?.advertisementStatus === 4 && (
            <>
              <BottomCardAds.DeleteAds
                onClick={() => onSubmitDelete({ advertisementId: product?.id })}
              />
            </>
          )}
          {product?.advertisementStatus === 5 && (
            <>
              <BottomCardAds.DeleteAds
                onClick={() => onSubmitDelete({ advertisementId: product?.id })}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardAds;
