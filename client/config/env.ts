// Environment configuration
export const config = {
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID,
    keySecret: import.meta.env.RAZORPAY_KEY_SECRET,
  },
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateIdWorkshop: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_WORKSHOP,
    templateIdFree: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FREE,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  server: {
    port: import.meta.env.PORT || 3001,
    nodeEnv: import.meta.env.NODE_ENV || 'development',
    // Backend API URL - use environment variable or fallback to localhost for development
    apiUrl: import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3001',
  },
};

// Validate required environment variables
export const validateEnv = () => {
  const errors: string[] = [];

  if (!config.razorpay.keyId) {
    errors.push('VITE_RAZORPAY_KEY_ID is required');
  }

  if (!config.razorpay.keySecret) {
    errors.push('RAZORPAY_KEY_SECRET is required');
  }

  if (errors.length > 0) {
    console.error('Environment validation failed:', errors);
    return false;
  }

  return true;
};

// Check if we're in development mode
export const isDevelopment = config.server.nodeEnv === 'development';

// Check if we're in production mode
export const isProduction = config.server.nodeEnv === 'production';

// Helper function to get the full API URL
export const getApiUrl = (endpoint: string): string => {
  // Remove leading slash if present
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${config.server.apiUrl}/${cleanEndpoint}`;
};
