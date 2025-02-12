import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const initialQueryKey = "demoReq";

//get all demo requests
export const GetAllDemoRequestsInAdmin = (queries?: any): any => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Demo.base(queries));
      return response.data;
    },
  });
};

// change status demo in admin
export const useChangeStatusDemoInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(admin.Demo.Change, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};

// Delete  demo in admin
export const useDeleteDemoInAdmin = (id: any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await api.delete(admin.Demo.delete(id));
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
//get  demo by ID 
export const GetDemoRequestByIDInAdmin = (id: any): any => {
  return useQuery({
    queryKey: [initialQueryKey, id],
    queryFn: async () => {
      const response = await api.get(admin.Demo.get_note_byID(id));
      return response.data;
    },
  });
};
// add Note Demo In Admin
export const useAddNoteDemoInAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Demo.add_note, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.refetchQueries([initialQueryKey]);
    },
    onError: (res) => {
      console.log(res);
    },
  });
};
