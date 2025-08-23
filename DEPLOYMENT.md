# KinG LMS Backend Deployment Guide

## Overview
This guide will help you deploy the KinG LMS backend to Render and make it fully functional.

## Current Issues & Solutions

### 1. Missing Server Package.json ✅ FIXED
- **Problem**: Server directory didn't have its own package.json
- **Solution**: Created `server/package.json` with proper dependencies

### 2. Missing Environment Configuration ✅ FIXED
- **Problem**: No centralized configuration management
- **Solution**: Created `server/config.js` with fallback values

### 3. Missing Health Check Endpoint ✅ FIXED
- **Problem**: Render needs a health check endpoint
- **Solution**: Added `/health` endpoint to monitor server status

### 4. Improved Error Handling ✅ FIXED
- **Problem**: Basic error handling
- **Solution**: Added comprehensive error handling and logging

## Deployment Steps

### Step 1: Environment Variables Setup
In your Render dashboard, set these environment variables:

#### Required Variables (Set these in Render dashboard):
```bash
RAZORPAY_KEY_ID=rzp_live_R8T4nFNuOV2OP4
RAZORPAY_KEY_SECRET=W91iPxzIaRMKc9Md0wxLjXga
MAIL_USER=admin@kingtechs.in
MAIL_PASS=KinG@2025
```

#### Optional Variables (Already set in config):
```bash
NODE_ENV=production
PORT=10000
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_SECURE=true
CORS_ORIGIN=https://test-kin-g.onrender.com
```

### Step 2: Render Service Configuration
1. **Service Type**: Web Service
2. **Environment**: Node
3. **Build Command**: `cd server && npm install`
4. **Start Command**: `cd server && npm start`
5. **Plan**: Free (or upgrade if needed)

### Step 3: Deploy
1. Connect your GitHub repository
2. Render will automatically detect the `render.yaml` configuration
3. Deploy the service

## API Endpoints

### Health Check
- **GET** `/health` - Server health status

### Email Service
- **POST** `/api/send-payment` - Send registration data with payment receipt
- **GET** `/api/test-email` - Test email configuration

### Razorpay Service
- **POST** `/api/razorpay/create-order` - Create payment order
- **POST** `/api/razorpay/verify-payment` - Verify payment signature
- **GET** `/api/razorpay/payment/:paymentId` - Get payment details
- **GET** `/api/razorpay/orders` - Get all orders (admin)

## Testing Your Deployment

### 1. Health Check
```bash
curl https://test-kin-g.onrender.com/health
```
Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "port": 10000
}
```

### 2. Test Email Configuration
```bash
curl https://test-kin-g.onrender.com/api/test-email
```

### 3. Test Razorpay Order Creation
```bash
curl -X POST https://test-kin-g.onrender.com/api/razorpay/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount": 15000, "currency": "INR"}'
```

## Troubleshooting

### Common Issues

#### 1. Build Failures
- **Problem**: `cd server && npm install` fails
- **Solution**: Ensure `server/package.json` exists and has correct dependencies

#### 2. Environment Variables Not Set
- **Problem**: Server uses default values
- **Solution**: Set required environment variables in Render dashboard

#### 3. CORS Issues
- **Problem**: Frontend can't connect to backend
- **Solution**: Verify `CORS_ORIGIN` is set correctly

#### 4. Email Not Working
- **Problem**: SMTP connection fails
- **Solution**: Check `MAIL_USER` and `MAIL_PASS` are correct

#### 5. Razorpay Errors
- **Problem**: Payment creation fails
- **Solution**: Verify `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

### Logs and Monitoring
- Check Render logs for detailed error messages
- Use `/health` endpoint to monitor server status
- Monitor email and payment success rates

## Security Considerations

### 1. Environment Variables
- Never commit `.env` files to version control
- Use Render's secure environment variable storage
- Rotate API keys regularly

### 2. CORS Configuration
- Restrict CORS origin to your frontend domain
- Consider implementing rate limiting

### 3. File Uploads
- File size limit: 5MB
- Validate file types if needed
- Consider cloud storage for production

## Performance Optimization

### 1. Free Plan Limitations
- Render free plan has cold starts
- Consider upgrading for better performance
- Implement connection pooling for database (if added later)

### 2. Monitoring
- Use `/health` endpoint for uptime monitoring
- Monitor response times
- Set up alerts for failures

## Next Steps

### 1. Database Integration
- Consider adding MongoDB/PostgreSQL for data persistence
- Implement user authentication
- Add session management

### 2. Advanced Features
- Implement rate limiting
- Add request validation middleware
- Set up automated testing

### 3. Production Enhancements
- Add SSL certificate
- Implement logging service
- Set up monitoring and alerting

## Support

If you encounter issues:
1. Check Render logs first
2. Verify environment variables
3. Test endpoints individually
4. Check server configuration

## Success Indicators

Your backend is successfully deployed when:
- ✅ Health check returns 200 OK
- ✅ Email test endpoint works
- ✅ Razorpay order creation succeeds
- ✅ CORS allows frontend connections
- ✅ All API endpoints respond correctly
