"use client";
import { useCallback } from "react";
import {
  ChangeStautsByID,
  useCancelOrderMutation,
  useDeleteOrderMutation,
  useRefundOrderMutation,
} from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";

interface ActionTableIRentProps {
  onSubmitDelete: any;
  onSubmitCancel: any;
  onSubmitRefund: any;
  onSubmitChangeStatus: any;
}
export const useChangeStatusRent = (id: any): ActionTableIRentProps => {
  const { mutateAsync: DeleteOrderOut } = useDeleteOrderMutation();
  const { mutateAsync: CancelOrder } = useCancelOrderMutation();
  const { mutateAsync: RefundOrder } = useRefundOrderMutation();
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);

  //change status
  const onSubmitChangeStatus = useCallback(async () => {
    Toast.Promise(ChangeStatusProduct(id), {
      loading: "Processing...",
      success: "Operation completed!",
      error: "Failed to complete operation",
    });
  }, [ChangeStatusProduct, id]);

  //cancel order
  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderId: id,
        renterMessage: "    ",
      }),
      {
        success: "Canceled Order",
        onSuccess: async (res) => {},
      }
    );
  }, [CancelOrder, id]);
  //delete order
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteOrderOut(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteOrderOut, id]);

  //cancel order
  const onSubmitRefund = useCallback(async () => {
    Toast.Promise(
      RefundOrder({
        orderRequestId: id,
        answer: true,
        lessorMessage: "string",
      }),
      {
        success: "Canceled Order",
        onSuccess: async (res) => {},
      }
    );
  }, [RefundOrder, id]);

  return {
    onSubmitDelete,
    onSubmitCancel,
    onSubmitRefund,
    onSubmitChangeStatus,
  };
};
