"use client";
import React, { useCallback } from "react";
import FavRedIcon from "../assets/icons/favRed";
import FavIcon from "../assets/icons/fav";
import { Toast } from "./toast";
import {
  useDeleteFavoriteProductMutation,
  useFavoriteProductMutation,
} from "../hooks/queries/user/home";
import { useDisclosure } from "@mantine/hooks";
import ModalComp from "./modal-comp";
import ListRemove from "../assets/icons/listRemove";
import Button from "./button";
import { useToken } from "../hooks/use-token";

function FavoriteProduct({
  favorite,
  id,
}: {
  favorite?: boolean;
  id?: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const { token } = useToken();
  console.log(token);

  //queries
  const { mutateAsync: FavoriteProduct } = useFavoriteProductMutation();
  const { mutateAsync: DeleteFavoriteProduct } =
    useDeleteFavoriteProductMutation();

  //add
  const onSubmitFavoriteProduct = useCallback(async () => {
    Toast.Promise(
      FavoriteProduct({
        productId: id,
      }),
      {
        success: "The product has been added to Favorites",
        ...(!token?.userID && {
          error: "Please log in first to add products to Favorites.",
        }),
        onSuccess: async (res) => {},
      }
    );
  }, [FavoriteProduct, id]);
  //remove
  const onSubmitRemoveFavoriteProduct = useCallback(async () => {
    Toast.Promise(DeleteFavoriteProduct(id), {
      success: "The product has been Removed from Favorites",
      onSuccess(res) {
        close();
      },
      onError: async (res) => {},
    });
  }, [DeleteFavoriteProduct, id]);

  return (
    <>
      <button
        onClick={() => {
          if (!favorite) {
            onSubmitFavoriteProduct();
          } else {
            open();
          }
        }}
        className="p-[5px] md:p-2 rounded-lg bg-grayBack size-6 hover:shadow-md duration-300 md:size-8 flex items-center justify-center absolute bottom-3 end-2 z-10"
      >
        {favorite ? <FavRedIcon /> : <FavIcon />}
      </button>
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

export default FavoriteProduct;
