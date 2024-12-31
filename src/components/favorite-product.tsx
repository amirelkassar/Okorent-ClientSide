import React, { useCallback } from "react";
import FavRedIcon from "../assets/icons/favRed";
import FavIcon from "../assets/icons/fav";
import { Toast } from "./toast";
import {
  useDeleteFavoriteProductMutation,
  useFavoriteProductMutation,
} from "../hooks/queries/user/home";

function FavoriteProduct({
  favorite,
  id,
}: {
  favorite?: boolean;
  id?: string;
}) {
  const { mutateAsync: FavoriteProduct } = useFavoriteProductMutation();
  const { mutateAsync: DeleteFavoriteProduct } =
    useDeleteFavoriteProductMutation();
  const onSubmitFavoriteProduct = useCallback(async () => {
    Toast.Promise(
      FavoriteProduct({
        productId: id,
      }),
      {
        success: "The product has been added to Favorites",
        onSuccess: async (res) => {},
      }
    );
  }, [FavoriteProduct, id]);
  const onSubmitRemoveFavoriteProduct = useCallback(async () => {
    Toast.Promise(DeleteFavoriteProduct(id), {
      success: "The product has been Removed from Favorites",
      onError: async (res) => {},
    });
  }, [DeleteFavoriteProduct, id]);
  return (
    <button
      onClick={() => {
        if (!favorite) {
          onSubmitFavoriteProduct();
        } else {
          onSubmitRemoveFavoriteProduct();
        }
      }}
      className="p-[5px] md:p-2 rounded-lg bg-grayBack size-6 md:size-8 flex items-center justify-center absolute bottom-3 end-2 z-[2]"
    >
      {favorite ? <FavRedIcon /> : <FavIcon />}
    </button>
  );
}

export default FavoriteProduct;
