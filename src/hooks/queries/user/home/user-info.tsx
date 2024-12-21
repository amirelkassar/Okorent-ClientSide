import { api } from "@/src/api/axios";
import { user } from "@/src/api/user";
import { storeToken } from "@/src/lib/token";
import { useRouter } from "@/src/navigation";
import { decodedToken } from "@/token";
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
export const useUserEditMutation = (token: any) => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.put(user.information.user_edit, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      storeToken(token);
      console.log(
        decodedToken(token).then((res2) => {
          console.log(res2);
        })
      );
    },
    onError: () => {},
  });
};
