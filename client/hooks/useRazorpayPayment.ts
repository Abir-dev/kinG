import { useState } from 'react';
import { loadRazorpayScript, initializeRazorpayPayment, validateRazorpayConfig, type RazorpayOptions } from '../utils/razorpay';

interface PaymentData {
  amount: number;
  description: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
}

interface UseRazorpayPaymentReturn {
  initiatePayment: (data: PaymentData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useRazorpayPayment = (
  onSuccess: (paymentId: string) => Promise<void>,
  onError?: (error: string) => void
): UseRazorpayPaymentReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initiatePayment = async (data: PaymentData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate configuration
      const { keyId } = validateRazorpayConfig();

      // Load Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error('Failed to load Razorpay SDK');
      }

      // Prepare payment options
      const options: RazorpayOptions = {
        key: keyId,
        amount: data.amount * 100, // Convert to paise
        currency: 'INR',
        name: 'Kin-G Technologies',
        description: data.description,
        handler: async (response) => {
          try {
            await onSuccess(response.razorpay_payment_id);
          } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
            setError(errorMessage);
            onError?.(errorMessage);
          }
        },
        prefill: data.prefill,
        theme: {
          color: '#00D9FF', // neon-cyan color
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
            setError('Payment cancelled by user');
          },
        },
      };

      // Initialize payment
      initializeRazorpayPayment(options);
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
  };
};