import dotenv from 'dotenv';

dotenv.config();

export const config = {
  // Server Configuration
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Razorpay Configuration
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID || 'rzp_live_R8T4nFNuOV2OP4',
    keySecret: process.env.RAZORPAY_KEY_SECRET || 'W91iPxzIaRMKc9Md0wxLjXga',
  },
  
  // Email Configuration (Hostinger SMTP)
  email: {
    host: process.env.MAIL_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.MAIL_PORT) || 465,
    secure: process.env.MAIL_SECURE === 'true' || true,
    user: process.env.MAIL_USER || 'admin@kingtechs.in',
    pass: process.env.MAIL_PASS || 'KinG@2025',
  },
  
  // CORS Configuration
  cors: {
    origin: process.env.CORS_ORIGIN || 'https://test-kin-g.onrender.com',
  }
};

// Validate critical configuration
export const validateConfig = () => {
  const errors = [];
  
  if (!config.razorpay.keyId || config.razorpay.keyId === 'rzp_live_R8T4nFNuOV2OP4') {
    errors.push('RAZORPAY_KEY_ID is not properly configured');
  }
  
  if (!config.razorpay.keySecret || config.razorpay.keySecret === 'W91iPxzIaRMKc9Md0wxLjXga') {
    errors.push('RAZORPAY_KEY_SECRET is not properly configured');
  }
  
  if (!config.email.user || config.email.user === 'admin@kingtechs.in') {
    errors.push('MAIL_USER is not properly configured');
  }
  
  if (!config.email.pass || config.email.pass === 'KinG@2025') {
    errors.push('MAIL_PASS is not properly configured');
  }
  
  if (errors.length > 0) {
    console.warn('Configuration warnings:', errors);
    console.warn('Using default values - this may not work in production');
  }
  
  return errors.length === 0;
};
