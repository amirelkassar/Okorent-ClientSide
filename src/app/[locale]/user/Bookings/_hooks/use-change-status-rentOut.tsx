"use client";
import { useCallback } from "react";
import {
  ChangeStautsByID,
  useCancelOrderOutMutation,
  useDeleteOrderOutMutation,
  useRefundOrderOutMutation,
  useRejectOrderOutMutation,
} from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";

interface ActionTableIRentProps {
  onSubmitDelete: any;
  onSubmitChangeStatus: any;
  onSubmitReject: any;
  onSubmitCancel: any;
  onSubmitRefundYes: any;
  onSubmitRefundNo: any;
}
export const useChangeStatusRentOut = (id: any): ActionTableIRentProps => {
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);
  const { mutateAsync: DeleteOrderOut } = useDeleteOrderOutMutation();
  const { mutateAsync: RejectOrderOut } = useRejectOrderOutMutation();
  const { mutateAsync: CancelOrder } = useCancelOrderOutMutation();
  const { mutateAsync: RefundOrder } = useRefundOrderOutMutation();

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
  }, [CancelOrder, id]);

  //RefundYes order
  const onSubmitRefundYes = useCallback(async () => {
    Toast.Promise(
      RefundOrder({
        orderId: id,
        answer: true,
        lessorMessage: "string",
      }),
      {
        success: " Request Approved ",
        onSuccess: async (res) => {},
      }
    );
  }, [RefundOrder, id]);

  //RefundNo order
  const onSubmitRefundNo = useCallback(async () => {
    Toast.Promise(
      RefundOrder({
        orderId: id,
        answer: false,
        lessorMessage: "string",
      }),
      {
        success: "Request Rejected ",
        onSuccess: async (res) => {},
      }
    );
  }, [RefundOrder, id]);
  return {
    onSubmitDelete,
    onSubmitChangeStatus,
    onSubmitReject,
    onSubmitCancel,
    onSubmitRefundYes,
    onSubmitRefundNo,
  };
};
