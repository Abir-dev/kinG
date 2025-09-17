import dotenv from "dotenv";

dotenv.config();

export const config = {
  // Server Configuration
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",

  // Razorpay Configuration
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag",
    keySecret: process.env.RAZORPAY_KEY_SECRET || "test_secret_key",
  },

  // Email Configuration (Hostinger SMTP)
  email: {
    host: process.env.MAIL_HOST || "smtp.hostinger.com",
    port: process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : 465,
    // Default to true only when port is 465; otherwise false
    secure: process.env.MAIL_SECURE
      ? process.env.MAIL_SECURE === "true"
      : process.env.MAIL_PORT
        ? parseInt(process.env.MAIL_PORT, 10) === 465
        : true,
    user: process.env.MAIL_USER || "admin@kingtechs.in",
    pass: process.env.MAIL_PASS || "KinG@2025",
  },

  // CORS Configuration
  cors: {
    origin: process.env.CORS_ORIGIN || "https://test-kin-g.onrender.com",
  },
};

// Validate critical configuration
export const validateConfig = () => {
  const errors = [];

  if (
    !config.razorpay.keyId ||
    config.razorpay.keyId === "rzp_test_1DP5mmOlF5G5ag"
  ) {
    errors.push("RAZORPAY_KEY_ID is not properly configured");
  }

  if (
    !config.razorpay.keySecret ||
    config.razorpay.keySecret === "test_secret_key"
  ) {
    errors.push("RAZORPAY_KEY_SECRET is not properly configured");
  }

  if (!config.email.user || config.email.user === "admin@kingtechs.in") {
    errors.push("MAIL_USER is not properly configured");
  }

  if (!config.email.pass || config.email.pass === "KinG@2025") {
    errors.push("MAIL_PASS is not properly configured");
  }

  if (errors.length > 0) {
    console.warn("Configuration warnings:", errors);
    console.warn("Using default values - this may not work in production");
  }

  return errors.length === 0;
};
