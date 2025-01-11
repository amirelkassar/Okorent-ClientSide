import { api } from "@/src/api/axios";
import { admin, user } from "@/src/api/user";
import { getFormData, getQueries } from "@/src/lib/utils";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const initialQueryKey = "admin_products";
export const initialQueryKeyStock = "admin_stock";

//get All Products
export const GetProductsInAdmin = (queries?: any): any => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.product.base(queries));
      return response.data;
    },
  });
};

//getProductByID
export const GetProductsInAdminByID = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.product.getById(id));
      return response.data;
    },
  });
};

//Delete Product
export const useDeleteProductInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(admin.product.getById(id));
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//Delete Product
export const useDeleteManyProductInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.delete(admin.product.DeleteManyProducts, {
        data: data,
      });
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKey]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Edit Product In Admin
export const useEditListingInAdmin = (id: any) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(
        admin.product.getById(id),
        await getFormData(data),
        {
          headers: {
            Accept: "text/plain",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
      router.push(ROUTES.ADMIN.LISTINGS);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//get User Stock
export const GetAllStockUser = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeyStock, id],
    queryFn: async () => {
      const response = await api.get(admin.Stocks.base(id));
      return response.data;
    },
  });
};

//Post New Stock
export const useCreateStockInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Stocks.add, data, {});
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyStock, id]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

//Edit New Stock
export const useEditStockInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any,) => {
      const response = await api.put(admin.Stocks.base(data?.id), data, {});
      return response.data;
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries([initialQueryKeyStock, id]);
      console.log(res);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
