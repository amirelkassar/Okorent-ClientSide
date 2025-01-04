import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { getFormData } from "@/src/lib/utils";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "user.addListing";
export const initialQueryKeyMyProduct = "user.myProductsAll";



export const useCreateListingMutation = () => {
  const router = useRouter()
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async (data: any) => {
      const response = await api.post(user.addListing.base, await getFormData(data), {
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
      const response = await api.put(user.addListing.edit_listing(id), await getFormData(data), {
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
