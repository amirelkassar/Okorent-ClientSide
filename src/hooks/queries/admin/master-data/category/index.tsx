import { api } from "@/src/api/axios";
import { admin, user } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "Category";
export const initialQueryKeySub = "SubCategory";

// Get Category
export const GetCategory = () => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(admin.Category.base);
      return response.data;
    },
  });
};

// Get Category by ID
export const GetCategoryByID = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Category.Category_ID(id));
      return response.data;
    },
  });
};

// Add Category
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Category.base, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: () => queryClient.refetchQueries([initialQueryKey]),
    onError: (res) => console.error(res),
  });
};

// Delete Category
export const useDeleteCategory = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async () => {
      const response = await api.delete(admin.Category.Category_ID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey]);
      queryClient.refetchQueries([initialQueryKey, id]);
    },
    onError: (res) => console.error(res),
  });
};

//edit Category
export const useEditCategory = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Category.base, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey, id]);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => console.error(res),
  });
};

//================== SubCategory ==================

// Get SubCategory
export const GetSubCategory = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKeySub, initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(
        user.addListing.subCategory_by_category(id)
      );
      return response.data;
    },
  });
};

// Add SubCategory
export const useCreateSubCategory = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.SubCategory.base, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKey, id]);
      queryClient.refetchQueries([initialQueryKeySub]);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => console.error(res),
  });
};

// Delete SubCategory
export const useDeleteSubCategory = (id: any, idCategory: any) => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async () => {
      const response = await api.delete(admin.SubCategory.SubCategory_ID(id));
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([
        initialQueryKeySub,
        initialQueryKey,
        idCategory,
      ]);
      queryClient.refetchQueries([initialQueryKey, idCategory]);
      queryClient.refetchQueries([initialQueryKey]);
      queryClient.refetchQueries([initialQueryKeySub]);
    },
    onError: (res) => console.error(res),
  });
};

//edit SubCategory
export const useEditSubCategory = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation<void, any, Record<string, any>>({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.SubCategory.base, data, {});
      return response.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries([initialQueryKeySub, initialQueryKey, id]);
      queryClient.refetchQueries([initialQueryKey, id]);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => console.error(res),
  });
};
