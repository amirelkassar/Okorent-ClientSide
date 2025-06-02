"use client";

import { useCallback, useState } from "react";
import ROUTES from "@/src/routes";
import { useLoginMutation } from "@/src/hooks/queries/auth";
import { useRouter } from "@/src/navigation";
import { Toast } from "@/src/components/toast";
import { decodedToken } from "@/token";
import { handleGoogleLogin } from "@/src/services/google-auth";
import { CredentialResponse } from "@react-oauth/google";
import { api } from "@/src/api/axios";
import { storeToken } from "@/src/lib/token";

// Define the type for the form data
interface FormDataProps {
  username: string;
  password: string;
}

// Define the type for the form state and handlers
interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onGoogleLogin: (credentialResponse: CredentialResponse) => void;
  error: any;
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
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (isError) reset();
    },
    [isError, reset]
  );

  const setupAuthToken = async (token: string) => {
    // Ensure token has Bearer prefix
    const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    const rawToken = token.replace('Bearer ', '');
    
    // Store in localStorage for client-side access
    localStorage.setItem('token', authToken);
    
    // Set for axios requests
    api.defaults.headers.common['Authorization'] = authToken;

    // Store in cookies for middleware
    await storeToken(rawToken);
    
    console.log('Token storage complete:', {
      localStorage: !!localStorage.getItem('token'),
      axiosHeader: !!api.defaults.headers.common['Authorization'],
      cookieSet: true
    });
  };

  const handleLoginSuccess = async (response: any) => {
    try {
      // For regular login, response.data contains the token
      // For Google login, response.data.data contains the token
      const token = response.data?.token || response.data?.data?.token;
      
      if (!token) {
        throw new Error('No token received from server');
      }

      // Setup authentication token
      await setupAuthToken(token);

      const userRole = await decodedToken(token).then((res2) => {
        return res2?.userRole;
      });

      // Navigate based on role
      if (userRole === "Administrator") {
        router.replace(ROUTES.ADMIN.DASHBOARD);
      } else {
        router.replace(ROUTES.USER.HOMEPAGE);
      }
    } catch (error) {
      console.error('Error processing login response:', error);
      Toast.Notification('Failed to process login response');
    }
  };

  const onSubmit = useCallback(async () => {
    Toast.Promise(Login(formData), {
      loading: "Logging in... ",
      success: "Successfully logged in",
      onSuccess: handleLoginSuccess,
      onError: (err) => {
        console.error("Login error:", err);
        Toast.Notification(err.message || 'Login failed');
      },
    });
  }, [Login, formData, router]);

  const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      console.log('Google credential response:', credentialResponse);
      
      if (!credentialResponse.credential) {
        throw new Error('No credential received from Google');
      }

      const result = await handleGoogleLogin(credentialResponse.credential);
      
      // Only show success toast and handle login if we have data
      if (result && result.data) {
        Toast.Notification('Successfully logged in with Google');
        await handleLoginSuccess(result);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error: any) {
      console.error("Google login error:", error);
      Toast.Notification(error.message || 'Google login failed');
    }
  };

  const form: FormProps = {
    onChange,
    onSubmit,
    onGoogleLogin: handleGoogleSuccess,
    error,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
