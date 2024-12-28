"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import iphone from "@/src/assets/images/iphone.png";
import userImg from "@/src/assets/images/avatar.png";
import Button from "@/src/components/button";
import LinkGreen from "@/src/components/linkGreen";
import ROUTES from "@/src/routes";
import StarIcon from "@/src/assets/icons/star";
import FavRedIcon from "@/src/assets/icons/favRed";
import { useDisclosure } from "@mantine/hooks";
import ModalComp from "@/src/components/modal-comp";
import ListRemove from "@/src/assets/icons/listRemove";
import { useDeleteFavoriteProductMutation } from "@/src/hooks/queries/user/home";
import { Toast } from "@/src/components/toast";

function CardFavView({ product }: { product?: any }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { mutateAsync: DeleteFavoriteProduct } =
    useDeleteFavoriteProductMutation();

  const onSubmitRemoveFavoriteProduct = useCallback(async () => {
    Toast.Promise(DeleteFavoriteProduct(product?.id), {
      success: "The product has been Removed from Favorites",
      onError: async (res) => {
        close();
      },
      onSuccess: async (res) => {
        close();
      },
    });
  }, [DeleteFavoriteProduct, product?.id]);


  return (
    <>
      <div className="bg-white border border-green/50 rounded-3xl px-3 lg:px-5 py-3 lg:py-4 max-w-[400px] mb-3 w-full mdl:min-w-[320px] shadow-sidebar relative">
        <Image
          alt="home"
          priority
          src={iphone}
          width={370}
          height={166}
          className="w-full rounded-xl h-[122px] lg:h-40 object-cover object-center lg:object-top"
        />
        <div className="flex items-center gap-3 justify-between mt-2 lg:mt-6">
          <div className="flex items-center gap-3 ">
            <Image
              alt="userImg"
              priority
              src={userImg}
              className="size-11 lg:size-[60px] rounded-full  object-cover object-top"
            />
            <div>
              <h3 className="text-base lg:text-xl font-Medium">Sara James</h3>
              <p className="text-grayMedium text-sm lg:text-base font-Regular">
                Since Sep 2024
              </p>
            </div>
          </div>
          <div
            onClick={open}
            className=" size-8 rounded-lg bg-grayBack flex cursor-pointer duration-300 hover:shadow-md items-center justify-center p-1"
          >
            <FavRedIcon className="w-[18px] h-auto" />
          </div>
        </div>
        <div className="flex items-end justify-between gap-1 lg:gap-3 mt-5">
          <div>
            <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
              Product Name
            </h3>
            <p className="text-sm lg:text-base font-SemiBold">
              {product?.name || " product name"}
            </p>
          </div>
          <span className=" block h-[34px] w-[1px] bg-green"></span>
          <div>
            <h3 className="text-grayMedium text-center mb-1 font-Regular text-sm lg:text-base">
              Starting Price
            </h3>
            <p className="text-sm lg:text-base text-center font-SemiBold">
              {product?.dailyPrice || " 0"} $
            </p>
          </div>
          <span className=" block h-[34px] w-[1px] bg-green"></span>
          <div>
            <h3 className="text-grayMedium mb-1 font-Regular text-sm lg:text-base">
              Rating
            </h3>
            <div className="flex items-center gap-1 pe-3 lgl:pe-4">
              <p className=" text-base text-grayMedium ">4.5</p>
              <StarIcon className="w-4 lgl:w-[18px] h-auto" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-5 mt-8">
          <LinkGreen href={ROUTES.USER.PRODUCTDETAILS(product?.id)} className={"h-10 bg-grayBack flex-1 text-black border-none"}>
            View Details
          </LinkGreen>
          <LinkGreen href={ROUTES.USER.INBOX} className={"h-10 flex-1"}>
            Request This Item
          </LinkGreen>
        </div>
      </div>
      {opened && (
        <ModalComp title="" opened={opened} close={close}>
          <div className="mt-8">
            <div className="w-[200px] h-[200px] mb-2 block mx-auto">
              <ListRemove />
            </div>

            <h3 className="text-xl text-center mb-1 font-SemiBold">
              Want to remove?
            </h3>
            <p className="text-grayMedium text-base text-center mx-auto max-w-[300px] mb-11">
              Are you sure you want to remove this item from your wishlist?
            </p>
            <div className="flex items-center gap-2 lg:gap-5 ">
              <Button
                onClick={close}
                className={
                  "h-10  flex-1 font-Medium text-green bg-white border-2 hover:bg-green duration-300 hover:text-white"
                }
              >
                No
              </Button>
              <Button
                onClick={() => onSubmitRemoveFavoriteProduct()}
                className={"h-10 font-Medium flex-1"}
              >
                Yes
              </Button>
            </div>
          </div>
        </ModalComp>
      )}
    </>
  );
}

export default CardFavView;
