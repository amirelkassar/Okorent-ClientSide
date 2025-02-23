"use client";
import { useCallback } from "react";
import {
  ChangeStatusByIDs,
  ChangeStautsByID,
  useCancelManyOrderMutation,
  useCancelOrderMutation,
  useRefundManyOrderMutation,
  useRefundOrderMutation,
} from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";
import { useSelectRowTable } from "@/src/components/select-row-table-context";

interface ActionTableIRentProps {
  onSubmitCancel: any;
  onSubmitRefund: any;
  onSubmitChangeStatus: any;
  onSubmitChangeStatusIds: any;
  onSubmitRefundMany: any;
  onSubmitCancelMany: any;
}
export const useChangeStatusRent = (id: any): ActionTableIRentProps => {
  const { mutateAsync: CancelOrder } = useCancelOrderMutation();
  const { mutateAsync: CancelManyOrder } = useCancelManyOrderMutation();
  const { mutateAsync: RefundOrder } = useRefundOrderMutation();
  const { mutateAsync: RefundManyOrder } = useRefundManyOrderMutation();
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);
  const { mutateAsync: ChangeStatusManyProduct } = ChangeStatusByIDs();

  const { setSelectRowTable } = useSelectRowTable();
  //change status
  const onSubmitChangeStatus = useCallback(async () => {
    Toast.Promise(ChangeStatusProduct(id), {
      loading: "Processing...",
      success: "Operation completed!",
      error: "Failed to complete operation",
      onSuccess(res) {
        setSelectRowTable([]);
      },
    });
  }, [ChangeStatusProduct, id]);

  //change status ids
  const onSubmitChangeStatusIds = useCallback(
    async (data: any) => {
      Toast.Promise(ChangeStatusManyProduct(data), {
        loading: "Processing...",
        success: "Operation completed!",
        error: "Failed to complete operation",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [ChangeStatusManyProduct, id]
  );

  //cancel order
  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderId: id,
        renterMessage: "    ",
      }),
      {
        success: "Canceled Order",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      }
    );
  }, [CancelOrder, id]);

  //cancel Many order
  const onSubmitCancelMany = useCallback(
    async (data: any) => {
      Toast.Promise(CancelManyOrder(data), {
        success: "Canceled Order",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [CancelManyOrder, id]
  );

  //Refund order
  const onSubmitRefund = useCallback(
    async (msg: any = "msg") => {
      Toast.Promise(
        RefundOrder({
          orderId: id,
          renterMessage: msg,
        }),
        {
          success: "Done Send Request to Return Order",
          onSuccess(res) {
            setSelectRowTable([]);
          },
        }
      );
    },
    [RefundOrder, id]
  );

  //Refund Many order
  const onSubmitRefundMany = useCallback(
    async (data: any) => {
      Toast.Promise(RefundManyOrder(data), {
        success: "Done Send Request to Return Order",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RefundManyOrder, id]
  );

  return {
    onSubmitCancel,
    onSubmitRefund,
    onSubmitChangeStatus,
    onSubmitChangeStatusIds,
    onSubmitRefundMany,
    onSubmitCancelMany,
  };
};
