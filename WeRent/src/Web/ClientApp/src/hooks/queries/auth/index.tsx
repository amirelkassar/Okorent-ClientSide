import { auth } from "@/src/api/auth";
import { api } from "@/src/api/axios";
import { clearToken, storeToken } from "@/src/lib/token";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { authDecodedToken, decodedToken } from "@/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const isCleared = await clearToken();

      if (isCleared) {
        await router.push(ROUTES.AUTH.LOGIN);
      } else {
        console.error("Failed to clear token.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { logout };
};

export const initialQueryKey = "auth.login";

export const useLoginMutation = () => {
  const router = useRouter();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data:any) => {
      const response = await api.post(auth.login.base, data, {});
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      storeToken(res?.data);
      console.log(
        authDecodedToken().then((res) => {
          if (res?.userEmail) {
            router.push(ROUTES.USER.HOMEPAGE);
          }
        })
      );
    },
    onError: () => {
      clearToken();
    },
  });
};
export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.register.base, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (res) => {
     
      console.log(res);
      storeToken(res?.data);
      console.log(
        decodedToken(res?.data).then((res2) => {
          console.log(res2);
        })
      );
    },
    onError: () => {
      clearToken();
    },
  });
};
