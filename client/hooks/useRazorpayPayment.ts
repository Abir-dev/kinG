import { useState } from 'react';
import { processPayment, type VerifyPaymentResponse } from '../utils/razorpay';

interface PaymentData {
  amount: number;
  description: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes?: Record<string, string>;
}

interface UseRazorpayPaymentReturn {
  initiatePayment: (data: PaymentData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

export const useRazorpayPayment = (
  onSuccess: (paymentDetails: VerifyPaymentResponse['payment']) => Promise<void>,
  onError?: (error: string) => void
): UseRazorpayPaymentReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const initiatePayment = async (data: PaymentData) => {
    setIsLoading(true);
    setError(null);

    try {
      await processPayment(
        data,
        async (paymentDetails) => {
          try {
            await onSuccess(paymentDetails);
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
            setError(errorMessage);
            onError?.(errorMessage);
          }
        },
        (errorMessage) => {
          setError(errorMessage);
          onError?.(errorMessage);
        }
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize payment';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initiatePayment,
    isLoading,
    error,
    clearError,
  };
};