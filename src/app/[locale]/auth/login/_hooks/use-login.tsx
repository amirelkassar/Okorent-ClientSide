"use client";

import { useCallback, useState } from "react";
import ROUTES from "@/src/routes";
import { useLoginMutation } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";

// Define the type for the form data
interface FormDataProps {
  username: string;
  password: string;
}

// Define the type for the form state and handlers
interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  error: any; // You can replace 'any' with a more specific type based on your error structure
}

// Define the type for the status state
interface StatusProps {
  isPaused: boolean;
  isError: boolean;
}
interface SignUpReturn {
  form: FormProps;
  status: StatusProps;
}
export const useLogin = (): SignUpReturn => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormDataProps>({
    username: "",
    password: "",
  });


  const {
    mutateAsync: Login,
    error,
    isPaused,
    isError,
    reset,
  } = useLoginMutation();

  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      console.log(formData);

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );

  const onSubmit = useCallback(async () => {
    Toast.Promise(Login(formData), {
      success: "successfully logged in",
      onSuccess: (res) => {
        console.log(res);

        //setToken(await authDecodedToken());
        router.replace(ROUTES.USER.HOMEPAGE);
      },
    });
  }, [Login, formData, router]);

  const form: FormProps = {
    onChange,
    onSubmit,
    error,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
