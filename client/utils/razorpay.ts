// Razorpay Types
export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
  notes?: Record<string, string>;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface CreateOrderRequest {
  amount: number;
  currency?: string;
  receipt?: string;
}

export interface CreateOrderResponse {
  success: boolean;
  order: {
    id: string;
    amount: number;
    currency: string;
    receipt: string;
  };
}

export interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  payment: {
    id: string;
    order_id: string;
    amount: number;
    currency: string;
    status: string;
    method: string;
    captured_at: number;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

// API endpoints
const API_BASE = '/api/razorpay';

// Create order on server
export const createOrder = async (data: CreateOrderRequest): Promise<CreateOrderResponse> => {
  try {
    const response = await fetch(`${API_BASE}/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Verify payment on server
export const verifyPayment = async (data: VerifyPaymentRequest): Promise<VerifyPaymentResponse> => {
  try {
    const response = await fetch(`${API_BASE}/verify-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to verify payment');
    }

    return await response.json();
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

// Load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log('Razorpay script loaded successfully');
      resolve(true);
    };
    script.onerror = (error) => {
      console.error('Failed to load Razorpay script:', error);
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Initialize Razorpay payment
export const initializeRazorpayPayment = (options: RazorpayOptions) => {
  if (!window.Razorpay) {
    throw new Error('Razorpay SDK not loaded');
  }

  const razorpay = new window.Razorpay(options);
  razorpay.open();
  return razorpay;
};

// Validate environment variables
export const validateRazorpayConfig = () => {
  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  
  if (!keyId) {
    throw new Error('Razorpay Key ID not found in environment variables');
  }

  return { keyId };
};

// Complete payment flow with order creation and verification
export const processPayment = async (
  paymentData: {
    amount: number;
    description: string;
    prefill: { name: string; email: string; contact: string };
    notes?: Record<string, string>;
  },
  onSuccess: (paymentDetails: VerifyPaymentResponse['payment']) => Promise<void>,
  onError: (error: string) => void
) => {
  try {
    // Step 1: Create order on server
    const orderResponse = await createOrder({
      amount: paymentData.amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    });

    if (!orderResponse.success) {
      throw new Error('Failed to create order');
    }

    // Step 2: Load Razorpay script
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      throw new Error('Failed to load Razorpay SDK');
    }

    // Step 3: Initialize payment
    const { keyId } = validateRazorpayConfig();
    
    const options: RazorpayOptions = {
      key: keyId,
      amount: orderResponse.order.amount,
      currency: orderResponse.order.currency,
      name: 'Kin-G Technologies',
      description: paymentData.description,
      order_id: orderResponse.order.id,
      handler: async (response: RazorpayResponse) => {
        try {
          // Step 4: Verify payment on server
          const verificationResponse = await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verificationResponse.success) {
            await onSuccess(verificationResponse.payment);
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Payment verification failed';
          onError(errorMessage);
        }
      },
      prefill: paymentData.prefill,
      theme: {
        color: '#00D9FF', // neon-cyan color
      },
      modal: {
        ondismiss: () => {
          onError('Payment cancelled by user');
        },
      },
      notes: paymentData.notes,
    };

    // Step 5: Open payment modal
    initializeRazorpayPayment(options);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Payment initialization failed';
    onError(errorMessage);
  }
};