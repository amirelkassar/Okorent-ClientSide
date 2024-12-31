import Image from "next/image";
import React from "react";
import homeImg from "@/src/assets/images/placProduct.png";
import userImg from "@/src/assets/images/avatar.png";
import { getDate } from "@/src/lib/utils";
import BottomCardRent from "./bottom-card-rent";
import { useChangeStatusRent } from "../_hooks/use-change-status-rent";

function OneCardView({ product, status }: { product?: any; status: any }) {
  const FirstLessorName = product?.lessorName?.split(" ")[0];
  const {
    onSubmitChangeStatus,
  } = useChangeStatusRent(product?.id);
  return (
    <div className="bg-white border border-green/50 rounded-3xl px-3 lg:px-5 py-3 lg:py-4 max-w-[400px] mb-3 w-full mdl:min-w-[320px] shadow-sidebar relative">
      {/* <div className="flex items-center justify-center gap-2 bg-[#FF0E0E] rounded-xl absolute top-5 lg:top-7 start-6 p-2  lg:p-3">
        <NoteIcon />
        <p className="text-white text-xs lg:text-[14px] font-SemiBold">
          Ending Soon!
        </p>
      </div> */}
      <Image
        alt="home"
        priority
        src={product?.heroImage||homeImg}
        className="w-full rounded-xl h-[122px]  lg:h-40 object-contain object-center lg:object-top"
        width={400}
        height={122}
      />
      <div className="flex items-center gap-3 mt-2 lg:mt-6">
        <Image
          alt="userImg"
          priority
          src={userImg}
          className="size-11 lg:size-[60px] rounded-full  object-cover object-top"
        />
        <div>
          <h3 className="text-base lg:text-xl font-Medium max-w-full truncate">
            {product?.lessorName || "name"}
          </h3>
          <p className="text-grayMedium text-sm lg:text-base font-Regular">
            {product?.lessorEmail || ""}
          </p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-1 lg:gap-3 mt-5">
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Product Name
          </h3>
          <p className="text-sm lg:text-base font-SemiBold  max-w-[130px] truncate">
            {product?.productName || "Product Name"}
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium text-center mb-1 font-Regular text-sm lg:text-base">
            Payment
          </h3>
          <p className="text-sm lg:text-base text-center font-SemiBold">
            {product?.amount || "0"}$
          </p>
        </div>
        <span className=" block h-[34px] w-[1px] bg-green"></span>
        <div>
          <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
            Ending Date
          </h3>
          <p className="text-sm lg:text-base font-SemiBold">
            {getDate(product?.to).fullYear || "--"}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 lg:gap-y-3 lg:gap-x-5 mt-4 ">
        {(status === 1 ||
          status === 3 ||
          status === 6 ||
          status === 11 ||
          status === 12) && (
          <>
            <BottomCardRent.ViewDetailsLink id={product?.id || "undefined"} />
            <BottomCardRent.MessageLink
              id={product?.id || "undefined"}
              name={FirstLessorName || "User"}
            />
          </>
        )}
        {status === 4 && (
          <>
            <BottomCardRent.ScanForReceiving
              onClick={onSubmitChangeStatus}
              id={product?.id || "undefined"}
              style="w-full min-w-full"
            />
            <BottomCardRent.ViewDetailsLink id={product?.id || "undefined"} />
            <BottomCardRent.MessageLink
              id={product?.id || "undefined"}
              name={FirstLessorName || "User"}
              style="bg-grayBack border-none  text-black"
            />
          </>
        )}
        {status === 7 && (
          <>
            <BottomCardRent.Review
              id={product?.id || "undefined"}
              style="w-full min-w-full"
            />
            <BottomCardRent.ViewDetailsLink id={product?.id || "undefined"} />
            <BottomCardRent.MessageLink
              id={product?.id || "undefined"}
              name={FirstLessorName || "User"}
              style="bg-grayBack border-none  text-black"
            />
          </>
        )}
        {(status === 8 || status === 9) && (
          <>
            <BottomCardRent.ViewDetailsLink id={product?.id || "undefined"} />
            <BottomCardRent.ReorderButton
              onClick={() => console.log("Reorder clicked")}
            />
          </>
        )}
        {status === 10 && (
          <>
            <BottomCardRent.ViewDetailsLink id={product?.id || "undefined"} />
            <BottomCardRent.RentAgainButton
              onClick={() => console.log("Rent again clicked")}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default OneCardView;
