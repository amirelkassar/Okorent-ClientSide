"use client";
import { useCallback } from "react";
import {
  ChangeStautsByID,
  useCancelOrderOutMutation,
  useDeleteOrderOutMutation,
  useRejectOrderOutMutation,
} from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";

interface ActionTableIRentProps {
  onSubmitDelete: any;
  onSubmitChangeStatus: any;
  onSubmitReject: any;
  onSubmitCancel: any;
}
export const useChangeStatusRentOut = (id: any): ActionTableIRentProps => {
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);
  const { mutateAsync: DeleteOrderOut } = useDeleteOrderOutMutation();
  const { mutateAsync: RejectOrderOut } = useRejectOrderOutMutation();
  const { mutateAsync: CancelOrder } = useCancelOrderOutMutation();

  //delete order
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteOrderOut(id), {
      success: "Deleted Product Done",
      onSuccess: async (res) => {},
    });
  }, [DeleteOrderOut, id]);

  //change status
  const onSubmitChangeStatus = useCallback(async () => {
    Toast.Promise(ChangeStatusProduct(id), {
      loading: "Processing...",
      success: "Operation completed!",
      error: "Failed to complete operation",
    });
  }, [ChangeStatusProduct, id]);

  //reject order
  const onSubmitReject = useCallback(async () => {
    Toast.Promise(
      RejectOrderOut({
        orderId: id,
        answer: true,
      }),
      {
        success: "Rejected Product Done",
        onSuccess: async (res) => {},
      }
    );
  }, [RejectOrderOut, id]);

  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderRequestId: id,
        answer: true,
      }),
      {
        success: "Canceled Order",
        onSuccess: async (res) => {},
      }
    );
  }, [CancelOrder]);
  return {
    onSubmitDelete,
    onSubmitChangeStatus,
    onSubmitReject,
    onSubmitCancel
  };
};
