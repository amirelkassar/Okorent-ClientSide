import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { getFormData } from "@/src/lib/utils";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.addListing";
export const initialQueryKeyMyProduct = "user.myProductsAll";

//getCategory
export const GetCategory = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(
        user.addListing.category + "?CategoryType=Category"
      );
      return response.data;
    },
  });
};
export const GetSubCategory = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(
        user.addListing.subCategory_by_category(id)
      );
      return response.data;
    },
  });
};

export const useCreateListingMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(user.addListing.base, getFormData(data), {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyMyProduct]);
      router.push(ROUTES.USER.LISTINGS)
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
export const useEditListingMutation = (id:any) => {
  const router = useRouter()
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.addListing.edit_listing(id), getFormData(data), {
        headers: {
          Accept: "text/plain",
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKeyMyProduct]);
      router.push(ROUTES.USER.LISTINGS)
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
