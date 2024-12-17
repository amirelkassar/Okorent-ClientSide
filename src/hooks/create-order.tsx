"use client";

import { useCallback, useState } from "react";
import { Toast } from "@/src/components/toast";
import { useCreateOrderMutation } from "./queries/user/order";
import { useDisclosure } from "@mantine/hooks";

// Define the type for the form state and handlers
interface FormProps {
  onSubmit: (data:any) => void;
  error: any; // You can replace 'any' with a more specific type based on your error structure
  opened2:any,
  close2:any
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
export const useCreateOrder = (): SignUpReturn => {
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);
  const {
    mutateAsync: CreateOrder,
    error,
    isPaused,
    isError,
    reset,
  } = useCreateOrderMutation();

  const onSubmit = useCallback(async (data:any) => {
    Toast.Promise(CreateOrder(data), {
      success: "successfully Create Order",
      onSuccess: async (res) => {
        console.log(res);
        open2()
      },
    });
  }, [CreateOrder]);

  const form: FormProps = {
    onSubmit,
    opened2,
    close2,
    error,
  };

  const status = {
    isPaused,
    isError,
  };

  return { form, status };
};
