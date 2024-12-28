import Image from "next/image";
import React, { useCallback } from "react";
import placCardProductImg from "@/src/assets/images/placCardProduct.png";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import Button from "@/src/components/button";
import { useUpdateToOnlineMutation } from "@/src/hooks/queries/user/lisitings";
import { Toast } from "@/src/components/toast";

function OneCardView({ data, offline }: { data: any; offline: boolean }) {
    const { mutateAsync: UpdateToOnline } = useUpdateToOnlineMutation();
  
  const onSubmitOnline = useCallback(async () => {
    Toast.Promise(UpdateToOnline(data.id), {
      success: "Done Change Product To OnLine",
    });
  }, [UpdateToOnline]);
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-3 lg:px-5 py-3 lg:py-4 max-w-[400px] mb-3 w-full min-w-[280px] lg:min-w-[320px] shadow-sidebar">
      <Image
        alt="home"
        priority
        height={160}
        width={365}
        src={ placCardProductImg}
        className="w-full rounded-xl h-40 object-cover bg-blueLight object-center"
      />
      <div className="flex items-end justify-between lg:gap-3 gap-2 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular lg:text-[16px] text-sm">
            Product Name
          </h3>
          <p className="lg:text-[16px] text-sm font-SemiBold truncate max-w-[130px]">
            {data?.name || "Product Name"}
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular lg:text-[16px] text-sm">
            Payment
          </h3>
          <p className="lg:text-[16px] text-sm text-center font-SemiBold">
            {data?.dailyPrice || "0"}$
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular lg:text-[16px] text-sm">
            Quantity
          </h3>
          <p className="lg:text-[16px] text-sm text-center font-SemiBold">
            {data?.quantity || "0"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <LinkGreen
          href={ROUTES.USER.LISTINGSEDIT(data?.id)}
          className={"h-10 bg-grayBack flex-1 text-black border-none"}
        >
          Edit
        </LinkGreen>
        {offline ? (
          <Button onClick={onSubmitOnline} className={"h-10 flex-1"}>Make Online</Button>
        ) : (
          <LinkGreen
            href={ROUTES.USER.LISTINGSDETAILS(data?.id)}
            className={"h-10 flex-1"}
          >
            View Details
          </LinkGreen>
        )}
      </div>
    </div>
  );
}

export default OneCardView;
