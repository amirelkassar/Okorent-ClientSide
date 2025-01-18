import { auth } from "@/src/api/auth";
import { api } from "@/src/api/axios";
import { clearToken, storeToken } from "@/src/lib/token";
import { useRouter } from "@/src/navigation";
import ROUTES from "@/src/routes";
import { authDecodedToken, decodedToken } from "@/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToken } from "../../use-token";

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
  const { setToken } = useToken();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.login.base, data, {});
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
      storeToken(res?.data);
      setToken(await authDecodedToken());
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
    onError: () => {},
  });
};

export const useVerifyPhoneMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.register.verify_phone, data, {
        headers: {},
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      storeToken(res);
      console.log(
        decodedToken(res).then((res2) => {
          console.log(res2);
        })
      );
    },
    onError: () => {
      clearToken();
    },
  });
};

export const useReSendOTP = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.register.resend_otp, data, {
        headers: {},
      });
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (req) => {
      console.log(req);
    },
  });
};

export const useForgetPassword = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.forgot_password.base, data);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
    onError: () => {},
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await api.post(auth.reset_password.base, data);
      return response.data;
    },
    onSuccess: async (res) => {
      console.log(res);
    },
    onError: () => {},
  });
};
