"use client";
import { useCallback, useState } from "react";
import ROUTES from "@/src/routes";
import { useCreateAccountMutation } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";
import { useUserStore } from "@/src/store/sign-up-store";

// Define the type for the form data
interface FormDataProps {
  Name: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
}

// Define the type for the form state and handlers
interface FormProps {
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  data: FormDataProps;
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
export const useSignUp = (): SignUpReturn => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const [formData, setFormData] = useState<FormDataProps>({
    Name: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
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
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );

  const onSubmit = useCallback(async () => {
    console.log(formData);
    setUser(formData);
    const requestData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        requestData.append(key, value as any); // Append each field
      }
    });
    Toast.Promise(CreateAccount(requestData), {
      success: "Successfully registered",
      onSuccess: (res) => {
        console.log(res);
        console.log(formData);
        if (res?.code === 200) {
          setUser({ ...formData, id: res?.data?.id });
          router.replace(
            ROUTES.AUTH.VERIFY_PHONE + `?phone_number=${formData.PhoneNumber}`
          );
        }
      },

      onError: (error) => {
        console.log("error");
        console.log(error);
      },
    });
  }, [CreateAccount, formData, router]);

  const form: FormProps = {
    setFormData,
    onChange,
    onSubmit,
    data: formData,
    error,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
