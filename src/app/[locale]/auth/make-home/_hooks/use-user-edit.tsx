"use client";
import { useCallback, useState } from "react";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";
import { useUserEditMutation } from "@/src/hooks/queries/user/home/user-info";
import { useUserStore } from "@/src/store/sign-up-store";
import { useToken } from "@/src/hooks/use-token";
import { authDecodedToken } from "@/token";

// Define the type for the form state and handlers
interface FormProps {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
  data: any;
  error: any; // You can replace 'any' with a more specific type based on your error structure
  Done: boolean;
}

// Define the type for the status state
interface StatusProps {
  isPaused: boolean;
  isError: boolean;
}
interface UserEditReturn {
  form: FormProps;
  status: StatusProps;
}
export const useUserEdit = (): UserEditReturn => {
  const router = useRouter();
  const { setToken } = useToken();

  const [Done, setDone] = useState(false);
  const { user, setUser } = useUserStore();
  const [formData, setFormData] = useState({
    Theme: "light",
    Language: "en",
    ProfileImageFile: null,
    AvatarFile: null,
  });
  console.log(user);
  
  const {
    mutateAsync: CreateAccount,
    error,
    isPaused,
    isError,
    reset,
  } = useUserEditMutation(user?.token||'');

  const onSubmit = useCallback(async () => {
    const requestData = new FormData();
    Object.entries({ ...formData, ...user.user,OldPassword:user.user.Password }).forEach(([key, value]) => {
      if (value !== null) {
        requestData.append(key, value as any); // Append each field
      }
    });
    Toast.Promise(CreateAccount(requestData), {
      success: "Successfully registered",
      onSuccess: async(res) => {
        console.log(res);
        setToken(await authDecodedToken());
        setDone(true);
        setUser({});
      },

      onError: (error) => {
        console.log("error");
        console.log(error);
      },
    });
  }, [CreateAccount, formData, router]);

  const form: FormProps = {
    setFormData,
    onSubmit,
    data: formData,
    error,
    Done,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
