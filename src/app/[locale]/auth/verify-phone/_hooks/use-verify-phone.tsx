"use client";
import { useCallback, useState } from "react";
import ROUTES from "@/src/routes";
import { useReSendOTP, useVerifyPhoneMutation } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";
import { useToken } from "@/src/hooks/use-token";
import { authDecodedToken } from "@/token";

// Define the type for the form data
interface FormDataProps {
  otp: string;
  phoneNumber: string | null;
}

// Define the type for the form state and handlers
interface FormProps {
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
  onSubmit: () => void;
  onSubmitReSendOTP: () => void;
  error: any; // You can replace 'any' with a more specific type based on your error structure
  errorReSend: any;
}

// Define the type for the status state
interface StatusProps {
  isPaused: boolean;
  isError: boolean;
}
interface VerifyPhoneReturn {
  form: FormProps;
  status: StatusProps;
}
export const useVerifyPhone = (): VerifyPhoneReturn => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataProps>({
    otp: "",
    phoneNumber: null,
  });
  const { setToken } = useToken();

  const {
    mutateAsync: VerifyPhone,
    error,
    isPaused,
    isError,
    reset,
  } = useVerifyPhoneMutation();
  const { mutateAsync: ReSendOTP, error: errorReSend } = useReSendOTP();

  const onSubmitReSendOTP = useCallback(async () => {
    Toast.Promise(ReSendOTP({ phone: formData.phoneNumber }), {
      success: "OTP sent successfully",
      onSuccess: async (res) => {
        console.log(res);
      },
      onError: (error) => {
        console.log("error");
        console.log(error);
      },
    });
  }, [ReSendOTP]);
  const onSubmit = useCallback(async () => {
    Toast.Promise(VerifyPhone(formData), {
      success: "OTP sent successfully",
      onSuccess: async (res) => {
        console.log(res);
        setToken(await authDecodedToken());
        router.replace(ROUTES.AUTH.MAKE_HOME);
      },
      onError: (error) => {
        console.log("error");
        console.log(error);
      },
    });
  }, [VerifyPhone, formData, router]);

  const form: FormProps = {
    setFormData,
    onSubmit,
    onSubmitReSendOTP,
    error,
    errorReSend,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
