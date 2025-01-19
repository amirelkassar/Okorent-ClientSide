"use client";
import { useCallback } from "react";
import {
  ChangeStatusByIDs,
  ChangeStautsByID,
  useCancelOrderOutMutation,
  useDeleteOrderOutMutation,
  useRefundManyOrderOutMutation,
  useRefundOrderOutMutation,
  useRejectManyOrderOutMutation,
  useRejectOrderOutMutation,
} from "@/src/hooks/queries/user/booking";
import { Toast } from "@/src/components/toast";
import { useSelectRowTable } from "@/src/components/select-row-table-context";

interface ActionTableIRentProps {
  onSubmitDelete: any;
  onSubmitChangeStatus: any;
  onSubmitReject: any;
  onSubmitCancel: any;
  onSubmitRefundYes: any;
  onSubmitRefundNo: any;
  onSubmitChangeStatusIds: any;
  onSubmitRejectOrdersIds: any;
  onSubmitRefundManyYes: any;
  onSubmitRefundManyNo: any;
}
export const useChangeStatusRentOut = (id: any): ActionTableIRentProps => {
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);
  const { mutateAsync: ChangeStatusManyProduct } = ChangeStatusByIDs();
  const { mutateAsync: DeleteOrderOut } = useDeleteOrderOutMutation();
  const { mutateAsync: RejectOrderOut } = useRejectOrderOutMutation();
  const { mutateAsync: RejectManyOrderOut } = useRejectManyOrderOutMutation();
  const { mutateAsync: CancelOrder } = useCancelOrderOutMutation();
  const { mutateAsync: RefundOrder } = useRefundOrderOutMutation();
  const { mutateAsync: RefundManyOrder } = useRefundManyOrderOutMutation();
  const { setSelectRowTable } = useSelectRowTable();

  //delete order
  const onSubmitDelete = useCallback(async () => {
    Toast.Promise(DeleteOrderOut(id), {
      success: "Deleted Product Done",
      onSuccess(res) {
        setSelectRowTable([]);
      },
    });
  }, [DeleteOrderOut, id]);

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
    [ChangeStatusManyProduct]
  );

  //reject order
  const onSubmitReject = useCallback(async () => {
    Toast.Promise(
      RejectOrderOut({
        orderId: id,
        answer: true,
      }),
      {
        success: "Rejected Product Done",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      }
    );
  }, [RejectOrderOut, id]);

  //reject order ids
  const onSubmitRejectOrdersIds = useCallback(
    async (data: any) => {
      Toast.Promise(RejectManyOrderOut(data), {
        loading: "Processing...",
        success: "Operation completed!",
        error: "Failed to complete operation",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RejectManyOrderOut]
  );

  //cancel order
  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderRequestId: id,
        answer: true,
      }),
      {
        success: "Canceled Order",
        onSuccess(res) {
          setSelectRowTable([]);
        },
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
        onSuccess(res) {
          setSelectRowTable([]);
        },
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
        onSuccess(res) {
          setSelectRowTable([]);
        },
      }
    );
  }, [RefundOrder, id]);

  //RefundYes many order
  const onSubmitRefundManyYes = useCallback(
    async (data: any) => {
      Toast.Promise(RefundManyOrder(data), {
        success: " Request Approved ",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RefundManyOrder, id]
  );

  //RefundNo many order
  const onSubmitRefundManyNo = useCallback(
    async (data: any) => {
      Toast.Promise(RefundManyOrder(data), {
        success: "Request Rejected ",
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RefundManyOrder, id]
  );

  return {
    onSubmitDelete,
    onSubmitChangeStatus,
    onSubmitReject,
    onSubmitCancel,
    onSubmitRefundYes,
    onSubmitRefundNo,
    onSubmitChangeStatusIds,
    onSubmitRejectOrdersIds,
    onSubmitRefundManyYes,
    onSubmitRefundManyNo,
  };
};
