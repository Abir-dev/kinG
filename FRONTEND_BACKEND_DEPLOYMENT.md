# Frontend + Backend Deployment Guide

## Overview
This guide covers deploying both parts of your KinG LMS application:
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render

## Frontend Deployment (Vercel)

### 1. Environment Variables Setup
In your Vercel dashboard, set these environment variables:

#### Required Variables:
```bash
VITE_RAZORPAY_KEY_ID=rzp_live_R8T4nFNuOV2OP4
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### Backend Connection:
```bash
VITE_BACKEND_API_URL=https://test-kin-g.onrender.com
```

### 2. Vercel Configuration
The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist/spa`
- Framework: Vite
- Environment variables

### 3. Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect the configuration
3. Deploy the service

## Backend Deployment (Render)

### 1. Environment Variables Setup
In your Render dashboard, set these environment variables:

#### Required Variables:
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
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

### 2. Update CORS Origin
**Important**: Update the `CORS_ORIGIN` in Render to match your Vercel frontend domain:
```bash
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

## Communication Between Frontend and Backend

### 1. API URL Configuration
The frontend now automatically detects the backend URL:

- **Development**: Uses `http://localhost:3001`
- **Production**: Uses `https://test-kin-g.onrender.com`

### 2. Updated API Calls
All API calls now use the environment configuration:

```typescript
// Before (hardcoded)
const API_BASE = 'http://localhost:3001/api/razorpay';

// After (environment-aware)
const API_BASE = getApiUrl('api/razorpay');
```

### 3. Environment Detection
The frontend automatically switches between development and production:

```typescript
// Development: http://localhost:3001/api/razorpay
// Production: https://test-kin-g.onrender.com/api/razorpay
```

## Testing the Connection

### 1. Frontend Health Check
Visit your Vercel frontend and check the browser console for:
- API calls to the correct backend URL
- No CORS errors
- Successful API responses

### 2. Backend Health Check
```bash
curl https://test-kin-g.onrender.com/health
```

### 3. Test API Endpoints
```bash
# Test email
curl https://test-kin-g.onrender.com/api/test-email

# Test Razorpay
curl -X POST https://test-kin-g.onrender.com/api/razorpay/create-order \
  -H "Content-Type: application/json" \
  -d '{"amount": 15000, "currency": "INR"}'
```

## Troubleshooting

### Common Issues

#### 1. CORS Errors
**Problem**: Frontend can't connect to backend
**Solution**: 
- Verify `CORS_ORIGIN` in Render matches your Vercel domain
- Check that the backend is running and accessible

#### 2. API Calls Going to Wrong URL
**Problem**: Frontend still calling localhost
**Solution**:
- Verify `VITE_BACKEND_API_URL` is set in Vercel
- Check that the environment variable is being read correctly

#### 3. Environment Variables Not Loading
**Problem**: Frontend using default values
**Solution**:
- Ensure environment variables are set in Vercel dashboard
- Redeploy after setting environment variables

#### 4. Build Failures
**Problem**: Vercel build fails
**Solution**:
- Check that all dependencies are in `package.json`
- Verify build command is correct
- Check for TypeScript errors

### Debugging Steps

1. **Check Browser Console**
   - Look for API call URLs
   - Check for CORS errors
   - Verify environment variables are loaded

2. **Check Vercel Logs**
   - Build logs for compilation errors
   - Function logs for runtime errors

3. **Check Render Logs**
   - Server startup logs
   - API request logs
   - Error logs

4. **Test Backend Directly**
   - Use curl or Postman to test backend endpoints
   - Verify backend is responding correctly

## Environment Variable Reference

### Frontend (Vercel)
```bash
# Razorpay
VITE_RAZORPAY_KEY_ID=rzp_live_R8T4nFNuOV2OP4

# EmailJS (if using)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Backend Connection
VITE_BACKEND_API_URL=https://test-kin-g.onrender.com
```

### Backend (Render)
```bash
# Razorpay
RAZORPAY_KEY_ID=rzp_live_R8T4nFNuOV2OP4
RAZORPAY_KEY_SECRET=W91iPxzIaRMKc9Md0wxLjXga

# Email
MAIL_USER=admin@kingtechs.in
MAIL_PASS=KinG@2025

# Server
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

## Success Indicators

Your deployment is successful when:

### Frontend (Vercel)
- ✅ Build completes without errors
- ✅ Site loads without console errors
- ✅ API calls go to the correct backend URL
- ✅ No CORS errors in browser console

### Backend (Render)
- ✅ Health check returns 200 OK
- ✅ Email test endpoint works
- ✅ Razorpay order creation succeeds
- ✅ CORS allows frontend connections

### Communication
- ✅ Frontend can create Razorpay orders
- ✅ Frontend can send payment data
- ✅ Frontend can verify payments
- ✅ All API endpoints respond correctly

## Next Steps

### 1. Domain Configuration
- Set up custom domain for frontend (optional)
- Update CORS origin if using custom domain

### 2. SSL and Security
- Vercel provides SSL automatically
- Render provides SSL automatically
- Consider adding rate limiting

### 3. Monitoring
- Set up Vercel analytics
- Monitor Render logs
- Set up error tracking

### 4. Performance
- Enable Vercel edge functions
- Consider Render paid plans for better performance
- Implement caching strategies
