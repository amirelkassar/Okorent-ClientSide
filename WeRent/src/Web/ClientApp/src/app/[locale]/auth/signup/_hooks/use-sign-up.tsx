"use client";

import { useCallback, useState } from "react";
import ROUTES from "@/src/routes";
import { useCreateAccountMutation } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";

// Define the type for the form data
interface FormDataProps {
  Name: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  Theme: "dark" | "light";
  Language: "en" | "ar";
  ProfileImageFile: File | null;
  AvatarFile: File | null;
}

// Define the type for the form state and handlers
interface FormProps {
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  data: FormDataProps;
  error: any; // You can replace 'any' with a more specific type based on your error structure
  Done: boolean;
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
export const useSignUp = (): SignUpReturn => {
  const router = useRouter();
  const [Done, setDone] = useState(false);

  const [formData, setFormData] = useState<FormDataProps>({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Theme: "light",
    Language: "en",
    ProfileImageFile: null,
    AvatarFile: null,
  });

  const {
    mutateAsync: CreateAccount,
    error,
    isPaused,
    isError,
    reset,
  } = useCreateAccountMutation();

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
    const requestData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        requestData.append(key, value as any); // Append each field
      }
    });
    Toast.Promise(CreateAccount(requestData), {
      success: "تم التسجيل بنجاج",
      onSuccess: () => {
        setDone(true);
        router.replace(ROUTES.AUTH.LOGIN);
      },
    });
  }, [CreateAccount, formData, router]);

  const form: FormProps = {
    setFormData,
    onChange,
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
