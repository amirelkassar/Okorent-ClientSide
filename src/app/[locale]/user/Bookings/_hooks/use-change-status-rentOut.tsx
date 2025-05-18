'use client';
import { useCallback } from 'react';
import {
  ChangeStatusByIDs,
  ChangeStautsByID,
  GetShippingLabel,
  useCancelOrderOutMutation,
  useRefundManyOrderOutMutation,
  useRefundOrderOutMutation,
  useRejectManyOrderOutMutation,
  useRejectOrderOutMutation,
} from '@/src/hooks/queries/user/booking';
import { Toast } from '@/src/components/toast';
import { useSelectRowTable } from '@/src/components/select-row-table-context';

interface ActionTableIRentProps {
  onSubmitChangeStatus: (RenterSignature?: any) => void;
  onSubmitReject: any;
  onSubmitCancel: any;
  onSubmitRefundYes: any;
  onSubmitRefundNo: any;
  onSubmitChangeStatusIds: any;
  onSubmitRejectOrdersIds: any;
  onSubmitRefundManyYes: any;
  onSubmitRefundManyNo: any;
  onSubmitPrintShippingLabel: (id: any) => void;
}
export const useChangeStatusRentOut = (id: any): ActionTableIRentProps => {
  const { mutateAsync: ChangeStatusProduct } = ChangeStautsByID(id);
  const { mutateAsync: ChangeStatusManyProduct } = ChangeStatusByIDs();
  const { mutateAsync: RejectOrderOut } = useRejectOrderOutMutation();
  const { mutateAsync: RejectManyOrderOut } = useRejectManyOrderOutMutation();
  const { mutateAsync: CancelOrder } = useCancelOrderOutMutation();
  const { mutateAsync: RefundOrder } = useRefundOrderOutMutation();
  const { mutateAsync: RefundManyOrder } = useRefundManyOrderOutMutation();
  const { mutateAsync: PrintShippingLabel } = GetShippingLabel();
  const { setSelectRowTable } = useSelectRowTable();

  //change status
  const onSubmitChangeStatus = useCallback(
    async (RenterSignature?: any) => {
      Toast.Promise(
        ChangeStatusProduct(
          RenterSignature ? { data: { OrderId: id, LessorSignatureFile: RenterSignature } } : {},
        ),
        {
          loading: 'Processing...',
          success: 'Operation completed!',

          onSuccess(res) {
            setSelectRowTable([]);
          },
        },
      );
    },
    [ChangeStatusProduct, id, setSelectRowTable],
  );

  //change status ids
  const onSubmitChangeStatusIds = useCallback(
    async (data: any) => {
      Toast.Promise(ChangeStatusManyProduct(data), {
        loading: 'Processing...',
        success: 'Status updated successfully',

        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [ChangeStatusManyProduct, setSelectRowTable],
  );

  //reject order
  const onSubmitReject = useCallback(async () => {
    Toast.Promise(
      RejectOrderOut({
        orderId: id,
        answer: true,
      }),
      {
        success: 'Rejected Product Done',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      },
    );
  }, [RejectOrderOut, id, setSelectRowTable]);

  //reject order ids
  const onSubmitRejectOrdersIds = useCallback(
    async (data: any) => {
      Toast.Promise(RejectManyOrderOut(data), {
        loading: 'Processing...',
        success: 'Operation completed!',

        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RejectManyOrderOut, setSelectRowTable],
  );

  //cancel order
  const onSubmitCancel = useCallback(async () => {
    Toast.Promise(
      CancelOrder({
        orderRequestId: id,
        answer: true,
      }),
      {
        success: 'Canceled Order',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      },
    );
  }, [CancelOrder, id, setSelectRowTable]);

  //RefundYes order
  const onSubmitRefundYes = useCallback(async () => {
    Toast.Promise(
      RefundOrder({
        orderId: id,
        answer: true,
        lessorMessage: 'string',
      }),
      {
        success: 'Refund request approved',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      },
    );
  }, [RefundOrder, id, setSelectRowTable]);

  //RefundNo order
  const onSubmitRefundNo = useCallback(async () => {
    Toast.Promise(
      RefundOrder({
        orderId: id,
        answer: false,
        lessorMessage: 'string',
      }),
      {
        success: 'Refund request rejected',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      },
    );
  }, [RefundOrder, id, setSelectRowTable]);

  //RefundYes many order
  const onSubmitRefundManyYes = useCallback(
    async (data: any) => {
      Toast.Promise(RefundManyOrder(data), {
        success: 'Multiple refund requests approved',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RefundManyOrder, setSelectRowTable],
  );

  //RefundNo many order
  const onSubmitRefundManyNo = useCallback(
    async (data: any) => {
      Toast.Promise(RefundManyOrder(data), {
        success: 'Multiple refund requests rejected',
        onSuccess(res) {
          setSelectRowTable([]);
        },
      });
    },
    [RefundManyOrder, setSelectRowTable],
  );
  const onSubmitPrintShippingLabel = useCallback(
    async (id: any) => {
      Toast.Promise(PrintShippingLabel(id), {
        success: 'Shipping label downloaded successfully',
        onSuccess(res) {
          setSelectRowTable([]);
          const url = window.URL.createObjectURL(res);
          const a = document.createElement('a');
          a.href = url;
          a.download = `shipping-label-${id}.pdf`; // Set the filename
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        },
      });
    },
    [PrintShippingLabel, setSelectRowTable],
  );
  return {
    onSubmitChangeStatus,
    onSubmitReject,
    onSubmitCancel,
    onSubmitRefundYes,
    onSubmitRefundNo,
    onSubmitChangeStatusIds,
    onSubmitRejectOrdersIds,
    onSubmitRefundManyYes,
    onSubmitRefundManyNo,
    onSubmitPrintShippingLabel,
  };
};
