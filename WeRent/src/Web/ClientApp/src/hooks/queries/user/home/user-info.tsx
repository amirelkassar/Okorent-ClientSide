import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { storeToken } from "@/src/lib/token";
import { useRouter } from "@/src/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";

export const initialQueryKey = "auth.login";

//get user information
export const GetUserInfo = (id: any) => {
  return useQuery({
    queryKey: [initialQueryKey],
    queryFn: async () => {
      const response = await api.get(user.information.base(id));
      return response.data;
    },
  });
};
//edit user
export const useUserEditMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.information.user_edit, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      
    },
    onError: () => {},
  });
};
