import { api } from "@/src/api/axios";
import { admin } from "@/src/api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const initialQueryKey = "Notes";

// Get All Notes
export const GetAllNotes = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Notes.get_all(queries));
      return response.data;
    },
  });
};
// Get  Notes by Id
export const GetNotesById = (queries?: any) => {
  return useQuery({
    queryKey: [initialQueryKey, queries],
    queryFn: async () => {
      const response = await api.get(admin.Notes.get_by_id(queries));
      return response.data;
    },
  });
};
//send Notes
export const useSendNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Notes.create, data, {
        headers: {
          Accept: "text/plain",
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

// Delete Notes
export const useDeleteOneNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const response = await api.delete(admin.Notes.notes_id(id));
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

// Delete Many Notes
export const useDeleteManyNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(admin.Notes.delete_bulk, data);
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
