"use client";
import { useCallback } from "react";
import { Toast } from "@/src/components/toast";
import {
  useActivateAccountInAdmin,
  useDeleteAccountInAdmin,
} from "@/src/hooks/queries/admin/account";

interface ActionTableIRentProps {
  onSubmitDeleteAccount: any;
  onSubmitActivateAccount: any;
}
export const useRowActionAccountInAdmin = (id: any): ActionTableIRentProps => {
  const { mutateAsync: DeleteAccount } = useDeleteAccountInAdmin();
  const { mutateAsync: ActivateAccount } = useActivateAccountInAdmin(id);

  //delete User
  const onSubmitDeleteAccount = useCallback(async () => {
    Toast.Promise(DeleteAccount(id), {
      success: "Deleted Account Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteAccount, id]);

  //Activate User
  const onSubmitActivateAccount = useCallback(
    async (data: any) => {
      Toast.Promise(ActivateAccount(data), {
        success: "Activate Account Done",
        onSuccess: async (res) => {},
      });
    },
    [ActivateAccount]
  );

  return {
    onSubmitDeleteAccount,
    onSubmitActivateAccount,
  };
};
