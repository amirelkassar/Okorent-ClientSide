import { useMutation } from '@tanstack/react-query';
import { PaymentService } from '@/src/services/payment';
import { Toast } from '@/src/components/toast';

export const usePayment = () => {
  const createPaymentIntent = useMutation({
    mutationFn: (data: { amount: number; currency?: string }) =>
      PaymentService.createPaymentIntent(data.amount, data.currency),
    onError: (error) => {
      Toast.Notification(error?.message || 'Payment failed');
    },
  });

  const confirmPayment = useMutation({
    mutationFn: (paymentIntentId: string) => PaymentService.confirmPayment(paymentIntentId),
    onSuccess: () => {
      Toast.Notification('Payment successful');
    },
    onError: (error) => {
      Toast.Notification(error?.message || 'Payment confirmation failed');
    },
  });

  return {
    createPaymentIntent,
    confirmPayment,
  };
};
