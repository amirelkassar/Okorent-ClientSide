"use client";
import { useCallback } from "react";
import { Toast } from "@/src/components/toast";
import { useDeleteInvoicesInAdmin } from "@/src/hooks/queries/admin/Invoices";
import { useSelectRowTable } from "@/src/components/select-row-table-context";

interface ActionTableIProps {
  onSubmitDeleteInvoicesInAdmin: any;
}
export const useRowActionInvoicesInAdmin = (): ActionTableIProps => {
  const { mutateAsync: DeleteInvoicesInAdmin } = useDeleteInvoicesInAdmin();
  const { setSelectRowTable } = useSelectRowTable();

  //delete Note
  const onSubmitDeleteInvoicesInAdmin = useCallback(
    async (data: any) => {
      Toast.Promise(DeleteInvoicesInAdmin(data), {
        success: "Deleted Invoice Done",
        onSuccess: async (res) => {
          setSelectRowTable([]);
        },
      });
    },
    [DeleteInvoicesInAdmin, setSelectRowTable]
  );

  return {
    onSubmitDeleteInvoicesInAdmin,
  };
};
