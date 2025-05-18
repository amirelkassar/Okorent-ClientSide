import { api } from '@/src/api/axios';

export const PaymentService = {
  createPaymentIntent: async (amount: number, currency: string = 'usd') => {
    const response = await api.post('/api/payment/create-payment-intent', {
      amount,
      currency,
    });
    return response.data;
  },

  confirmPayment: async (paymentIntentId: string) => {
    const response = await api.post('/api/payment/confirm', {
      paymentIntentId,
    });
    return response.data;
  },
};
