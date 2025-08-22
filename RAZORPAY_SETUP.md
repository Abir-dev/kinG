# Razorpay Payment Gateway Integration Setup

This guide will help you set up the Razorpay payment gateway in your Kin-G LMS project.

## Prerequisites

1. **Razorpay Account**: You need a Razorpay merchant account
2. **API Keys**: Your live/test Razorpay API keys
3. **Node.js**: Version 16 or higher
4. **Environment Variables**: Proper configuration

## Environment Variables Setup

Create a `.env` file in your project root with the following variables:

```bash
# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=rzp_live_R8T4nFNuOV2OP4
RAZORPAY_KEY_SECRET=W91iPxzIaRMKc9Md0wxLjXga

# EmailJS Configuration (if using)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Server Configuration
PORT=3001
NODE_ENV=development
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
# Terminal 1: Start the backend server
npm run dev:server

# Terminal 2: Start the frontend
npm run dev
```

## How It Works

### Payment Flow

1. **Order Creation**: Server creates a Razorpay order
2. **Payment Gateway**: User completes payment via Razorpay
3. **Payment Verification**: Server verifies payment signature
4. **Success Handling**: Process success callback with verified data

### Security Features

- ✅ Server-side order creation
- ✅ Payment signature verification
- ✅ Secure API endpoints
- ✅ Environment variable validation

## API Endpoints

### POST `/api/razorpay/create-order`
Creates a new payment order on Razorpay.

**Request Body:**
```json
{
  "amount": 15000,
  "currency": "INR",
  "receipt": "receipt_123"
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": "order_xyz",
    "amount": 1500000,
    "currency": "INR",
    "receipt": "receipt_123"
  }
}
```

### POST `/api/razorpay/verify-payment`
Verifies payment signature and status.

**Request Body:**
```json
{
  "razorpay_order_id": "order_xyz",
  "razorpay_payment_id": "pay_abc",
  "razorpay_signature": "signature_hash"
}
```

### GET `/api/razorpay/payment/:paymentId`
Fetches payment details by payment ID.

## Usage Examples

### Services Page Payment

```typescript
import { useServicePayment } from '../hooks/useRazorpayPayment';

const { initiatePayment, isLoading, error } = useServicePayment(
  async (paymentDetails) => {
    // Handle successful payment
    console.log('Payment successful:', paymentDetails);
    // Process order, send emails, etc.
  },
  (error) => {
    // Handle payment errors
    console.error('Payment failed:', error);
  }
);

// Initiate payment
await initiatePayment({
  amount: 15000,
  description: 'Service Package - Basic',
  prefill: {
    name: 'John Doe',
    email: 'john@example.com',
    contact: '+919999999999'
  },
  notes: {
    service_id: 'telecalling',
    package_name: 'Basic'
  }
});
```

### Registration Page Payment

```typescript
// The payment is automatically handled when the form is submitted
// and the payment modal is shown
```

## Testing

### Test Mode
For testing, use Razorpay test keys:
- Key ID: `rzp_test_...`
- Key Secret: `test_secret_...`

### Test Cards
Use these test card numbers:
- **Success**: 4111 1111 1111 1111
- **Failure**: 4000 0000 0000 0002
- **CVV**: Any 3 digits
- **Expiry**: Any future date

## Production Deployment

### 1. Update Environment Variables
- Use live Razorpay keys
- Set `NODE_ENV=production`
- Configure proper `PORT`

### 2. Build the Application
```bash
npm run build
```

### 3. Start Production Server
```bash
npm start
```

## Troubleshooting

### Common Issues

1. **"Razorpay Key ID not found"**
   - Check your `.env` file
   - Ensure `VITE_RAZORPAY_KEY_ID` is set

2. **"Failed to create order"**
   - Verify server is running
   - Check Razorpay API key validity
   - Ensure amount is valid

3. **"Payment verification failed"**
   - Check Razorpay webhook configuration
   - Verify signature calculation

### Debug Mode

Enable debug logging by setting:
```bash
NODE_ENV=development
```

## Support

For Razorpay-specific issues:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)

For application issues:
- Check server logs
- Verify environment variables
- Test with Razorpay test keys first

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never expose your secret key** in client-side code
2. **Always verify payment signatures** on the server
3. **Use HTTPS** in production
4. **Validate all input data** before processing
5. **Implement proper error handling** and logging

## License

This integration is part of the Kin-G LMS project.
